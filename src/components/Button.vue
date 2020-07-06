<template>
  <button class="button" @click="clickHandle">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    clickHandle: {
      type: Function,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  padding: 15px;
  border-radius: 10px;
  background: #41b883;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  max-width: 100%;
  width: 200px;
  font-size: 18px;
  font-weight: 500;
}
.button:hover {
  background: #d1d1d1;
}
</style>
