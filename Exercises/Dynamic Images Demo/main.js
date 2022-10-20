"use strict";

let imageFiles = [{
        path: "https://placekitten.com/200/300",
        name: "Colored cat"
    },
    {
        path: "https://placekitten.com/g/200/300",
        name: "Cute cat"
    },
    {
        path: "https://placekitten.com/g/201/300",
        name: "Cuter cat"
    },

];


const kittenList = document.getElementById("kittenList");


function loadKittenList() {
    imageFiles.forEach((imageFile) => {
        let option = new Option(imageFile.name, imageFile.name);
        kittenList.appendChild(option);
    });
}

function addImage() {
    const selectedValue = kittenList.value;
    let imageFile = imageFiles.find((f) => f.name === selectedValue);
    let img = document.createElement("img");
    img.src = imageFile.path;
    img.alt = imageFile.name;

    const imagesDiv = document.querySelector("#imagesDiv");
    imagesDiv.appendChild(img);
}
 
function clearImages() {
    // imagesDiv.innerHTML = "";
    let imagesDiv = document.querySelector("#imagesDiv");
    let images = document.querySelectorAll("#imagesDiv img");
    images.forEach((image) => imagesDiv.removeChild(image));
  }


window.onload = () => {
    loadKittenList();

    let addImageButton = document.getElementById("addImageButton");
    addImageButton.onclick = addImage;

    const clearImagesButton = document.getElementById("clearImagesButton");
    clearImagesButton.onclick = clearImages;

};