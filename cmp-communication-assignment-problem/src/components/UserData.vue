<template>
  <form @submit.prevent="$emit('save-data', name, age)">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" required v-model="name" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" required v-model="age" />
    </div>
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      name: '',
      age: ''
    }
  }
}
</script>