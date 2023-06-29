
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");

const city_name = document.getElementById("city_name");
const my_cloud = document.getElementById("my_cloud");

const temp_type_val = document.getElementById('temp_type_val');
const datahide= document.querySelector('.middle_layer');

const temp_status = document.getElementById('temp_status');


// date and day and month
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
const day = document.getElementById('day').innerText=weekday[d.getDay()];
const today_date = document.getElementById('today_date').innerText=`${d.getDate()} ${month[d.getMonth()]}`;




const getInfo = async(event)=>{
    event.preventDefault();

    let cityVal=cityName.value;

    const apiKey = "cb9a8bdc6d4ccd7e3b057e88d9a19433";

    if(cityVal === ""){
        datahide.classList.add("data_hide");
        city_name.innerText=`Please write the name before search`;
    }else{
        try{
            let url ="https://api.openweathermap.org/data/2.5/weather?q="+cityVal+"&appid="+apiKey;
            const response= await fetch(url);
            const data =await response.json();
            const arrData =[data];
            const image_id= data.weather[0].icon;
        
            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_type_val.innerText= parseFloat(arrData[0].main.temp-273).toFixed(2);

            const imageUrl ="https://openweathermap.org/img/wn/"+ image_id +"@2x.png";
            temp_status.innerHTML=`<img id="myImage"  src=${imageUrl}>`

            datahide.classList.remove("data_hide");
            //example 
            // https://api.openweathermap.org/data/2.5/weather?q=pune&appid=cb9a8bdc6d4ccd7e3b057e88d9a19433
        }catch{

            datahide.classList.add("data_hide");
            city_name.innerText=`Plz write the city name before properly`;
        }
    }

}
submitBtn.addEventListener("click",getInfo);