
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
var water_pokemon = document.getElementById("player-poke2");
var fire_pokemon = document.getElementById("player-poke1");
var grass_pokemon = document.getElementById("player-poke3");
var water_pokemon_ai = document.getElementById("ai-poke2");
var fire_pokemon_ai = document.getElementById("ai-poke1");
var grass_pokemon_ai = document.getElementById("ai-poke3");
var choice = ["fire", "water", "grass"];
var faint_song 
var tackle_song = document.getElementById("tackle");

// point de vie des pokemon du joueur
var player = {


    pokemon: [3, 3, 3],
    poke_name:["Feunard","Aquali","Jungko"],

}
// point de vie des pokemon enemy
var enemy = {

    pokemon: [3, 3, 3],
}
// Create Animation
const player_charge_anim = [

    { transform: "translatex(0px)" },
    { transform: "translatex(+50px)" },

];
const player_damage_anim = [

    { transform: "translatex(0px)" },
    { transform: "translatex(-50px)" },

];
const player_charge_time = {
    duration: 200,
    iterations: 1,
};
const faint_anim =[

    { transform: "translatey(0px)" },
    { transform: "translatey(+100px)" }, 
];
const player_react_time = {
    duration: 200,
    iterations: 1,
    delay: 200,
};

function faint()
{


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
        tackle_song.play()
        fire_pokemon.animate(player_charge_anim,player_charge_time)
        grass_pokemon_ai.animate(player_charge_anim,player_react_time)
        reduce_life_enemy(ai_index, enemy.pokemon[ai_index])
        console.log("YOU WIN")
    } else if (choice[player_index] == "water" && ai_choice == "fire") {
        tackle_song.play()
        water_pokemon.animate(player_charge_anim,player_charge_time)
        fire_pokemon_ai.animate(player_charge_anim,player_react_time)
        reduce_life_enemy(ai_index, enemy.pokemon[ai_index])
        console.log("YOU WIN")
    } else if (choice[player_index] == "grass" && ai_choice == "water") {
        tackle_song.play()
        grass_pokemon.animate(player_charge_anim,player_charge_time)
        water_pokemon_ai.animate(player_charge_anim,player_react_time)
        reduce_life_enemy(ai_index, enemy.pokemon[ai_index])
        console.log("YOU WIN")
    } else if (choice[player_index] == "grass" && ai_choice == "fire") {
        tackle_song.play()
        reduce_life_player(player_index, player.pokemon[player_index])
        grass_pokemon.animate(player_damage_anim,player_react_time)
        fire_pokemon_ai.animate(player_damage_anim,player_charge_time)
        console.log("YOU LOSE")
    } else if (choice[player_index] == "fire" && ai_choice == "water") {
        tackle_song.play()
        fire_pokemon.animate(player_damage_anim,player_react_time)
        water_pokemon_ai.animate(player_damage_anim,player_charge_time)
        reduce_life_player(player_index, player.pokemon[player_index])
        console.log("YOU LOSE")
    } else if (choice[player_index] == "water" && ai_choice == "grass") {
        tackle_song.play()
        water_pokemon.animate(player_damage_anim,player_react_time)
        grass_pokemon_ai.animate(player_damage_anim,player_charge_time)
        reduce_life_player(player_index, player.pokemon[player_index])
        console.log("YOU LOSE")
    }
    if(player.pokemon[player_index] == 0){
        fire_pokemon.animate(faint_anim,player_charge_time)
    }
}

// function qui gerent la reduction des point de vie du joueur
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
            if (player.pokemon[choice_index] == 1) {
                life_player1.style.backgroundColor = "#FF0000";
            }
            break;

        case 1:
            life_player2.style.width = new_width
            if (player.pokemon[choice_index] == 1) {
                life_player2.style.backgroundColor = "#FF0000";
            }
            break;

        case 2:
            life_player3.style.width = new_width
            if (player.pokemon[choice_index] == 1) {
                life_player3.style.backgroundColor = "#FF0000";
            }
            break;

    }



}

// function qui gerent la reduction des point de vie de l'enemy
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
            if (enemy.pokemon[number] == 1) {
                ai_life_player2.style.backgroundColor = "#FF0000";
            }
            break;

        case 1:
            ai_life_player1.style.width = new_width
            if (enemy.pokemon[number] == 1) {
                ai_life_player1.style.backgroundColor = "#FF0000";
            }
            break;

        case 2:
            ai_life_player3.style.width = new_width
            if (enemy.pokemon[number] == 1) {
                ai_life_player3.style.backgroundColor = "#FF0000";
            }
            break;

    }



}

// Liaison des  event listener

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






