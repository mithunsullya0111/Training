var loc;
$(document).ready(function () {
    loc = $(".active").val();
   
    weather(loc);
    $(".bars").click(function () {
        $("#lists").slideToggle()
    });

    $(".loc_select").click(function () {
        loc = $(this).val();
        $("#place").text(loc);
        weather(loc);

    });

});

function farenheitToCelcius(temperature) {

    temperature = (temperature - 32) / 1.8;
    return temperature.toFixed(0);

}

function weather(loc) {


    $("#place").text(loc);

    var weather = ['main-weather-condition', 'tue-weather-condition', 'wed-weather-condition', 'thu-weather-condition', 'fri-weather-condition', 'sat-weather-condition', 'sun-weather-condition'];

    var display_day = ["day__info", "tue", "wed", "thu", "fri", "sat", "sun"];

    var temp = ['max-temp', 'tue-max-temp', 'wed-max-temp', 'thu-max-temp', 'fri-max-temp', 'sat-max-temp', 'sun-max-temp'];
    //id of minimum temperature of each day
    var low_temp = ['min-temp', 'tue-min-temp', 'wed-min-temp', 'thu-min-temp', 'fri-min-temp', 'sat-min-temp', 'sun-min-temp',]

    var today = new Date();
    var curday = today.getHours();
    if (curday < 12)
        $("#greeting").text("Good Morning");
    else if (curday >= 12 && curday < 16) {
        $("#greeting").text("Good Afternoon");

    }

    else {
        $("#greeting").text("Good Evening");

    }



    $.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + loc + "%2C%20In%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function (data, status) {

        var obj = data;

        weather_info = obj.query.results.channel.item.forecast;

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
            $("#" + display_day[i]).text(days);

            var image_type = weather_info[i].text;

            if (image_type == "Breezy") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 66% 50%");


            }

            else if (image_type == "Mostly Cloudy") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 36% 7%");

            }

            else if (image_type == "Cloudy") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 96% 7%");

            }

            else if (image_type == "Scattered Showers") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 95% 95%");
            }

            else if (image_type == "Sunny") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 10% 0%");

            }

            else if (image_type == "Mostly Sunny") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 66% 5%");

            }

            else if (image_type == "Partly Cloudy") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 5% 50%");

            }

            else if (image_type == "Scattered Thunderstorms") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 66% 95%");

            }

            else if (image_type == "Thunderstorms") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 66% 95%");

            }

            else if (image_type == "Rainy") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 5% 95%");

            }

            else if (image_type == "Rain") {

                $("#" + weather[i]).css("background", "url('images/weather-report.jpg') 5% 95%");

            }


            var max_temp = farenheitToCelcius(weather_info[i].high) + String.fromCharCode(176);
            var min_temp = farenheitToCelcius(weather_info[i].low) + String.fromCharCode(176);

            // TO print the temperature information

            $("#" + temp[i]).text(max_temp);
            $("#" + low_temp[i]).text(min_temp);

        }
    });


}