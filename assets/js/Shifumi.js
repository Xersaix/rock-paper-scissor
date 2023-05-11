
// Initialisation des variables

var button_W = document.querySelector("#choix1");
var button_F = document.querySelector("#choix2");
var button_G = document.querySelector("#choix3");
var life_player1 = document.querySelector("#ai-life-bar1");
var life_player2 = document.querySelector("#ai-life-bar2");
var life_player3 = document.querySelector("#ai-life-bar3");
var choice = ["fire", "water", "grass"];

console.log(life_player1.getAttribute("width"))
// point de vie des pokemon du joueur
var player = {


    pokemon: [3, 3, 3],

}
// point de vie des pokemon enemy
var enemy = {

    pokemon: [3, 3, 3],
}

// Fonction qui gère le combat
function battle(player_index) {
    console.log(choice[player_index]);

    let ai_index = Math.floor(Math.random() * 2);
    let ai_choice = choice[ai_index];
    console.log(ai_index);
    console.log(ai_choice);
    if (choice[player_index] == "fire" && ai_choice == "fire" || choice[player_index] == "water" && ai_choice == "water" || choice[player_index] == "grass" && ai_choice == "grass") {
        console.log("DRAW")

    } else if (choice[player_index] == "fire" && ai_choice == "grass") {
        enemy.pokemon[ai_index] -= 1;
        console.log("YOU WIN")
    } else if (choice[player_index] == "water" && ai_choice == "fire") {
        enemy.pokemon[ai_index] -= 1;
        console.log("YOU WIN")
    } else if (choice[player_index] == "grass" && ai_choice == "water") {
        enemy.pokemon[ai_index] -= 1;

        console.log("YOU WIN")
    } else {
        player.pokemon[player_index] -= 1;
        reduce_life_player(0,player.pokemon[player_index])
        console.log("LOOSER!")
    }
    console.log(player.pokemon);
}

// function 
function reduce_life_player(number, width_index) {

    let new_width = 10.13 * width_index;

    switch(number)
    {
        case 0:

        break;

        case 1:

        break;

        case 2:

        break;

    }
    life_player1.setAttribute("style","width:"+new_width+"%");


}

// Lier les event listener

button_W.addEventListener("click", function () {
    battle(1)
    // console.log("Water");
})
button_F.addEventListener("click", function () {
    battle(0)
    // console.log("Fire");
})
button_G.addEventListener("click", function () {
    battle(2)
    // console.log("Grass");
})






