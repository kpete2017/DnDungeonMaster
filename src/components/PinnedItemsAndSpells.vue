<template>
    <div class="item-spell-area">
        <div class="search-section"> 
            <input id="search-bar" type="search" placeholder="Search items or spells"/>
        </div>
        <div class="pin-section"> 
            <p>Pinned Items will go here</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PinnedItemsAndSpells"
}
</script>

<style scoped>

    .search-section {
        padding: 1rem;
        background-color: var(--bg-secondary);
        height: 1rem;
    }

</style>