<template>
    <h4 style="font-size: 1.2rem; font-weight: 500;">{{filteredTrait}}</h4>
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
        if(this.trait != undefined) {
             var regex = /(<([^>]+)>)/ig
            let filter = this.trait
            this.filteredTrait = filter.replace(regex, "")
        }
    }
}
</script>

<style >

</style>