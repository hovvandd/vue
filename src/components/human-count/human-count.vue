<template>
  <div class="human_count">
    <h3>Количество человек:</h3>
    <div class="count_items">
      <div class="count_item">
        <label> Взрослых
          <input type="number" min="1" max="20" v-model="adult">
        </label>
      </div>
      <div  class="count_item">
        <label> Детей
          <input type="number" min="1" max="20" v-model="kid">
        </label>
      </div>
      <p>{{sumHuman}}</p>
    </div>
  </div>
</template>

<style lang="scss" src="./human-count.scss"></style>


<script>
import {eventBus} from '../../index';
export default {
  name: 'human-count',
  data(){
    return {
      adult: false,
      kid: false,

    }
  },
  mounted: function () {
    // console.log(this);
  },
  computed:{
    sumHuman: function () {
      if(this.adult.length > 0){
        let sumHuman = Number(this.adult * 2) + Number(this.kid)
        eventBus.$emit('sumHuman', sumHuman)
        return sumHuman
      }
    }
  }
}
</script>