function colourChange() {
    const number1 = Math.floor(Math.random() * 255) ;
    const number2 = Math.floor(Math.random() * 255) ;
    const number3 = Math.floor(Math.random() * 255) ;
    
    rgbString = `rgb(${number1}, ${number2}, ${number3})`
    
    document.body.style.background = rgbString; // gets the HTML Background and changes the colour based from rgbString

    document.getElementById("rgbNumber").innerHTML = rgbString; //prints the rgb number underneath
    
    
    console.log(rgbString); // to see if the function works
}



// "OPTIMAL" way 

//This function prevents rewriting multiple methods 
function colourNumber(){
    return Math.floor(Math.random() * 255)
} 
