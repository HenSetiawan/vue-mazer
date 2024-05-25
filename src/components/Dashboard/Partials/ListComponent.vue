<template>
  <!-- start of dashboard -->
  <li :class="{ 'sidebar-item has-sub': true, active: false }">
    <a href="#" class="sidebar-link" @click="sidebarAction.toggleDropdown('dashboard')">
      <i class="bi bi-grid-fill"></i>
      <span>Dashboard</span>
    </a>
    <ul class="list-group">
      <li class="submenu-item mb-3 ps-4 mt-3" v-show="sidebarAction.isDropdownVisible.dashboard">
        <i class="bi bi bi-stack pe-2"></i>
        <router-link :to="{ name: 'Main' }" class="submenu-link text-secondary"
          >Overview</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script setup>
import { sidebarStore } from '@/stores/main.js'
const sidebarAction = sidebarStore()
</script>
