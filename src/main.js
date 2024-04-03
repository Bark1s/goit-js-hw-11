import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import { gallery, renderImages } from "./js/render-functions";

export const loadScreen = document.querySelector(".loader");

function showLoadScreen() {
    loadScreen.classList.remove("is-hidden")
};

export function hideLoadScreen() {
    loadScreen.classList.add("is-hidden")
};

const form = document.querySelector(".form");

export const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    showLoadScreen();
    gallery.innerHTML = "";
    let inputValue = event.target.elements.search.value.trim();
    if (inputValue !== "") {
        fetchImages(inputValue).then((resolve) => {
            renderImages(resolve.hits);
            hideLoadScreen();
            form.reset();
        })
            .catch((error) => {
                console.log(error);
                hideLoadScreen();
            });
    } else {
        iziToast.show({
            message: 'Search field is empty',
            color: 'red',
            position: 'topRight',
        });
        hideLoadScreen();
    }
    });