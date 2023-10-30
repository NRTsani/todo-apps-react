import axios from "axios";

const BASE_URL_API = "https://6527113f917d673fd76d647a.mockapi.io";

const postCreateTask = async (data) => {
    try {
        const url = `${BASE_URL_API}/task`;
        const response = await axios.post(url, data);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTaskList = async () => {
    try {
        const url = `${BASE_URL_API}/task`;
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}
export {
    postCreateTask,
    getTaskList,
}
