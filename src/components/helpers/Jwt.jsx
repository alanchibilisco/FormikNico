import jwt from "jwt-decode"

export const jwtDecoded = (token) =>{
    console.log(token);
    if (token) {
        const decoded = jwt(token)
    return decoded.role
    }
    
}