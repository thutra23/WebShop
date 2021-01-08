import data from "./data.js"



    // function login(){
    //     let userName = document.getElementById("userName").value
        
    //     let userPassword = document.getElementById("userPassword").value
    // for(let i = 0 ;i<data.user.length;i++)  
    //     if(userName === data.user[i].username ){
    //         if(userPassword === data.user[i].password){

    //         console.log("ok")
            
    //         }
            
    //     }

    // }

 let formSignIn =    document.querySelector('#signIn-form')
formSignIn.onsubmit = (event)=>{
    event.preventDefault()
    
    let userName = formSignIn.uname.value.trim().toLowerCase()
    let userPass = formSignIn.psw.value.trim().toLowerCase()
    
    
}