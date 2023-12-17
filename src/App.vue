<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
          v-model="email"
          label="First name"
      ></v-text-field>

      <v-text-field
          v-model="password"
          label="Last name"
      ></v-text-field>

      <v-btn @click="onRegister()">Register</v-btn>
      <v-btn @click="onLogin()">Login</v-btn>
    </v-form>
  </v-sheet>
</template>



<script setup>

import {ref} from "vue";
import {login, register} from "./api/register.js"

const email =ref(null)
const password =ref(null)

async function onRegister() {
await register(email.value, password.value)
}

async function onLogin() {
  await login(email.value, password.value)
}

</script>




<style></style>
