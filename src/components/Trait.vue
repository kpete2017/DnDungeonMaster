<template>
    <p>{{filteredTrait}}</p>
</template>

<script>
export default {
    name: "Trait",
    data() {
        return {
            filteredTrait: ""
        }
    },
    props: ["trait"],
    created: function() {
        var regex = /(<([^>]+)>)/ig
        let filter = this.trait
        this.filteredTrait = filter.replace(regex, "")
    }
}
</script>

<style >

</style>