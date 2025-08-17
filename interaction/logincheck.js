let username = prompt("Who's there?","")
if (username == "admin"){
    let password = prompt("Password?","")
    if (password == "TheMaster"){
        alert("Welcome!")
    }else if (password == null){
        alert("Canceled")
    }else{
        alert("Wrong Password")
    }
}else if (username == null){
    alert("Canceled")
}else{
    alert("I don't know you")
}