function detection() {    
    let modal = new Modal(document.getElementById("modal"))

    // si ton height est plus grand que ton width alors conseil
    if (screen.width < screen.height) {
        modal.show()
    } else {
        modal.hide()
    }

    window.addEventListener("resize",() =>{
        console.log("resize")
        if (screen.width < screen.height) {
            modal.show()
        } else {
            modal.hide()
        }
    } )


}

detection()

    

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


*/