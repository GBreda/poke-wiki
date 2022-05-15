<template>
  <div class="card detail-card">
    <img :src="details.sprites.front_default" />
    <p class="detail-card__name">{{ formattedName }}</p>

    <div class="chips">
      <span
        class="chips__item"
        v-for="(item, index) in details.types"
        :key="index"
        >{{ item.type.name }}</span
      >
    </div>
  </div>
</template>

<script setup>
import useCapitalize from "@/composables/useCapitalize";

const props = defineProps({
  details: {
    type: Object,
    required: true,
  },
});

const formattedName = useCapitalize(props.details.name);
</script>

<style lang="scss" scoped>
.detail-card {
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__name {
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
