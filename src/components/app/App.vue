<template>
  <div class="todo-app">
    <h3>Задания: {{message}}</h3>
    <input type="text" v-model="rezolveMessage">
  </div>
  <!-- Теперь можно собрать наше приложение командой npm run build либо запустить слежение за файлами при изменении командой npm run watch. -->
</template>

<style lang="scss" src="./App.scss"></style>

<script>
    export default {
        name: 'App',
        data(){
          message:'asdasd'
          // rezolveMessage == message
          return {  
            // message,
            rezolveMessage,
           }    
        },
        mounted: function () {
          // console.log(this);
        },
        // computed:{
        //   message: function(val){
        //     if(this.rezolveMessage.lendth > 0){
        //     //  this.message == val;
        //      return val
        //     }
        //   }
        // },
        computed: {
          message: {
            // геттер:
            get: function () {
              return this.rezolveMessage
            },
            // сеттер:
            set: function (newValue) {
              if(newValue.length > 0){
              var names = newValue.split(' ')
              this.message = names[0]
              }
              
            }
          }
        }
    }
</script>



