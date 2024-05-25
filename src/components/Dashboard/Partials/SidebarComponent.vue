<template>
  <div id="sidebar" :class="{ active:sidebarAction.isSidebarVisible }">
    <div class="sidebar-wrapper active">
      <div class="sidebar-header position-relative">
        <!-- show logo here  -->
        <LogoComponent />
        <!-- end of show logo -->
      </div>
      <div class="sidebar-toggler x" @click="sidebarAction.toggleSidebar">
        <a href="" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
      </div>
      <div class="sidebar-menu">
        <ul class="menu">
          <li class="sidebar-title"></li>
          <ListComponent />
          <!-- start of name login -->
          <li class="sidebar-item" style="cursor: pointer">
            <div @click="logout()" class="sidebar-link">
              <i class="bi bi-box-arrow-left"></i>
              <span>Hi, Admin</span>
            </div>
          </li>
          <!-- end of name login -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
/* import component */
import LogoComponent from '@/components/Dashboard/Partials/LogoComponent.vue'
import ListComponent from '@/components/Dashboard/Partials/ListComponent.vue'

import { sidebarStore } from '@/stores/main.js'
const sidebarAction = sidebarStore()
</script>

<style>
.img-fluid {
  height: 35px !important;
}
.badge {
  position: absolute;
  top: 0;
  right: 80%;
  padding: 2px 6px !important;
  font-size: 12px !important;
}
#sidebar.active .sidebar-wrapper {
  overflow-y: auto;
  scrollbar-width: thin;
}
#sidebar.active .sidebar-wrapper::-webkit-scrollbar {
  width: 6px;
}
#sidebar.active .sidebar-wrapper::-webkit-scrollbar-thumb {
  background-color: #6c757d;
  border-radius: 3px;
}
#sidebar.active .sidebar-wrapper::-webkit-scrollbar-track {
  background-color: #f8f9fa;
  border-radius: 3px;
}
#sidebar.active .sidebar-wrapper.scrollbar-present {
  padding-right: 16px;
}
</style>
