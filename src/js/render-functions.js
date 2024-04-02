import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function renderImages(array) {
    if (array.length < 1) {
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: 'red',
            position: 'topCenter',
        });
    } else {
        return console.log("fuck this");
    }
}

