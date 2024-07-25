document.querySelectorAll('.producto').forEach(producto => {
    const initialImage = producto.querySelector('img').src;
    const hoverImage = producto.getAttribute('data-hover');

    producto.addEventListener('mouseenter', () => {
        producto.querySelector('img').src = hoverImage;
    });

    producto.addEventListener('mouseleave', () => {
        producto.querySelector('img').src = initialImage;
    });
});