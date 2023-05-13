
// Get the modal
var modal = document.getElementById("myModal");
var pokeball = document.getElementById("menu-pokeball");
var pokeball_text = document.querySelector("#pokeball-text");
var fight = document.getElementById("fight-button")
var fight_song = document.getElementById("battle_song")

// Get the button that opens the modal


// When the user clicks the button, open the modal 
window.onload = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == fight) {
        modal.style.display = "none";
    }
}

fight.addEventListener("click",function(){
    modal.style.display = "none";
    fight_song.play()
})
