document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add');
    const controlButtons = document.querySelectorAll('.control-buttons');

    addButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            controlButtons[index].classList.toggle('active');
            this.style.display = 'none';
        });
    });

    controlButtons.forEach(buttons => {
        const incrementButton = buttons.querySelector('.increment');
        const decrementButton = buttons.querySelector('.decrement');

        incrementButton.addEventListener('click', function() {
            const quantityElement = this.parentNode.querySelector('.quantity-value');
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        });

        decrementButton.addEventListener('click', function() {
            const quantityElement = this.parentNode.querySelector('.quantity-value');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });
    });
});
