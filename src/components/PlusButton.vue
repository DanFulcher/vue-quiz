<template>
  <button class="button" @click="clickHandle">
    +
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
  padding: 12px 15px 15px 15px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #41b883;
  color: #41b883;
  margin-bottom: 20px;
  cursor: pointer;
  max-width: 100%;
  font-size: 18px;
  font-weight: 500;
  width: 50px;
  height: 50px;
}
.button:hover {
  background: #41b883;
  color: #fff;
}
</style>
