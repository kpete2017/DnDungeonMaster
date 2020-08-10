<template>
    <div class="background">
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
    </div>
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

    .background {
        width: 100%;
        height: 100%;
        background-color: var(--bg-secondary);
    }
    
    main {
        color: var(--text-secondary);
        text-align: center;
        width: 90%;
        height: 85vh;
        padding-left: 8rem;
        padding-right: 1rem;
        padding-top: 7rem;
        padding-bottom: 2rem;
        display: grid;
        grid-template-areas: 
            "left-sidebar PC right-sidebar"
            "left-sidebar NPC right-sidebar";
        grid-template-columns: 1fr 2.3fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }

    .pc {
        max-width: 50vw;
        height: 99%;
        background-color: var(--bg-primary);
        grid-area: PC;
        border: solid 1px var(--text-secondary);
    }

    .npc {
        max-width: 50vw;
        height: 99%;
        background-color: var(--bg-primary);
        grid-area: NPC;
        border: solid 1px var(--text-secondary);
    }

    .spells {
        max-width: 50vw;
        height: 100%;
        background-color: var(--bg-primary);
        grid-area: left-sidebar;
        border: solid 1px var(--text-secondary);
    }

    .items {
        max-width: 50vw;
        height: 100%;
        background-color: var(--bg-primary);
        grid-area: right-sidebar;
        border: solid 1px var(--text-secondary);
    }

</style>