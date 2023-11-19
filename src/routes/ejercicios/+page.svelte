<script>

import Ejercicios from "$lib/componentes/ejercicios.svelte";
import Navbar from "$lib/componentes/navbar.svelte";


import Warning from '$lib/componentes/warning.svelte';

let warning = "Advertencia se debe entregar el valor con los primeros dos decimales sin redondear."

</script>

<body>
     
    <Navbar title="Ejercicios"/>
    <Ejercicios />

    <Warning textWarning={warning}/>

</body>
