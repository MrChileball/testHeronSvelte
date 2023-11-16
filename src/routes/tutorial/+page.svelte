<script>
    import heronF from "$lib/heron-img.jpg";
    import exampleT from "$lib/trianglexample.png";
    import imageStep1 from "$lib/step1.png";
    import imageStep2 from "$lib/step2.png";
    import imageStep3 from "$lib/step3.png";
    import imageStep4 from "$lib/step4.png";
    

    import Navbar from "$lib/componentes/navbar.svelte";

</script>

<body class="introduction">
    <Navbar title="Teorema de Herón"/>

<div class="containerFlexCenter">
    <h2>¿Qué es el teorema de Herón?</h2>
    <p>El teorema de Herón es un teorema creado por Herón de Alejandría para calcular el perímetro, el semiperímetro y el área de un triángulo a partir de las longitudes de sus 3 lados.</p>
    <p>Podemos apreciar las fórmulas en la siguiente imagen:</p>
</div>
    <img src={heronF} alt="Semiperímetro: La suma de los lados partida por 2. Área: ">
    <div class="heronSteps">
        <h2>¿Cómo aplicamos el teorema de Herón?</h2>
        <div class="application">
            <div class="applicationSteps"> 
            <p>Supongamos tenemos un triángulo rectángulo de tamaño en un cateto 3cm, en el otro cateto 4cm y en la hipotenusa 5cm.</p>
            <p>-El cálculo de perímetro es normal, la suma de todos los lados lo que nos da un total de 12.</p>
            <p>-El cálculo de semiperímetro es la suma de todos los lados partido por 2: 12/2 = 6</p> 
            <p>Estos dos cálculos seran necesarios para sacar el área, el cuál haremos a continuación.</p>
             <img src={exampleT} alt="C1:3cm C2:4cm H:5cm">
            </div>
        </div>

        <h3>Pasos para sacar el área de un triángulo usando teorema de Herón</h3>
        <div class= "areaSteps">
            <div class= "steps">
                <p>1. Definir los lados a, b y c.</p>
                <img src = {imageStep1} alt= "4cm = a / 3cm = b / 5cm = c" class="stepsImages">
            </div>

            <div class= "steps">
                <p>2. Calcular el semiperímetro de el tríangulo, el cuál ya sabemos es 6.</p>
                <img src = {imageStep2} alt= "12/2 = 6" class="stepsImages">
            </div>

            <div class= "steps">
                <p>3. Reemplazar las variantes en la fórmula con los valores que ya tenemos, siendo s el semiperímetro y a, b y c los valores de los lados que ya definimos.</p>
                <img src = {imageStep3} class="stepsImages">
            </div>

            <div class= "steps">
                <p>4. Ya reemplazados los valores, resolvemos el área del tríangulo</p>
                <img src = {imageStep4} alt="A = 6" class="stepsImages">
            </div>
        </div>

    </div>
</body>
<!-- á é í ó ú ñ ü  --> 