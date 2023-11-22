previsao1 = "";
previsao2 = "";

Webcam.set({
    width: 350,
    height: 350,
    imageFormat : 'png',
    pngQuality: 90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');


function takeSnapshot(){
    Webcam.snap(
        function(data_url){
            document.getElementById("foto").innerHTML = '<img id="captura" src="'+data_url+'"/>'
        }
    )
}

classificar = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dgl72Jtn9/', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")
}
function check()
{
  img = document.getElementById('foto');
  classificar.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
  console.error(error);
} else {
  console.log(results);
  document.getElementById("resultado1").innerHTML = results[0].label;
  document.getElementById("resultado2").innerHTML = results[1].label;
  previsao1= results[0].label;
  previsao2= results[1].label;
  speak();
  if(results[0].label == "feliz")
  {
      document.getElementById("atualizarEmoji1").innerHTML = "&#128522;";
  }
  if(results[0].label == "triste")
  {
      document.getElementById("atualizarEmoji1").innerHTML = "&#128532;";
  }
  if(results[0].label == "irritado")
  {
      document.getElementById("atualizarEmoji1").innerHTML = "&#128548;";
  }

  if(results[1].label == "feliz")
  {
      document.getElementById("atualizarEmoji2").innerHTML = "&#128522;";
  }
  if(results[1].label == "triste")
  {
      document.getElementById("atualizarEmoji2").innerHTML = "&#128532;";
  }
  if(results[1].label == "irritado")
  {
      document.getElementById("atualizarEmoji2").innerHTML = "&#128548;";
  }
}
}


