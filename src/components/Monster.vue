<template>
    <div class="monster-instance">
        <div class="monster-instance-body"> 
            <div class="monster-instance-left-column">
                <div class="monster-instance-top-left">
                    <img :src="image" style='height:44vh; width: 20vw; position: relative; left: 0; object-fit: cover; object-position:center; border-top-left-radius: 4.5px;'>
                </div>
                <div class="monster-instance-bottom-left"> 
                    <h1>{{name}}</h1>
                    <h2>Challenge Rating: {{challenge}}</h2>
                    <h2>Hit Points: {{hitPoints}}</h2>
                    <h2>Armor Class: {{armorClass}}</h2>
                </div>
            </div>
            <div class="monster-stats-body-ability-scores">
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
                <div class="ability-score">
                    <h2>Speed: </h2>
                    <h2>{{speed}}</h2>
                </div>
                
            </div>
            <div class="right-side">
                <div class="monster-stats-attacks-spellcasting">
                    <h2>Attacks and SpellCasting</h2>
                    <div class="ability-text" v-for="ability in listAbility" :key="ability.first"> 
                        <Ability v-bind:ability="ability"/>
                    </div>
                </div>
                <div class="monster-stats-equipment">
                    <h2>Traits</h2>
                    <div class="trait-text" v-for="trait in listTrait" :key="trait.first">
                        <Trait v-bind:trait="trait"/>
                    </div>
                </div>
            </div>    
        </div> 
        <div class="monster-instance-footer">

        </div>
    </div>
</template>

<script>
import Ability from './Ability'
import Trait from './Trait'

export default {
    name: "Monster",
    data() {
        return {
            abilities: [],
            allTraits: [],
            listAbility: [],
            listTrait: []
        }
    },
    components: {
        Ability,
        Trait
    },
    props: ["name", "meta", "armorClass", "hitPoints", "speed", 
    "strength", "dexterity", "constitution", "intelligence", "wisdom", 
    "charisma", "savingThrows", "skills", "senses", "languages", "challenge", 
    "traits", "actions", "legendaryActions", "image"],
    created: function() {
        if(this.actions != undefined) {
            this.abilities = this.actions.split("<p>")
            this.abilities.forEach( ability => {
                this.listAbility.push(ability)
            })
        }

        if(this.traits != undefined) {
            this.allTraits = this.traits.split("<p>")
            this.allTraits.forEach( trait => {
                this.listTrait.push(trait)
            })
        }
        
    }
}
</script>

<style>
    .monster-instance {
        color: var(--text-secondary);
        font-size: .8rem ;
        margin-left: 14.6vw;
        border-radius: 4.5px;
        height: 75vh;
        width: 70vw;
        display: grid;
        grid-template-areas:
        "monster-stats-body"
        "monster-stats-footer";
        grid-template-rows: 9fr 1fr;
        background-color: var(--bg-primary);
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    }

    .monster-stats-attacks-spellcasting {
        text-align: center;
        overflow: auto;
        background-color: var(--bg-secondary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        margin-top: 1rem;
        margin-right: 1rem;
    }

    .monster-stats-equipment {
        text-align: center;
        overflow: auto;
        background-color: var(--bg-secondary);
        border-radius: 4.5px;
        width: 30vw;
        height: 30vh;
        margin-top: 1rem;
        margin-right: 1rem;
    }

    .ability-score {
        display: flex;
        justify-content: space-between;
    }

    .ability-text {
        font-size: 1rem;
        text-align: left;
        margin-left: 2vw;
        margin-right: 2vw;
    }

    .trait-text {
        font-size: 1rem;
        text-align: left;
        margin-left: 2vw;
        margin-right: 2vw;
    }


    .monster-instance img {
        border-top-left-radius: 4.5px;
    }

    .monster-instance-body {
        display: flex;
        justify-content: space-between;
    }

    .monster-instance-footer {
        background-color: rgb(209, 38, 29);
        height: 100%;
        grid-area: monster-stats-footer;
        position: relative;
        bottom: 0;
        border-bottom-left-radius: 4.5px;
        border-bottom-right-radius: 4.5px;

    }

    .monster-instance-left-column {
        display: flex;
        flex-direction: column;
    }
</style>