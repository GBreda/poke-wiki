import { computed } from "vue";

const useCapitalize = (string) => {
  return computed(() => `${string.charAt(0).toUpperCase()}${string.slice(1)}`);
};

export default useCapitalize;
