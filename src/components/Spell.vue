<template>
    <div class="card">
        <div class="card-image" @click="handleClick()">
            <h1>{{name}}</h1>
            <span class="date">Range: {{range}}</span>
            <br/>
            <span class="date">Level: {{level}}</span>
            <br/>
            <span class="date">Casting Time: {{castingTime}}</span>
            <br/>
            <span class="date">Duration: {{duration}}</span>
        </div>
        <div class="card-text" @click="handleClick()">
            <p>{{description}}</p>
        </div>
        <div class="card-stats">
            <div v-for="classType in classes" :key="classType">
                <p>{{classType}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Spell",
    props: ["name", "castingTime", "classes", "components", 
    "description", "duration", "level", "range", "ritual", "school"],
}
</script>

<style scoped>

    .card {
        color: var(--text-secondary);
        display: grid;
        grid-template-columns: 25vw;
        grid-template-rows: 20vh 10vh 6vh;
        grid-template-areas: "image" "text" "stats";
        border-radius: 4.5px;
        background: var(--bg-primary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        text-align: center;
        transition: 0.5s ease;
        cursor: pointer;
        height: 36vh;
        width: 25vw;
        margin:25px;
        margin-top: 1rem;
    }
    
    .stat {
        line-height: 1.5;
    }

    .card-text {
        margin-top: .5rem;
        color: var(--text-secondary);
        grid-area: text;
        text-align: left;
        margin-right: 0;
        overflow: auto;
    }
    .card-image .date {
        color: rgb(209, 38, 29);
        font-size:13px;
    }
    .card-text p {
        font-size:15px;
        font-weight: 300;
        margin: 0 auto;
        margin-right: 1vw;
        margin-left: 1vw;
    }
    .card-text h1 {

        font-size:28px;
    }


    .card-image {
        grid-area: image;
        border-top-left-radius: 4.5px;
        border-top-right-radius: 4.5px;
        margin-bottom: 1vh;
        background-size: cover;
        background-position: top;
        overflow: auto;

    }

    .card-stats {
        grid-area: stats; 
        display: flex;
        justify-content: space-evenly;
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

    #player-exit-button {
        grid-area: image;
        color: rgb(209, 38, 29);
        position: relative;
        height: 2vh;
        width: 2vh;
        top: 1vh;
        right: 2vh;
        cursor: pointer;
    }
</style>