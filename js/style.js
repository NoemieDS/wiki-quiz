/*////////////////////////////////////////////////////////////////////////////////////////////
                   ÉLÉMENTS STYLISTIQUES SANS LIEN DIRECT AVEC LE QUIZ
///////////////////////////////////////////////////////////////////////////////////////////////*/


/*///////////////////////////////////////////////////////////////////////
                     LE CURSEUR
///////////////////////////////////////////////////////////////////////*/

let leCurseur = null;

gererCurseur();
//Fonction pour mettre le curseur personnalisé si l'appareil est un ordianteur
function gererCurseur() {
  leCurseur = document.querySelector(".curseur");

  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelector("body").style.cursor = "none";
    window.addEventListener("mousemove", deplacerCurseur);
  } else {
    leCurseur.style.display = "none";
  }
}

//Fonction pour déplacer le curseur
function deplacerCurseur(event) {
  leCurseur.style.transform = "translate(" + event.clientX + "px," + event.clientY + "px)";
}


/*///////////////////////////////////////////////////////////////////////
            CARROUSEL D'IMAGES (SUR LE BODY)
///////////////////////////////////////////////////////////////////////*/

/*************Les variables*********************/

//Récupérer la balise body
let carrouselImagesClasse = document.querySelector(".carrousel-images");

//le numéro de l'index courant
let noIndex = 0;

//Copie du tableau des questions pour choisir des images au hasard
let lesImages = lesQuestions.concat();
//console.log(lesImages.length);
//21 éléments

//Initialiser un tableau vide pour y mettre les images au hasard
let carrouselImages = [];


/*****************Le programme*********************/

choisirDesImagesAuHasard();
//console.log(carrouselImages);

//Afficher une première image
afficherUneImage();

setInterval(afficherUneImage, 3000);


/**
 * Fonction pour mettre au hasard l'ordre des questions de l'array lesImages
 * 
 */
function choisirDesImagesAuHasard() {

  //****** sortir les éléments au hasard et créer un nouvel array

  let uneImageAuHasard;
  for (let i = 0; i < 21; i++) {

    //console.log(lesImages.length);
    //lesImages.length fait un array de 11 éléments alors qu'il y en a 21.. ?? (dans la boucle --> mis 21 pour cette raison)

    let indexHasard = Math.floor(Math.random() * lesImages.length);

    uneImageAuHasard = lesImages[indexHasard];
    // console.log(uneImageAuHasard.image)

    carrouselImages.push(uneImageAuHasard);
    //console.log(carrouselImages);

    lesImages.splice(indexHasard, 1);
    //console.log(lesImages);
  }
}

/**
 * Fonction pour afficher les images de l'array carrouselImages
 * Selon la taille de l'écran -- Requêtes média : mêmes 2 palliers qu'en CSS
 * 
 */
function afficherUneImage() {

  let image = carrouselImages[noIndex];
  //console.log(image.image);

  let min768 = window.matchMedia("(min-width: 768px)");

  let min992 = window.matchMedia("(min-width: 992px)");



  if (min992.matches) {
    //On affiche la 3e image de l'array sur le body
    carrouselImagesClasse.style.backgroundImage = image.image[2];
  } else if (min768.matches) {

    //On affiche la 2e image de l'array sur le body
    carrouselImagesClasse.style.backgroundImage = image.image[1];
  }
  //Sinon on affiche l'image pour mobile
  else {
    //On affiche l'image pour mobile
    carrouselImagesClasse.style.backgroundImage = image.image[0];
  }

  //on augmente le numéro de l'index
  noIndex++;

  //on applique la classe .carrousel_img--activer
//on applique la classe .carrousel_img--activer

carrouselImagesClasse.classList.add("carrousel_img-activer")
  

  //On réinitialise le compteur s'il atteint la fin de l'index
  if (noIndex == carrouselImages.length) {
    noIndex = 0;
  }

}