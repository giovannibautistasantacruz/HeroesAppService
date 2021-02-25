let HeroesFight = () => {
    let seleccionados = JSON.parse(sessionStorage.getItem("selectedHeroes"));
    document.getElementById("imgHeroe1").src = seleccionados[0].images.md;
    document.getElementById("heroeName1").innerText = seleccionados[0].name;
    document.getElementById("intelligence").innerText = "intelligence:" + seleccionados[0].powerstats.intelligence;
    document.getElementById("strength").innerText = "strength:" + seleccionados[0].powerstats.strength;
    document.getElementById("speed").innerText = "speed:" + seleccionados[0].powerstats.speed;
    document.getElementById("durability").innerText = "durability:" + seleccionados[0].powerstats.durability;
    document.getElementById("power").innerText = "power:" + seleccionados[0].powerstats.power;
    document.getElementById("combat").innerText = "combat:" + seleccionados[0].powerstats.combat;

    document.getElementById("imgHeroe2").src = seleccionados[1].images.md;
    document.getElementById("heroeName2").innerText = seleccionados[1].name;
    document.getElementById("intelligence2").innerText = "intelligence:" + seleccionados[1].powerstats.intelligence;
    document.getElementById("strength2").innerText = "strength:" + seleccionados[1].powerstats.strength;
    document.getElementById("speed2").innerText = "speed:" + seleccionados[1].powerstats.speed;
    document.getElementById("durability2").innerText = "durability:" + seleccionados[1].powerstats.durability;
    document.getElementById("power2").innerText = "power:" + seleccionados[1].powerstats.power;
    document.getElementById("combat2").innerText = "combat:" + seleccionados[1].powerstats.combat;
}
let selectedPower = (btnId) => {
    let boton = document.getElementById(btnId);
    boton.classList.remove("btn-primary");
    boton.classList.add("btn-success");
}