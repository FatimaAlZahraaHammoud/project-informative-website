let burger = document.getElementById('burger_icon')
let offcanvas_links = document.getElementById('offcanvas-links')
burger.addEventListener('click',function(){
    offcanvas_links.classList.toggle('d-block')
})