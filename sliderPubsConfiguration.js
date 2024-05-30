// Creation de la zone du diaporama
function areaCreation() {

    let parent = document.getElementById("banniere-haut")
    let bannerAds = document.querySelectorAll("#banniere-haut a")

    let slider = document.createElement("div")
    slider.classList.add("slider")
    parent.appendChild(slider)

    let elements = document.createElement("div")
    elements.classList.add("elements")
    slider.appendChild(elements)

    for (let index = 0; index < bannerAds.length; index++) {
       let bannerAd = bannerAds[index];

       let element = document.createElement("div")
       element.classList.add("element")
       elements.appendChild(element)

       element.appendChild(bannerAd)
    } 

    let points = document.createElement("div")
    points.id = "points"
    parent.appendChild(points)
}

areaCreation()


// suuppression des paragraphes inutiles
function elementDeletion() {
    
   
    let unnecessaryParagraph = document.querySelectorAll("#banniere-haut p")

    for (let index = 0; index < unnecessaryParagraph.length; index++) {
        const element = unnecessaryParagraph[index];
            element.remove();   
    }

}

elementDeletion()

/*
template

<div class="slider">
    <div class="elements">   
        <div class="element">         
              <div class="numbertext none ">position/nbSlides</div>
              <img src="" class="slide" alt="">
              <div class="caption"> </div>
        </div>       
    </div>
    <i id="prev" class="fa fa-chevron-left arrow" aria-hidden="true"></i><!--flèche gauche-->
    <i id="next" class="fa fa-chevron-right arrow" aria-hidden="true"></i><!--flèche droite-->
</div> 




*/