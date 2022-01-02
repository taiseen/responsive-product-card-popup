// 3 Jan 2022

const preview = document.querySelector('.product-preview');
const products = document.querySelectorAll('.product');
const previewBox = document.querySelectorAll('.preview');


products.forEach((product, i) => {

    product.addEventListener('click', () => {

        preview.style.display = 'flex';

        let productName = product.getAttribute('data-name');
        let target = previewBox[i].getAttribute('data-target');

        if (productName === target) {
            previewBox[i].classList.add('active');
        }
    });
});


previewBox.forEach(closeObj => {

    closeObj.querySelector('.fa-times').addEventListener('click', () => {
        closeObj.classList.remove('active');
        preview.style.display = 'none';
    });
});


