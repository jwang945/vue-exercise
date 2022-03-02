<template>
  <div>
    <Header />
    <Question :title="questions[0].text" />
    <Answer :answers="questions[0].answers[0]" />
    <Button />
  </div>
</template>

<script>
import Header from "./components/Header";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Button from "./components/SubmitButton";

export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  components: {
    Header,
    Question,
    Answer,
    Button,
  },
  data() {
    return {};
  },
};
</script>
