document.querySelectorAll('.product').forEach(product => {
    const initialImage = product.querySelector('img').src;
    const hoverImage = product.getAttribute('data-hover');

    product.addEventListener('mouseenter', () => {
        product.querySelector('img').src = hoverImage;
    });

    product.addEventListener('mouseleave', () => {
        product.querySelector('img').src = initialImage;
    });
});