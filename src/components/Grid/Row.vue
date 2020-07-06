<template>
  <div class="row" :class="[this.center && 'align-center']">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    center: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.align-center {
  justify-content: center;
}
</style>
