<template>
  <div class="long-player-list"> 

  </div>
</template>

<script>
export default {
    name: "LargePlayerListItem",
    props: ["name", "subtitle", "race", "characterClass", "level", "strength", "dexterity", "constitution", "intelligence", 
        "wisdom", "charisma", "initiative", "armorClass", "passivePerception", 
        "hitPoints", "speed", "playerName", "image"]
}
</script>

<style scoped>
    .long-player-list {
        height: 50vh;
        width: 40vw;
        margin: 2rem;
        background-color: var(--bg-primary);
        border-radius: 18px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>