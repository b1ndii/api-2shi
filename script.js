// var url = "https://dog.ceo/api/breeds/image/random"
// fetch(url)
//     .then(x => x.json()) // Tipi i tdhanes
//     .then(y => 
//         {document.getElementById("qeni").innerHTML = `
//             <p> qitu osht ni foto e ni qeni random: </p>
//             <img src="${y.message}" alt="ni foto e qenit"/>
//             <p> ${y.status}</p> 
//             `
//     }) // Ku ka me dal  


// var url = "https://api.open-meteo.com/v1/forecast?latitude=42.6629&longitude=21.1655&current_weather=true"
// fetch(url)
//     .then(x => x.json()) // Tipi i tdhanes
//     .then(y => 
//         {document.getElementById("qeni").innerHTML = `
//             <p> qitu jon tdhanat e motit: </p>
//             <p>Latitude: ${y.latitude}</p>
//             <p>Temperature: ${y.current_weather.temperature} ${y.current_weather_units.temperature}</p>
//             <p>Windspeed: ${y.current_weather.windspeed} ${y.current_weather_units.windspeed}</p>            
//             `
//     }) // Ku ka me dal  


var url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://store.steampowered.com/api/appdetails?appids=10");

fetch(url)
    .then(x => x.json())
    .then(y => {
        // y.contents is a JSON string – parse it
        const parsedData = JSON.parse(y.contents);
        const gameName = parsedData["10"].data.name;
        const is_free = parasedData["10"].data.is_free;
        document.getElementById("qeni").innerHTML = `
            <p>Games:</p>
            <p>Name of the game: ${gameName}</p>
            <p>Loja eshte free a jo: ${is_free}</p>
        `;
    })
    .catch(err => {
        console.error("Failed to load game data:", err);
        document.getElementById("qeni").innerHTML = "<p>Error loading game data.</p>";
    });

    //Error nalt!!!!!!!!!!