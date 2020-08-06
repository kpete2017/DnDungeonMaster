<template>
    <main>
        <div class="pc">
            <PlayerCard/>
        </div>
        <div class="npc">
            <NpcCard />
        </div>
        <div class="spells">
            <PinnedItemsAndSpells/>
        </div>
        <div class="items">
            <InformationTab/>
        </div>
    </main>
</template>


<script>

import PlayerCard from './PlayerCard.vue'
import PinnedItemsAndSpells from './PinnedItemsAndSpells.vue'
import NpcCard from './NpcCard.vue'
import InformationTab from './InformationTab.vue'


export default {
    name: 'PageBody',
    components: {
        PlayerCard,
        PinnedItemsAndSpells,
        NpcCard,
        InformationTab
    }
}
</script>

<style scoped>
    main {
        background-color: var(--bg-secondary);
        color: var(--text-secondary);
        text-align: center;
        min-height: 80vh;
        width: 90%;
        margin-left: 7rem;
        margin-right: 8rem;
        padding-top: 7rem;
        padding-bottom: 2rem;
        display: grid;
        grid-template-areas: 
            "left-sidebar PC right-sidebar"
            "left-sidebar NPC right-sidebar";
        grid-template-columns: 15rem 70rem 15rem;
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