<template>
  <div class="container">
    <base-search-input class="search-input" :placeholder="placeholder" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseSearchInput from "@/components/BaseSearchInput.vue";

const placeholder = ref("Pesquise por nome ou código");
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.search-input {
  margin-top: 20px;
}
</style>
