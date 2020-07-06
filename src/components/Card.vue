<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 100%;
  border-radius: 20px;
  background: #f1f1f1;
  margin: 15px;
  padding: 15px 30px;
}
</style>
