window.onload = function () {
    date1();
    locationchange('hyderabad');
    addlocationlist();
}
function date1() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
    });

    const formattedTime = currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    document.getElementById('displaydate').innerHTML = formattedDate;
    document.getElementById('time').innerHTML = "Time " + formattedTime;
}

function addlocationlist() {
    var select = document.getElementById('locationlist');
    var cities = ['Mumbai', 'Hyderabad', 'Karnataka', 'Chennai', 'Delhi', 'Indore', 'Jaipur', 'Surat'];
    for (var i = 0; i < cities.length; i++) {
        var list = "<li onclick=" + "locationchange('" + cities[i] + "')" + "><a class=" + "dropdown-item" + ">" + cities[i] + "</a></li>";
        select.innerHTML += list;

    }
}


function locationchange(locationdetails) {
    link = "https://api.openweathermap.org/data/2.5/weather?q=" + locationdetails + "&appid=7eab817d912539a1077384e0bdc13b54";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function () {
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById("weather").innerHTML = obj.weather[0].description;
        document.getElementById('location').innerHTML = obj.name;
        document.getElementById("temp").innerHTML = Math.round(obj.main.temp - 273.15);
        document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
    }
    if (request.status >= 200 && request.status < 400) {
        var temp = obj.main.temp;
    }
    else {
        console.log("The City is not avaible");
    }
    request.send();
}