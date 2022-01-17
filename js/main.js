let urlChiste = "https://icanhazdadjoke.com/";
let urlChiste2 = "https://api.icndb.com/jokes/random";
let chiste = document.getElementById("chiste");

let selectorChiste = () => {
    if((Math.floor((Math.random()* 9)+1)%2)===0) {
        chiste1();
    }
    else {
        chiste2();
    }
}

let chiste1 = () => {
    axios ( {
        method: 'GET',
        url: urlChiste,
        headers: {
            'Accept': 'application/json'
        }
    }).then((chistes) => {
        console.log(chistes.data.joke)
        chiste.innerHTML =chistes.data.joke;
    })
}

let chiste2= () => {
    axios ( {
        method: 'GET',
        url: urlChiste2,
    }).then((chistes) => {
        console.log(chistes.data.value.joke)
        chiste.innerHTML =chistes.data.value.joke;
    })
}

 let clima = document.getElementById("elClima");
 let climaBcn = () => {
     let elClima = 'https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&lang=es&units=metric&appid=9798fb438a4817706aacb20ec8f74633';
            
     axios({
         method: 'GET', 
         url: elClima
     }).then(data => {
         console.log(data.data.weather[0].description)
         clima.innerHTML = `Ahora en Barcelona: ${data.data.weather[0].description}`
     })

 }

