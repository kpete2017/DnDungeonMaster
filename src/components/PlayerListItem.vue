<template>
  <div class="long-player-list"> 
        <div class="player-stats-body">
            <div class="player-stats-body-left-side">
            <div class="player-stats-picture">
                    <img :src="image" style='height:44vh; width: 20vw; position: relative; left: 0; object-fit: cover; object-position:top; border-top-left-radius: 4.5px;'/>
            </div>
            <div class="player-stats-body-general-information">
                    <h1>{{name}}</h1>
                    <h2>{{subtitle}}</h2>
                    <h2>Race: {{race}}</h2>
                    <h2>Class: {{characterClass}}</h2>
                    <h2>Level: {{level}}</h2>
            </div>
            </div>
            <div class="player-stats-body-ability-scores">
                <div class="ability-score">
                    <h2>Strength</h2>
                    <h2>{{strength}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Dexterity</h2>
                    <h2>{{dexterity}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Constitution</h2>
                    <h2>{{constitution}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Intelligence</h2>
                    <h2>{{intelligence}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Wisdom</h2>
                    <h2>{{wisdom}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Charisma</h2>
                    <h2>{{charisma}}</h2>
                </div>
                <br/>
                <br/>
                <div class="ability-score">
                    <h2>Initiative</h2>
                    <h2>{{initiative}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Armor Class</h2>
                    <h2>{{armorClass}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Pas Perception</h2>
                    <h2>{{passivePerception}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Speed</h2>
                    <h2>{{speed}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Max-HP</h2>
                    <h2>{{hitPoints}}</h2>
                </div>
                <div class="ability-score">
                    <h2>Proficiency Bonus</h2>
                    <h2>{{proficiencyBonus}}</h2>
                </div>
            </div>
            <div class="right-side">
                <div class="player-stats-attacks-spellcasting">
                    <h2>Attacks and SpellCasting</h2>
                </div>
                <div class="player-stats-equipment">
                    <h2>Equipment</h2>
                </div>
            </div>      
        </div>
        <div class="player-stats-footer">
            <button class="player-options-button">Edit</button>
            <button @click="deletePlayer" value="delete" class="player-options-button">Delete</button>
        </div>
  </div>
</template>

<script>
export default {
    name: "LargePlayerListItem",
    props: ["name", "subtitle", "race", "characterClass", "level", "strength", "dexterity", "constitution", "intelligence", 
        "wisdom", "charisma", "initiative", "armorClass", "passivePerception", 
        "hitPoints", "speed", "playerName", "image", "proficiencyBonus", "id"],
    methods: {
        deletePlayer: function() {
            this.$emit("deletePlayer", this.allStats)
        }
    },
    mounted() {
        this.allStats = [this.name, this.subtitle, this.race, this.characterClass, this.level, this.strength, this.dexterity, this.constitution, this.intelligence, 
        this.wisdom, this.charisma, this.initiative, this.armorClass, this.passivePerception, 
        this.hitPoints, this.speed, this.playerName, this.image, this.proficiencyBonus]
    }
}
</script>

<style scoped>

    .long-player-list {
        font-size: .8rem ;
        height: 75vh;
        width: 70vw;
        display: grid;
        grid-template-areas:
        "player-stats-body"
        "player-stats-footer";
        grid-template-rows: 9fr 1fr;
        margin-left: 14.6vw;
        background-color: var(--bg-primary);
        border-radius: 4.5px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    }

    .player-stats-body {
        grid-area: player-stats-body;
        display: flex;
        line-height: 1;
    }

    .player-stats-body-general-information {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    .ability-score {
        display: flex;
        justify-content: space-between;
    }

    .player-stats-body-ability-scores {
        width: 10vw;
        text-align: left;
        margin-left: 1rem;
    }

    .player-stats-attacks-spellcasting {
        position: relative;
        text-align: center;
        background-color: var(--bg-secondary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        right: -6vw;
        top: 1vh;
    }

    .player-stats-equipment {
        position: relative;
        text-align: center;
        background-color: var(--bg-secondary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        right: -6vw;
        top: 1vh;
    }

    .player-options-button {
        color: var(--text-secondary);
        background-color: var(--bg-secondary);
        padding: 1rem;
        margin-top: 1rem;
        margin-left: 1rem;
        cursor: pointer;
    }

    .ability-score {
        display: flex;
        justify-content: space-between;
    }

    .player-body-content {
        grid-area: player-stats-body;
    }

    .player-stats-footer {
        grid-area: player-stats-footer;
        background-color: rgb(209, 38, 29);
        border-bottom-left-radius: 4.5px;
        border-bottom-right-radius: 4.5px;
    }

</style>