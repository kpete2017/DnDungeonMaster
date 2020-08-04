<template>
    <main>
        <div class="pc">
            <PlayerCard/>
        </div>
        <div class="npc">
            <p>Current state of the story, if in battle this area will display battle information including monsters, when exploring this will include area information</p>
        </div>
        <div class="spells">
            <p>Area that will allow the dungeon master to search any item or spell in the game</p>
        </div>
        <div class="items">
            <p>Battle/Exploration information, Will mainly contain the current initiative and turn order.</p>
        </div>
    </main>
</template>


<script>

import PlayerCard from './PlayerCard.vue'


export default {
    name: 'PageBody',
    components: {
        PlayerCard
    }
}
</script>

<style scoped>
    main {
        background-color: var(--bg-secondary);
        color: var(--text-secondary);
        text-align: center;
        min-height: 85vh;
        width: 90%;
        margin-left: 7rem;
        margin-right: 8rem;
        padding-top: 7rem;
        padding-bottom: 2rem;
        display: grid;
        grid-template-areas: 
            "left-sidebar PC right-sidebar"
            "left-sidebar NPC right-sidebar";
        grid-template-columns: 1fr 5fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 2rem;
        align-items: center;
        justify-items: center;
    }

    .pc {
        width: 100%;
        height: 95%;
        margin-bottom: 1rem;
        background-color: var(--bg-primary);
        grid-area: PC;
        border: solid 1px var(--text-secondary);
    }

    .npc {
        width: 100%;
        height: 95%;
        margin-top: 1rem;
        background-color: var(--bg-primary);
        grid-area: NPC;
        border: solid 1px var(--text-secondary);
    }

    .spells {
        width: 100%;
        height: 100%;
        background-color: var(--bg-primary);
        grid-area: left-sidebar;
        border: solid 1px var(--text-secondary);
    }

    .items {
        width: 100%;
        height: 100%;
        background-color: var(--bg-primary);
        grid-area: right-sidebar;
        border: solid 1px var(--text-secondary);
    }

</style>