<script setup>
import SidebarComponent from '@/components/Dashboard/Partials/SidebarComponent.vue'
import HeaderComponent from '@/components/Dashboard/Partials/HeaderComponent.vue'
import FooterComponent from '@/components/Dashboard/Partials/FooterComponent.vue'
import MainComponent from '@/components/Dashboard/Main/MainComponent.vue'
</script>

<template>
  <div class="container-fluid">
    <div id="app">
      <SidebarComponent />
      <div id="main">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </div>
  </div>
</template>
