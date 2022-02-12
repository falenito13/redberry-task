import axios from "axios";

export default function AxiosInstance() {
    let token = localStorage.getItem('userToken');
    if (token) {
        return axios.create({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`,
                contentType: 'multipart/form-data'
            }
        });
    }
}
