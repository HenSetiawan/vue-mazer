<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-5 col-12 p-3">
        <!-- show an authentication form -->
        <LoginComponent v-if="!isLogin" />
        <!-- show a forgot password form -->
        <ResetComponent v-if="isLogin" />
      </div>
      <div class="col-lg-7 gx-0 d-none d-lg-block">
        <div id="auth-right">
          <!-- show a slider images -->
          <SliderComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-fluid,
.row,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.object-fit {
  object-fit: cover;
  height: 100vh;
}
.carousel-inner {
  border-radius: 0px !important;
}
.cursor-pointer {
  cursor: pointer !important;
}
.mx-width-40 {
  max-width: 40%;
}
</style>

<script setup>
import LoginComponent from '@/components/Login/LoginComponent.vue'
import ResetComponent from '@/components/Login/ResetComponent.vue'
import SliderComponent from '@/components/Login/SliderComponent.vue'
import { loginStore } from '@/stores/login.js'
import { ref, watch, onMounted } from 'vue'

const loginState = loginStore()
const isLogin = ref(null)

onMounted(() => {
  isLogin.value = loginState.isForgotPasswordVisible
})

watch(
  () => loginState.isForgotPasswordVisible,
  (newValue, oldValue) => {
    isLogin.value = newValue
  }
)
</script>
