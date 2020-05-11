function displayAuthenticationStatus() {
    console.log('hello its me here')
    let formStatus = document.querySelector('.form-status')
    let username = document.querySelector("#usernameInput").value
    let password = document.querySelector("#passwordInput").value
    console.log(username + " " + password)
    // string restriction here
    if(username == "") {
        formStatus.style.display = "block"
        formStatus.textContent = "Username is empty"

    } else if (password == "") {
        formStatus.style.display = "block"
        formStatus.textContent = "Password is empty"

    } else {
        $.ajax({
            url: "/authenticate",
            data: {
                username: username,
                password: password
            },
            dataType: "JSON",
            type: "POST",
            success: function(data){
                console.log('success')
                if(data.result == "success") {
                    window.location.pathname = "/userhome";
                } else {
                    formStatus.style.display = "block"
                    formStatus.textContent = data.result
                }
            }
        });
    }

}