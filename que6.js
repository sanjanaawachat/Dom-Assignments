//que6:

6.//Create three cards on HTML page and arrange them using flex property in row or horizontal direction 
//and also create button at the bottom named "Change Flex direction". When user clicks on this button,
// the cards arrangement should be changed to vertical direction.
function changeDirection() {
    let item = document.getElementsByClassName("flex_container");
    item[0].style.flexDirection = "column";
    item[0].style.alignItems = "center";
    console.log(item[0]);   
}