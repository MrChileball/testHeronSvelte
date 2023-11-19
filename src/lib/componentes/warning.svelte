<script>

    export let textWarning = "Advertencia: se debe entregar el valor con los primeros dos decimales sin redondear.";
    export let icon = "M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16";
</script>



<div class="containerFlexCenter vh">
    <div class="warningFlex">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-3" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d={icon} />
          </svg>
        <h3>{textWarning}</h3> 


        
    </div>
    
</div>

<style>
    .warningFlex{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
    }
    .vh{
        min-height: 1vh;
    }

</style>