'use scrict'

window.onload = () => {
    const paragraphs = document.getElementsByTagName("p");

    /*for(p of paragraphs) {
       p.style.border = "1px solid black";
      };*/

    Array.from(paragraphs).forEach((p) => {
        p.style.border = "1px solid black";
    })

    const images = document.querySelectorAll("img");

   /* for (img of images) {
        img.classList.add("roundedImg");
        img.alt = "cookies";
    };*/
    Array.from(images).forEach((img) =>
    {
    img.classList.add("roundedImg");
    img.alt = "cookies"});

    } 
