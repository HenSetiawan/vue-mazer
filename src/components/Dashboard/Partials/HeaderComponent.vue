<template>
  <header class="mb-3">
    <a href="#" class="burger-btn d-block d-xl-none" @click="sidebarAction.toggleSidebar">
      <i class="bi bi-justify fs-3"></i>
    </a>
  </header>
</template>

<script setup>
import { sidebarStore } from '@/stores/main.js'

const sidebarAction = sidebarStore()
</script>
