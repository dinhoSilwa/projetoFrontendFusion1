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

