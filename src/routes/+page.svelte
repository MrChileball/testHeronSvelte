


<script>
    import heronF from "$lib/heron-img.jpg";

    import Navbar from "$lib/componentes/navbar.svelte";
    import Warning from '$lib/componentes/warning.svelte';

    //ICONO
    let textWarning = "TestHeronSvelte es una aplicación que explica de manera rápida y sencilla cómo utilizar el teorema de Herón. Además, contamos con una calculadora y un sistema de ejercicios para resolver en base a niveles de dificultad. "
    let icon = "M11 12h1v4h1 M12 9h.01 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z";




</script>

 <body class="introduction">
    
    <Navbar title="Teorema de Herón"/>

    <Warning {textWarning} {icon}/>

    <div class="containerFlexCenter">
    <h2>¿Qué es el teorema de Herón?</h2>
    <p>El teorema de Herón es un teorema creado por Herón de Alejandría para calcular el perímetro, el semiperímetro y el área de un triángulo a partir de las longitudes de sus 3 lados.</p>
    <p>Podemos apreciar las fórmulas en la siguiente imagen:</p>
    <img src={heronF} alt="Semiperímetro: La suma de los lados partida por 2. Área: ">
    </div>
    



    

</body>
<!-- á é í ó ú ñ ü  --> 