//https://teachablemachine.withgoogle.com/models/8kr0l_KyQ/
Webcam.set({
    width: 350,
    height: 300,
    imageFormat: "png",
    pngQuality: 90
})

var previsao_1 = ""

var previsao_2 = ""

var camera = document.getElementById("camera")

console.log(camera)

Webcam.attach("#camera")

function tirar_foto(){
 Webcam.snap(function(data_uri){
    document.getElementById("foto").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
 })   
}

console.log(ml5.version)

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8kr0l_KyQ/model.json", modelLoaded)

function modelLoaded(){
    console.log("modeloCarregado")
}

function check(){
    img = document.getElementById("captured_image")
    classifier.classify(img , gotresult)
}

function gotresult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        previsao_1 = results[0].label
        previsao_2 = results[1].label
        document.getElementById("resultado1").innerHTML = previsao_1
        document.getElementById("resultado2").innerHTML = previsao_2
        if(previsao_1 == "Feliz"){
            document.getElementById("atualizarEmoji").innerHTML = "&#128512"
        }
        if(previsao_1 == "triste"){
            document.getElementById("atualizarEmoji").innerHTML = "&#128532"
        }
        if(previsao_1 == "irritado"){
            document.getElementById("atualizarEmoji").innerHTML = "&#128548"
        }
        if(previsao_2 == "Feliz"){
            document.getElementById("atualizarEmoji2").innerHTML = "&#128522"
        }
        if(previsao_2 == "triste"){
            document.getElementById("atualizarEmoji2").innerHTML = "&#128532"
        }
        if(previsao_2 == "irritado"){
            document.getElementById("atualizarEmoji2").innerHTML = "&#128548"
        }
    }
}