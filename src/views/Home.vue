<template>
  <div class="home">
    <Container>
      <h1>Welcome to Dan's awesome quiz app!</h1>
      <p>Create a new quiz or a code to join an existing quiz.</p>
      <Row center>
        <Card>
          <h3>Create a new quiz</h3>
          <p>Become a quiz master. Set the round and the questions,
            then share the link with your family and friends</p>
          <Button text="Create Quiz" :clickHandle="this.createQuiz" />
        </Card>

        <Card>
          <h3>Join a quiz</h3>
        </Card>
      </Row>
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Grid/Container.vue';
import Row from '@/components/Grid/Row.vue';
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Home',
  components: {
    Container,
    Row,
    Card,
    Button,
  },
  methods: {
    createQuiz() {
      this.$router.push('new-quiz');
    },
  },
};
</script>
