const app = Vue.createApp({
  data() {
    return { 
      tasks: [],
      inputValue : '',
      showList : true
    };
  },

  computed:{
    showText(){
      return this.showList ? 'Hide List' : 'Show List'
    }
  },

  methods: {
    addTask(){
      this.tasks.push(this.inputValue)
      this.inputValue = ''
    },

    removeTask(index){
      this.tasks.splice( index, 1)
    },

    toggleList(){
      this.showList = !this.showList
    }

  },
});

app.mount('#assignment');