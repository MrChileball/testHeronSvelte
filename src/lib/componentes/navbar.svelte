<script>
    //Permite que al cargar el componente desde una página puedes cambiar el titulo 
    export let title = "test";

</script>


<div class="title"> 
    <h1>{title}</h1>
</div>


<style>
    li{
        margin: 0px;
        padding: 0px;
        transition: all ease-in 0.3s;
    }
    li:hover{
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

</style>