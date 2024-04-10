const buttonIncorrect = document.querySelector('#incorrectbutton')
const correctButton = document.getElementById('correctbutton')
const boxAccepted = document.getElementById('actionaccept')

function buttonIncorrectE1(elm) {
    elm.style.position = "absolute"
    elm.style.top = Math.floor(Math.random() * 50 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 50 + 5) + "%";

}

buttonIncorrect.addEventListener("click", function (e) {
    buttonIncorrectE1(e.target)
})

correctButton.addEventListener("click", function () {
    boxAccepted.style.display = 'none'
    if (boxAccepted.style.display === 'none') {
        boxAccepted.style.display = 'block';
    }

});






