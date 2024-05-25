const fadeIn = (item) => {
    var opacity = 0; 
    var intervalID = setInterval(function() { 
    
        if (opacity < 1) { 
            opacity = opacity + 0.05 
            item.style.opacity = opacity; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 50); 

    console.log("fading in");
}