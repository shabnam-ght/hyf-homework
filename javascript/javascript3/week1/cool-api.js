fetch("http://api.icndb.com/jokes/random/10")
    .then((response) => response.json())
    .then((data) => {
    console.log(data.value);
    });