import Vue from "vue";
import Quiz from "./Quiz2.vue";
import questions from "./questions";

Vue.config.productionTip = false;

new Vue({
  render: (h) =>
    h(Quiz, {
      data() {
        return {
          idx: 0,
          answers: []
        };
      },
      methods: {
        incremntIndex() {
          this.idx = this.idx + 1;
        }
      },
      props: { questions }
    })
}).$mount("#app");
