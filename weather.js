$(document).ready( function() {
$('#searchForm').on('submit', function(e)  {
    e.preventDefault();
  let city = $('#searchCity').val();
  $.ajax({
        url:    "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=7b59acf5e3dd562ebb2dfe7fb89d3c4b&units=metric",
        dataType: "jsonp",
        method: 'get',
        success: function(data){
           getWeather(data); 
        }
    });
  
});
});

function getWeather(data){
    $("#country").html('<h2>' + data.name + ', ' + data.sys.country + '</h2>');
    $("#image").html('<img src="http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png" height="50px" width="50px">');
    $("#clima").html('<h3>' + data.weather[0].main +'</h3><h3>'+ data.weather[0].description + '</h3><h3><strong>Temperature</strong> :     ' + data.main.temp +' &#8451</h3><h3><strong>Atmospheric pressure</strong> :    ' + data.main.pressure + ' hPa</h3><h3><strong>Humidity</strong> :      ' + data.main.humidity + ' %</h3><h3><strong>Temperature Range</strong> :     ' + data.main.temp_min + ' &#8451  -  ' + data.main.temp_max + ' &#8451</h3><h3><strong>Wind Speed</strong> :       ' + data.wind.speed + ' meter/sec</h3><h3><strong>Wind Direction</strong> :       ' + data.wind.deg + ' &deg</h3>');

}
        