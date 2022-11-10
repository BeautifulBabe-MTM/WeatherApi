// document.addEventListener('DOMContentLoaded', ()=>{
//     
//     fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//     .then((responce) => responce.json()
//     .then((result)=>{
//         console.log(result);
//         cw.innerText = 'USD buy: ${result[0].buy} sale: ${result[0].sale}'    
//     }))
// });

const data = document.getElementById('cw'); 
async function postData(url = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2bbf8a2a7b0eb34aebac55b813436572') {  
    const response = await fetch(url, 
        {
            [
        { "name": "Киев",
        "local_names": {
          "ascii": "Kiev",
          "ru": "Киев"
        },
        "lat": 51.5128,
        "lon": -0.0918,
        "country": "UA"
      },
      {
        "name": "Днепр",
        "local_names": {
          "en": "Dnepr",
          "ru": "Днепр"
        },
        "lat": 51.5085,
        "lon": -0.1257,
        "country": "UA"
      },
      {
        "name": "Харьков",
        "local_names": {
          "ascii": "Kharkov",
          "ru": "Харьков"
        },
        "lat": 51.5362,
        "lon": -0.103,
        "country": "UA"
      }
]}).then((data)=>{return data.json();});
return response;
};

postData('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2bbf8a2a7b0eb34aebac55b813436572', { answer: 42 })  .then((data) => {
    console.log(data); 
});