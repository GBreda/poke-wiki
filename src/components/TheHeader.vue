<template>
  <div class="header">
    <img class="header__logo" src="@/assets/images/logo.svg" alt="Kotas logo" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 48px;
  width: 100%;
  box-shadow: 0px 1px 1px $gray;
  display: flex;
  align-items: center;

  &__logo {
    width: 80px;
    height: 24px;
    padding-left: 16px;
  }
}
</style>
