$(document).ready( function() {
$('#searchForm').on('submit', function(e)  {
    e.preventDefault();
  let city = $('#searchCity').val();
  $.ajax({
        url:    "https://api.apixu.com/v1/current.json?key=e3a625102ad248b699f85243170707&q="+city,
        dataType: "json",
        method: 'get',
        success: function(data){
           getWeather(data); 
        }
    });
  
});
    $('#fore').click( function (e){
        e.preventDefault();
        let cityf = $('#searchCity').val();
         $.ajax({
        url:    "http://api.apixu.com/v1/forecast.json?key=e3a625102ad248b699f85243170707&q="+ cityf +"&days=7",
        dataType: "json",
        method: 'get',
        success: function(str){
           getForecast(str); 
        }
    });
    })
});

function getWeather(data){
    
    
    $("#country").html('<h2>' + data.location.name + ', ' + data.location.region + ', '+ data.location.country +'</h2>');
    $("#image").html('<img src="https:'+data.current.condition.icon+'" height="50px" width="50px">');
    $("#clima").html('<h3>' + data.current.condition.text +'</h3><h3><strong>Date and Time</strong> :     ' + data.location.localtime +' </h3><h3><strong>Temperature</strong> :     ' + data.current.temp_c +' &#8451</h3><h3><strong>Temperature feels like</strong> :     ' + data.current.feelslike_c +' &#8451</h3><h3><strong>Atmospheric pressure</strong> :    ' + data.current.pressure_mb + ' millibars</h3><h3><strong>Humidity</strong> :      ' + data.current.humidity + ' %</h3><h3><strong>Wind Speed</strong> :       ' + data.current.wind_mph + ' miles/hour</h3><h3><strong>Wind Direction</strong> :       ' + data.current.wind_degree + ' &deg</h3>');
   
}

function getForecast(str){
    $('#cityName').html("<h2>"+ str.location.name + ', ' + str.location.region + ', '+ str.location.country  +"</h2>"+ "<br>");
     for(var i=1 ; i < 7 ; i++)
        {
             $('#f'+i).html(str.forecast.forecastday[i].date + "<br>" + str.forecast.forecastday[i].day.avgtemp_c + " &#8451" + "<br>" + '<img src="https:'+str.forecast.forecastday[i].day.condition.icon+ '">' + '<br>' +str.forecast.forecastday[i].day.condition.text + '<br>'+str.forecast.forecastday[i].day.avghumidity+" %" + '<br>');
        }
}
    