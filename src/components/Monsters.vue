<template>
    <div class="monster-page">
        <div class="monster-page-background">
            <div class="monster-search-note">
                <form @change.prevent="handleOnChange()">
                    <label style="color:var(--text-secondary)">Search: </label>
                    <input v-model="filterTitle" class="note-search" type="text" placeholder="Search Monsters" />
                </form>
                <form @change.prevent="handleOnChange()">
                    <label style="color:var(--text-secondary)">Challenge Rating: </label>
                    <input id="cr" type="number" />
                </form>
            </div>
            <div class="monster-page-custom-instance">
                <h1>Add Custom Monster</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
            </div>
            <div v-for="monster in monsters" :key="monster.name">
                <Monster
                    v-bind:name="monster.name"
                    v-bind:meta="monster.meta"
                    v-bind:armorClass="monster.Armor_Class"
                    v-bind:hitPoints="monster.Hit_Points"
                    v-bind:speed="monster.Speed"
                    v-bind:strength="monster.STR"
                    v-bind:dexterity="monster.DEX"
                    v-bind:constitution="monster.CON"
                    v-bind:intelligence="monster.INT"
                    v-bind:wisdom="monster.WIS"
                    v-bind:charisma="monster.CHA"
                    v-bind:savingThrows="monster.Saving_Throws"
                    v-bind:skills="monster.Skills"
                    v-bind:senses="monster.Senses"
                    v-bind:languages="monster.Languages"
                    v-bind:challenge="monster.Challenge"
                    v-bind:traits="monster.Traits"
                    v-bind:actions="monster.Actions"
                    v-bind:legendaryActions="monster.Legendary_Actions"
                    v-bind:image="monster.img_url"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MonsterJson from '../Monsters.json'
import Monster from './Monster.vue'
export default {
    name: "notes",
    data() {
        return {
            monsters: ""
        }
    },
    created: function () {
        let monsterList = MonsterJson
        this.monsters = monsterList
    },
    components: {
        Monster
    }
}
</script>

<style>
    .monster-page-custom-instance{
        cursor: pointer;
        color: var(--text-secondary);
        text-align: center;
        margin-left: 8rem;
        margin-top: 2rem;
        background-color: var(--bg-primary);
        border: solid 1px var(--bg-primary);
        height: 20vh;
        width: 90vw;
    }

    .monster-page-custom-instance:hover {
        border: solid 1px var(--text-secondary);
    }

    .monster-page {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100vw;
        width: 100%;
        min-height: 100vh;
        height: auto;
        background-color: var(--bg-secondary);
        margin-top: 4rem;
    }

    .monster-page-background {
        margin-top: 20vh;
    }

    #cr {
        width: 3rem;
    }

    .monster-search-note {
        display: flex;
        justify-content: space-evenly;
        position: absolute;
        top: 3rem;
        left: 7vw;
        width: 45rem;
        padding: 2rem;
        background-color: var(--bg-primary);
    }

</style>