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
            <div class="monster-page-custom-instance">
                <h1>Add Custom Spell</h1>
                <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
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