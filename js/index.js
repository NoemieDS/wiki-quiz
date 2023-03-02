/*///////////////////////////////////////////////////////////////////////
                     LES VARIABLES DU QUIZ
///////////////////////////////////////////////////////////////////////*/

// Extraits audio à utiliser dans l'interface du quiz
let audio = {
    succes: new Audio('media/sons/succes.mp3'),
    echec: new Audio('media/sons/echec.mp3')
};

// Numéro de la question courante
let noQuestion = 0;

// Nombre de questions dans une partie
let nbQuestions = 9;

// Nombre de réponses justes
let score = 0;

//Copie du tableau des questions pour choisir un nombre limité de questions au hasard
let lesQuestionsCopie = lesQuestions.concat();
//console.log(lesQuestionsCopie);

//Initialiser un tableau vide pour y mettre les questions choisies au hasard
let lesQuestionsDeLaPartie = [];
//console.log(lesQuestionsCopie);

// Barre d'avancement du quiz
let barreAvancement = document.querySelector(".barre-avancement");
// Largeur de la barre (initialement 0)
let largeurBarre = 0;
// Cible de largeur pour chaque étape d'avancement du quiz (calculée selon
// la progression dans les questions et le nombre total de questions)
let largeurCibleBarre = 0;

// Zone d'affichage du quiz
let zoneQuiz = document.querySelector(".quiz");

// Section contenant une question du quiz et sa position sur l'axe des X
let sectionQuestion = document.querySelector("section");
let positionX = 100;

// Conteneurs des titres des catégories, questions et des choix de réponse
let categorie = document.querySelector(".categorie");
let titreQuestion = document.querySelector(".titre-question");
let lesChoixDeReponses = document.querySelector(".les-choix-de-reponse");

// Titre animé du quiz
let sousTitreIntro = document.querySelector(".anim-sous-titre-intro");

// Zone de fin du quiz
let zoneFin = document.querySelector(".fin");

// Bouton servant à recommencer le quiz
let btnRecommencer = document.querySelector('main.fin .btn-recommencer');

/*///////////////////////////////////////////////////////////////////////
                            ÉVÉNEMENTS
///////////////////////////////////////////////////////////////////////*/
// Gérer la fin de l'animation d'intro
sousTitreIntro.addEventListener("animationend", afficherConsignePourDebuterLeJeu);

// Gestion du bouton de redémarrage du quiz (à la fin du quiz)
btnRecommencer.addEventListener('click', recommencer);


/*///////////////////////////////////////////////////////////////////////
                            LES FONCTIONS
///////////////////////////////////////////////////////////////////////*/


/**
 * Afficher les consignes pour débuter le jeu
 * 
 * @param {Event} event : objet AnimationEvent de l'événement distribué 
 */
function afficherConsignePourDebuterLeJeu(event) {
    //console.log(event.animationName);

    //On affiche la consigne si c'est la fin de l'animation du sous-titre
    if (event.animationName == "arrivee") {

        //On affiche la consigne pour débuter le jeu
        let introH3 = document.querySelector(".intro-consigne");
        introH3.innerHTML = "<h3>Clique dans l'écran pour <br> débuter le quiz</h3>";
        //Apparait avec une transition en CSS
        introH3.style.opacity = "1";

        //On met un écouteur sur la fenêtre pour enlever l'intro et commencer le quiz
        window.addEventListener("click", commencerLeQuiz);
    }
}


/**
 * Enlever les éléments de l'intro et commencer le quiz
 * 
 */
function commencerLeQuiz() {

    //On enlève le conteneur de l'intro
    let intro = document.querySelector("main.intro");
    intro.parentNode.removeChild(intro);

    //On enlève l'écouteur qui gère le début du quiz
    window.removeEventListener("click", commencerLeQuiz);

    //On met le conteneur du quiz visible
    zoneQuiz.style.display = "flex";

    //On crée un array de questions au hasard
    choisirDesQuestionsAuHasard();
}


/**
 * Extraire 9 questions du tableau des questions, au hasard
 * 
 */
function choisirDesQuestionsAuHasard() {

    //****** sortir des questions au hasard de la copie du tableau questionsQuiz.js

    let uneQuestionAuHasard;
    for (let i = 0; i < nbQuestions; i++) {

        let indexHasard = Math.floor(Math.random() * lesQuestionsCopie.length);

        uneQuestionAuHasard = lesQuestionsCopie[indexHasard];
        // console.log(uneQuestionAuHasard.choix);
        //console.log(uneQuestionAuHasard.bonneReponse);

        lesQuestionsDeLaPartie.push(uneQuestionAuHasard);
        //console.log(lesQuestionsDeLaPartie);

        lesQuestionsCopie.splice(indexHasard, 1);
        //console.log(lesQuestionsCopie);
    }

    //Une fois le tableau rempli de questions, on affiche une première question
    afficherQuestion();
}

/**
 * Afficher la question courante
 * 
 */
function afficherQuestion() {

    let uneQuestion = lesQuestionsDeLaPartie[noQuestion];

    //Copie du tableau des choix de réponses de la question courrante
    let lesChoixCopie = lesQuestionsDeLaPartie[noQuestion].choix.concat();
    //console.log(lesChoixCopie)

    //Initialiser un tableau vide pour y mettre les choix de réponse
    let lesChoixDeLaPartie = [];

    // Affecter le texte dans de la catégorie de la question
    categorie.innerHTML = uneQuestion.categorie;

    // Affecter le texte dans le titre de la question
    titreQuestion.innerHTML = uneQuestion.question;

    // Créer et afficher les balises des choix de réponse :
    // On commence par vider le conteneur des choix de réponses.
    lesChoixDeReponses.innerHTML = "";

    // Puis on le remplit de nouveau avec les choix de réponses de la question
    let unChoix;
    for (let i = 0; i < uneQuestion.choix.length; i++) {

        let indexHasard = Math.floor(Math.random() * lesChoixCopie.length);

        unChoix = lesChoixCopie[indexHasard];

        lesChoixDeLaPartie.push(unChoix);

        lesChoixCopie.splice(indexHasard, 1);

        //On crée la balise et on y affecte une classe CSS
        unChoix = document.createElement("div");
        unChoix.classList.add("choix");

        //On intègre la valeur du choix de réponse
        unChoix.innerHTML = lesChoixDeLaPartie[i];

        //On met un écouteur pour vérifier la réponse choisie
        unChoix.addEventListener("mousedown", verifierReponse);

        //Enfin on affiche ce choix
        lesChoixDeReponses.appendChild(unChoix);
    }

    // Modifier la valeur de la position de la section sur l'axe des X 
    // pour son animation
    positionX = 100;

    //Partir la première requête pour l'animation de la section
    requestAnimationFrame(animerSection);

    // Fixer la largeur cible de la barre d'avancement (en proportion du nombre
    // de questions disponibles, et du numéro de la question à venir)
    largeurCibleBarre = (noQuestion + 1) / lesQuestionsDeLaPartie.length * 100;

    // barre d'avancement réalisée dans la fonction "animerBarreAvancement" (ci-dessous)
    requestAnimationFrame(animerBarreAvancement);
}


/**
 * Animer la barre d'avancement
 */
function animerBarreAvancement() {

    // Modifie la largeur de la barre d'avancement en l'augmentant de 1vw à 
    // chaque appel de cette fonction 
    largeurBarre += 1
    barreAvancement.style.width = largeurBarre + "vw";

    // Si la largeur cible n'est pas encore atteinte, faire une autre requête 
    // d'animation à l'aide de RAF
    if (largeurBarre < largeurCibleBarre) {
        requestAnimationFrame(animerBarreAvancement);
    }

    /*On indique au joueur combien de questions il reste, et où il est rendu */
    barreAvancement.innerText = `${noQuestion+1} /  ${nbQuestions}`;
    barreAvancement.classList.add("info-question");
}


/**
 * Animer l'arrivée de la section contenant la question
 */
function animerSection() {
    //On décrémente la position de 2 (vw)
    positionX -= 2;
    sectionQuestion.style.transform = `translateX(${positionX}vw)`;

    //On part une autre requête  d'animation si la position n'est pas atteinte
    if (positionX > 0) {
        requestAnimationFrame(animerSection);
    }
}


/**
 * Vérifier la réponse cliquée et gerer le passage à la prochaine question.
 * 
 * @param {object} event Informations sur l'événement MouseEvent distribué
 */
function verifierReponse(event) {

    // Ne pas modifier cette ligne de code
    lesChoixDeReponses.classList.toggle('desactiver');

    //  console.log("target" + event.target);
    //  console.log("indexChoix " + event.target.innerHTML);
    //  console.log("la bonne réponse est " + lesQuestionsDeLaPartie.bonneReponse);
    //   console.log(event.target.innerHTML == lesQuestionsDeLaPartie.bonneReponse);

    let unChoix = event.target.innerHTML;
    let bonneReponse = lesQuestionsDeLaPartie[noQuestion].bonneReponse;
    let animationChoix = event.target;
    //console.log(unChoix == bonneReponse, unChoix, bonneReponse);

    if (unChoix == bonneReponse) {
        animationChoix.classList.add("reponse-succes");
        score++;
        audio.succes.play();
    } else {
        animationChoix.classList.add("reponse-echec");
        audio.echec.play();
    }

    // On passe à la prochaine question UNIQUEMENT lorsque l'animation de la réponse cliquée est terminée !
    animationChoix.addEventListener("animationend", gererProchaineQuestion);
}


/**
 * Fonction permettant de gérer l'affichage de la prochaine question
 * 
 */
function gererProchaineQuestion(event) {
    // On réactive les clics sur les choix de réponse
    lesChoixDeReponses.classList.toggle('desactiver');

    // On incrémente noQuestion pour la  prochaine question à afficher
    noQuestion++;

    //S'il reste une question on l'affiche, sinon c'est la fin du quiz...
    if (noQuestion < lesQuestionsDeLaPartie.length) {
        afficherQuestion();
    } else {
        afficherFinQuiz();
    }
}


/**
 * Afficher l'interface de la fin du quiz
 * 
 */
function afficherFinQuiz() {
    // Retirer la zone du quiz de l'affichage
    zoneQuiz.style.display = "none";

    // Créer dynamiquement la section qui contiendra le score 
    let sectionResultat = document.createElement('section');


    // Ajoutez le texte correspondant au score obtenu
    sectionResultat.innerHTML = "<div><h2>Votre score&nbsp:  <br>" + score + " / " + lesQuestionsDeLaPartie.length + "</h2><div>";
    sectionResultat.classList.add("resultat");
    //console.log(sectionResultat.innerText);
    let parentNoeud = btnRecommencer.parentNode;
    parentNoeud.insertBefore(sectionResultat, btnRecommencer);


    // [CODE LOCALSTORAGE]
    let meilleurScore = localStorage.getItem("meilleurScoreJeu") || 0;

    //Enregistrement du meilleur score
    meilleurScore = Math.max(meilleurScore, score);
    localStorage.setItem("meilleurScoreJeu", meilleurScore);

    //Affichage du meilleur score
    sectionResultat.innerHTML += `<div><h2>Votre meilleur <br> score&nbsp: ${meilleurScore} /  ${lesQuestionsDeLaPartie.length}</h2><div>`;

    // Remettre dans l'affichage la zone de "fin du quiz"
    zoneFin.style.display = "flex";

    // Le bouton "recommencer" est affiché à la fin de l'animation du résultat du quiz
    sectionResultat.addEventListener('animationend', afficherBtnRecommencer);
}

/**
 * Modifier l'opacité du bouton 'recommencer' pour le rendre visible
 */
function afficherBtnRecommencer() {
    btnRecommencer.style.opacity = '1';
}

/**
 * Redémarrer le quiz (sans l'animation de début) en réinitialisant l'état de 
 * l'application.
 */
function recommencer() {
    // Remettre les variables et arrays numériques du quiz à leurs valeurs initiales
    noQuestion = 0;
    score = 0;
    largeurBarre = 0;
    largeurCibleBarre = 0;
    lesQuestionsCopie = lesQuestions.concat();
    lesQuestionsDeLaPartie = [];


    // Retirer du DOM la section contenant le résultat (l'élément ayant la classe 'resultat')
    let sectionResultat = document.querySelector("section.resultat");
    sectionResultat.parentNode.removeChild(sectionResultat);

    // Remettre l'opacité du bouton "recommencer" à 0
    btnRecommencer.style.opacity = "0";

    // On réaffiche le conteneur de la zone du quiz (son affichage initial était "flex")
    zoneQuiz.style.display = "flex";

    // Et on retire la zone de "fin du quiz" de l'affichage
    zoneFin.style.display = "none";

    // Finalement, on refait un tableau de questions au hasard...
    choisirDesQuestionsAuHasard();
}