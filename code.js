function detection() {

    const referenceWidth = 835

    sidebarPubsAdaptation(referenceWidth)

    window.addEventListener("resize",() => {

        sidebarPubsAdaptation(referenceWidth)
     
    })

    const mutationObserver = new MutationObserver(entries => {
        console.log(entries)
        sidebarPubsAdaptation(referenceWidth)
      })
      const sidebar = document.querySelector("#sidebar")
      mutationObserver.observe(sidebar, {childList:true, subtree:true})
   
    
}

function sidebarPubsIteration() {
    for (let index = 0; index < sidebarPubsExternal.length; index++) {
        const element = sidebarPubsExternal[index];
        console.log(element)
    }
}

function sidebarPubsAdaptation(referenceWidth) {

    let sidebar = document.getElementById("sidebar")

    let sidebarPubsExternalText ="#sidebar>.sidebar_pubs>div>div,#sidebar>.sidebar_pubs>ins.adsbygoogle>*"

    let sidebarPubsExternal = document.querySelectorAll(sidebarPubsExternalText)


    if (window.innerWidth < referenceWidth) {
            
        for (let index = 0; index < sidebarPubsExternal.length; index++) {

            let element = sidebarPubsExternal[index]
            let multiplier = 0.95 // coefficient multiplicateur
            let widthValueObjective = sidebar.clientWidth*multiplier // objectif de valeur de largeur      
            let scaleValue = widthValueObjective/element.clientWidth

            //console.log(scaleValue)

            element.style.transform =`scale(${scaleValue})`
            //element.style.marginBottom = `${-ecart*4-10}px`         
        }
    } 
}

window.addEventListener("load", detection)

/*
let slidhead = document.getElementsByClassName('slidhead')[0]
let sidebarPubsInternal = document.querySelectorAll(".sidebar_pubs a")

for (let index = 0; index < sidebarPubsInternal.length; index++) {
    let element = sidebarPubsInternal[index];
    element.classList.add("sidebar_pubs_Internal")

    let container = document.createElement("div")
    container.classList.add("sidebar_pubs_Internal_container")
    
    slidhead.insertBefore(container,slidhead.children[index+index+1])
    container.appendChild(element.cloneNode(true))    

}
*/
/*
console.log(slidhead.lastChild)

slidhead.lastChild.addEventListener("mouseenter",()=>{
    console.log("ok")
})

  */  

/*
id page accueil = 174196af0c2d08889
essai pour la page d'article
document.querySelector("#174196af0c2d08889 a img")
let iframeContainer = document.getElementById("Montceaunews_MTF_728x90_779153-iframe-container")

let iframes = document.querySelectorAll("#sidebar iframe")
let iframesImg =  document.querySelectorAll("#sidebar iframe img")

for (let index = 0; index < iframes.length; index++) {
    let element = iframes[index];
    element.width = element.width * 0.2
    element.height = element.height * 0.2
    //console.log(element.width)

}

for (let index = 0; index < sidebarPubs.length; index++) {
    let element = sidebarPubs[index];

    element.style.width =  "90% !important"
    element.style.height = "90% !important"
    
}
*/

function testInsertion(){
    let head  = document.querySelector("head")
    console.log(head)

    /*	<script defer src="https://fredoz84.github.io/Montceau-news-simulation/sliderPubsConfiguration.js"></script>
		<script defer src="https://fredoz84.github.io/Montceau-news-simulation/slider.js"></script>
		<script defer src="https://fredoz84.github.io/Montceau-news-simulation/header.js"></script>
		<script defer src="https://fredoz84.github.io/Montceau-news-simulation/recentNewsPost.js"></script>
		<script defer src="https://fredoz84.github.io/Montceau-news-simulation/footer.js"></script>
        <script defer src="https://fredoz84.github.io/code.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css?_cacheOverride=1713172580443">
		<link rel="stylesheet" href="https://fredoz84.github.io/code.css">
    */


}