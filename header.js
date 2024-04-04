function reconfiguration() {
    let headerTop = document.getElementById("header_top")

    let logo = document.querySelectorAll("#header_top a")
    let searchBlock = document.getElementById("search_block")
    let wBlock = document.getElementById("wblock")

    let otherBlocks = document.createElement("div")
    otherBlocks.id = "other_blocks"
    headerTop.appendChild(otherBlocks)

    otherBlocks.appendChild(searchBlock)
    otherBlocks.appendChild(wBlock)

}

reconfiguration()