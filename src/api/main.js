import axios from "axios"

export const locationFriendly = async() => {
    return axios.get('https://testapi.io/api/tesstlabyo/location')
}

