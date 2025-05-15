const app = Vue.createApp({
  data() {
    return{
      className:'',
      visible : true,
      backgroundColor : '',
    }
  },

  computed : {
    canSee (){
      return this.visible ? 'visible' : 'hidden'
    },
  },

  methods : {
    toggleParagraph(){
      this.visible = !this.visible
    }
  }

})

app.mount('#assignment');