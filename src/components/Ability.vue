<template>
    <h4 style="font-size: 1.2rem; font-weight: 500;">{{filteredAbility}}</h4>
</template>

<script>
export default {
    name: "ability",
    data() {
        return {
            filteredAbility: ""
        }
    },
    props: ["ability"],
    created: function() {
        var regex = /(<([^>]+)>)/ig
        let filter = this.ability
        this.filteredAbility = filter.replace(regex, "")
    }
}
</script>

<style >

</style>