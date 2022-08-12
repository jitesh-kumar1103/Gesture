Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
    })
    web_cam=document.getElementById("camera");
    Webcam.attach('#camera');
    prediction="";
    
    function takesnapshot()
    {
        Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
    }
    function speak(){
    var synth=window.speechSynthesis;   
    speech_1="the first prediction is "+prediction;
    
    var utterThis = new SpeechSynthesisUtterance(speech_1);
    synth.speak(utterThis);
    
    
    }
    console.log('ml5 version:', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/25U69UBV7/model.json',modelLoaded);
    function modelLoaded() {
    console.log('Model Loaded!'); }
    function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img, gotResult);
     
    
    
    }
    function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("result_gesture_name_1").innerHTML=results[0].label;
    
    prediction=results[0].label;
    
    speak();
    if(results[0].label=="happy"){
        document.getElementById("update_gesture_1").innerHTML="&#128512;";
    }
    if(results[0].label=="sad"){
        document.getElementById("update_geture_1").innerHTML="&#128546;";
    
    }
    if(results[0].label=="angry"){
        document.getElementById("update_gesture_1").innerHTML="&#128545;";
    
    }
    
    }
    }