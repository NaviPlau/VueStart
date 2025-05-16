function getRandomValue (min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data(){
      return{
        playerHealth : 100,
        monsterHealth :100,
        currentRound : 0,
        winner : null,
        logMessages : []
      }
    },

    computed:{
      monsterBarStyle(){
        if(this.monsterHealth < 0){
          return {width : '0%'}
        }
        return {width : this.monsterHealth + '%'}
      },

      playerBarStyle(){
        if(this.playerHealth < 0){
          return {width : '0%'}
        }
        return {width : this.playerHealth + '%'}
      },

      mayUseSpecialAttack(){
        return this.currentRound % 3 !== 0
      },
    },

    watch:{
      playerHealth(value){
        if(value <= 0 && this.monsterHealth <=0 ){
          this.winner = 'draw'
          this.playerHealth = 0
        }else if(value <= 0){
          this.playerHealth = 0
          this.winner = 'monster'
        }
      },

      monsterHealth(value){
        if(value <= 0 && this.playerHealth <=0 ){
          this.winner = 'draw'
          this.playerHealth = 0
          this.monsterHealth = 0
        }else if(value <= 0){
          this.winner = 'player'
          this.value = 0
          this.monsterHealth = 0
        }
      }
    },


    methods: {
      attackMonster(){
        let attackValue =  getRandomValue(5, 12);
        this.monsterHealth -= attackValue;
        this.addLogMessage('player', 'attack', attackValue)
        this.attackPlayer();
        this.currentRound++
      },

      attackPlayer(){
        let attackValue =  getRandomValue(7,15)
        this.playerHealth -= attackValue
        this.addLogMessage('monster', 'attack', attackValue)
      },

      specialAttackMonster(){
        this.currentRound++
        let attackValue =  getRandomValue(10,25)
        this.monsterHealth -= attackValue
        this.addLogMessage('player', 'special-attack', attackValue)
        this.attackPlayer()
      },

      healPlayer(){
        this.currentRound++
        let healValue = getRandomValue(9,18)
        if(this.playerHealth + healValue > 100 ){
          this.playerHealth = 100
        }else{
          this.playerHealth += healValue
        }
        this.attackPlayer()
        this.addLogMessage('player', 'heal', healValue)
      },

      startGame(){
        this.logMessage = []
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.currentRound = 0;
        this.winner = null
      },

      surrender(){
        this.winner = 'monster'
      },

      addLogMessage(who, what, value){
        this.logMessages.unshift({
          actionBy : who,
          actionType : what,
          actionValue : value
        })
      }
    },
})

app.mount('#game')