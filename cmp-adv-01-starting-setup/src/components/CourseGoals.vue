<template>
  <ul v-for="goal in goals" :key="goal">
    <slot :item="goal" another-prop="..."></slot></ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['finish the course', 'learn vue'],
    };
  }
}
</script>