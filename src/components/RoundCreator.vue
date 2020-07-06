<template>
  <div class="round">
    <h1>Round {{this.roundNumber}}!</h1>
    <h2>Round name (optional)</h2>
    <Input v-model="round.name" placeholder="eg. Movie Round" />
    <div
      v-for="question in this.round.questions"
      class="question"
      :key="question.index">
      <h3>Question {{question.index}}</h3>
      <Input v-model="round.questions[question.index - 1].text" />
    </div>
    <PlusButton
      :clickHandle="addQuestion" />

    <div class="submit-round">
      <Button text="Next Round" :clickHandle="this.submitRound" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlusButton from '@/components/PlusButton.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'RoundCreator',
  props: {
    roundNumber: Number,
  },
  data() {
    return {
      round: {
        index: this.roundNumber,
        name: '',
        questions: [{
          index: 1,
          text: '',
          answerType: 'text',
        }],
      },
    };
  },
  methods: {
    handleChange() {

    },
    addQuestion() {
      this.round.questions.push({
        index: this.round.questions.length + 1,
        text: '',
        answerType: 'text',
      });
      console.log(this.round);
    },
    submitRound() {

    },
  },
  components: {
    PlusButton,
    Button,
    Input,
  },
};
</script>
<style scoped>
.form {
  padding: 20px 0;
}
.name {
  display: flex;
  flex-direction: column;
}
input {
  padding: 20px 40px;
  max-width: 100%;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  font-size:28px;
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
.submit-round {
  display: flex;
  justify-content: flex-end;
}
</style>
