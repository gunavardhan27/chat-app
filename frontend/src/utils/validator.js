export const usernameValidator = (username)=>{
    if(username.length < 6 || username.includes('-')){
        return ({isValid:false,errorMessage:'username invalid'})
    }

}