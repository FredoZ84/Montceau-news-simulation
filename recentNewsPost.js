function reorganization() {
    //attribution d'une balise span 

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