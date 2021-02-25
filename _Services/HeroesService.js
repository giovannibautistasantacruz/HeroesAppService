const get_all_heroes = () => {
    console.log("getAllHeroes");
    fetch('https://akabab.github.io/superhero-api/api/all.json').
    then(function(response) {
        return response.json();
    }).then(function(heroes) {

        let heroResult = heroes;
        sessionStorage.setItem('data', JSON.stringify(heroResult));
        let heroesService = new HeroesService(heroResult);
        heroesService.print_data_heroe();
    });

}


const HeroeSelected = (idHeroe) => {
    let boton = document.getElementById(idHeroe);


    let heroesSession = [];
    heroesSession = JSON.parse(sessionStorage.getItem("data"));
    let filtrado = heroesSession.filter((heroe) => {

        return heroe.id == idHeroe
    });
    console.log("Filtrado", filtrado);

    let seleccionados = [];
    if (sessionStorage.getItem("selectedHeroes") != null && sessionStorage.getItem("selectedHeroes") != undefined && sessionStorage.getItem("selectedHeroes") != "") {
        seleccionados = JSON.parse(sessionStorage.getItem("selectedHeroes"));

    }


    if (seleccionados.length < 2) {
        seleccionados.push(filtrado[0]);
        sessionStorage.setItem("selectedHeroes", JSON.stringify(seleccionados));
        boton.innerHTML = "Seleccionado";
        boton.classList.remove("btn-primary");
        boton.classList.add("btn-success");
    } else {
        alert("Solo puedes seleccionar 2 heroes");
    }




    console.log("selected", seleccionados);



}

function HeroesService(heroes) {

    this.heroesData = heroes;

    this.print_data_heroe = function() {

        let contenedor = document.getElementById('contenedor');
        let cards = '';
        this.heroesData.forEach(heroe => {


            cards +=
                `<div class='col-sm-12 col-md-4 col-xs-6> 
            <div class='card'> 
                <img src=${heroe.images.sm} class='card-img-top hwImage' alt='...'> 
                <div class='card-body'> 
                    <h5 class='card-title'>${heroe.name}</h5>  
                    <p class='card-text'>
                        <span class="badge badge-secondary">intelligence: ${heroe.powerstats.intelligence}</span>
                        <span class="badge badge-secondary">strength: ${heroe.powerstats.strength}</span>
                        <span class="badge badge-secondary">speed: ${heroe.powerstats.speed}</span>
                        <span class="badge badge-secondary">durability: ${heroe.powerstats.durability}</span>
                        <span class="badge badge-secondary">power: ${heroe.powerstats.power}</span>
                        <span class="badge badge-secondary">combat: ${heroe.powerstats.combat}</span>
                    </p> 
                    <a href='#' class='btn btn-primary' id="${heroe.id}" onclick="HeroeSelected(this.id)">Seleccionar</a>
                </div>
            </div>`;


        });
        contenedor.innerHTML = cards;
    }
}