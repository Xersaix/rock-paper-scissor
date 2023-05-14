
// Get the modal
var modal = document.getElementById("myModal");
var pokeball = document.getElementById("menu-pokeball");
var pokeball_text = document.querySelector("#pokeball-text");
var fight = document.getElementById("fight-button");
var fight_song = document.getElementById("battle_song");
var poke_text = document.getElementById("pokeball-text");
var loader = document.getElementById("loader");



window.onload = function () {

    loader.style.display = "none"
    poke_text.style.display = "block";
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == fight) {
        modal.style.display = "none";
    }
}

fight.addEventListener("click", function () {
    modal.style.display = "none";
    fight_song.play()
})
