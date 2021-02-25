let goToFight = () => {
    let seleccionados = [];
    if (localStorage.getItem("selectedHeroes") != null && localStorage.getItem("selectedHeroes") != undefined && localStorage.getItem("selectedHeroes") != "") {
        seleccionados = JSON.parse(localStorage.getItem("selectedHeroes"));
        if (seleccionados.length < 2) {
            alert('Selecciona 2 heroes.');
        } else {

            location.href = '_Components\BatallaHeroes\BatallaHeroes.html';

        }
    }

}