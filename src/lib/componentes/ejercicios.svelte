<script>
    import { onMount } from 'svelte';

    export let min = 7;
    export let max = 30;



    let lado1;
    let lado2;
    let lado3;

    // Generate a random number within the specified range
    function generateRandomNumber() {
        

        do {
            lado1 = Math.floor(Math.random() * max) + 1;
            lado2 = Math.floor(Math.random() * max) + 1;
            lado3 = Math.floor(Math.random() * max) + 1;

        } while (!(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1));
        console.log(lado1);
        console.log(lado2);
        console.log(lado3);

        return [lado1, lado2, lado3];
    }

// Generar lados hasta obtener un triángulo válido




    let userPerim;
    let userArea; 

    $: perim = lado1 + lado2 + lado3;
    $: semiPerim = perim / 2;
    $: area = Math.sqrt(semiPerim * (semiPerim - lado1) * (semiPerim - lado2) * (semiPerim - lado3));

    import RandomNumber from "./randomNumber.svelte";
    onMount(() => {
        generateRandomNumber();
    });
</script>



<!-- ... (resto del código) -->


<div>
    <div>
        <h2>Generador de ejercicios aleatorios para resolución del usuario.</h2>

        <p>Lado 1: {lado1}</p>
        <p>Lado 2: {lado2}</p>
        <p>Lado 3: {lado3}</p>
        

        {#if lado1 + lado2 > lado3 && lado3 + lado1 > lado2 && lado3 + lado2 > lado1 }
            <p>Resultado: {perim}</p>
            <p>Resultado: {semiPerim}</p>
            <p>Resultado: {area}</p>
        {:else}
            <h3>Error!</h3>
            <p> Para que un triángulo exista, la suma de dos lados debe ser mayor que el tercero</p>
        {/if}

        
    </div>
    
    <div>
        <input type="number" placeholder="Ingreso de perimetro" bind:value={userPerim}>
        <input type="number" placeholder="Ingreso de area" bind:value={userArea}>
    </div>


    {#if userPerim == perim && userArea == area}
    <p>Iguales</p>
    {:else}
    <p>Distintos</p>
    
    {/if}
    <div>

        <button on:click={() => (
            //Vuelve a asignar un largo aleatorio a cada lado del triangulo
            generateRandomNumber(max, min)
        )}>
            Generate New Random Number
          </button>
    </div>

</div>



<style>


</style>