<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="inputIsInvalid = false">Ok</button>
    </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      inputIsInvalid: false
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    }
  }
};
</script>