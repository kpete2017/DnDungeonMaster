<template>
    <div class="monster-instance">
        <img :src="image" alt="Monster Image" height="387px" width="500px">
        <h1>{{name}}</h1>
        <h2>Challenge Rating: {{challenge}}</h2>
        <h2>Hit Points: {{hitPoints}}</h2>
        <h2>Armor Class: {{armorClass}}</h2>
    </div>
</template>

<script>
export default {
    name: "Monster",
    props: ["name", "meta", "armorClass", "hitPoints", "speed", 
    "strength", "dexterity", "constitution", "intelligence", "wisdom", 
    "charisma", "savingThrows", "skills", "senses", "languages", "challenge", 
    "traits", "actions", "legendaryActions", "image"],
}
</script>

<style>
    .monster-instance {
        color: var(--text-secondary);
        margin-left: 8rem;
        margin-top: 2rem;
        height: 70vh;
        width: 90vw;
        background-color: var(--bg-primary);

    }
</style>