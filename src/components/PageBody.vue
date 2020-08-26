<template>
    <div class="background">
        <main>
            <div class="pc">
                <PlayerCard :npcs="data.npcs" :players="data.players" :allies="data.allies" />
            </div>
            <div class="npc">
                <NpcCard :npcs="data.npcs" :enemies="data.enemeies" />
            </div>
            <div class="spells">
                <PinnedItemsAndSpells :notes="data.notes" />
            </div>
            <div class="items">
                <InformationTab :region="data.regions[0]" :rotation="data.rotations"/>
            </div>
        </main>
    </div>
</template>


<script>

import PlayerCard from './player_section_components/PlayerCard'
import PinnedItemsAndSpells from './PinnedItemsAndSpells.vue'
import NpcCard from './npc_section_components/NpcCard.vue'
import InformationTab from './information_tab_components/InformationTab.vue'


export default {
    name: 'PageBody',
    components: {
        PlayerCard,
        PinnedItemsAndSpells,
        NpcCard,
        InformationTab
    },
    props: {
        data: {
            type: Object
        }
    },
}
</script>

<style scoped>

    .background {
        width: auto;
        height: auto;
        background-color: var(--bg-secondary);
    }
    
    main {
        color: var(--text-secondary);
        text-align: center;
        width: auto;
        height: 88.8vh;
        padding-left: 8rem;
        padding-right: 1rem;
        padding-top: 5.9rem;
        padding-bottom: .9rem;
        display: grid;
        grid-template-areas: 
            "left-sidebar PC right-sidebar"
            "left-sidebar NPC right-sidebar";
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 42vh 42vh;
        grid-column-gap: 1vw;
        grid-row-gap: 1vh;
    }

    .pc {
        box-shadow: 5px 5px 15px rgba(0,0,0,0.8);
        border-radius: 4.5px;
        max-width: 60vw;
        height: 42vh;
        background-color: var(--bg-primary);
        grid-area: PC;
    }

    .npc {
        box-shadow: 5px 5px 15px rgba(0,0,0,0.8);
        border-radius: 4.5px;
        max-width: 60vw;
        height: 42vh;
        background-color: var(--bg-primary);
        grid-area: NPC;
    }

    .spells {
        box-shadow: 5px 5px 15px rgba(0,0,0,0.8);
        border-radius: 4.5px;
        max-width: 50vw;
        height: 85.5vh;
        background-color: var(--bg-primary);
        grid-area: left-sidebar;
    }

    .items {
        box-shadow: 5px 5px 15px rgba(0,0,0,0.8);
        border-radius: 4.5px;
        max-width: 50vw;
        height: 85.5vh;
        background-color: var(--bg-primary);
        grid-area: right-sidebar;
    }

</style>