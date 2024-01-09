const imagem = document.querySelectorAll(".hero__mosaico-imgs img"); 


imagem.forEach((imageSelected) => {

    const hover = () => {
        imageSelected.classList.toggle("selected")
        if (imageSelected.alt == "davi" || imageSelected.alt == "dinho") {
            imageSelected.style.boxShadow = " 0px 0px 30px 0px rgb(22, 197, 134)";

        }
        if (imageSelected.alt == "mércia") {
            imageSelected.style.boxShadow = "0px 0px 30px 0px rgb(255, 112, 112)";
        }
        if (imageSelected.alt == "ricardo" || imageSelected.alt == "nico") {
            imageSelected.style.boxShadow = "0px 0px 30px 0px rgb(255, 215, 115)";
        }
    }


    imageSelected.addEventListener("mouseenter", hover);


     imageSelected.addEventListener("mouseleave", hover); 

    
    imagem.forEach((noimageSelected) => {
       
        if (noimageSelected !== imageSelected ) {
            const noHover = () => {
                noimageSelected.classList.toggle("noselected")
            }
            const removeBox =() =>{
                imageSelected.style.boxShadow= "none";
                noimageSelected.classList.toggle("noselected");

            }
            imageSelected.addEventListener("mouseenter", noHover);
            imageSelected.addEventListener("mouseleave", removeBox); 
        }

    });

});


const menuIcons = document.querySelectorAll(".ti");
const lateralMenu = document.querySelector(".header__menuPrincipal-lista");

menuIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        const clickedIcon = e.target;
        const iconClass = clickedIcon.classList;

         if (iconClass.contains("ti-x")) {
            lateralMenu.classList.toggle("closeMenu");
            clickedIcon.classList.remove("ti-x");
            clickedIcon.classList.add("ti-menu-2");
            console.log(`o menu está fechado: ${clickedIcon.classList}`);
        }
        else if (iconClass.contains("ti-menu-2")) {
            lateralMenu.classList.toggle("openMenu");
            clickedIcon.classList.remove("ti-menu-2");
            clickedIcon.classList.add("ti-x");
            console.log(`o menu está aberto: ${clickedIcon.classList}`);
        } 
    });
});

function scrollToSection(event) {
    event.preventDefault();//Isso impede o comportamento padrão do link, que seria a navegação direta para a seção referenciada pelo href.

    const getValorAtributoId = event.currentTarget.getAttribute('href');// Obtém o valor do atributo href (por exemplo, "#section2")
    const targetSessaoPorId = document.querySelector(getValorAtributoId);// Seleciona a seção correspondente com base no ID

    targetSessaoPorId.scrollIntoView({//Isso utiliza o método scrollIntoView para rolar suavemente até a seção selecionada.
      behavior: 'smooth',
      block: 'start'
    });
  }

  const menuLinks = document.querySelectorAll('.header__menuPrincipal a[href^="#"]');//seleciona aqueles links que têm apenas o atributo href que iniciem com "#" (porque poderiam haver outros links dentro desta classe).

  menuLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });