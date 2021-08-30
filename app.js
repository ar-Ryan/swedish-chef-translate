var translateButton = document.querySelector("#btn-translate")
var input = document.querySelector("#text-input")
var output = document.querySelector(".output-div")

var apiURL = "https://api.funtranslations.com/translate/chef.json"

function errorHandler(error){
    console.log(`${error} type of error occured.`)
    alert("Something seems to be wrong, Try again later")
}

function translateText(){
    var text = input.value;
    if(text==""){
        alert("Please enter some text");
        return;
    }
    else{
    const query=`${apiURL}?text=${text}`;
    fetch(query)
    .then(response => response.json())
    .then(data => {output.innerText = data.contents.translated;})
    .catch(errorHandler)
    }
}

translateButton.addEventListener('click',translateText);