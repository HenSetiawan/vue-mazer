/* this codes will guide you how to write state management */
import { defineStore } from 'pinia'

export const loginStore = defineStore('login', {
  /* define variable on state here */
  state: () => ({
    isForgotPasswordVisible: false
  }),
  /* define method on actions here */
  actions: {
    toggleForgotPassword() {
      this.isForgotPasswordVisible = !this.isForgotPasswordVisible
    }
  }
})
