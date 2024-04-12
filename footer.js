function reorganization() {
    let body = document.getElementsByTagName("body")[0]

    let footer = document.createElement("footer")
    body.appendChild(footer)

    let divFooter = document.getElementById("footer")
    footer.appendChild(divFooter)

}

reorganization()