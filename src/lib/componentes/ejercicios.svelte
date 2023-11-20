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

        return [lado1, lado2, lado3];
    }

// Generar lados hasta obtener un triángulo válido




    let userPerim;
    let userArea; 

    $: perim = lado1 + lado2 + lado3;
    $: semiPerim = perim / 2;
    $: area = Math.sqrt(semiPerim * (semiPerim - lado1) * (semiPerim - lado2) * (semiPerim - lado3));
    $: areaOutput = (Math.trunc(area * 100))/100;
    $: console.log("Area del triangulo: ", areaOutput);

    onMount(() => {
        generateRandomNumber();
    });
</script>



<!-- ... (resto del código) -->


<div class="containerFlexCenter">
    <div class="titleContainer">

        <h2 style="align-content: center;">Generador de ejercicios aleatorios.</h2>
    </div>
    <div>
        <h3>Seleccione dificultad de ejercicios:</h3>
    
        <div class="Difficulties">
        <button on:click={() => (max = 30, generateRandomNumber())}>
            
         Fácil

        </button>


        <button on:click={() => (max = 45, generateRandomNumber())}>
            
        Intermedia

        </button>


        <button on:click={() => (max = 60, generateRandomNumber())}>
           
           Díficil

        </button>
        
        </div>
    </div>
    <div class="calculador">

        <div>
            <input type="number" placeholder="Ingreso de perimetro" bind:value={userPerim}>
            <input type="number" placeholder="Ingreso de area" bind:value={userArea}>
        </div>
        


        <div>
            <p>Lado 1: {lado1}cm</p>
            <p>Lado 2: {lado2}cm</p>
            <p>Lado 3: {lado3}cm</p>
        

        </div>

    </div>


    {#if userPerim == perim && userArea == areaOutput}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l5 5l10 -10" />
      </svg>
    <p>Correcto, ¡felicidades!</p>
    {:else if userArea == null && userPerim == null}
    <p></p>
    {:else}
    <p>Uno o más datos de los ingresados están incorrectos.</p>

    {/if}
    <div>

        <button on:click={() => (
            //Vuelve a asignar un largo aleatorio a cada lado del triangulo
            generateRandomNumber(max, min)
        )}>
            Generar nuevo número aleatorio.
          </button>
    </div>

</div>



<style>


</style>