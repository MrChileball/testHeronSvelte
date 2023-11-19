<script>
    import Navbar from "$lib/componentes/navbar.svelte";
    import Calculadora from "$lib/componentes/calculadora.svelte";
    import Warning from '$lib/componentes/warning.svelte';

    let warning = "Advertencia se debe entregar el valor con los primeros dos decimales sin redondear."
</script>



<body class="introduction">

    <Navbar title="Calculadora"/>

    <Calculadora />
    <Warning textWarning={warning}/>


</body>