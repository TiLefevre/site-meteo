(async function(){

    const apiData = await $.get("http://192.168.202.252:8080/?limit=288");
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
    })()