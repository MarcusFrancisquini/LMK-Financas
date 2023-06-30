//Mostrar e esconder o menu da navbar

const btnMobile = document.getElementById('btn-mobile');

const menuItem = document.querySelector('.menu-sidebar');

//lista de itens do Menu
const itemMenu1 = document.querySelector('.item1');
const itemMenu2 = document.querySelector('.item2');
const itemMenu3 = document.querySelector('.item3');
const itemMenu4 = document.querySelector('.item4');

function mostrarMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active'); //atribuindo e retirando a classe active no elemento 
}

function fecharMenu(event) {
    if (event.type === 'click') {
        nav.classList.remove('active');
    }
}

menuItem.addEventListener('click', fecharMenu);
btnMobile.addEventListener('click', mostrarMenu);
btnMobile.addEventListener('touchstart', mostrarMenu);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//abrir e fechar as FAQs

const faqs = document.querySelectorAll(".faq-conteudo");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("abrir");
    })
})

