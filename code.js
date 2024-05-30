function detection() {


    sidebarPubsAdaptation(835)
    contentPubsAdaptation(1110) 

    window.addEventListener("resize",() => {

        sidebarPubsAdaptation(835)
        contentPubsAdaptation(1110) 
     
    })

    const mutationObserver = new MutationObserver(entries => {
        console.log(entries)
        sidebarPubsAdaptation(835)
        contentPubsAdaptation(1110) 
    })

    const sidebar = document.querySelector("#sidebar")
    const content = document.querySelector("#content")
    mutationObserver.observe(sidebar, {childList:true, subtree:true})
    mutationObserver.observe(content, {childList:true, subtree:true})
   
    
}

function sidebarPubsAdaptation(referenceWidth) {

    let sidebar = document.getElementById("sidebar")

    let sidebarPubsExternal = document.querySelectorAll("#sidebar .sidebar_pubs iframe, #sidebar .pub-single-article iframe")

    if (window.innerWidth < referenceWidth) {
            
        for (let index = 0; index < sidebarPubsExternal.length; index++) {

            let element = sidebarPubsExternal[index]
            let multiplier = 0.90 // coefficient multiplicateur
            let widthValueObjective = sidebar.clientWidth*multiplier // objectif de valeur de largeur      
            let scaleValue = widthValueObjective/300

            element.style.transform =`scale(${scaleValue})`
            //element.style.marginBottom = `${-ecart*4-10}px`         
        }
    } 
}

function contentPubsAdaptation(referenceWidth) {

    let post = document.querySelector("#content>.post")

    let contentPubsExternal = document.querySelectorAll("#content .pubs iframe")

    if (window.innerWidth < referenceWidth) {
            
        for (let index = 0; index < contentPubsExternal.length; index++) {

            let element = contentPubsExternal[index]
            let multiplier = 0.95 // coefficient multiplicateur
            let widthValueObjective = post.clientWidth*multiplier // objectif de valeur de largeur      
            let scaleValue = widthValueObjective/728
 
            element.style.transform =`scale(${scaleValue})`       
        }
    }
}

window.addEventListener("load", detection)