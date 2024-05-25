<template>
  <div id="auth-left" class="container">
    <LogoComponent />
    <h1 class="auth-title mb-3">Log in.</h1>
    <p class="auth-subtitle mb-3">Log in with your data that you have previously registered.</p>
    <form @submit.prevent="authenticate()">
      <div class="form-group position-relative has-icon-left">
        <input
          type="text"
          class="form-control form-control-xl"
          placeholder="Username"
          v-model="data.username"
        />
        <div class="form-control-icon">
          <i class="bi bi-person"></i>
        </div>
      </div>
      <div class="form-group position-relative has-icon-left">
        <input
          type="password"
          class="form-control form-control-xl"
          placeholder="Password"
          v-model="data.password"
        />
        <div class="form-control-icon">
          <i class="bi bi-shield-lock"></i>
        </div>
      </div>
      <div class="form-check form-check-lg d-flex align-items-end">
        <input
          class="form-check-input me-2"
          type="checkbox"
          id="flexCheckDefault"
          checked
          disabled
        />
        <label class="form-check-label text-gray-600" for="flexCheckDefault">
          Keep me logged in
        </label>
      </div>
      <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5" :disabled="data.status">
        <span v-if="!data.status">Log in</span>
        <div v-if="data.status" class="spinner-border text-light mt-1" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </button>
    </form>
    <div class="text-center mt-4 text-lg fs-4">
      <p class="text-gray-600">
        <a @click="loginAction.toggleForgotPassword" class="font-bold cursor-pointer"
          >Forgot password ?</a
        >
        Follow the provided instructions
      </p>
    </div>
  </div>
</template>

<script setup>
/* import utility */
import LogoComponent from '@/components/Login/LogoComponent.vue'
import { loginStore } from '@/stores/login.js'
import axiosInstance from '@/helper/axios.js'
import { encryptToken } from '@/helper/crypto.js'
import { Swal } from '@/utils/main/component'

/* import library vue */
import { ref } from 'vue'
import { useRouter } from 'vue-router'

/* property component */
const router = useRouter()
const loginAction = loginStore()
const data = ref({
  username: null,
  password: null,
  status: false,
  permissions: null,
  roles: null,
  user_id: null,
  detail: null
})
const headers = {
  Authorization: null
}

/* method component */
const checkUser = (token) => {
  axiosInstance
    .get('/dashboard/user/check', { headers })
    .then((response) => {
      data.value.permissions = response.data.permissions
      data.value.roles = response.data.roles
      data.value.user_id = response.data.user_id.toString()
      data.value.detail = response.data.detail
      encryptToken(token, data.value.user_id, data.value.permissions, data.value.roles, data.value.detail)
      /* redirect to main page */
      data.value.status = false
      router.push({ name: 'Main' })
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        title: 'Data Sync Error',
        text: 'The synchronization of your data could not be completed at this time due to connection or system error.',
        icon: 'error',
        confirmButtonColor: '#364b98',
        confirmButtonText: 'Yes, Understand'
      })
    })
}

/* method for login user */
const authenticate = () => {
  data.value.status = true
  axiosInstance
    .post('/user/signin', { email: data.value.username, password: data.value.password })
    .then((response) => {
      /* check user before redirecting to main page */
      headers.Authorization = `Bearer ${response.data.token}`
      checkUser(response.data.token)
    })
    .catch((err) => {
      data.value.status = false
      Swal.fire({
        title: 'Incorrect Email or Password',
        text: "Your password didn't match any records",
        icon: 'warning',
        confirmButtonColor: '#364b98',
        confirmButtonText: 'Yes, Understand'
      })
    })
}
</script>
