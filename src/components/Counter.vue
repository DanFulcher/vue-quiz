<template>
  <button class="button" @click="clickHandle">
    {{ this.counter }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    clickHandle() {
      this.counter += 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  padding: 15px;
  border-radius: 10px;
  background: #ddd;
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
