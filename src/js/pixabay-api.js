export function fetchImages(input) {
    const searchParams = new URLSearchParams({
        key: "43196353-af8080fd641e1fef708fa4d1d",
        q: input,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    
    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.log(error);
        })
}