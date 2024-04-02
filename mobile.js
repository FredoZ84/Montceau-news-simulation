function isMobileDevice() { 

    let preHeader = document.getElementById("pre-header")
    let initialWidth = "100%"
    let desiredWidth = "112%"

    if(navigator.userAgentData["mobile"]){
        console.log("resize")
        preHeader.style.width = desiredWidth
       return true;
    }
    else {
        
        preHeader.style.width = initialWidth
       return false;
    }
}

isMobileDevice();

// window.addEventListener("load", isMobileDevice )

window.addEventListener("resize", isMobileDevice);

function mobileSize() {
    // Paragraphe des en information de tête
    let justContentParagraph = document.querySelectorAll(".justContent p")
    let desiredFontSize = "15px"
    let initialFontSize = "12px"

    
    for (let index = 0; index < justContentParagraph.length; index++) {

        const element = justContentParagraph[index];

        if (navigator.userAgentData["mobile"]) {
            element.style.fontSize = desiredFontSize 
        } else {
            element.style.fontSize = initialFontSize
        }        
            
    }
    
}

mobileSize()

window.addEventListener("resize", mobileSize);

