<template>
  <div class="amount-kebab">
    <div>
      <button>Рассчитать</button>
      <p>{{sumHuman}}</p>
      <p>10.2 kg</p>
    </div>
  </div>
</template>
<style lang="scss" src="./amount-kebab.scss"></style>

<script>
import {eventBus} from '../../index';
export default {
  name: 'amount-kebab',
  data(){
    return {
      sumHuman: ''
    }
  },
  mounted: function () {
    // console.log(this);
  },
  created() {
    eventBus.$on('sumHuman', (sumHuman) => {
      this.sumHuman = sumHuman;
      console.log(sumHuman)
    })
  },
}
</script>