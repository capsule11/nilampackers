import { client, urlFor } from "..";
export const getWhyChooseUsImg = async () => {
    try {
        const [res] = await client.fetch('*[_type == "page_images" && page_name == "Home" && category_name == "WhyChooseUs"]')
        console.log(res);

        return urlFor(res.images[0].asset._ref)
    } catch (error) {
        console.error(error);
    }
} 