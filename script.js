//1.create a request variable
var request = new XMLHttpRequest();
//2.create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. send tht connection
request.send();
//4. register a event listener. once tht data is ready,load the data
request.onload = function (){
  let countrydata = JSON.parse(this.response);

    
          for(let i in countrydata){
      getWeatherData(countrydata[i].name,countrydata[i].latlng[0],countrydata[i].latlng[1]);
         
          }
      
  
}

function getWeatherData(name,lat,lng){
 let apiKey = '20b80a4ffcaec4e39dff63d18d03a9de';
  let request = new XMLHttpRequest();
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
  //2.create a connection
  request.open('GET',url,true);
  //3. send tht connection
  request.send();
  request.onload = function(){

    try{
    let weatherData = JSON.parse(this.response);
  
       console.log(`${name}:${weatherData.main.temp}`);
      }
    
    catch(e){
      console.log("Invalid response from API for"+name);
    }

  } 
  
}



