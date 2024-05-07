function reconfiguration() {
    let body = document.querySelector("body")
    let preHeader = document.getElementById("pre-header")
    let firstChild = document.getElementById("firstChild")
    
    // insertion d'un header 
    let header = document.createElement("header")
    body.insertBefore(header,preHeader)

    header.appendChild(preHeader)
    header.appendChild(firstChild)
    
    let headerTop = document.getElementById("header_top")

    //let logo = document.querySelector("#header_top a")
    let searchBlock = document.getElementById("search_block")
    let wBlock = document.getElementById("wblock")

    let otherBlocks = document.createElement("div")
    otherBlocks.id = "other_blocks"
    headerTop.appendChild(otherBlocks)

    // Déplacement des éléments
    otherBlocks.appendChild(searchBlock)
    otherBlocks.appendChild(wBlock)

    // Creation d'une icon pour la fermeture du menu
    let menuList = document.getElementById("menu_list")

    let closeMenu = document.createElement("i")
        closeMenu.id = "close_menu"
        closeMenu.classList.add("fa-solid")
        closeMenu.classList.add("fa-xmark")
        menuList.appendChild(closeMenu)

    closeMenu.addEventListener("click",()=>{
       menuList.style.display ="none"
    })

    // Creation d'un icone menu pour les mobiles
    let iconMenu = document.createElement("i")
    iconMenu.id = "icon_menu"
    iconMenu.classList.add("fa-solid")
    iconMenu.classList.add("fa-bars")
    headerTop.appendChild(iconMenu)

    iconMenu.addEventListener("click",()=>{
        menuList.style.display ="flex"
    })
}

reconfiguration()