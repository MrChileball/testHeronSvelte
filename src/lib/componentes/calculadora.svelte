<script>
    export let a = 3;
    export let b = 3;
    export let c = 3;

    $: perim = a + b + c;
    $: semiPerim = (a+b+c)/2;
    $: area = Math.sqrt(semiPerim*(semiPerim-a)*(semiPerim-b)*(semiPerim-c));
</script>

<div class="containerFlexCenter">
    <div>
        <h2>Calculadora del teorema de Herón</h2>
         {#if a+b > c && b+c > a && a+c > b }
           
         {:else}
            <h3>Error!:</h3><p> Para que un triángulo exista la suma de dos lados debe ser mayor al tercero</p>
         {/if}
        </div>
    <div class="Calculador">
        <h3>Ingresa datos</h3>
         <div class="Imputs">
              <input type="number" placeholder="Variable 1" bind:value={a}>
              <input type="number" placeholder="Variable 2" bind:value={b}>
              <input type="number" placeholder="Variable 3" bind:value={c}>
           </div>   
        <div class="Results"> 
            <p>Resultado del perímetro: {perim}</p>
            <p>Resultado del semiperímetro: {semiPerim}</p>
            <p>Resultado del área: {area}</p>
      </div>  
    </div>
    
    <div>

    </div>

</div>



<style>


</style>