import axios from "axios"

export const locationFriendly = async(url) => {
    return axios.get(`https://testapi.io/api/tesstlabyo/${url}`)
}

