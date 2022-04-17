import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    console.log('Get', baseUrl)
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const create = newObject => {
    return axios
        .post(baseUrl, newObject)
        .then(response => response.data)
        
}

const remove = id => {
    return axios
        .delete(`${baseUrl}/${id}`)
}

const update = newObject => {
    return axios
            .put(`${baseUrl}/${newObject.id}`, newObject)
            .then(response => response.data)
} 

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove, update }