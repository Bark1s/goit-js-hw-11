import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = event.target.elements.search.value.trim();
    if (inputValue !== "") {
        fetchImages(inputValue).then((resolve) => {
            renderImages(resolve.hits);
            form.reset();
        })
    } else {
        iziToast.show({
            message: 'Search field is empty',
            color: 'red',
            position: 'topCenter',
        });
    }
    });