let getCookies = Cookies.get(`sessionToken`);
console.log(getCookies);

function unknown(){
    if (getCookies == false){
        document.getElementById(`error`).innerHTML = "";
    }else{
        apiRequest();            
    }
}
unknown()

function goBack(){
    document.location.href = "/index.html";
}

function apiRequest(){
    axios.request({
        url : "https://reqres.in/api/unknown",
        method : "GET"
    }).then(apiSuccess).catch(apiFailure);
}

function apiSuccess(response){
    console.log(response);
    console.log(response.data.data);
    let array = response.data.data;
    document.getElementById(`apiResult`).insertAdjacentHTML(`beforeend`, `<p>Color Name: ${array[0].name}</p>`)
    document.getElementById(`apiResult`).insertAdjacentHTML(`beforeend`, `<p>Year Created: ${array[0].year}</p>`)
    document.getElementById(`apiResult`).insertAdjacentHTML(`beforeend`, `<p>  ${array[0].color}</p>`)
    document.getElementById(`apiResult`).style.width = "180px";
    document.getElementById(`apiResult`).style.height = "90px";
    document.getElementById(`apiResult`).style.backgroundColor = array[0].color;
    document.getElementById(`apiResult2`).insertAdjacentHTML(`beforeend`, `<p>Color Name: ${array[1].name}</p>`)
    document.getElementById(`apiResult2`).insertAdjacentHTML(`beforeend`, `<p>Year Created: ${array[1].year}</p>`)
    document.getElementById(`apiResult2`).insertAdjacentHTML(`beforeend`, `<p>  ${array[1].color}</p>`)
    document.getElementById(`apiResult2`).style.width = "180px";
    document.getElementById(`apiResult2`).style.height = "90px";
    document.getElementById(`apiResult2`).style.backgroundColor = array[1].color;
    document.getElementById(`apiResult3`).insertAdjacentHTML(`beforeend`, `<p>Color Name: ${array[2].name}</p>`)
    document.getElementById(`apiResult3`).insertAdjacentHTML(`beforeend`, `<p>Year Created: ${array[2].year}</p>`)
    document.getElementById(`apiResult3`).insertAdjacentHTML(`beforeend`, `<p>  ${array[2].color}</p>`)
    document.getElementById(`apiResult3`).style.width = "180px";
    document.getElementById(`apiResult3`).style.height = "90px";
    document.getElementById(`apiResult3`).style.backgroundColor = array[2].color;
    document.getElementById(`apiResult4`).insertAdjacentHTML(`beforeend`, `<p>Color Name: ${array[3].name}</p>`)
    document.getElementById(`apiResult4`).insertAdjacentHTML(`beforeend`, `<p>Year Created: ${array[3].year}</p>`)
    document.getElementById(`apiResult4`).insertAdjacentHTML(`beforeend`, `<p>  ${array[3].color}</p>`)
    document.getElementById(`apiResult4`).style.width = "180px";
    document.getElementById(`apiResult4`).style.height = "90px";
    document.getElementById(`apiResult4`).style.backgroundColor = array[3].color;
    document.getElementById(`apiResult5`).insertAdjacentHTML(`beforeend`, `<p>Color Name: ${array[4].name}</p>`)
    document.getElementById(`apiResult5`).insertAdjacentHTML(`beforeend`, `<p>Year Created: ${array[4].year}</p>`)
    document.getElementById(`apiResult5`).insertAdjacentHTML(`beforeend`, `<p>  ${array[4].color}</p>`)
    document.getElementById(`apiResult5`).style.width = "180px";
    document.getElementById(`apiResult5`).style.height = "90px";
    document.getElementById(`apiResult5`).style.backgroundColor = array[4].color;
    document.getElementById(`apiResult6`).insertAdjacentHTML(`beforeend`, `<p>Color Name: ${array[5].name}</p>`)
    document.getElementById(`apiResult6`).insertAdjacentHTML(`beforeend`, `<p>Year Created: ${array[5].year}</p>`)
    document.getElementById(`apiResult6`).insertAdjacentHTML(`beforeend`, `<p>  ${array[5].color}</p>`)
    document.getElementById(`apiResult6`).style.width = "180px";
    document.getElementById(`apiResult6`).style.height = "90px";
    document.getElementById(`apiResult6`).style.backgroundColor = array[5].color;
}

function apiFailure(error){
    console.log(error);
    alert(error);
}

function logout(){
    Cookies.remove(`sessionToken`);
    document.location.href = "/index.html"
}

document.getElementById(`logout`).addEventListener(`click`, logout);
document.getElementById(`homeButton`).addEventListener(`click`, goBack);