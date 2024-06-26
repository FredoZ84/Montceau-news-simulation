let element = document.getElementsByClassName('element');
element[0].classList.add("active");
let dots = document.getElementsByClassName("dot"); // varialble locale
let compteur = 0;
let time = 3
let timeMilli = time*1000
let timer, elements, slides, slidesWidth, slideActive, difference;
const tabPoint = [];

window.onload = () => {
	const slider = document.querySelector(".slider");

	const points = document.getElementById("points");// ensemble des flèches  et sélécteurs
	
	elements =  document.querySelector(".elements");

	// on clone la première image
	let firstImage = elements.firstElementChild.cloneNode(true);
	// on lui rajoute une classe pour précisé que c'est un supplément
	firstImage.classList.add("additional")
	// on injecte le clone a la fin du diapo
	elements.appendChild(firstImage);

	slides = document.getElementsByClassName("element");
	// on calcul la largeur du diaporama
	slidesWidth = slider.getBoundingClientRect().width ;    

	//let next = document.querySelector("#next");
	//let prev = document.querySelector("#prev");
	addDot();

	//next.addEventListener("click", slideNext);
	//prev.addEventListener("click", slidePrev);

	//Automatiser le diaporama
	startTimer()

	dotActive();

	// gerer le survol de la souris
	slider.addEventListener("mouseover", stopTimer);
	slider.addEventListener("mouseout", startTimer);

	points.addEventListener("mouseover",stopTimer);
	points.addEventListener("mouseout", startTimer);

	findDot();

	// Mise en oeuvre du responsiv
	window.addEventListener("resize", () => {
		slidesWidth = slider.getBoundingClientRect().width ;
		slideNext();
		//console.log("changement de taille");
		if("matchMedia" in window) { // Détection
		    if(window.matchMedia("(max-width: 992px)").matches) {
		      slidesWidth = slider.getBoundingClientRect().width ;
				slideNext();
				//console.log("changement de règle CSS media querries");
		    } else {
		      console.log("retour à la règle CSS initiale");
		    }
		}
	});

	/*===============================*/
	/*=== Swipe avec Touch Events ===*/
	/*===============================*/
	// Si l'écran est plus petit que "x" pixels (optionnel) // 1024px ici
	if(screen.width <= 1024) {
		let startX = 0; // Position de départ
		let distance = 100; // 100 px de swipe pour afficher le menu

		// Au premier point de contact
		slider.addEventListener("touchstart", function(evt) {
			stopTimer();
			// Récupère les "touches" effectuées
			let touches = evt.changedTouches[0];
			startX = touches.pageX;
			between = 0;
		}, false);

		// Quand les points de contact sont en mouvement
		slider.addEventListener("touchmove", function(evt) {
			// Limite les effets de bord avec le tactile...
			evt.preventDefault();
			evt.stopPropagation();
		}, false);

		// Quand le contact s'arrête
		slider.addEventListener("touchend", function(evt) {
			let touches = evt.changedTouches[0];
			let between = touches.pageX - startX;

			// Détection de la direction
			if(between > 0) {
				slidePrev();
			} else {
				slideNext();
			}
			startTimer();
		})
	}	
}



function slideNext() {
	compteur++
	elements.style.transition =" 1s linear";
	/*if (compteur == slides.length) {
		compteur = 0;
	}*/
	let decal = -slidesWidth * compteur;
	elements.style.transform =  "translateX("+ decal +"px)";
	dotActive();
	
	// rembobinage caché
	setTimeout(()=>{
		if (compteur >= slides.length-1) {
			compteur = 0;
			elements.style.transition ="unset";
			elements.style.transform = "translateX(0)";
		}
	},1000)
}

function slidePrev() {
	compteur--
	elements.style.transition =" 1s linear";
	if (compteur < 0 ) {
		compteur = slides.length-1;
		let decal = -slidesWidth * compteur;
		elements.style.transition ="unset";
		elements.style.transform = "translateX("+ decal +"px)";
		setTimeout(slidePrev,1000)
	}

	let decal = -slidesWidth * compteur;
	elements.style.transform = "translateX("+ decal +"px)";

	dotActive();
}

function stopTimer() {
	clearInterval(timer)
}

function startTimer() {
	timer = setInterval(slideNext,timeMilli);
}

function startTimerInverse() {
	timer = setInterval(slidePrev,timeMilli)
	
}
 
function addDot(){//ajoute les selecteurs
	for (let i = 0  ; i < slides.length; i++) {
		let newDot = document.createElement("span");
		newDot.classList.add("dot");
		points.appendChild(newDot);
		tabPoint.push(newDot);
	}

	if (dots.length == slides.length) {
		if (slides[slides.length-1].classList.contains("additional")){
			dots[slides.length-1].style.display = "none"
		}
	}
}

function dotActive() { // Montre la diapositives en cours
	for (let i = 0; i < dots.length; i++) {
		   dots[i].classList.remove("active");
	}
	if (compteur == slides.length - 1) {
		dots[0].classList.add("active");
	} else {
		dots[compteur].classList.add("active");
	}	
}

function findDot() {
	for(let a=0;a< dots.length;a++){
			
		dots[a].addEventListener('click', function(){
			if (a < compteur) {
				difference = compteur - a;			
				for (let i = 0; i < difference; i++) {
					slidePrev();
				}
				compteur = tabPoint.indexOf(dots[a]);
				dotActive();						
			}
			if (compteur < a) {
				difference = a - compteur;
				for (let i = 0; i < difference; i++) {
					slideNext();
				}
				compteur = tabPoint.indexOf(dots[a]);
				dotActive();
			}
		});
	};
	//setTimeout(startTimer,timeMilli)
}