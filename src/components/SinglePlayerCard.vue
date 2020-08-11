<template>
  <div class="card" @click="handleClick()">
        <div class="card-image">
            <img src="../assets/player4.jpg" style='height: 100%; width: 100%; object-fit: cover; object-position:top; border-top-left-radius: 18px; border-top-right-radius: 18px;'/>
        </div>
        <div class="card-text">
            <span class="date">Elf Rogue Level 2</span>
            <h2>Player 1</h2>
        </div>
        <div class="card-stats">
            <div class="stat">
                <div class="value"><input type="number" value="30" max="999" style="width:30px"/></div>
                    <div class="type">HP</div>
            </div>
            <div class="stat">
                <div class="value">14</div>
                    <div class="type">AC</div>
            </div>
            <div class="stat">
                <div class="value">30ft</div>
                    <div class="type">Speed</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SinglePlayerCard",
    props: ["playerImage"],
    computed: {
        cssProps() {
            return {
                '--bg-image': this.playerImage
            }
        }
    },
    methods: {
        handleClick: function() {
            console.log("clicked")
        }
    }
}
</script>

<style>
    .card {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 150px 150px 50px;
        grid-template-areas: "image" "text" "stats";
        border-radius: 18px;
        background: var(--bg-secondary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        font-family: roboto;
        text-align: center;
        transition: 0.5s ease;
        cursor: pointer;
        margin:30px;
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
        margin-top:0px;
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
        box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
    }
</style>