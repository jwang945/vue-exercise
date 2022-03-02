<template>
  <div v-if="index < questions.length" class="questionContainer">
    <h1>Question {{ index + 1 }}</h1>
    <h2>{{ getCurrentQuestion().text }}</h2>
    <div
      class="answers"
      v-for="(answer, idx) in getCurrentQuestion().answers"
      :key="idx"
    >
      <input
        type="radio"
        :value="answer"
        name="radioButtonAnswer"
        v-model="answers[getIndex()]"
      />
      <label :for="answer">{{ answer }}</label>
    </div>
    <button
      class="advanceBtn"
      @click="incrementIndex"
      :disabled="answers[getIndex()] == null"
    >
      Advance
    </button>
  </div>
  <div v-else class="resultsContainer">
    <h1 id="resultsTitle">Results</h1>
    <div v-for="(question, idx) in questions" :key="idx">
      <h2 class="resultQuestion">{{ question.text }}</h2>
      <h2 class="resultAnswer">{{ answers[idx] }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      index: 0,
      answers: [],
    };
  },
  methods: {
    getAnswers() {
      return this.answers;
    },
    getIndex() {
      return this.index;
    },
    incrementIndex() {
      this.index++;
    },
    getCurrentQuestion() {
      return this.questions[this.index];
    },
  },
};
</script>

<style scoped>
.advanceBtn {
  margin-top: 10px;
  background-color: #b9c7e4;
  border-radius: 6px;
  border: none;
  font-size: 15px;
}
.questionContainer {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
.resultsContainer {
  padding: 1rem;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
.resultAnswer {
  font-weight: normal;
  color: green;
}
#resultsTitle {
  text-decoration: underline;
}
</style>