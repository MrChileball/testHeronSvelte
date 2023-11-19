<script>

  import Svelte from '$lib/svelte.webp';
</script>

<footer class="footer">
    <div class="footer-left">
      <img src={Svelte} alt="Logo">
      <div class="rights">App escrita con JavaScript</div>
    </div>
    <div class="footer-center">
      <ul class="footer-links">
        <li><a href="https://github.com/MrChileball/testHeronSvelte">Repositorio</a></li>
        <li><a href="https://github.com/MrChileball">MrChileball</a></li>
        <li><a href="https://github.com/Dioscurides">Dioscurides</a></li>
        <li><a href="https://github.com/FlowagrantisoYGanzo">Flowagrantiso</a></li>
      </ul>
    </div>
    <div class="footer-center">
      <ul class="footer-links">
        <li><a class="hover-option"href="https://nodejs.org/en">NodeJS</a></li>
        <li><a class="hover-option"href="https://svelte.dev/">Svelte</a></li>
        <li><a class="hover-option"href="https://kit.svelte.dev/">SvelteKit</a></li>
        <li><a class="hover-option"href="https://www.npmjs.com/">NPM</a></li>
        <li><a class="hover-option" href="https://github.com/join">Github</a></li>
      </ul>
    </div>
    <div class="footer-right">
      <p class="footer-message">
        Web hecha por Esteban Pérez.
        <br>
        Maximiliano Marín.<br>
        Matías Gonzales.
      </p>
    </div>
</footer>

<style>
  .footer {
      background-color: #212121;
      color: #fff;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 16px;
      width: 80%;
  }
  
  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente */
    justify-content: center; /* Centrar verticalmente */
    text-align: center; /* Centrar el texto */
  }
  
  .footer-left img {
    height: auto;
    width: 130px;
  }
  
  .rights {
    margin-top: 10px;
  }
  
  .footer-center {
    margin-top: 10px;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links li {
    margin-bottom: 10px;
  }
  
  .footer-links a {

    text-decoration: none;
    transition: background-color 0.45s, border-right 0.45s, padding 1.0s;
  }
  
  .footer-message {
    margin-top: 10px;
    
    
  }

  .footer-links a:hover{
    color: #ca5c5c;
    /*background-color: #33865d;
    border-right: 5px solid #40b97d;
    border-top: 5px solid #1b5538;
    border-left: 5px solid #0a2c1b;
    border-bottom: 5px solid #042414;*
    padding: 10px;*/
    
  }
  /* Media query para dispositivos móviles */
  @media screen and (max-width: 600px) {
    .footer {
      flex-direction: column;
      text-align: center;
      padding: 10px;
    }
    
    .footer-container {
      flex: 1;
    }
    
    .footer-links li {
      margin-bottom: 5px;
    }
    
    .footer-message {
      font-size: 12px;
    }
  }
  
  /* Media query para restablecer los estilos */
  @media screen and (min-width: 601px) {
    .footer {
      flex-direction: row;
      text-align: left;
      padding: 20px;
    }
    
    .footer-container {
      flex: auto;
    }
    
    .footer-links li {
      margin-bottom: 10px;
    }
    
    .footer-message {
      font-size: inherit;
    }
  }
</style>