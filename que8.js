//que8:

8.//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function replaceText(){
    let element = document.getElementsByTagName("p");
    element[0].innerText = "Welcome to Elevation Academy";
    element[0].style.color = "black"
    console.log(element[0]);
   
}