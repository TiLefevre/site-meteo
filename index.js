(async function(){

const apiData = await $.get("http://192.168.202.252:8080/?limit=5")
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    responsive : true,
    data: {
        labels: apiData.content.datas.reverse().map(data => moment(data.createdAt * 1000).format("HH:mm")),
        datasets: [{
            label: 'Température',
            data: apiData.content.datas.reverse().map(data => data.temperature),
            yAxisID: 'A',
            backgroundColor: [
                'rgba(54, 162, 235, 0)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Hygrométrie',
            data: apiData.content.datas.reverse().map(data => data.humidity),
            yAxisID: 'B',
            backgroundColor: 
                'rgba(54, 162, 235, 0)',
            borderColor: 
                'rgba(255, 62, 35, 1)',
        }]
    },
    options: {
        scales: {
          yAxes: [{
              
            id: 'A',
            type: 'linear',
            position: 'left',
            scaleLabel:{
                display: true,
                labelString:'degrés °',
            }
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            scaleLabel:{
                display: true,
                labelString:'humidité %',
            }
    
          }]
        }
      }
    });

function weather() {
    
    console.log(apiData.content.datas[0].createAt)
    const meteo = document.getElementById("meteo")
    const meteoImg = document.getElementById("meteoImg")
   
    
    console.log(apiData.content.datas[0].temperature)
    const tempe = document.getElementById("tempe")
    tempe.innerHTML= apiData.content.datas[0].temperature + "°"

    
    if (apiData.content.datas[0].humidity>=95)
    {
        console.log("pluie")
        meteo.innerHTML="Pluvieux"
        meteoImg.innerHTML= "<img src=\"img/pluie.png\">"

    }else if (apiData.content.datas[0].humidity>=80)
    {
        console.log("bcp de nuages")
        meteo.innerHTML="Très nuageux"
        meteoImg.innerHTML = "<img src=\"img/bnuageux.png\">"

    }else if (apiData.content.datas[0].humidity>=50)
    {
        console.log("nuage")
        meteo.innerHTML="Nuageux"
        meteoImg.innerHTML = "<img src=\"img/nuageux.png\">"

    }else if(apiData.content.datas[0].humidity<50)
    {
        console.log("soleil")
        meteo.innerHTML="Ensoleillé"
        meteoImg.innerHTML = "<img src=\"img/soleil.png\">"

    }else if(apiData.content.datas[0].humidity>=80 && apiData.content.datas[0].temperature<=0)
    {
        console.log("neige")
        meteo.innerHTML="Neige"
        meteoImg.innerHTML = "<img src=\"img/neige.png\">"
    }
}
weather()
})()