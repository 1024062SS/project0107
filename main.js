var cat=0;
var dog=0;
var cow=0;
var lion=0;
var background_noise=0;


function startClassifictaion() {
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
  classifier.classify(gotResult);
}
function gotResult(error, results) {
  if(error){
      console.error(error);
  }
  else{
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;

      console.log("Red "+random_number_r);
      console.log("Green "+random_number_g);
      console.log("Blue "+random_number_b);

      document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("detected").style.fontFamily = 'Kristi' + ","+'Kristi'+","+'cursive';

      document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
      document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("voice").style.fontFamily = 'Kristi' + ","+'Kristi'+","+'cursive';

      img = document.getElementById("image");

      if(results[0].label == "Barking"){
          img.src = "https://i.pinimg.com/originals/eb/fb/bf/ebfbbf96cb4bd870570c9bdb99168525.gif";
          dog = dog+1;
          document.getElementById("detected").innerHTML = "The Detected Animal  is Dog - "+ dog;
      }
      else if(results[0].label == "Meowing"){
          img.src = "https://i.pinimg.com/originals/90/cb/fc/90cbfc6100f82866f640bb9f5dee93d7.gif";
          cat = cat+1;
          document.getElementById("detected").innerHTML = " The Detected Animal is Cat - "+ cat;
      }
      else if(results[0].label == "Roar"){
          img.src = "https://media4.giphy.com/media/l1BUojJe4cno1U0CgL/200w.gif?cid=6c09b952vav8zrn1d3z97bx6yidfvv2gg7iquh3qif69pnb8&rid=200w.gif&ct=g";
          lion = lion+1;
          document.getElementById("detected").innerHTML = " The Detected Animal is Lion - "+ lion;
      }
      else if(results[0].label == "Mooing"){
          img.src = "https://th.bing.com/th/id/R.b4e11dc2b70207cb94f423386acf3f2c?rik=j%2fSbeyNl%2b8Nc2Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2f5qE%2f9iR5qEgpT.gif&ehk=ShP2z1%2fWaL85z9sRKB1qRZaNUWwnJc9ykc22f6jdMGc%3d&risl=&pid=ImgRaw&r=0";
          cow = cow+1;
          document.getElementById("detected").innerHTML = " The Detected Animal  is Cow - "+ cow;
      }
      else{
          img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
          background_noise = background_noise+1;
          document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
      }
  }
}