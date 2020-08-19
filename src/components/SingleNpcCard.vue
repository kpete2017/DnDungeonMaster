<template>
  <div class="card">
        <i id="player-exit-button" class="fa fa-times" @click="deleteNpc()"></i>
        <div class="card-image" @click="handleClick()">
            <img :src="playerImage" style='height: 100%; width: 100%; object-fit: cover; object-position:top; border-top-left-radius: 4.5px; border-top-right-radius: 4.5px;'/>
        </div>
        <div class="card-text" @click="handleClick()">
            <span class="date"></span>
            <h2>{{name}}</h2>
            <h4>{{meta}}</h4>
        </div>
        <div class="card-stats">
            <div class="stat">
                <div class="value"><input style="width: 2vw; text-align: center;" type="number" :value="firstHP" max="999" /></div>
                    <div class="type">HP</div>
            </div>
            <div class="stat">
                <div class="value">{{firstArmorClass}}</div>
                    <div class="type">AC</div>
            </div>
            <div class="stat">
                <div class="value">{{firstSpeed}}</div>
                    <div class="type">Speed</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SingleNpc",
    props: ["name", "meta", "armorClass", "hitPoints", "speed", "strength", "dexterity", "constitution", "intelligence", 
        "wisdom", "charisma", "savingThrows", "skills", "senses", 
        "languages", "Level", "traits", "actions", "legendaryActions", "image", "id"],
    created: function() {
        if(typeof this.image === 'string') {
            this.playerImage = this.image.toString()
        }
        this.playerImage = this.image

        let words = this.hitPoints.split(" ")
        this.firstHP = words[0]

        let speed = this.speed.split(" ")
        this.firstSpeed = speed[0] + speed[1]

        let armorClass = this.armorClass.split(" ")
        this.firstArmorClass = armorClass[0]
    },
    data() {
        return {
            viewAllStats: false,
            allStats: [],
            firstHP: "",
            firstSpeed: "",
            firstArmorClass: "",
        }
    },
    methods: {
        handleClick: function() {
            this.$emit("create-large-Npc-card", this.allStats)
        },
        deleteNpc: function() {
            this.$emit("delete-Npc-from-player-list", this.allStats)
        }
    },
    mounted() {
        this.allStats = [this.name, this.meta, this.armorClass, this.hitPoints, this.speed, this.strength, this.dexterity, this.constitution, this.intelligence, 
        this.wisdom, this.charisma, this.savingThrows, this.skills, this.senses, 
        this.languages, this.Level, this.traits, this.actions, this.legendaryActions, this.image, this.id]
    }
}
</script>

<style scoped>
    .card {
        display: grid;
        grid-template-columns: 16vw;
        grid-template-rows: 20vh 10vh 6vh;
        grid-template-areas: "image" "text" "stats";
        border-radius: 4.5px;
        background: var(--bg-secondary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        text-align: center;
        transition: 0.5s ease;
        cursor: pointer;
        height: 36vh;
        width: 16vw;
        margin:25px;
        margin-top: 1rem;
    }

    .card-text {
        grid-area: text;
        margin: 25px;
    }
    .card-text .date {
        color: rgb(209, 38, 29);
        font-size:13px;
    }
    .card-text h4 {
        color: grey;
        font-size:15px;
        font-weight: 300;
        margin-top: 0;
    }
    .card-text h2 {
        font-size:28px;
        margin: 0rem;
        margin-top: -3vh;        
    }

    .card-image {
        grid-area: image;
        border-top-left-radius: 4.5px;
        border-top-right-radius: 4.5px;
        background-size: cover;
        background-position: top;
    }

    .card-stats {
        grid-area: stats; 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-bottom-left-radius: 4.5px;
        border-bottom-right-radius: 4.5px;
        background: rgb(209, 38, 29);
    }

    .card-stats .stat {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        padding:10px;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
    }

     .value {
        margin-top: -.5vh;
    }

    .type {
        margin-top: 0;
        margin-bottom: .5vh ;
    }

</style>