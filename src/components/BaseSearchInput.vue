<template>
  <input
    @input="debounceSearchInput"
    :placeholder="placeholder"
    type="search"
  />
</template>

<script setup>
import UseDebounce from "@/composables/useDebounce";

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["updateSearchInput"]);

const updateSearchInput = (event) => {
  const { value } = event.target;

  emit("updateSearchInput", value);
};

const debounceSearchInput = UseDebounce(updateSearchInput, 500);
</script>

<style lang="scss" scoped>
input[type="search"] {
  padding: 14px 0 14px 38px;
  font-size: 14px;
  height: 48px;
  width: 815px;
  border: 1px solid $gray;
  border-radius: 25px;

  &::placeholder {
    font-size: 14px;
    color: $placeholder-text;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    background-image: url("@/assets/images/icons/close-icon.svg");
    margin-right: 14px;
  }
}
</style>
