<template>
  <div class="human_count">
    <h3>Количество человек</h3>
    <input type="number" min="1" max="20" value="1">
  </div>
</template>

<style lang="scss" src="./human-count.scss"></style>


<script>
export default {
  name: 'human-count',
  data(){
    return {

    }
  },
  mounted: function () {
    // console.log(this);
  },
}
</script>