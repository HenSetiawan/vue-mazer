<template>
  <div id="auth-left" class="container">
    <LogoComponent />
    <h1 class="auth-title mb-3">Forgot Password</h1>
    <p class="auth-subtitle mb-3">
        Enter your email address below and we'll send you a link to reset your password
    </p>
    <form action="dashboard">
      <div class="form-group position-relative has-icon-left">
        <input type="email" class="form-control form-control-xl" placeholder="Email" />
        <div class="form-control-icon">
          <i class="bi bi-envelope-at"></i>
        </div>
      </div>
      <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
    </form>
    <div class="text-center mt-4 text-lg fs-4">
      <p class="text-gray-600">
        Remember your password ? <a @click="loginAction.toggleForgotPassword" class="font-bold cursor-pointer">Log in here</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { loginStore } from '@/stores/login.js'
import LogoComponent from '@/components/Login/LogoComponent.vue'

const loginAction = loginStore()
</script>
