class Modal {
    constructor(element) {
        this.element = element
        this.content = this.element.innerHTML 

        this.backdrop = document.createElement("div")
        this.backdrop.classList.add("backdrop")

        this.element.innerHTML = " "
        this.element.appendChild(this.backdrop)

        this.modalContent = document.createElement("div")
        this.modalContent.classList.add("modal-content")
        this.modalContent.innerHTML = this.content
        this.element.appendChild(this.modalContent)

        this.closeIcon = document.createElement("i")
        this.closeIcon.classList.add("fa-solid")
        this.closeIcon.classList.add("fa-xmark")
        this.modalContent.appendChild(this.closeIcon)
        /*
        this.backdrop.addEventListener("click", () => {
            this.hide()
        })
        */
        this.closeIcon.addEventListener("click", () => {
            this.hide()
        })
    }

    show(){
        this.element.classList.add("show")
    }

    hide(){
        this.element.classList.remove("show")
    }
}
