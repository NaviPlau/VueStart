const app = Vue.createApp({
  data(){
    return{
      name : 'Paul',
      age : 26,
      imgUrl : 'https://videoflix.paul-ivan.com/shared/images/logo-long.webp',
    }
  },

  methods:{
    calculateAge(){
      return this.age + 5
    },

    randomNumber(){
      return Math.random()
    }
  }
});

app.mount('#assignment')