<template>
  <Card>
    <div class="form">
      <div v-if="access === 0" class="name">
        <h1>Quiz name:</h1>
        <Input v-model="quiz.name" placeholder="eg. My Big Fat Quiz" />
        <Button text="Next" :clickHandle="this.submitName" />
      </div>
      <RoundCreator v-if="access >= 1" :roundNumber="access" />
    </div>
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import RoundCreator from '@/components/RoundCreator.vue';

export default {
  name: 'CreateForm',
  data() {
    return {
      access: 0,
      quiz: {
        name: '',
        rounds: [],
      },
    };
  },
  methods: {
    submitName() {
      if (this.quiz.name !== '') {
        this.quiz.rounds.push({
          name: '',
          questions: [{
            index: 1,
            text: '',
            answerType: 'text',
          }],
        });
        this.access += 1;
      }
      console.log(this.quiz);
    },
  },
  components: {
    Card,
    Input,
    Button,
    RoundCreator,
  },
};
</script>
<style scoped>
.form {
  padding: 20px 0;
}
</style>
