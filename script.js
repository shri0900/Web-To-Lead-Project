function beforesubmit(){
 let outputdate=document.querySelector(".outputdate");
 let inputdate=document.querySelector(".inputdate");
 console.log(inputdate.value);//String to Date Conversion according to Locale

 let formatteddate=new Date(inputdate.value).toLocaleDateString("en-IN");
console.log(formatteddate.value);
 outputdate.value=formatteddate;
}