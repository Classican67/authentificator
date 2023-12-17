const url = "http://localhost:8000"
import Cookies from "js-cookie"


export const register = async (email,password) => {
    try {
        const response = await fetch(`${url}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        if (response.ok) {
            console.log("Success to register")
        }
    }
    catch(err){
        console.log("Unable to register :"+err)
    }
}

export const login = async (email, password) => {
    try {
        const response = await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        if (response.ok) {
            const data = await response.json();
            Cookies.set("user_token", data.token);
        }
    }
    catch(err){
        console.log(err)
    }
}