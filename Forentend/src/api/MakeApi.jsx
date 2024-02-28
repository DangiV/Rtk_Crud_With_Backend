import axios from "axios";

export const makeApi = async (req, url, body) => {
    console.log("make api", req, url, body)

    const previousUrl = "http://localhost:3020"
    var config = {
        method: req,
        url: previousUrl + url,
        data: body
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}