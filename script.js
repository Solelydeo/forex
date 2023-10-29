document.addEventListener("DOMContentLoaded", function() {
    const oval = document.querySelector(".oval");

    window.addEventListener("scroll", function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            oval.style.visibility = "visible";
        } else {
            oval.style.visibility = "hidden";
        }
    });
});


function handleAddToCartClick(event) {
    event.preventDefault();

    var addToCartButton = event.target;
    var buttonId = addToCartButton.getAttribute("data-cart-button-id");
    var cartMessage = document.querySelector('[data-cart-message-id="' + buttonId + '"]');

    addToCartButton.value = "Added To Cart";

    cartMessage.style.display = "block";

    setTimeout(function () {
        cartMessage.style.display = "none";
        addToCartButton.value = "Add To Cart";
    }, 3000);
}

var addToCartButtons = document.querySelectorAll(".add-to-cart-button");

if (addToCartButtons) {
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", handleAddToCartClick);
    });
}


