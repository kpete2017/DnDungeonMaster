<template>
    <div class="spell-instance">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    name: "Spell",
    props: ["name"],
}
</script>

<style>
    .spell-instance {
        color: var(--text-secondary);
        margin-left: 8rem;
        margin-top: 2rem;
        height: 40vh;
        width: 90vw;
        background-color: var(--bg-primary);
        display: flex;
        justify-content: space-between;
    }
</style>