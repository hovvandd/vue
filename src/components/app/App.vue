<template>
  <div class="content">
    <h1>Шашлычный калькулятор</h1>
    <div class="culc-item">
      <human-count />
      <amount-kebab />
    </div>
  </div>
  <!-- Теперь можно собрать наше приложение командой npm run build либо запустить слежение за файлами при изменении командой npm run watch. -->
</template>

<style lang="scss" src="./App.scss"></style>

<script>
    import HumanCount from "../human-count/human-count.vue";
    import AmountKebab from "../amount-kebab/amount-kebab.vue";
    export default {
        name: 'App',
      components: {
        AmountKebab,
        HumanCount
      },
      data(){
          return {  

           }    
        },
        mounted: function () {
          // console.log(this);
        },
    }
</script>



