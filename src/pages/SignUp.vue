<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-xl">

            <div class="q-ma-sm" style="font-size:30px; text-align:center;">
                <b>Sign Up</b>
                <q-badge class="bg-teal-10" align="top">kopo badge cli v1.0.0</q-badge>

            </div>

            <div class="q-gutter-y-md column">
                
                <q-input bottom-slots v-model="email" label="email" color="teal-7">

                     <template v-slot:append>
                    <q-icon name="close" @click="email = ''" class="cursor-pointer" />
                    </template>

                    <template v-slot:hint>
                    <p>이메일을 입력하세요</p>
                    </template>
                    
                </q-input>

                <q-input bottom-slots v-model="name" label="name" color="teal-7">
                     <template v-slot:append>
                    <q-icon name="close" @click="name = ''" class="cursor-pointer" />
                    </template>
                    <template v-slot:hint>
                    <p>이름을 입력하세요</p>
                    </template>
                </q-input>

                <q-input bottom-slots v-model="password" :type="isPwd ? 'password' : 'text'" label="Password" color="teal-7">
                    <template v-slot:append>
                        <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                        />
                    </template>

                    <template v-slot:hint>
                    <p>최소 6자리 이상의 비밀번호를 입력하세요</p>
                    </template>
                
                </q-input>

                <q-input bottom-slots v-model="pwCheck" :type="isPwd ? 'password' : 'text'" label="Repeat Password" color="teal-7">
                    <template v-slot:append>
                        <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                        />
                    </template>

                    <template v-slot:hint>
                    <p>비밀번호를 다시 한 번 입력해주세요</p>
                    </template>
                </q-input>

                <q-btn class="bg-teal-10" color="white" @click="validate" label="Sign Up"/>
                <div class="q-ma-xl" style="text-align:center;"> 
                <router-link to="/SignIn" style="text-decoration:underline; color:teal;">Move to <b>Login</b> Page</router-link><br />
                <router-link to="/" style="text-decoration:underline; color:teal;">Move to <b>Main</b> Page</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref} from 'vue';
    import { auth } from 'src/boot/firebase'
    import { useQuasar } from 'quasar'
    import { useRouter, useRoute } from 'vue-router';

    export default defineComponent({
        name: 'newUser',

        setup() {
            const $q = useQuasar()
            const $router = useRouter()
            const $route = useRoute()

            let email = ref('')
            let name = ref('')
            let password = ref('')
            let isPwd = ref('true')
            let pwCheck = ref('')
            let validationErrors = ref([])

             let validate = () => {
                
                // email validation
                if (!email.value) {
                    // validationErrors.value.push("<strong>E-mail</strong> cannot be empty.");
                    $q.notify({
                        position : "center",
                        message : "이메일은 필수로 입력해주세요",
                        color : "grey"
                    })
                }
                else if (/.+@.+/.test(email.value) != true) {
                    $q.notify({
                        position : "center",
                        message : "부적절한 이메일 형식입니다.",
                        color : "grey"
                    })
                }

                // password validation
                else if (!password.value || !pwCheck.value) {
                    $q.notify({
                        position : "center",
                        message : "비밀번호는 필수로 입력해주세요",
                        color : "grey"
                    })
                }

                else if (/.{6,}/.test(password.value) != true) {
                    $q.notify({
                        position : "center",
                        message : "비밀번호는 반드시 6자 이상입니다",
                        color : "grey"
                    })
                }

                else if (password.value != pwCheck.value) {
                    $q.notify({
                        position : "center",
                        message : "비밀번호가 일치하지 않습니다",
                        color : "grey"
                    })
                }

                // when valid then sign in
                else if(validationErrors.value <= 0) {
                    newUser();
                }
            }

            let newUser = () => {
                console.log("called" + email.value);

                auth.createUserWithEmailAndPassword(email.value, password.value)
                    .then(userCredential => {
                        var user = userCredential.user
                        user.name = name.value

                        $q.notify({
                            position : "center",
                            message : "회원가입이 완료되었습니다. 로그인이 필요합니다.",
                            color : "teal-10"
                        })
                        $router.push({ path: '/signIn'})
                        console.log("Success! ", user.email);
                    })
                    .catch(error => {
                        $q.notify({
                            position : "center",
                            message : "회원가입이 어렵습니다. 다시 입력해주세요",
                            color : "grey"
                        })
                        console.log("Failed!", error.message);
                    });

            }
            return {
                email, 
                newUser, 
                name, 
                pwCheck,
                isPwd,
                password,
                validate
                
            }
        }

    })
</script>
