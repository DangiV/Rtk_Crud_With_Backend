import axios from "axios";

export const makeApi = async (req, url, body) => {
    console.log("method", req, url, body)

    const u = "http://localhost:3020"
    var config = {
        method: req,
        url: u + url,
        data: body
    };

    try {
        const response = await axios(config);
        console.log("res", response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}