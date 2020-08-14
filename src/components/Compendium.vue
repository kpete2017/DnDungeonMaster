<template>
    <div class="spell-page">
        <div class="spell-page-background">
            <div class="monster-search-note">
                <form @change.prevent="handleOnChange()">
                    <label style="color:var(--text-secondary)">Search: </label>
                    <input v-model="filterTitle" class="note-search" type="text" placeholder="Search Spells" />
                </form>
                <form @change.prevent="handleOnChange()">
                    <label style="color:var(--text-secondary)">Class </label>
                    <input id="class" type="text" placeholder="Search By Class"/>
                </form>
            </div>
            <div v-for="spell in spells" :key="spell.name">
                <Spell
                    v-bind:name="spell.name"
                />
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
            spells: ""
        }
    },
    created: function () {
        let spellList = SpellJson
        this.spells = spellList
    },
    components: {
        Spell
    }
}
</script>

<style>
    .spell-page {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
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

</style>