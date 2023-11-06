<script>
    export let a = 3;
    export let b = 3;
    export let c = 3;

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

    </div>

</div>



<style>


</style>