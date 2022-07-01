//que7:


7.//<h1>Hello</h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
//Ans:

function changeColor(){
    let element = document.getElementById("text");
    element.style.color = "red";
    element.id = "heading";
    console.log(element);
}