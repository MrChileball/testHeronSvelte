<script>
    export let min = 0;
    export let max = 0;
  
    // Generate a random number when the component is created
    let a = generateRandomNumber(min, max);
    let b = generateRandomNumber(min, max);
    let c = generateRandomNumber(min, max);
  
    // Function to generate a random number within the specified range
    export function generateRandomNumber(min, max) {
        //Math.floor() permite redondear números hacia abajo
      //return Math.floor(Math.random() * (maximo - minimo + 1)) + min;
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    //https://es.stackoverflow.com/questions/100833/como-obtengo-un-numero-con-1-decimal-sin-redondear-en-javascript
    let userPerim;


    $: perim = a + b + c;
    $: semiPerim = (a+b+c)/2;
    $: area = Math.sqrt(semiPerim*(semiPerim-a)*(semiPerim-b)*(semiPerim-c));
    import RandomNumber from "./randomNumber.svelte";
</script>

<div>
    <div>
        <h2>Generador de ejercicios aleatorios para resolución del usuario.</h2>
        

        {#if a+b > c && b+c > a && a+c > b }
            <p>Resultado: {perim}</p>
            <p>Resultado: {semiPerim}</p>
            <p>Resultado: {area}</p>
            
        {:else}
            <h3>Error!</h3><p> Para que un triangulo exista la suma de dos lados debe ser mayor al tercero</p>
        {/if}
        
    </div>
    <div>
        <input type="number" placeholder="Variable 1" bind:value={a}>
        <input type="number" placeholder="Variable 2" bind:value={b}>
        <input type="number" placeholder="Variable 3" bind:value={c}>

    </div>
    <div>
        <input type="number" placeholder="Variable 3" bind:value={userPerim}>
    </div>
    {#if userPerim == area}
    iguales
    {:else}
    distintos
    {/if}
    <div>

        <button on:click={() => (
            //Vuelve a asignar un largo aleatorio a cada lado del triangulo
            a = generateRandomNumber(min, max),
            b = generateRandomNumber(min, max),
            c = generateRandomNumber(min, max)
        )}>
            Generate New Random Number
          </button>
    </div>

</div>



<style>


</style>