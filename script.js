let captchachecked=false;
function beforesubmit(){

    if(captchachecked){

        let outputdate=document.querySelector(".outputdate");
        let inputdate=document.querySelector(".inputdate");
        console.log(inputdate.value);//String to Date Conversion according to Locale
        
        let formatteddate=new Date(inputdate.value).toLocaleDateString("en-IN");
        console.log(formatteddate.value);
        outputdate.value=formatteddate;
    }else{
        alert('Please Complete Recaptcha Challenge First To Submit Your Form')
    }
}

function timestamp() {
 var response = document.getElementById("g-recaptcha-response");
 if (response == null || response.value.trim() == "")
  {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
}
 } 
    setInterval(timestamp, 500);

    function captchasuccess(){
        captchachecked=true;
    }