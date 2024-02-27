const imagem = document.querySelectorAll(".hero__mosaico-imgs img");

imagem.forEach((imageSelected) => {
  const hover = () => {
    imageSelected.classList.toggle("selected");
    if (imageSelected.alt == "davi" || imageSelected.alt == "dinho") {
      imageSelected.style.boxShadow = " 0px 0px 30px 0px rgb(22, 197, 134)";
    }
    if (imageSelected.alt == "mércia") {
      imageSelected.style.boxShadow = "0px 0px 30px 0px rgb(255, 112, 112)";
    }
    if (imageSelected.alt == "ricardo" || imageSelected.alt == "nico") {
      imageSelected.style.boxShadow = "0px 0px 30px 0px rgb(255, 215, 115)";
    }
  };

  imageSelected.addEventListener("mouseenter", hover);

  imageSelected.addEventListener("mouseleave", hover);

  imagem.forEach((noimageSelected) => {
    if (noimageSelected !== imageSelected) {
      const noHover = () => {
        noimageSelected.classList.toggle("noselected");
      };
      const removeBox = () => {
        imageSelected.style.boxShadow = "none";
        noimageSelected.classList.toggle("noselected");
      };
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
      clickedIcon.classList.remove("ti-x");
      clickedIcon.classList.add("ti-menu-2");
      console.log(`o menu está fechado: ${clickedIcon.classList}`);
    } else if (iconClass.contains("ti-menu-2")) {
      clickedIcon.classList.remove("ti-menu-2");
      clickedIcon.classList.add("ti-x");
      console.log(`o menu está aberto: ${clickedIcon.classList}`);
    }
  });
});

function showBoxShadow() {
  const imagemContainer = document.querySelectorAll(".aboutus .box");

  imagemContainer.forEach((boxSelected) => {
    function boxAbout() {
      boxSelected.classList.toggle("boxAbout");
    }
    boxSelected.addEventListener("mouseenter", boxAbout);

    boxSelected.addEventListener("mouseleave", boxAbout);
  });
}

showBoxShadow();

/* funcao da tecnologia */

const logoTecnologia = document.querySelectorAll(".logos__1 li");
logoTecnologia.forEach((itemSelecionado)=>{
  function itemSelect(){
    itemSelecionado.classList.toggle("selected"); 
    


    
  }
  itemSelecionado.addEventListener("mouseenter", itemSelect);
  itemSelecionado.addEventListener("mouseleave", itemSelect);


  logoTecnologia.forEach((naoSelecionado)=>{
    if(naoSelecionado !== itemSelecionado){
      function itemNoSelect(){
        naoSelecionado.classList.toggle("noselected");

        }
      itemSelecionado.addEventListener("mouseenter", itemNoSelect);
      itemSelecionado.addEventListener("mouseleave", itemNoSelect);
      
    
    }

  })
  


})