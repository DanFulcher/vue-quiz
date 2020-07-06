<template>
  <div class="new-quiz">
    <Container>
      <h1>Welcome, quiz master!</h1>
      <Row center>
        <div class="form-container">
          <CreateForm />
        </div>
      </Row>
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Grid/Container.vue';
import Row from '@/components/Grid/Row.vue';
import CreateForm from '@/components/CreateForm.vue';

export default {
  name: 'New Quiz',
  components: {
    CreateForm,
    Container,
    Row,
  },
};
</script>
<style scoped>
.form-container {
  display: flex;
  width: 80%;
}
</style>
