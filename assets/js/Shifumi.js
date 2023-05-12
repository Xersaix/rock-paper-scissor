
// Initialisation des variables

var button_F = document.querySelector("#choix1");
var button_W = document.querySelector("#choix2");
var button_G = document.querySelector("#choix3");
var life_player1 = document.getElementById("life-bar1")
var life_player2 = document.getElementById("life-bar2")
var life_player3 = document.getElementById("life-bar3")
var ai_life_player1 = document.getElementById("ai-life-bar1")
var ai_life_player2 = document.getElementById("ai-life-bar2")
var ai_life_player3 = document.getElementById("ai-life-bar3")
var choice = ["fire", "water", "grass"];

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

    let ai_index = Math.floor(Math.random() * 3);
    let ai_choice = choice[ai_index];
    console.log(choice[player_index]);
    console.log(ai_choice);
    if (choice[player_index] == "fire" && ai_choice == "fire" || choice[player_index] == "water" && ai_choice == "water" || choice[player_index] == "grass" && ai_choice == "grass") {
        console.log("DRAW")

    } else if (choice[player_index] == "fire" && ai_choice == "grass") {

        reduce_life_enemy(ai_index, enemy.pokemon[ai_index])
        console.log("YOU WIN")
    } else if (choice[player_index] == "water" && ai_choice == "fire") {

        reduce_life_enemy(ai_index, enemy.pokemon[ai_index])
        console.log("YOU WIN")
    } else if (choice[player_index] == "grass" && ai_choice == "water") {

        reduce_life_enemy(ai_index, enemy.pokemon[ai_index])
        console.log("YOU WIN")
    } else if (choice[player_index] == "grass" && ai_choice == "fire") {
        reduce_life_player(player_index, player.pokemon[player_index])

        console.log("YOU LOSE")
    } else if (choice[player_index] == "fire" && ai_choice == "water") {

        reduce_life_player(player_index, player.pokemon[player_index])
        console.log("YOU LOSE")
    } else if (choice[player_index] == "water" && ai_choice == "grass") {

        reduce_life_player(player_index, player.pokemon[player_index])
        console.log("YOU LOSE")
    }
    console.log(player.pokemon[0])
}

// function 
function reduce_life_player(choice_index, life_index) {

    if (player.pokemon[choice_index] <= 1) {
        player.pokemon[choice_index] = 0;

    } else {
        player.pokemon[choice_index] -= 1;
    }

    let new_width = (10.13 * player.pokemon[choice_index]) + "%";
    console.log(new_width)

    switch (choice_index) {
        case 0:
            life_player1.style.width = new_width
            if(player.pokemon[choice_index] == 1)
            {
                life_player1.style.backgroundColor= "#FF0000";
            }
            break;

        case 1:
            life_player2.style.width = new_width
            if(player.pokemon[choice_index] == 1)
            {
                life_player2.style.backgroundColor= "#FF0000";
            }
            break;

        case 2:
            life_player3.style.width = new_width
            if(player.pokemon[choice_index] == 1)
            {
                life_player3.style.backgroundColor= "#FF0000";
            }
            break;

    }



}

// function 
function reduce_life_enemy(number, width_index) {

    if (enemy.pokemon[number] <= 1) {
        enemy.pokemon[number] = 0;

    } else {
        enemy.pokemon[number] -= 1;
    }
    let new_width = (9.83 * enemy.pokemon[number]) + "%";

    switch (number) {
        case 0:
            ai_life_player2.style.width = new_width
            if(enemy.pokemon[number] == 1)
            {
                ai_life_player2.style.backgroundColor= "#FF0000";
            }
            break;

        case 1:
            ai_life_player1.style.width = new_width
            if(enemy.pokemon[number] == 1)
            {
                ai_life_player1.style.backgroundColor= "#FF0000";
            }
            break;

        case 2:
            ai_life_player3.style.width = new_width
            if(enemy.pokemon[number] == 1)
            {
                ai_life_player3.style.backgroundColor= "#FF0000";
            }
            break;

    }



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






