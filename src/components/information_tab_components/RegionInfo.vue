<template>
  <div class="top-third">
      <h2 style="margin: 0 auto;">Region information</h2>
      <div class="region-info">
        <div class="region-div">
          <p>Plane:</p>
          <input v-if="editRegionInfo" v-model="plane"/>
          <p v-else>{{plane}}</p>
        </div> 
        <div class="region-div">
          <p>Continent:</p>
          <input v-if="editRegionInfo" v-model="continent"/>
          <p v-else>{{continent}}</p>
        </div> 
        <div class="region-div">
          <p>Area: </p>
          <input v-if="editRegionInfo" v-model="area"/>
          <p v-else>{{area}}</p>
        </div> 
        <div class="region-div">
          <p>Climate: </p>
          <input v-if="editRegionInfo" v-model="climate"/>
          <p v-else>{{climate}} </p>
        </div>
        <div class="region-div">
          <p>Terrain: </p>
          <input v-if="editRegionInfo" v-model="terrain"/>
          <p v-else>{{terrain}} </p>
        </div>  
      </div>
      <button style="margin: 0 auto;" v-if="editRegionInfo" @click="handleEditRegionInfo" id="edit-region-button">Done</button>
      <button style="margin: 0 auto;" v-else @click="editRegionInfo = !editRegionInfo" id="edit-region-button">Edit</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>


</style>