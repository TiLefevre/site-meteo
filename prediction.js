
(async function(){

    const apiData = await $.get("http://192.168.202.252:8080/?limit=5");

    const datasLength = apiData.content.datas.length
    const firstData = apiData.content.datas[datasLength - 1]
    let dataAvg = {
        temperature: 0,
        humidity: 0,
        createdAt: 0
    }

    for (data of apiData.content.datas) {
        dataAvg.temperature += data.temperature
        dataAvg.humidity += data.humidity
    }

    dataAvg.temperature /= datasLength
    dataAvg.humidity /= datasLength

    const pente = {
        temperature: (firstData.temperature - dataAvg.temperature) / (datasLength - 1 - datasLength / 2),
        humidity: (firstData.humidity - dataAvg.humidity) / (datasLength - 1 - datasLength / 2)
    }

    console.log(firstData.temperature - dataAvg.temperature)

    const prevision = {
        temperature: pente.temperature * 12 + firstData.temperature,
        humidity: pente.humidity * 12 + firstData.humidity
    }

    console.log(prevision)

    function weather() {
    
        console.log(apiData.content.datas[0].createdAt+(300*12))
        const meteo = document.getElementById("meteo")
        const meteoImg = document.getElementById("meteoImg")
       
        
        console.log(prevision.temperature)
        const tempe = document.getElementById("tempe")
        tempe.innerHTML= Math.ceil(prevision.temperature) + "°"
    
        
        if (prevision.humidity>=95)
        {
            console.log("pluie")
            meteo.innerHTML="Pluvieux"
            meteoImg.innerHTML= "<img src=\"img/pluie.png\">"
    
        }else if (prevision.humidity>=80)
        {
            console.log("bcp de nuages")
            meteo.innerHTML="Très nuageux"
            meteoImg.innerHTML = "<img src=\"img/bnuageux.png\">"
    
        }else if (prevision.humidity>=50)
        {
            console.log("nuage")
            meteo.innerHTML="Nuageux"
            meteoImg.innerHTML = "<img src=\"img/nuageux.png\">"
    
        }else if(prevision.humidity<50)
        {
            console.log("soleil")
            meteo.innerHTML="Ensoleillé"
            meteoImg.innerHTML = "<img src=\"img/soleil.png\">"
    
        }else if(prevision.humidity>=80 && prevision.temperature<=0)
        {
            console.log("neige")
            meteo.innerHTML="Neige"
            meteoImg.innerHTML = "<img src=\"img/neige.png\">"
        }
    }
    weather()

    })()
    




