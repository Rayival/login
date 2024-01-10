// var password = prompt("masukan password");

// if(password == "190607"){
//     document.write("<h2>Anda berhasil login!</h2>");
// } else {
//     document.write("<p>Password salah!</p>");
// }

function Login() {
    var done = 0;
    var username = document.login.username.value;
    username = username.toLowerCase();
    var password = document.login.password.value;
    password = password.toLowerCase();
    if (username == "rayival" && password == "123") {
        window.location.href = "lat.html";
    } else
        if (done == 0) {
            alert("Username/Password salah!");
        }
}

