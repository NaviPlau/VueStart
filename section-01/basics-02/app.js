const app = Vue.createApp({
  data() {
    return{
      courseGoalA : 'Finish the course and learn Vue!',
      courseGoalB : 'Master Vue and build amazing apps!',
      vueLink : 'https://vuejs.org/'
    };
  },
  methods:{
    outputGoal(){
      const randomNumbber = Math.random();
      if(randomNumbber < 0.5){
        return this.courseGoalA;
      }else{
        return this.courseGoalB;
      }
    },
  }
});

app.mount('#user-goal')