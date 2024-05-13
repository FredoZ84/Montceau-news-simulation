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
    let iconMenu = iconCreate("icon_menu","fa-bars",headerTop)

    iconMenu.addEventListener("click",()=> {
        menuList.style.display ="flex"
    })

    // Creation d'une icon pour la fermeture du menu
    let menuList = document.getElementById("menu_list")
    let closeMenu = iconCreate("close_menu","fa-xmark",menuList)

    closeMenu.addEventListener("click",()=>{
       menuList.style.display ="none"
    })


    // Creation d'un icone des autres block pour les mobiles
    let otherBlocksIcons = document.createElement("div")
    otherBlocksIcons.id = "other_blocks_icons"
    headerTop.appendChild(otherBlocksIcons)

    // Creation d'un icone de recherche
    let iconResearch = iconCreate("icon_research","fa-magnifying-glass",headerTop)

    iconResearch.addEventListener("click",()=>{
        otherBlocks.style.display ="flex"
        searchBlock.style.display = "flex"
    })

    // Creation d'un icone pour les autres journaux
    let iconOtherNewspaper = iconCreate("icon_menu_newspaper","fa-newspaper",headerTop)

    iconOtherNewspaper.addEventListener("click",()=>{
        otherBlocks.style.display ="flex"
        wBlock.style.display = "flex"
    })

    let closOtherBlocks = iconCreate("close_others_blocks","fa-xmark",otherBlocks)

    closOtherBlocks.addEventListener("click",()=> {
        otherBlocks.style.display ="none"
        searchBlock.style.display = "none"
        wBlock.style.display = "none"
    })

    window.addEventListener("resize", ()=> {
        if (innerWidth > 768) {
            menuList.style.display ="block"
            otherBlocks.style.display ="flex"
        } else if ((innerWidth <= 768)) {
            menuList.style.display ="none"
            otherBlocks.style.display ="none"
        }
    })  
}

function iconCreate(id,iconName,parent) {
    let icon = document.createElement("i")
    icon.id = id
    icon.classList.add("fa-solid")
    icon.classList.add(iconName)
    parent.appendChild(icon)

    return icon
    
}

reconfiguration()