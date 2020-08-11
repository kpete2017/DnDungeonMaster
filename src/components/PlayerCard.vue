<template>
    <div class="player-card">
        <div class="player-list">
            <SinglePlayerCard />
            <SinglePlayerCard />
            <SinglePlayerCard />
            <SinglePlayerCard />
            <div class="last-card" @click="toggleAddPlayer(true)">
                <h4>Add Player Character</h4>
            </div>
        </div>
        <div class="new-player" v-if="newPlayer" v-drag>
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddPlayer(false)"></i>
            </div>
            <form>
                <h2>Add Player</h2>
                <br/>
            </form>
            <div class="new-npc-footer">
                <button id="close-button" @click="toggleAddPlayer(false)">close</button>
            </div>
        </div>
    </div>
</template>

<script>

import SinglePlayerCard from './SinglePlayerCard.vue'

export default {
    name: 'PlayerCard',
    components: {
        SinglePlayerCard
    },
    data() {
        return {
            newPlayer: false,
            next: false
        }
    },
    methods: {
        toggleAddPlayer: function(value) {
            this.newPlayer = value
        },
        toggleNext: function(value) {
            this.next = value
        }
    }
}
</script>

<style scoped>

    .last-card {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 150px 150px 50px;
        grid-template-areas: "image" "text" "stats";
        border-radius: 18px;
        background: var(--bg-secondary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        font-family: roboto;
        text-align: center;
        transition: 0.5s ease;
        cursor: pointer;
        margin:30px;
    }   

    .player-card {
        font-size: .9rem ;
    }

    .main-row {
        width: 100%;
        display: flex;
        line-height: .7;
        justify-content: space-between;
    }

    .player-list {
        display: flex;
        width: 100%;
        overflow: auto;
        margin-right: 1rem;
    }

    .new-player {
        border-radius: 18px;
        line-height: .7;
        position: fixed;
        top: 4rem;
        left: 15rem;
        height: 70%;
        width: 70vw;
        z-index: 4;
        background-color: var(--bg-secondary);
    }


</style>