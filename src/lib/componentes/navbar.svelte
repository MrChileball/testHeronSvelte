<script>
    //Permite que al cargar el componente desde una página puedes cambiar el titulo 
    export let title = "test";

</script>


<div class="title"> 
    <h1>{title}</h1>

    
</div>

<nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item"><a href="/">Inicio</a></li>
      <li class="navbar-item"><a href="/tutorial">Tutorial</a></li>
      <li class="navbar-item"><a href="/calculadora">Calculadora</a></li>
      <li class="navbar-item"><a href="/ejercicios">Ejercicios</a></li>
    </ul>
  </nav>


<style>
    li{
        margin: 0px;
        padding: 0px;
        transition: all ease-in 0.3s;
        border-radius: 7px;
        width: 100%;
    }
    li:hover, li:active{
        background-color: #558564ff;
    }
    .navbar{
        background-color: #a4969bff;
        width: 80%;
        border-radius: 15px;
        
        
    }
    .flex{
        display: flex;
    }
    .center{
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: center;
    }


    .navbar {
    display: flex;
    justify-content: center;
    background-color: #333;
}
.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.navbar-list {
    display: flex;
    gap: 5px;
    list-style: none;
    padding: 0;
}
dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
ol, ul {
    padding-left: 2rem;
}

a{
    color: rgb(204, 213, 198)}
.navbar-item {
    padding: 12px 22px;
    transition: background-color .45s,border-left .45s,border-top .45s,border-bottom .45s,border-right .45s,padding 1.0s;
}
</style>