<template>
  <form @submit.prevent="$emit('add-friend', enteredName, enteredPhone, enteredEmail)">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="enteredName">
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel"  v-model="enteredPhone">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" v-model="enteredEmail">
    </div>
    <button>Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  }
}

</script>
