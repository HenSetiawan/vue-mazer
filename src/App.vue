<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
body {
  overflow: auto !important;
}
.brushstroke-image {
  background-image: url('@/assets/main/images/brushstroke.png') !important;
  background-repeat: no-repeat;
  background-size: 120% 120% !important;
  display: inline-block;
}
a {
  cursor: pointer !important;
}
::-webkit-scrollbar {
  width: 10px !important;
}
::-webkit-scrollbar-thumb {
  background-color: #ccc;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
.form-control[readonly] {
  background-color: #fff;
  opacity: 1;
}
</style>
