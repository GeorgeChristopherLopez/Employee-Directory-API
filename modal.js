// Get the modal
let modal = document.querySelector(".modal");

// adding buttons to all cards to open the modal


document.body.addEventListener('mouseover', event => {
    document.querySelectorAll('div.card').forEach(item => {
        item.addEventListener('click', event => {
            modal.classList.remove("hide");
            console.log(event);
        })
    })
});


// Get the element that closes the modal
let closeBtn = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.classList.add("hide");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add("hide");
    }
} 