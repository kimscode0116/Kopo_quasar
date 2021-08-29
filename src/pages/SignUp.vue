<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-xl">

            <div class="q-ma-sm" style="font-size:30px; text-align:center;">
                <b>Sign Up</b>
                <q-badge class="bg-teal-10" align="top">kopo badge cli v1.0.0</q-badge>

            </div>

            <div class="q-gutter-y-md column">
                <q-input filled="filled" v-model="email" label="email"></q-input>
                <q-input filled="filled" v-model="name" label="name"></q-input>

                <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Password">
                    <template v-slot:append>
                        <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                        />
                    </template>
                </q-input>

                <q-input v-model="pwCheck" filled :type="isPwd ? 'password' : 'text'" label="Repeat Password">
                    <template v-slot:append>
                        <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                        />
                    </template>
                </q-input>

                <q-btn class="bg-teal-10" color="white" @click="register()" label="Sign Up"/>
                <div class="q-ma-xl" style="text-align:center;"> 
                <router-link to="/" style="text-decoration:underline; color:teal;">Move to <b>Login</b> Page</router-link>
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
            let name = ref('')
            let password = ref('')
            let isPwd = ref('true')
            let pwCheck = ref('')

            let register = () => {
                console.log("called" + email.value);

            }
            return {
                email, 
                register, 
                name, 
                pwCheck,
                isPwd,
                password
            }
        }

    })
</script>