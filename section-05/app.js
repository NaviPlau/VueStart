const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'o7Egj@example.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 65432 10',
          email: 'KQ5yZ@example.com'
        }
      ]
    }
  }
})



app.component('friend-contact', {
  props: ['friend'],
  template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  
  `,
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  },
})

app.mount('#app')