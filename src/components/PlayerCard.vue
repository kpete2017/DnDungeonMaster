<template>
    <div class="player-card">
        <div class="add-player" @click="toggleAddPlayer(true)">
            <h4>Add Player Character</h4>
            <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>

        <div class="new-player" v-if="newPlayer">
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddPlayer(false)"></i>
            </div>
            <h4 id="close-button" @click="toggleAddPlayer(false)">close</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayerCard',
    data() {
        return {
            newPlayer: false
        }
    },
    methods: {
        toggleAddPlayer: function(value) {
            this.newPlayer = value
        }
    }
}
</script>

<style scoped>

    #plus-icon {
        height: 25px;
        width: 25px;
    }
    .add-player {
        align-content: center;
        cursor: pointer;
        background-color: var(--bg-secondary);
        border-radius: 25px;
        margin: 1rem;
        padding: 1rem;
        height: 20rem;
        width: 15rem;
        transition: 400ms;
    }
    .add-player:hover {
        border: solid 1px var(--text-primary);
        background-color: var(--bg-hover);
    }

    .new-player {
        position: fixed;

        top: 9rem;
        right: 15rem;
        height: 47rem;
        width: 90rem;
        background-color: var(--bg-secondary);
        border: solid 1px var(--text-primary);
    }

    .menu-bar {
        width: 100%;
        height: 2rem;
        border: solid 1px var(--text-primary);
    }

    #exit-button {
        position: absolute;
        right: 1rem;
        top: .5rem;
        transition: 400ms;
    }

    #exit-button:hover {
        color: rgb(209, 38, 29);
        transform: rotate(-180deg);
        transition: 400ms;
        cursor: pointer;
    }

    #close-button {
        position: absolute;
        bottom: 1rem;
        right: 3rem;
        font-size: 1.5rem;
        padding: .5rem;
        background-color: var(--bg-primary);
        cursor: pointer;
    }

    #close-button:hover {
        color: rgb(209, 38, 29);
    }

</style>