(async function(){
    const apiData = await $.get("http://192.168.202.252:8080/?limit=1");

        apiData.content.datas[0].createAt
        apiData.content.datas[0].temperature
        apiData.content.datas[0].humidity
    
        console.log(apiData.content.datas[0].temperature)
        const tempe = document.getElementById("temp")
        tempe.innerHTML= apiData.content.datas[0].temperature + "°"
        
        console.log(apiData.content.datas[0].humidity)
        const humi = document.getElementById("humi")
        humi.innerHTML= apiData.content.datas[0].humidity + "%"
    
        const buttonElement = document.getElementById("send");
        buttonElement.addEventListener("click",function(){
            sendMail()
        })

        function sendMail()
        {
            var yourMessage = "il fait "+ apiData.content.datas[0].humidity + ", l'humidité est de " + apiData.content.datas[0].humidity + ".";
            var subject = "Mail balise météo"
            document.location = "mailto:"+document.getElementById("mail").value +"?subject="
                + encodeURIComponent(subject)
                + "&body=" + encodeURIComponent(yourMessage);
        }    
})()
