function reorganization() {
    //attribution d'une div classe primaryBlock
    let slidhead = document.querySelector(".slidhead")
    let titlePrimaryBlock = document.querySelectorAll(".titlePrimaryBlock")
    let triangle = document.querySelectorAll(".triangle")
    let imgPrimaryBlock = document.querySelectorAll(".imgPrimaryBlock")

    for (let index = 0; index < titlePrimaryBlock.length; index++) {
        //titlePrimaryBlock[index]
        
        let primaryBlock = document.createElement("div")
        primaryBlock.classList.add("primaryBlock")
        slidhead.appendChild(primaryBlock)

        // Dé^placement
        primaryBlock.appendChild(titlePrimaryBlock[index])
        primaryBlock.appendChild(triangle[index])
        primaryBlock.appendChild(imgPrimaryBlock[index])


    }
    //attribution d'une balise span au p

    let paragraphs = document.querySelectorAll(".justContent p")
  
    for (let index = 0; index < paragraphs.length; index++) {

        let element = paragraphs[index];

        let text = element.firstChild

        let span = document.createElement("span")
        span.classList.add("text")
        element.insertBefore(span,text)

        span.appendChild(text)
        let style = getComputedStyle(span)        
    }
}

reorganization()