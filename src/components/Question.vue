<template>
  <div>
    <h2>{{ questions[0].text }}</h2>
  </div>
</template>


<script>
export default {
  name: "Question",
  props: ["title", "questions"],
};
</script>