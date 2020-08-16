<template>
    <div class="monster-page">
        <div class="monster-page-background">
            <div class="monster-search-note">
                <form>
                    <label style="color:var(--text-secondary)">Search: </label>
                    <input v-model="search" style="width:20vw" class="note-search" type="text" placeholder="Search Monsters" />
                </form>
                <form>
                    <label style="color:var(--text-secondary)">Level Rating: </label>
                    <input v-model="searchLevelRating" min="1" id="cr" type="number" />
                </form>
            </div>
            <div v-for="monster in filteredList" :key="monster.name">
                <Monster
                    v-bind:name="monster.name"
                    v-bind:meta="monster.meta"
                    v-bind:armorClass="monster.armor_class"
                    v-bind:hitPoints="monster.hit_points"
                    v-bind:speed="monster.Speed"
                    v-bind:strength="monster.STR_mod"
                    v-bind:dexterity="monster.DEX_mod"
                    v-bind:constitution="monster.CON_mod"
                    v-bind:intelligence="monster.INT_mod"
                    v-bind:wisdom="monster.WIS_mod"
                    v-bind:charisma="monster.CHA_mod"
                    v-bind:savingThrows="monster.Saving_Throws"
                    v-bind:skills="monster.Skills"
                    v-bind:senses="monster.Senses"
                    v-bind:languages="monster.Languages"
                    v-bind:Level="monster.level"
                    v-bind:traits="monster.Traits"
                    v-bind:actions="monster.Actions"
                    v-bind:legendaryActions="monster.Legendary_Actions"
                    v-bind:image="monster.image_url"
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
            monsters: [],
            filterTitle: "",
            search: '',
            searchLevelRating: '',
            filteredLevelRating: ''
        }
    },
    created: function () {
        let monsterList = MonsterJson
        this.monsters = monsterList
        this.filteredMonsters = monsterList
    },
    components: {
        Monster
    },
    computed: {
        filteredList() {
            if(this.search === "" && this.searchLevelRating === "") {
                return this.monsters
            } else if(this.search) {
                return this.monsters.filter(monster => {
                    return monster.name.toLowerCase().includes(this.search.toLowerCase())
                }) 
            } else if(this.searchLevelRating) {
                return this.monsters.filter(monster => {
                    return monster.level.includes(this.searchLevelRating)
                })
            }
            return null
        }
    }
}
</script>

<style>
    .monster-page-custom-instance{
        cursor: pointer;
        border-radius: 4.5px;
        color: var(--text-secondary);
        text-align: center;
        margin: 0 auto;
        margin-top: 5vh;
        background-color: var(--bg-primary);
        border: solid 1px var(--bg-primary);
        height: 20vh;
        width: 70vw;
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
        margin: 0 auto;
        width: 45rem;
        padding: 2rem;
        margin-top: -15vh;
        background-color: var(--bg-primary);
    }

</style>