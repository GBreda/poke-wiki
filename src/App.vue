<template>
  <the-header />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<style lang="scss" scoped>
.container {
  width: 60%;
  display: flex;
  margin: auto;
  flex-direction: column;
}
</style>
