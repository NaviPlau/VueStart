<template>
  <div class="left-side">
    <h2>Active Users</h2>
    <ul >
      <li v-for="user in users" :key="user.id">{{user.name}}, {{user.age}} years old</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['users']

}
</script>