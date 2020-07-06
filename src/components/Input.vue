<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    :required="required"
    v-on:input="updateValue($event.target.value)">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  padding: 20px 40px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  font-size:28px;
  box-sizing: border-box;
}
::-webkit-input-placeholder {
  font-size:28px;
  color: #d1d1d1;
}
::-moz-placeholder {
  font-size:28px;
  color: #d1d1d1;
}
:-ms-input-placeholder {
  font-size:28px;
  color: #d1d1d1;
}
:-moz-placeholder {
  font-size:28px;
  color: #d1d1d1;
}
</style>
