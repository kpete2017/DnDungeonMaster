<template>
    <p>{{filteredAbility}}</p>
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