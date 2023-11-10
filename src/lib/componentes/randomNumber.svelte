<!-- RandomNumber.svelte -->
<script>

    // Define min and max values
    export let min = 0;
    export let max = 0;
  
    // Generate a random number when the component is created
    export let randomNumber = generateRandomNumber(min, max);
  
    // Function to generate a random number within the specified range
    export function generateRandomNumber(min, max) {
        //Math.floor() permite redondear números hacia abajo
      //return Math.floor(Math.random() * (maximo - minimo + 1)) + min;
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
  </script>


  <div>
    <!-- Display the random number -->
    <p>Random Number: {randomNumber}</p>
  
    <!-- Button to generate a new random number -->
    <button on:click={() => (randomNumber = generateRandomNumber(min, max))}> 
      Generate New Random Number
    </button>
  </div>