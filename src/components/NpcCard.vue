<template>
      <div class="add-npc stay-square">
        <h4>Add Non Player Character</h4>
        <svg id="plus-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
    </div>
</template>

<script>
export default {
    name: "NpcCard"
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

</style>