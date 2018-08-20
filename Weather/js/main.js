
// On load this function will be called
// Author:Mithun S

function weather() {
    var xhttp = new XMLHttpRequest();
    var response_string;
    var response_objects;
    var weather_info;

    // ids of weather conditiion images
    var weather = ['main-weather-condition', 'tue-weather-condition', 'wed-weather-condition', 'thu-weather-condition', 'fri-weather-condition', 'sat-weather-condition', 'sun-weather-condition']
    
    // id of days
    var display_day = ['day__info', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',]
    
    //id of maximum temperature of each day
    var temp = ['max-temp', 'tue-max-temp', 'wed-max-temp', 'thu-max-temp', 'fri-max-temp', 'sat-max-temp', 'sun-max-temp'];
    
    //id of minimum temperature of each day
    var low_temp = ['min-temp', 'tue-min-temp', 'wed-min-temp', 'thu-min-temp', 'fri-min-temp', 'sat-min-temp', 'sun-min-temp',]

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response_string = this.responseText;
            response_objects = JSON.parse(response_string);
            console.log(response_objects);
            weather_info = response_objects.query.results.channel.item.forecast;

            //  Get the current date and time and greet the user

            var today = new Date();
            var curday = today.getHours();
            if (curday < 12)
                document.getElementById('greeting').innerHTML = "Good Morning";
            else if (curday >= 12 && curday < 16) {
                document.getElementById('greeting').innerHTML = "Good Afternoon";

            }

            else {
                document.getElementById('greeting').innerHTML = "Good Evening";

            }
            var days = "";

            for (var i = 0; i <= 6; i++) {

                if (weather_info[i].day == "Mon") {
                    days = "MONDAY";
                }
                else if (weather_info[i].day == "Tue") {
                    days = "TUESDAY";

                }
                else if (weather_info[i].day == "Wed") {
                    days = "WEDNESDAY";

                }
                else if (weather_info[i].day == "Thu") {
                    days = "THURSDAY";

                }
                else if (weather_info[i].day == "Fri") {
                    days = "FRIDAY";

                }
                else if (weather_info[i].day == "Sat") {
                    days = "SATURDAY";

                }
                else if (weather_info[i].day == "Sun") {
                    days = "SUNDAY";

                }

                var image_type = weather_info[i].text;
                console.log(image_type);

                //To display whether the weather is breezy or sunny etc.


                if (image_type == "Breezy") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 68% 52%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Mostly Cloudy") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 40% 7%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Cloudy") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 95% 13%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Scattered Showers") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 95% 95%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Sunny") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 10% 0%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Mostly Sunny") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 94% 7%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Partly Cloudy") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 5% 50%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Scattered Thunderstorms") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 67% 89%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                else if (image_type == "Rainy") {

                    var weather_image = document.getElementById(weather[i]);
                    weather_image.style.background = "url('images/weather-report.jpg') 5% 95%";
                    weather_image.style.height = "120px";
                    weather_image.style.width = "150px";
                }

                //Result of if-else condition will be printed
                document.getElementById(display_day[i]).innerHTML = days;
                var max_temp = farenheitToCelcius(weather_info[i].high);
                var min_temp = farenheitToCelcius(weather_info[i].low);

                // TO print the temperature information

                document.getElementById(temp[i]).innerHTML = max_temp + '&deg';
                document.getElementById(low_temp[i]).innerHTML = min_temp + '&deg';


            }

        }

    };

    var loc = document.getElementById('Location').value;
    xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + loc + "%2C%20In%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
    xhttp.send();


}

// Convert from celsius to farahneit

function farenheitToCelcius(temperature) {

    temperature = (temperature - 32) / 1.8;
    return temperature.toFixed(0);



}