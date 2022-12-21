import jwt from "jwt-decode"

export const jwtDecoded = (token) =>{
    if (token) {
        const decoded = jwt(token)
    return decoded.role
    }
    
}