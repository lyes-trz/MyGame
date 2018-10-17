new Vue ({
  el: '#app',
  data: {
  	playerHealth: 100,
  	monsterHealth: 100,
  	gameIsRunning: false,
    startApp: false,
   
    Y: '',
    M: '',
    T: ''
    
    
    

  },
  methods :{  
              start : function (){
                 this.startApp = true;
                 

                         }, 
             	startGame : function (){
  		           this.gameIsRunning = true;
  		           this.playerHealth = 100;
  		           this.monsterHealth = 100;
                 this.T = 0;

  	                     }, 



  	            attack : function(){
                  var damage = this.claculateDamage(5, 10);
                  this.monsterHealth -= damage;
                  
                    
                  this.Y = damage;

                  
                  if (this.checkWin()) {
                    return;
                  }
                 this.monsterAttacks();


                 var a = this.Y - this.M;
                 this.T = a;
  	            },



  	            specialAttack : function(){
  	            	var damage = this.claculateDamage(20, 40);
                  this.monsterHealth -= damage;
                  this.Y = damage; 
                  if (this.checkWin()) {
                    return;
                  }
                  this.monsterAttacks();
                  var a = this.Y - this.M;
                 this.T = a;
  	            },




  	            heal : function() {
                  if (this.playerHealth <= 80) {
                     this.playerHealth += 20;  
                  }else {
                    this.playerHealth = 100;
                  }
                  
                  this.monsterAttacks();  
  	            	 var a = 20 - this.M;
                 this.T = a;
  	            },



  	            giveUp : function(){
  	               this.gameIsRunning = false;
  	               this.playerHealth = 0;	
                   this.T = 0;
  	            },


                monsterAttacks: function() {
                  var damage = this.claculateDamage(10, 15);
                  this.playerHealth -= damage;
                  this.checkWin();
                  this.M = damage;
                  
                },


                claculateDamage: function(min, max) {
                  return Math.max(Math.floor(Math.random() * max) + 1, min);
                },

                checkWin: function() {

                  if (this.monsterHealth <= 0) {

                    if (confirm('You won!!!   start a new Game???')) {
                        this.startGame();
                    } else{
                      this.gameIsRunning = false;
                      this.monsterHealth = 0;
                      this.T = 0;
                    }
                      return true;
                  } else if (this.playerHealth <= 0) {

                    if (confirm('You lost!!!   start a new Game???')) {
                        this.startGame();
                    } else{
                      this.gameIsRunning = false;
                      this.playerHealth = 0;
                      this.T = 0;
                    }
                      return true;
                  }
                  return false;
                }

  }
});