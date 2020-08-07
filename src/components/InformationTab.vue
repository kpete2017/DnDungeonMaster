<template>
  <div class="information-tab">
    <div class="top-third">
      <h2>Region information</h2>
      <div class="region-info">
        <div class="region-div">
          <p>Plane:</p>
          <p>Material</p>
        </div> 
        <div class="region-div">
          <p>Continent:</p>
          <p>Toril</p>
        </div> 
        <div class="region-div">
          <p>Kingdom: </p>
          <p>Fearun</p>
        </div> 
        <div class="region-div">
          <p>City: </p>
          <p>Waterdeep </p>
        </div> 
        <div class="region-div">
          <p>Climate: </p>
          <p>Temperate </p>
        </div> 
      </div>
      <button id="edit-region-button">Edit</button>
    </div>
    <div class="middle-third">
      <h2>Mode</h2>
      <div class="mode-buttons"> 
        <button id="button1">Encounter</button>
        <button id="button2">Exploration</button>
      </div>
    </div>
    <div class="bottom-third"> 
      <svg id="roll-pic" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-d20" class="svg-inline--fa fa-dice-d20 fa-w-15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43L82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9l-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97l-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z"></path></svg>
      <h2 id="roll-text">Roll</h2>
      <form>
        <select>
          <option value="D4">D4</option>
          <option value="D6">D6</option>
          <option value="D8">D8</option>
          <option value="D10">D10</option>
          <option value="D00">D00</option>
          <option value="D20">D20</option>
        </select>
        <input type="number" placeholder="0"/>
        <button>Roll Dice</button>
      </form>
      <div class="roll-result"> 

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "InformationTab"
}
</script>

<style>

  .roll-result {
    background-color: var(--bg-secondary);
    border: solid 1px var(--text-secondary);
    margin: 1rem;
  }


  #roll-pic {
    margin-top: .5rem;
    height: 45px;
    width: 45px;
  }

  .information-tab {
    height: 100%;
    display: grid;
    grid-template-areas: 
    "top"
    "middle"
    "bottom";
    grid-template-rows: 1fr 1fr 1fr;
  }

  select {
    height: 1.3rem;
  }

  .top-third {
    grid-area: top;
    border: solid 1px var(--text-secondary);
    text-align: left;
    padding-left: 1rem;
  }

  .middle-third {
    grid-area: middle;
    border: solid 1px var(--text-secondary);
  }

  .bottom-third {
    grid-area: bottom;
    border: solid 1px var(--text-secondary);
  }

  .bottom-third input {
    width: 2rem;
  }

  .mode-buttons {
    display: grid;
    grid-template-areas: 
    "row1"
    "row2";
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

  #button1 {
    height: 5vh;
    width: 10rem;
    grid-area: row1;
  }

  #button2 {
    width: 10rem;
    height: 5vh;
    grid-area: row2;
  }

  #button1:hover {
    color: rgb(209, 38, 29);
  }

  #button2:hover {
    color: rgb(209, 38, 29);
  }

  .region-info {
    margin-left: 1rem;
    line-height: .2;
  }

  .mode-buttons button {
    color: var(--text-secondary);
    font-size: lrem;
    width: 4rem;
    background-color: var(--bg-secondary);
    cursor: pointer;
  }

  #roll-text {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  .region-div {
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
    margin-top: -1rem;
  }

  #edit-region-button {
    margin: .5rem;
  }
  
</style>