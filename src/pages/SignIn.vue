<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-xl">

            <div class="q-ma-sm" style="font-size:30px; text-align:center;">
                <b>Login</b>
            </div>

            <div class="q-gutter-y-md column">
                <q-input slots="slots" v-model="email" label="email" color="teal-7">

                    <template v-slot:append>
                        <q-icon name="close" @click="email = ''" class="cursor-pointer"/>
                    </template>

                </q-input>

                <q-input
                    v-model="password"
                    :type="isPwd ? 'password' : 'text'"
                    label="Password"
                    color="teal-7">
                    <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"/>
                    </template>
                </q-input>

                <div class="q-gutter-sm">
                    <q-checkbox v-model="remember" label="Remember Me" color="teal"/>
                </div>

                <q-btn
                    class="bg-teal-10"
                    color="white"
                    @click.prevent="validate"
                    label="Sign In"></q-btn>
                <div class="q-ma-xl" style="text-align:center;">
                    <router-link to="signUp" style="text-decoration:underline; color:teal;">Move to
                        <b>SignUp</b>
                        Page</router-link><br/>
                    <router-link to="/" style="text-decoration:underline; color:teal;">Move to
                        <b>Main</b>
                        Page</router-link>

                </div>

                <div class="q-ma-sm center" style="text-align:center;" >
                   <q-btn padding="none" flat>
                       <img src="../assets/google.png" style="width:200px;" @click="googleLogin" />

                        <img src="../assets/github.png" style="width:200px;" @click="githubLogin" />

                   </q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref} from 'vue'
    import {auth,g_auth,db} from 'src/boot/firebase'
    import {useQuasar} from 'quasar'
    import {useRouter} from 'vue-router'
    import {useStore, mapGetters} from 'vuex'


    export default defineComponent({
        name: 'loginUser',

        setup() {
            const $q = useQuasar()
            const $router = useRouter()
            // const $route = useRoute()
            const $store = useStore()

            let email = ref('')
            let password = ref('')
            let isPwd = ref('true')
            let remember = ref('false')
            let validationErrors = ref('')
            let userName = ref('')

            let provider = new g_auth.GoogleAuthProvider();
            let provider2 = new g_auth.GithubAuthProvider();

            auth.languageCode = 'kr_KR'

            let validate = () => {

                // email validation
                if (!email.value) {
                    $q.notify({position: "center", message: "이메일을 입력하세요", color: "grey"})
                } else if (/.+@.+/.test(email.value) != true) {
                    $q.notify(
                        {position: "center", message: "이메일을 다시 확인해주세요", color: "grey"}// password validation
                    )
                } else if (!password.value) {
                    $q.notify({position: "center", message: "비밀번호를 입력하세요", color: "grey"})
                } else if (/.{6,}/.test(password.value) != true) {
                    $q.notify(
                        {position: "center", message: "비밀번호는 최소 6자리입니다.", color: "grey"}// when valid then sign in
                    )
                } else if (validationErrors.value <= 0) {
                    loginUser();
                }

            }

            let loginUser = () => {

                auth
                    .signInWithEmailAndPassword(email.value, password.value)
                    .then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;
                         console.log('test   :   '+user.displayName);

                        $store.commit("setFireUser", user)

                        $q.notify({position: "top", message: "로그인을 환영합니다", color: "teal-10"})
                        console.log(auth);
                        $router.push({path: '/'})

                        if (remember.value == true) {
                            localStorage.username = email.value;
                            localStorage.checkbox = remember.value;
                        } else {
                            localStorage.username = "";
                            localStorage.checkbox = "";
                        }

                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage)

                        $q.notify({position: "center", message: "잘못된 정보입니다. ", color: "grey"})
                    });

            }

            let githubLogin = () => {
                console.log("hi github login");

                auth.signInWithPopup(provider2)
                .then((result) => {


                    var user = result.user;
                    console.log(user);
                    console.log("=========");
                    $store.commit("setFireUser", user)

                    db.collection("users").where("id","==",user.email).get()
                    .then((snapshot) => {
                        if(snapshot.empty == true) {
                            db.collection("users").add ({
                                id: user.email,
                                name: user.displayName
                            })
                        } else {
                            snapshot.forEach((doc) => {
                                console.log(doc);
                                db.collection("users").doc(doc.id).set ({
                                id: user.email,
                                name: user.displayName
                                })
                            })      
                        }
                    })
                        $q.notify({position: "top", message: "로그인을 환영합니다", color: "teal-10"})
                        console.log('github login completed');
                        $router.push({path: '/'})


                    // /** @type {firebase.auth.OAuthCredential} */
                    // var credential = result.credential;
                    // // This gives you a Google Access Token. You can use it to access the Google API.
                    // var token = credential.accessToken;

                    // The signed-in user info.
                    
                    
                }).catch((error) => {
                    console.log(error);
                    
                });
            }

            let googleLogin = () => {
                console.log("hi google login");

                auth.signInWithPopup(provider)
                .then((result) => {


                    var user = result.user;
                    console.log(user);
                    console.log("=========");
                    $store.commit("setFireUser", user)

                    db.collection("users").where("id","==",user.email).get()
                    .then((snapshot) => {
                        if(snapshot.empty == true) {
                            db.collection("users").add ({
                                id: user.email,
                                name: user.displayName
                            })
                        } else {
                            snapshot.forEach((doc) => {
                                console.log(doc);
                                db.collection("users").doc(doc.id).set ({
                                id: user.email,
                                name: user.displayName
                                })
                            })      
                        }
                    })
                        $q.notify({position: "top", message: "로그인을 환영합니다", color: "teal-10"})
                        console.log('google login completed');
                        $router.push({path: '/'})


                    // /** @type {firebase.auth.OAuthCredential} */
                    // var credential = result.credential;
                    // // This gives you a Google Access Token. You can use it to access the Google API.
                    // var token = credential.accessToken;

                    // The signed-in user info.
                    
                    
                }).catch((error) => {
                    console.log(error);
                    
                });
            }

            return {
                email,
                password,
                loginUser,
                isPwd,
                remember,
                validate,
                userName,
                googleLogin,
                githubLogin
            }
        },
        computed: {
            ...mapGetters(["getFireUser", "isUserAuth"])
            // signOutActions() {} 라는애가 있는데, vuex.signOutAction(){}랑 똑같으니 맵핑해줘!(예시임)
        },
        mounted() {
            if (localStorage.checkbox && localStorage.checkbox !== "") {
                this.remember = ref('true')
                this.email = localStorage.username
            } else {
                this.remember = false
            }
        }

    })
</script>