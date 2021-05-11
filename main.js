function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}
// typing animation script
var typed = new Typed(".typing", {
    strings: ["Hello", "Ciao", "Hola", "Bonjour", "Привет", "Olá", "مرحبا", "Hej", "Merhaba", "Hallo", "", "", "", "", "", "", "", "", ""],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


$(document).ready(function() {
    
    $('.work').magnificPopup({
        delegate :'a',
        type : 'image',
        gallery :{
            enabled :true
        }
    });

})