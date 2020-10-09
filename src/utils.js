


export function saveUser(value) {
    if (window && window.localStorage) {
        return window.localStorage.setItem("test", JSON.stringify(value));
    }
    return null;
}

export function getUserToken() {
    if (window && window.localStorage) {
        return JSON.parse(window.localStorage.getItem("test"));
    }

    return null;
}


export const isLoggedInUtils = () => {
    let token = getUserToken();
    return token;
}

export function logout() {
    saveUser(null);
    return new Promise((res, rej) => res(true));
}