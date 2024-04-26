function reconfiguration() {
    let body = document.querySelector("body")
    let preHeader = document.getElementById("pre-header")
    let firstChild = document.getElementById("firstChild")


    
    // insertion d'un header en position fixe
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
}

reconfiguration()