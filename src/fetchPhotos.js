import axios from "axios";

export async function fetchPhotos(searchedValue, page) {
    const params = new URLSearchParams({
        key: "28056380-7ebf030984661b6034d156d96",
        q: searchedValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 40,
        page,
    });

    try {
        const response = await axios({
            method: 'get',
            url: `https://pixabay.com/api/?${params}`,
        });
        return response.data;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};