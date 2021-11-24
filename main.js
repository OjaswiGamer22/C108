function starting(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/vkxBQ91rR/model.json",model_ready);

}
function model_ready(){
    classifier.classify(gotResult);

}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_r=Math.floor(Math.random()*255)+1;
    random_g=Math.floor(Math.random()*255)+1;
    random_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_name").innerHTML="I can hear________________"+results[0].label;
    document.getElementById("result_confidence").innerHTML=(results[0].confidence*100).toFixed(2);
    document.getElementById("result_name").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    img1=document.getElementById("char_1");
    img2=document.getElementById("char_2");
    img3=document.getElementById("char_3");
    img4=document.getElementById("char_4");
    if(results[0].label=="Bell"){
        img1.src="might.gif";
        img2.src="batman2.png";
        img3.src="Iron_man.png";
        img4.src="Naruto.png";
    }

    else if(results[0].label=="Clapping"){
        img1.src="all.png";
        img2.src="batman.gif";
        img3.src="Iron_man.png";
        img4.src="Naruto.png";
    }

    else if(results[0].label=="Whistle"){
        img1.src="all.png";
        img2.src="batman2.png";
        img3.src="Iron man2.gif";
        img4.src="Naruto.png";
    }

    else if(results[0].label=="roar"){
        img1.src="all.png";
        img2.src="batman2.png";
        img3.src="Iron_man.png";
        img4.src="naruto2.gif";
    }
    else{
        img1.src="bg.gif";
        img2.src="bg.gif";
        img3.src="bg.gif";
        img4.src="bg.gif"; 
    }




}
}