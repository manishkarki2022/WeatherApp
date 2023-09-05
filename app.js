const searchBtn = document.querySelector('#btn');

const iconButton =  document.querySelector('.icon-button');

const img =  document.querySelector('img')

const degree =  document.querySelector('.degree');


const city =  document.querySelector('.city');


const humidity =  document.querySelector('.humidity-main');



const wind =  document.querySelector('.wind');
const des =  document.querySelector('.des');

async function fetchData(place){
    
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=aca621df9247febebc7b083d480b0584`)
       const data= await response.json();
        console.log(data)
        if(data.cod ==='404'){
            alert(`${data.message}`)
            searchBtn.value =''

            return;
        }
       city.innerHTML = data.name
       const temperatureKelvin = data.main.temp;
       const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);
       degree.innerHTML = `${temperatureCelsius}\u00B0C`;
       humidity.innerHTML=data.main.humidity;
       wind.innerHTML=data.wind.speed
        const iconData = data.weather[0].icon
        img.src = `https://openweathermap.org/img/wn/${iconData}@2x.png`
        des.innerHTML=data.weather[0].description;
      
       
       

    } catch (error) {
        console.log(`error:${error}`)
        
    }
}


iconButton.addEventListener('click',function(){
    const place = searchBtn.value;
    if(place ===''){
        alert("Input is Blank please city your city name")
    }
    else{
        fetchData(place)
    }

    

})