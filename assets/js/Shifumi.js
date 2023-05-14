
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
var faint_song = document.getElementById("faint")
var victory_song = document.getElementById("victory")
var tackle_song = document.getElementById("tackle");
var ai_fire_cry = document.getElementById("ai-fire-cry");
var ai_water_cry = document.getElementById("ai-water-cry");
var ai_grass_cry = document.getElementById("ai-grass-cry");
var player_fire_cry = document.getElementById("player-fire-cry");
var player_water_cry = document.getElementById("player-water-cry");
var player_grass_cry = document.getElementById("player-grass-cry");
var player_fire_name = document.getElementById("player-fire-name");
var player_water_name = document.getElementById("player-water-name");
var player_grass_name = document.getElementById("player-grass-name");
var ai_fire_name = document.getElementById("ai-fire-name");
var ai_water_name = document.getElementById("ai-water-name");
var ai_grass_name = document.getElementById("ai-grass-name");
var win_loose_modal = document.getElementById("win-loose");
var draw_song = document.getElementById("draw")

var win_loose_text = document.getElementById("pokeball-text-result")
var result_win = document.getElementById("result-text")


win_loose_modal.style.display = "none"

// point de vie des pokemon du joueur
var player = {


    pokemon: [3, 3, 3],
    poke_name: ["Feunard", "Aquali", "Jungko"],
    alive: [true, true, true],

}
// point de vie des pokemon enemy
var enemy = {

    pokemon: [3, 3, 3],
    poke_name: ["Braségali", "Tortank", "Maracachi"],
    alive: [true, true, true],
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
    duration: 250,
    iterations: 1,
};
const faint_anim = [

    { transform: "translatey(0px)" },
    { transform: "translatey(+100px)" },
];
const player_react_time = {
    duration: 250,
    iterations: 1,
    delay: 200,
};
player_fire_name.innerText = player.poke_name[0];
player_water_name.innerText = player.poke_name[1];
player_grass_name.innerText = player.poke_name[2];
ai_fire_name.innerText = enemy.poke_name[0];
ai_water_name.innerText = enemy.poke_name[1];
ai_grass_name.innerText = enemy.poke_name[2];
function attack_ai() {
    let ai_index = Math.floor(Math.random() * 3);

    while (enemy.pokemon[ai_index] == 0) {
        ai_index = Math.floor(Math.random() * 3);
    }
    return ai_index
}

function ending_match() {
    let player_loose = 0;
    let ai_loose = 0;
    for (let index = 0; index < player.pokemon.length; index++) {


        if (player.pokemon[index] == 0) {
            player_loose += 1;

        }if (enemy.pokemon[index] == 0) {
            ai_loose += 1;
        }

        if (player_loose > 1) {

            win_loose_modal.style.display = "block";
            win_loose_text.style.display = "flex";
            win_loose_modal.style.backgroundColor = "rgba(0, 0, 0, 0.94)";
            result_win.innerText = "Defaite";
            fight_song.pause();
            fight_song.currentTime = 0;
        } else if (ai_loose > 1) {
            win_loose_modal.style.display = "block";
            win_loose_text.style.display = "flex";
            win_loose_modal.style.backgroundColor = "rgba(0, 0, 0, 0.94)"
            result_win.innerText = "Victoire";
            fight_song.pause();
            fight_song.currentTime = 0;
            victory_song.play();
        }

    }
    console.log("Player lost " + player_loose + "pokemon")
    console.log("Ai lost " + ai_loose + "pokemon")
}

// Fonction qui gère le combat
function battle(player_index) {

    let ai_index = attack_ai();
    let ai_choice = choice[ai_index];
    console.log(choice[player_index]);
    console.log(ai_choice);
    if (choice[player_index] == "fire" && ai_choice == "fire") {
        console.log("DRAW");
        draw_song.play();
        fire_pokemon.animate(player_charge_anim, player_charge_time);
        fire_pokemon_ai.animate(player_damage_anim, player_charge_time);

    } else if (choice[player_index] == "water" && ai_choice == "water") {
        draw_song.play();
        water_pokemon.animate(player_charge_anim, player_charge_time)
        water_pokemon_ai.animate(player_damage_anim, player_charge_time)
        console.log("DRAW");
    } else if (choice[player_index] == "grass" && ai_choice == "grass") {
        draw_song.play();
        grass_pokemon.animate(player_charge_anim, player_charge_time);
        grass_pokemon_ai.animate(player_damage_anim, player_charge_time);
        console.log("DRAW");
    }
    else if (choice[player_index] == "fire" && ai_choice == "grass") {
        tackle_song.play();
        fire_pokemon.animate(player_charge_anim, player_charge_time);
        grass_pokemon_ai.animate(player_charge_anim, player_react_time);
        reduce_life_enemy(ai_index, enemy.pokemon[ai_index]);
        console.log("YOU WIN");
    } else if (choice[player_index] == "water" && ai_choice == "fire") {
        tackle_song.play();
        water_pokemon.animate(player_charge_anim, player_charge_time);
        fire_pokemon_ai.animate(player_charge_anim, player_react_time);
        reduce_life_enemy(ai_index, enemy.pokemon[ai_index]);
        console.log("YOU WIN");
    } else if (choice[player_index] == "grass" && ai_choice == "water") {
        tackle_song.play()
        grass_pokemon.animate(player_charge_anim, player_charge_time);
        water_pokemon_ai.animate(player_charge_anim, player_react_time);
        reduce_life_enemy(ai_index, enemy.pokemon[ai_index]);
        console.log("YOU WIN");
    } else if (choice[player_index] == "grass" && ai_choice == "fire") {
        tackle_song.play();
        reduce_life_player(player_index, player.pokemon[player_index]);
        grass_pokemon.animate(player_damage_anim, player_react_time);
        fire_pokemon_ai.animate(player_damage_anim, player_charge_time);
        console.log("YOU LOSE");
    } else if (choice[player_index] == "fire" && ai_choice == "water") {
        tackle_song.play();
        fire_pokemon.animate(player_damage_anim, player_react_time);
        water_pokemon_ai.animate(player_damage_anim, player_charge_time);
        reduce_life_player(player_index, player.pokemon[player_index]);
        console.log("YOU LOSE");
    } else if (choice[player_index] == "water" && ai_choice == "grass") {
        tackle_song.play();
        water_pokemon.animate(player_damage_anim, player_react_time);
        grass_pokemon_ai.animate(player_damage_anim, player_charge_time);
        reduce_life_player(player_index, player.pokemon[player_index]);
        console.log("YOU LOSE");
    }
    ending_match();
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
            } else if (player.pokemon[choice_index] == 0 && player.alive[choice_index]) {
                player_fire_cry.play();
                faint_song.play();
                fire_pokemon.animate(faint_anim, player_react_time);
                player.alive[choice_index] = false;
                button_F.style.filter = "grayscale(1)";
                fire_pokemon.style.opacity = 0

            } else if (player.pokemon[choice_index] > 1) {
                life_player1.style.backgroundColor = "#5DD531";

            }
            break
        case 1:
            life_player2.style.width = new_width
            if (player.pokemon[choice_index] == 1) {
                life_player2.style.backgroundColor = "#FF0000";
            } else if (player.pokemon[choice_index] == 0 && player.alive[choice_index]) {
                player_water_cry.play();
                faint_song.play();
                water_pokemon.animate(faint_anim, player_react_time);
                player.alive[choice_index] = false;
                button_W.style.filter = "grayscale(1)";
                water_pokemon.style.opacity = 0
            } else if (player.pokemon[choice_index] > 1) {
                life_player2.style.backgroundColor = "#5DD531";

            }
            break;

        case 2:
            life_player3.style.width = new_width
            if (player.pokemon[choice_index] == 1) {
                life_player3.style.backgroundColor = "#FF0000";
            } else if (player.pokemon[choice_index] == 0 && player.alive[choice_index]) {
                player_grass_cry.play();
                faint_song.play();
                grass_pokemon.animate(faint_anim, player_react_time);
                player.alive[choice_index] = false;
                button_G.style.filter = "grayscale(1)";
                grass_pokemon.style.opacity = 0
            } else if (player.pokemon[choice_index] > 1) {
                life_player3.style.backgroundColor = "#5DD531";

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
            } else if (enemy.pokemon[number] > 1) {
                ai_life_player2.style.backgroundColor = "#5DD531";
            } else if (enemy.pokemon[number] == 0 && enemy.alive[number]) {
                ai_fire_cry.play();
                faint_song.play();
                fire_pokemon_ai.animate(faint_anim, player_react_time);
                enemy.alive[number] = false;
                fire_pokemon_ai.style.opacity = 0;
            }
            break;

        case 1:
            ai_life_player1.style.width = new_width
            if (enemy.pokemon[number] == 1) {
                ai_life_player1.style.backgroundColor = "#FF0000";
            } else if (enemy.pokemon[number] > 1) {
                ai_life_player1.style.backgroundColor = "#5DD531";
            } else if (enemy.pokemon[number] == 0 && enemy.alive[number]) {
                ai_water_cry.play()
                faint_song.play();
                water_pokemon_ai.animate(faint_anim, player_react_time);

                enemy.alive[number] = false;
                water_pokemon_ai.style.opacity = 0
            }
            break;

        case 2:
            ai_life_player3.style.width = new_width
            if (enemy.pokemon[number] == 1) {
                ai_life_player3.style.backgroundColor = "#FF0000";
            } else if (enemy.pokemon[number] > 1) {
                ai_life_player3.style.backgroundColor = "#5DD531";
            } else if (enemy.pokemon[number] == 0 && enemy.alive[number]) {
                ai_grass_cry.play()
                faint_song.play();
                grass_pokemon_ai.animate(faint_anim, player_react_time);

                enemy.alive[number] = false;
                grass_pokemon_ai.style.opacity = 0
            }
            break;

    }



}

// Liaison des  event listener

button_W.addEventListener("click", function () {
    if (player.pokemon[1] != 0) { battle(1) }
    // console.log("Water");
})
button_F.addEventListener("click", function () {
    if (player.pokemon[0] != 0) { battle(0) }
    // console.log("Fire");
})
button_G.addEventListener("click", function () {
    if (player.pokemon[2] != 0) { battle(2) }
    // console.log("Grass");
})






