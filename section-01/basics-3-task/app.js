const app = Vue.createApp({
  data() {
    return {
      output: '',
      secondOutput : '',
    
    };
  },
  methods:{
    showInput(event){
      this.output = event.target.value
    },
    showSecondInput(event){
      this.secondOutput = event.target.value
    },
    showAlert(){
      alert('First vue Alone')
    },
  },
});

app.mount('#assignment');