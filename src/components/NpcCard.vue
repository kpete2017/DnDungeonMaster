<template>
    <div class="npc-list">   
        <div class="add-npc stay-square" @click="toggleAddNpc(true)">
            <h4>Add Non Player Character</h4>
            <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>
        <div class="new-npc" v-if="newNpc" v-drag>
            <div class="menu-bar">
                <i id="exit-button" class="fa fa-times" @click="toggleAddNpc(false)"></i>
            </div>
            <form>
                <h2>Create New NPC</h2>
                <br/>
            </form>
            <div class="new-npc-footer">
                <button id="close-button" @click="toggleAddNpc(false)">close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NpcCard",
    data() {
        return {
            newNpc: false,
        }
    },
    methods: {
        toggleAddNpc: function(value) {
            this.newNpc = value
        }
    }
}
</script>

<style scoped>
    #plus-icon {
        height: 25px;
        width: 25px;
    }
    .add-npc {
        width: 16.5vw;
        align-content: center;
        cursor: pointer;
        height: 32vh;
        background-color: var(--bg-secondary);
        margin: .5rem;
        border: solid 1px var(--bg-secondary);
        padding: 1rem;
        transition: 400ms;
    }

    .add-npc:hover {
        border: solid 1px var(--text-primary);
        background-color: var(--bg-hover);
    }

    .stay-square {
        width: 15rem;
    }

    .new-npc {
        background-image: url("../assets/npc-background.jpg");
        background-size: cover;
        line-height: .7;
        position: fixed;
        top: 4rem;
        left: 15rem;
        height: 70%;
        width: 70vw;
        z-index: 4;
        background-color: var(--bg-secondary);
        border: solid 1px var(--text-primary);
    }

    #close-button {
        position: absolute;
        color: var(--text-secondary);
        bottom: 3rem;
        width: 5rem;
        height: 2rem;
        right: 3rem;
        font-size: 1rem;
        background-color: var(--bg-primary);
        cursor: pointer;
    }

    #close-button:hover {
        color: rgb(209, 38, 29);
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

</style>