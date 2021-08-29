
<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-xl">

            <div class="q-ma-sm" style="font-size:30px; text-align:center;">
                <b>Login</b>
            </div>

            <div class="q-gutter-y-md column" >
                <q-input filled="filled" v-model="email" label="email"></q-input>
                
                <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Password">
                    <template v-slot:append>
                        <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                        />
                    </template>
                </q-input>

                    <div class="q-gutter-sm">
                    <q-checkbox v-model="remember" label="Remember Me" color="teal" />
                    </div>

                <q-btn class="bg-teal-10" color="white" @click="register()" label="Sign In"/>
                
                <div class="q-ma-xl" style="text-align:center;">
                <router-link to="signUp" style="text-decoration:underline; color:teal;">Move to <b>SignUp</b> Page</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref} from 'vue';

    export default defineComponent({
        name: 'PageIndex',
   
        setup() {
            let email = ref('')
            let password = ref('')
            let isPwd = ref('true')
            let remember = ref('true')
            let register = () => {
                console.log("called" +email.value);

            }
            return {
              email, register, password, isPwd, remember
              }
        }

    })
</script>

