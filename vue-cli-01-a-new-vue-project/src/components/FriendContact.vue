<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{  detailsAreVisible ? 'Hide' : 'Show'  }} Details</button>
    <button @click="$emit('toggle-favourite', friend.id)">Is {{ friend.isFavourite ? 'Not' : '' }} Favourite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
    <button @click="$emit('delete-friend', friend.id)">Delete</button>
  </li>
</template>

<script>
export default {
  emits: ['toggle-favourite', 'delete-friend'],
  props: ['friend'],
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
}
</script>