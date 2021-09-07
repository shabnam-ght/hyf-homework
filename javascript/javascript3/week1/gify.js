
const api = "M2KTGATuXEWVW5frNq2DvOrVHDvDsjEw"
const inputNumber = document.getElementById("searchNumber")
const inputGify = document.getElementById("searchWord")
const ul = document.createElement('ul')
const body = document.querySelector("body")
body.appendChild(ul)
const button = document.getElementById("gifySearch")


const getGif = function () {

    fetch(`http://api.giphy.com/v1/gifs/search?q=${inputGify.value}&api_key=${api}&limit=${inputNumber.value}`)
        .then(Response => Response.json())
        .then(data => {
            sendData(data)
            console.log(data);
        })
}


function sendData(gif) {
    const gifsArray = gif.data;
    ul.innerHTML = "";
    gifsArray.forEach(element => {
        const li = document.createElement("li")
        ul.appendChild(li)
        const img = document.createElement("img")
        li.appendChild(img)
        img.src = element.images.original.url
    });
}

button.addEventListener('click', () => {
    getGif()
})