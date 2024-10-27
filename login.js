function form_data(event){
event.preventDefault()
    let name = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(name=="Siri" && password=="2308")
        { window.location.href="catalog.html"}
    else{
        document.getElementById("login-info").innerText="Password Mismatch"
    }
}