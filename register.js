let regData = JSON.parse(localStorage.getItem("reg_data")) || [] 
function reg_form(event) {
     event.preventDefault() 
    let username = document.getElementById("username").value
 let password = document.getElementById("password").value
  let re_password = document.getElementById("re_password").value
   console.log(re_password)
 if(password !== re_password)  {
         document.getElementById("reg_info").innerText = "Password Mismatch" 
        }
         else {
             regData.push({
                 username: username,
                  password: password 
                })
              localStorage.setItem("reg_data", JSON.stringify(regData)) 
              console.log(JSON.parse(localStorage.getItem("reg_data"))) 
              alert("successfully registered")
               window.location.href = "login.html"
             }
             }