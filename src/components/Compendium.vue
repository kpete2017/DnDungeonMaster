<template>
    <div class="spell-page">
        <div class="spell-page-background">
            <div class="monster-search-note">
                <form>
                    <label style="color:var(--text-secondary)">Search: </label>
                    <input v-model="searchByName" class="note-search" type="text" placeholder="Search Spells" />
                </form>
            </div>
            <div class="spells-list">
                <div v-for="spell in filteredList" :key="spell.name">
                    <Spell
                        v-bind:name="spell.name"
                        v-bind:castingTime="spell.casting_time"
                        v-bind:classes="spell.classes"
                        v-bind:components="spell.components"
                        v-bind:description="spell.description"
                        v-bind:duration="spell.duration"
                        v-bind:level="spell.level"
                        v-bind:range="spell.range"
                        v-bind:ritual="spell.ritual"
                        v-bind:school="spell.school"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpellJson from '../Spells.json'
import Spell from './Spell.vue'
export default {
    name: "notes",
    data() {
        return {
            spells: "",
            searchByName: "",
            // searchByClass: "",
        }
    },
    created: function () {
        let spellList = SpellJson
        this.spells = spellList
    },
    components: {
        Spell
    },
    computed: {
        filteredList() {
            if(this.searchByName === "") {
                return this.spells
            } else if(this.searchByName) {
                return this.spells.filter(spell => {
                    return spell.name.toLowerCase().includes(this.searchByName.toLowerCase())
                }) 
            } 
            return null
        }
    }
}
</script>

<style>
    .spell-page {
        position: absolute;
        top: 0;
        left: 4vw;
        width: 96%;
        min-height: 100vh;
        height: auto;
        background-color: var(--bg-secondary);
        margin-top: 4rem;
    }
    .spell-page-background {
        margin-top: 20vh;
    }

    #class {
        width: 10rem;
    }

    .spells-list {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 2rem;
    }

</style>