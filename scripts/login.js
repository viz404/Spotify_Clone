let users=JSON.parse(localStorage.getItem("users"))||[];
let flag=false;
let verify=()=>{
    let flag=false;
    let email_mobile_number=document.getElementById("email_mobile_number").value;
    let password=document.getElementById("password").value;
    users.map(function(elem){
        if((elem.email===email_mobile_number || elem.profile_name===email_mobile_number) && (elem.password===password)){
           flag=true;
        }
        else{
            document.getElementById("email_mobile_number").value="";
            document.getElementById("password").value="";
            
        }
    })
    if(flag){
        window.location.href="../index.html"
    }
    else{
        alert("Invalid credentials!");
    }
}

let tosignup=()=>{
    window.location.href="../pages/signup.html"
}
document.getElementById("signup-btn").addEventListener("click",tosignup);