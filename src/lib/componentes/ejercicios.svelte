<script>
    export let min = 0;
    export let max = 0;


    $: a = 0;
    $: b = 0;
    $: c = 0;

    // Generate a random number when the component is created

   
    
  
    // Function to generate a random number within the specified range
    export function generateRandomNumber(min, max, line1, line2, line3) {
        //Math.floor() permite redondear números hacia abajo
      //return Math.floor(Math.random() * (maximo - minimo + 1)) + min;
      min = Math.ceil(min);
      max = Math.floor(max);

      line1 = Math.floor(Math.random() * (max - min) + min);
      line2 = Math.floor(Math.random() * (max - min) + min);
      line3 = Math.floor(Math.random() * (max - min) + min);
      


      
      a = line1;
      b = line2;
      c = line3;
      console.log(a);
      console.log(b);
      console.log(c);

       // The maximum is exclusive and the minimum is inclusive
       return a;
 
    }
    generateRandomNumber(min, max, a, b, c);

    //https://es.stackoverflow.com/questions/100833/como-obtengo-un-numero-con-1-decimal-sin-redondear-en-javascript
    let userPerim;
    let userArea;


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
        <input type="number" placeholder="Ingreso de perimetro" bind:value={userPerim}>
        <input type="number" placeholder="Ingreso de area" bind:value={userArea}>
    </div>
    {#if userPerim == area}
    iguales
    {:else}
    distintos
    {/if}
    <div>

        <button on:click={() => (
            //Vuelve a asignar un largo aleatorio a cada lado del triangulo
            generateRandomNumber(min, max, a, b, c)
        )}>
            Generate New Random Number
          </button>
    </div>

</div>



<style>


</style>