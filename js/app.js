function login(){
    axios.request({
        method : "POST",
        url : "https://reqres.in/api/login",
        data : {
            email : document.getElementById(`usernameBox`).value,
            password : document.getElementById(`passwordBox`).value
        }
    }).then(loginSuccess).catch(loginFailure);
}

function goHome(){
    document.location.href = "/home.html";
}

function loginSuccess(response){
    console.log(response);
    Cookies.set(`sessionToken`, response.data.token);
    alert(`welcome to the website`);
    goHome();
}

function loginFailure(error){
    console.log(error.response.data.error);
    alert(error.response.data.error);
}

document.getElementById(`loginButton`).addEventListener(`click`, login);