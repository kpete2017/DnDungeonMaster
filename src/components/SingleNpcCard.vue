<template>
  <div class="card">
        <i id="player-exit-button" class="fa fa-times" @click="deleteNpc()"></i>
        <div class="card-image" @click="handleClick()">
            <img :src="playerImage" style='height: 100%; width: 100%; object-fit: cover; object-position:top; border-top-left-radius: 9px; border-top-right-radius: 9px;'/>
        </div>
        <div class="card-text" @click="handleClick()">
            <span class="date"></span>
            <h2>{{name}}</h2>
            <h4>{{meta}}</h4>
        </div>
        <div class="card-stats">
            <div class="stat">
                <div class="value"><input type="number" :value="hitPoints" max="999" style="width:30px"/></div>
                    <div class="type">HP</div>
            </div>
            <div class="stat">
                <div class="value">{{armorClass}}</div>
                    <div class="type">AC</div>
            </div>
            <div class="stat">
                <div class="value">{{speed}}</div>
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
        "languages", "challenge", "traits", "actions", "legendaryActions", "image"],
    created: function() {
        if(typeof this.image === 'string') {
            this.playerImage = this.image.toString()
        }
        this.playerImage = this.image
    },
    data() {
        return {
            viewAllStats: false,
            allStats: [],
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
        this.languages, this.challenge, this.traits, this.actions, this.legendaryActions, this.image]
    }
}
</script>

<style>
    .card {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 150px 150px 50px;
        grid-template-areas: "image" "text" "stats";
        border-radius: 9px;
        background: var(--bg-secondary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        text-align: center;
        transition: 0.5s ease;
        cursor: pointer;
        margin:25px;
    }

    .card-text {
        grid-area: text;
        margin: 25px;
    }
    .card-text .date {
        color: rgb(209, 38, 29);
        font-size:13px;
    }
    .card-text p {
        color: grey;
        font-size:15px;
        font-weight: 300;
    }
    .card-text h2 {
        margin-top:20px;
        font-size:28px;
    }

    .card-image {
        grid-area: image;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-size: cover;
        background-position: top;
    }

    .card-stats {
        grid-area: stats; 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
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
</style>