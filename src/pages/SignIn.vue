<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-xl">

            <div class="q-ma-sm" style="font-size:30px; text-align:center;">
                <b>Login</b>
            </div>

            <div class="q-gutter-y-md column">
                <q-input filled="filled" v-model="email" label="email"></q-input>

                <q-input
                    v-model="password"
                    filled="filled"
                    :type="isPwd ? 'password' : 'text'"
                    label="Password">
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

                <q-btn class="bg-teal-10" color="white" @click.prevent="validate" label="Sign In" >
                </q-btn>
                <div class="q-ma-xl" style="text-align:center;">
                    <router-link to="signUp" style="text-decoration:underline; color:teal;">Move to
                        <b>SignUp</b>
                        Page</router-link><br />
                    <router-link to="/" style="text-decoration:underline; color:teal;">Move to <b>Main</b> Page</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref} from 'vue'
    import { auth } from 'src/boot/firebase'
    import { useQuasar } from 'quasar'
    import { useRouter, useRoute } from 'vue-router'

    export default defineComponent({
        name: 'loginUser',

        setup() {
            const $q = useQuasar()
            const $router = useRouter()
            const $route = useRoute()

            let email = ref('')
            let password = ref('')
            let isPwd = ref('true')
            let remember = ref('true')
            let validationErrors = ref('')

            let validate = () => {

                // email validation
                if(!email.value) {
                    $q.notify({
                        position : "center",
                        message : "이메일을 입력하세요",
                        color : "grey"
                    })
                }
                else if(/.+@.+/.test(email.value) != true) {
                    $q.notify({
                        position : "center",
                        message : "이메일을 다시 확인해주세요",
                        color : "grey"
                    })
                }

                // password validation
                else if (!password.value) {
                    $q.notify({
                        position : "center",
                        message : "비밀번호를 입력하세요",
                        color : "grey"
                    })
                }

                else if (/.{6,}/.test(password.value) != true) {
                    $q.notify({
                        position : "center",
                        message : "비밀번호는 최소 6자리입니다.",
                        color : "grey"
                    })
                }
                 // when valid then sign in
                else if(validationErrors.value <= 0) {
                    loginUser();
                }

            }

            let loginUser = () => {
        
                auth.signInWithEmailAndPassword(email.value, password.value)

                    .then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;

                        $q.notify({
                            position : "top",
                            message : "로그인을 환영합니다",
                            color : "teal-10"
                        })

                        $router.push({ path: '/'})


                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage)

                        $q.notify({
                            position : "center",
                            message : "잘못된 정보입니다. ",
                            color : "grey"
                        })
                    });

            }

            
            return {email, password, loginUser, isPwd, remember, validate}
        }

    })
</script>