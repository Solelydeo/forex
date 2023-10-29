
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const cart = document.getElementById('cart');
const totalDisplay = document.getElementById('total');

const cartItems = [];

function updateCart() {
    cart.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.course} - $${item.price}`;
        cart.appendChild(li);
        total += item.price;
    });

    totalDisplay.textContent = total.toFixed(2);
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const course = this.getAttribute('data-course');
        const price = parseFloat(this.getAttribute('data-price'));

        if (this.checked) {
            cartItems.push({ course, price });
        } else {
            const index = cartItems.findIndex(item => item.course === course);
            if (index !== -1) {
                cartItems.splice(index, 1);
            }
        }

        updateCart();
    });
});
