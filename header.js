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

    // Creation d'un icone menu pour les mobiles
    let iconMenu = document.createElement("i")
    iconMenu.id = "icon_menu"
    iconMenu.classList.add("fa-solid")
    iconMenu.classList.add("fa-bars")
    headerTop.appendChild(iconMenu)

    iconMenu.addEventListener("click",()=> {
        menuList.style.display ="flex"
    })

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


    // Creation d'un icone des autres block pour les mobiles
    let otherBlocksIcons = document.createElement("div")
    otherBlocksIcons.id = "other_blocks_icons"
    headerTop.appendChild(otherBlocksIcons)

    // Creation d'un icone de recherche
    let iconResearch = document.createElement("i")
        iconResearch.id = "icon_research"
        iconResearch.classList.add("fa-solid")
        iconResearch.classList.add("fa-magnifying-glass")
    otherBlocksIcons.appendChild(iconResearch)

    // Creation d'un icone de recherche
    let iconOtherNewspaper = document.createElement("i")
        iconOtherNewspaper.id = "icon_menu_newspaper"
        iconOtherNewspaper.classList.add("fa-solid")
        iconOtherNewspaper.classList.add("fa-newspaper")
    otherBlocksIcons.appendChild(iconOtherNewspaper)

    otherBlocksIcons.addEventListener("click",()=>{
        otherBlocks.style.display ="flex"
    })

    let closOtherBlocks = document.createElement("i")
    closOtherBlocks.id = "close_others_blocks"
    closOtherBlocks.classList.add("fa-solid")
    closOtherBlocks.classList.add("fa-xmark")
    otherBlocks.appendChild(closOtherBlocks)

    closOtherBlocks.addEventListener("click",()=> {
        otherBlocks.style.display ="none"
    })

    window.addEventListener("resize", ()=> {
        if (innerWidth > 481) {
            menuList.style.display ="block"
            otherBlocks.style.display ="flex"
        } else if ((innerWidth <= 481)) {
            menuList.style.display ="none"
            otherBlocks.style.display ="none"
        }

    })
    
    
}

reconfiguration()