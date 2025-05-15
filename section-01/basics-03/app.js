const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name : '',
      confirmedName : ''
    };
  },
  methods:{
    add(num){
      this.counter=this.counter+num
    },

    reduce(num){
      this.counter=this.counter-num
    },

    setName(event,lastName){
      this.name = event.target.value + ' ' + lastName
    },

    submitForm(){
      alert('Submitted!')
    },

    confirmName(){
      this.confirmedName = this.name
    }
  },
});

app.mount('#events');
