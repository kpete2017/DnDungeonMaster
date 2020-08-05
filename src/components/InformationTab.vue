<template>
  <div class="information-tab">
    <div class="top-third">
      <h2>Region information</h2>
      <div class="region-info"> 
        <p>Plane:</p>
        <p>Continent:</p>
        <p>Kingdom:</p>
        <p>City:</p>
        <p>Climate: </p>
      </div>
      <button>Edit</button>
    </div>
    <div class="middle-third">
      <h2>Mode</h2>
      <div class="mode-buttons"> 
        <button id="button1">Encounter</button>
        <button id="button2">Exploration</button>
      </div>
    </div>
    <div class="bottom-third"> 
      <h2>Roll</h2>
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
    height: 9rem;
    margin: 1rem;
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
    height: 5rem;
    width: 10rem;
    grid-area: row1;
  }

  #button2 {
    width: 10rem;
    height: 5rem;
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
  }

  .mode-buttons button {
    color: var(--text-secondary);
    font-size: 1rem;
    width: 5rem;
    background-color: var(--bg-secondary);
    cursor: pointer;
  }
  
</style>