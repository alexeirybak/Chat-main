const host: string = 'https://wedev-api.sky.pro/api/v2/alexeirybak14/comments'

export async function getApiComments({ token }: { token: string }) {
    return fetch(host, {
        method: 'GET',
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        if (response.status === 401) {
            throw new Error('Нет авторизации')
        }
        if (response.status === 500) {
            throw new Error('Сервер сломался, попробуйте позже')
        }
        return response.json()
    })
}

export async function addApiComments({ text, token }: { text: string, token: string }) {
    return fetch(host, {
        method: 'POST',
        body: JSON.stringify({
            text,
        }),
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Комментарий должен быть не короче 3 символов')
        }
        if (response.status === 500) {
            throw new Error('Сервер сломался, попробуй позже')
        }
        return response.json()
    })
}

export async function answerApiComments({ text, token }: { text: string, token: string }) {
    return fetch(host, {
        method: 'POST',
        body: JSON.stringify({
            text: `Отредактировал(а): ${text}`.replace(
                /Отредактировал(а): Отредактировал(а):/g,
                'Отредактировал(а):',
            ),
        }),
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Комментарий должен быть не короче 3 символов')
        }
        if (response.status === 500) {
            throw new Error('Сервер сломался, попробуй позже')
        }
        return response.json()
    })
}

export async function loginUser({ login, password }: { login: string, password: string }) {
    return fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Неверный логин или пароль')
        }
        return response.json()
    })
}

export async function regUser({ login, password, name }: { login: string, password: string, name: string }) {
    return fetch('https://wedev-api.sky.pro/api/user', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
            name,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Такой пользователь уже существует')
        }
        return response.json()
    })
}

export function deleteApiComments(id: number, token: string) {
    return fetch(`${host}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: token,
        },
    })
}

export async function addLike(token: string, id: number) {
    return fetch(`${host}/${id}/toggle-like`, {
        method: 'POST',
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        return response.json()
    })
}
