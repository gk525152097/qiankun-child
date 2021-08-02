<template>
  <div
    class="GlobalCard"
    :style="{
      background: background || 'rgba(var(--color-bg-main), 1)'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GlobalCard',
  props: {
    background: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common";
.GlobalCard {
  padding: var(--padding-m);
  border-radius: var(--border-radius-m);
  @include box-shadow;
  transition: all 0.3s;
}
</style>
