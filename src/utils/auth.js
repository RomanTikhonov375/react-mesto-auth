export const BASE_URL = 'https://auth.nomoreparties.co'


const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

//Функция создания запроса
const request = (url, options) => {
    return fetch(`${BASE_URL}` + `${url}`, options).then(checkResponse)
}

export const register = ({ password, email }) => {
    return request(`/signup`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
}


export const login = ({ password, email }) => {
    return request(`/signin`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
}

export const checkToken = (jwt) => {
    return request(`/users/me`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        },
        method: 'GET'
    })
}

