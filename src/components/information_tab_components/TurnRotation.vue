<template>
  <div class="middle-third">
      <h2>Turn Rotation</h2>
      <button @click="rotate" id="rotation-next-button">Next</button>
      <div class="turn-rotation" v-for="character in turnRotation" :key="character.name">
        <i  style="cursor: pointer;" class="fa fa-times" @click="deletePlayerFromRotation(character)"></i>
        <p class="turn-rotation-character">{{character.name}}</p>
      </div>
      <form style="margin: 1rem;" @submit.prevent="handleAddTurnRotation">
        <input style="width: 8vw;" v-model="newCombatant" type="text"/>
        <button type="submit">Add</button>
      </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>