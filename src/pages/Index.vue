<template>
    <div class="q-pb-md">
        <div class="text-h6" align="center">
            Hi,
            {{ userEmail }}
            <br/>
            {{ userName }} 
            <br></div>
            <div class="q-mt-md text-center" v-if="loginState=='true'">
                <q-btn
                    outline="outline"
                    rounded="rounded"
                    color="teal-10"
                    type="a"
                    @click.prevent="logout"
                    label="Logout"></q-btn>
            </div>

            <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                animated="animated"
                color="red"
                control-color="red"
                class="rounded-borders">

                <q-carousel-slide name="style" class="column no-wrap flex-center">
                    <q-icon name="face" color="black" size="56px"/>
                    <div class="q-mb-md text-center">
                        <strong style="font-size:40px;">Welcome</strong><br/>
                        <a style="font-size:20px;">It is a goooood opportunity
                            <br/>to choose our website.</a>
                    </div>
                </q-carousel-slide>

                <q-carousel-slide name="signIn" class="column no-wrap flex-center">
                    <q-icon name="people_outline" color="black" size="56px"/>
                    <div class="q-mt-md text-center">
                        <div class="q-mb-md onlyfont" style="background-color:lightgrey;color:black;">
                            If you are already a member
                        </div>
                        <q-btn
                            outline="outline"
                            rounded="rounded"
                            color="teal-10"
                            type='a'
                            href='/#/SignIn'>Login here</q-btn>

                            <q-btn
                            outline="outline"
                            rounded="rounded"
                            color="teal-10"
                            type='a'
                            href='/#/myinfo'>mypage</q-btn>

                        <!-- <q-btn flat="flat" type="a" href='/#/SignIn'>로그인</q-btn> -->
                    </div>
                </q-carousel-slide>

                <q-carousel-slide name="signUp" class="column no-wrap flex-center">
                    <q-icon name="person_add" color="black" size="56px"/>
                    <div class="q-mt-md text-center">
                        <div class="q-mb-md onlyfont" style="background: black;color:white;">
                            If you would like to join
                        </div>
                        <q-btn
                            outline="outline"
                            rounded="rounded"
                            color="teal-10"
                            type="a"
                            href='/#/SignUp'>SignUp here</q-btn>
                        <!-- <q-btn flat="flat" type="a" href='/#/SignUp'>회원가입</q-btn> -->
                    </div>
                </q-carousel-slide>

            </q-carousel>

            <div class="row justify-center">
                <q-btn-toggle
                    toggle-color="teal-10"
                    v-model="slide"
                    :options="[
          { slot: 'one' ,value: 'style' },
          { label: 1, value: 'signIn' },
          { label: 2, value: 'signUp' }
        ]">
                    <template v-slot:one>
                        <div class="row items-center no-wrap">
                            <q-icon name="home"/>
                        </div>
                    </template>

                </q-btn-toggle>
            </div>
        </div>
    </template>

    <style scoped="scoped">
        @import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');
        .my-card {
            width: 100%;
            height: 50%;
        }
        .onlyfont {
            font-family: 'ZCOOL KuaiLe', cursive;
            font-size: 20px;
            text-align: center;

        }
    </style>

    <script>
        import {defineComponent, ref} from 'vue'
        import { mapActions, mapGetters } from 'vuex'
        import { auth, db } from 'src/boot/firebase'
        import { useRouter, useRoute } from 'vue-router'
        import { useQuasar } from 'quasar'


        export default defineComponent({
        
            setup() {
                const $q = useQuasar()
                const $router = useRouter()
                const $route = useRoute()

                const slide = ref('style')
                var userName = ref('')
                var userEmail = ref('')
                var loginState = ref('false')

                auth.onAuthStateChanged((user) => {
                    if (user) {
                        userEmail.value = user.email
                        loginState.value = 'true'

                    } else {
                        console.log("Login Changed")
                    }
                })

                let logout = () => {
                    auth.signOut()
                    .then(() => {
                        $q.notify({
                            message: 'Sign Out Success.'
                        })
                        $router.go()
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })
                }

                return {slide, userName, userEmail, loginState,logout}
            },
             updated() {     
                if(this.getFireUser != null && this.userName == '') {
                    db.collection("users").where("id", "==", this.getFireUser.email )
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data());
                            this.userName = doc.data().name
                        });
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    });
                }
            },
            mounted() {
                this.authAction()
                console.log("monted called")
                if(this.getFireUser != null) {
                    db.collection("users").where("id", "==", this.getFireUser.email )
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data());
                            this.userName = doc.data().name
                        });
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    });
                }
            },

            computed: {
                ...mapGetters(["getFireUser", "isUserAuth"])
                // signOutActions() {} 라는애가 있는데, vuex.signOutAction(){}랑 똑같으니 맵핑해줘!(예시임)
            },
            methods: {
                ...mapActions(["signOutAction", "authAction"]),
            }
        },
        )
    </script>