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
        display: grid;
        color: var(--text-secondary);
        width: 25vw;
        grid-template-columns: 300px;
        grid-template-rows: 150px 150px 50px;
        grid-template-areas: "image" "text" "stats";
        row-gap: 1rem;
        border-radius: 4.5px;
        background: var(--bg-primary);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
        text-align: center;
        transition: 0.5s ease;
        cursor: pointer;
        margin:25px;
        margin-top: 1rem;;
    }
    
    .stat {
        line-height: 1.5;
    }

    .card-text {
        margin-top: .5rem;
        color: var(--text-secondary);
        grid-area: text;
        overflow: auto;
        text-align: left;
        width: 23vw;
        margin-right: 0;
    }
    .card-image .date {
        color: rgb(209, 38, 29);
        font-size:13px;
        width: 100%;
    }
    .card-text p {
        font-size:15px;
        font-weight: 300;
        margin: 0 auto;
    }
    .card-text h2 {
        margin-top:20px;
        font-size:28px;
    }

    .card-image {
        grid-area: image;
        border-top-left-radius: 4.5px;
        border-top-right-radius: 4.5px;
        width: 25vw;
        background-size: cover;
        background-position: top;
    }

    .card-stats {
        width: 25vw;
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