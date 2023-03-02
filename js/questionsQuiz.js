/*////////////////////////////////////////////////////////////////////////////////////////////
                            LES QUESTIONS DU QUIZ
   Banque de questions, elles ne sont pas toutes présentées
   Toutes les bonnes réponses se trouvent à l'index 0 - pour référence 
   Les images sont liées aux bonnes réponses ou au sujet de la question et servent
   au carrousel de fond - dans le fichier style.js
///////////////////////////////////////////////////////////////////////////////////////////////*/


let lesQuestions = [
    ///*****************************************************************************************************************************************///
    ///*******************************CATÉGORIE GÉOGRAPHIE*****************************************************************************************///
    //*****************************************************************************************************************************************/// 
 
    {
        categorie: "Géographie", 
        question: "Quel est le plus long fleuve d'Europe&nbsp;?",
        choix: ["La Volga", "Le Rhin", "Le Dniepr","Le Danube", "Le Rhône"],
        bonneReponse: "La Volga",
        image: ["url(media/G001.jpg)", "url(media/G001_992.jpg)", "url(media/G001_1600.jpg)"],
    },
   
    {
        categorie: "Géographie",
        question: "Dans quel pays se trouve le Grand lac salé&nbsp;?",
        choix: ["Aux États-Unis", "En Chine", "En Argentine", "En Islande", "En Éthiopie"],
        bonneReponse: "Aux États-Unis",
        image: ["url(media/G002.jpg)", "url(media/G002_992.jpg)", "url(media/G002_1600.jpg)"],
    },
    {
        categorie: "Géographie",
        question: "Comment se nomme la plus grande zone humide du monde&nbsp;?",
        choix: ["Le Pantanal", "L'Amazonie", "L'Orénoque", "Le delta du Mékong", "Le delta du Nil"],
        bonneReponse: "Le Pantanal",
        image: ["url(media/G003.jpg)", "url(media/G003_992.jpg)", "url(media/G003_1600.jpg)"],
    },
    {
        categorie: "Géographie",
        question: "Dans quel pays se situe le désert d'Atacama&nbsp;?",
        choix: ["Au Chili", "Au Niger", "Au Soudan", "En Arabie Saoudite", "En Chine"],
        bonneReponse: "Au Chili",
        image: ["url(media/G004.jpg)", "url(media/G004_992.jpg)", "url(media/G004_1600.jpg)"],
    },
    {
        categorie: "Géographie",
        question: "Quel est le plus grand lac du Québec&nbsp;? <br> Le lac...",
        choix: ["Mistassini", "St-Jean", "Wiyâshâkimî", "Bienville", "des Deux Montagnes"],
        bonneReponse: "Mistassini",
        image: ["url(media/G005.jpg)", "url(media/G005_992.jpg)", "url(media/G005_1600.jpg)"],
    },
    {
        categorie: "Géographie",
        question: "Quelle est la plus grande mer du monde&nbsp;?<br> La mer...",
        choix: ["des Philippines", "d'Arabie", "de Chine méridionale", "Méditerranée", "des Caraïbes"],
        bonneReponse: "des Philippines",
        image: ["url(media/G006.jpg)", "url(media/G006_992.jpg)", "url(media/G006_1600.jpg)"],
    },
    {
        categorie: "Géographie",
        question: "À la frontière de quels 2 pays se situe le Matterhorn ou Mont Cervin&nbsp;?",
        choix: ["Italie-Suisse", "Italie-France", "Allemagne-Autriche", "France-Allemagne", "Autriche-Italie"],
        bonneReponse: "Italie-Suisse",
        image: ["url(media/G007.jpg)", "url(media/G007_992.jpg)", "url(media/G007_1600.jpg)"],
    },


    ///*****************************************************************************************************************************************///
    ///*******************************CATÉGORIE HISTOIRE*****************************************************************************************///
    //*****************************************************************************************************************************************/// 
   
    {
        categorie: "Histoire",
        question: "Qui a été 1<sup>er</sup> Premier ministre du Québec&nbsp;?",
        choix: ["Pierre-Joseph-Olivier Chauveau", "Charles-Eugène Boucher de Boucherville", "Honoré Mercier", "John Jones Ross", "Adélard Godbout"],
        bonneReponse: "Pierre-Joseph-Olivier Chauveau",
        image: ["url(media/H001.jpg)", "url(media/H001_992.jpg)", "url(media/H001_1600.jpg)"],
    },
    {
        categorie: "Histoire",
        question: "De quelle dynastie est issu Pu-Yi, dernier empereur de Chine&nbsp;?",
        choix: ["Qing", "Han", "Zhou", "Yuan", "Ming"],
        bonneReponse: "Qing",
        image: ["url(media/H002.jpg)", "url(media/H002_992.jpg)", "url(media/H002_1600.jpg)"],
    },
    {
        categorie: "Histoire",
        question: "Qui fonda L'Anse aux Meadows en 1021, premier village scandinave en Amérique du Nord&nbsp;?",
        choix: ["Leif Erikson", "Erik le Rouge", "Ragnar Lodbrok", "Ivar Ragnarsson", "Ivarr de Dublin"],
        bonneReponse: "Leif Erikson",
        image: ["url(media/H003.jpg)", "url(media/H003_992.jpg)", "url(media/H003_1600.jpg)"],
    },
    {
        categorie: "Histoire",
        question: "Qui était le Roi d'Espagne lorsque les Mexicains débutèrent leur guerre d'indépendance en 1810&nbsp;?",
        choix: ["Joseph Bonaparte", "Ferdinand VII", "Charles IV", "Charles V", "Léopold II"],
        bonneReponse: "Joseph Bonaparte",
        image: ["url(media/H004.jpg)", "url(media/H004_992.jpg)", "url(media/H004_1600.jpg)"],
    },
    {
        categorie: "Histoire",
        question: "Quel est le premier pays d'Afrique à avoir obtenu son indépendance d'une puissance coloniale&nbsp;?",
        choix: ["Le Liberia", "Le Sénégal", "Le Mozambique", "L'Égypte", "L'Afrique du Sud"],
        bonneReponse: "Le Liberia",
        image: ["url(media/H005.jpg)", "url(media/H005_992.jpg)", "url(media/H005_1600.jpg)"],
    },
    {
        categorie: "Histoire",
        question: "Simón Bolívar n'a pas participé à la guerre d'indépendance de ce pays&nbsp;?",
        choix: ["L'Uruguay", "La Colombie", "L'Équateur", "Le Pérou", "Le Venezuela"],
        bonneReponse: "L'Uruguay",
        image: ["url(media/H006.jpg)", "url(media/H006_992.jpg)", "url(media/H006_1600.jpg)"],
    },
    {
        categorie: "Histoire",
        question: "Quel souverain fit détruire le premier temple de Salomon à Jérusalem en -587&nbsp;?",
        choix: ["Nabuchodonosor II", "David", "Cyrus II", "Hiram I", "Cyaxare"],
        bonneReponse: "Nabuchodonosor II",
        image: ["url(media/H007.jpg)", "url(media/H007_992.jpg)", "url(media/H007_1600.jpg)"],
    },



    ///*****************************************************************************************************************************************///
    ///*******************************CATÉGORIE CINÉMA*****************************************************************************************///
    //*****************************************************************************************************************************************/// 
   
    {
        categorie: "Cinéma",
        question: "Quel film réalisé par Steven Soderbergh lui a valu son seul prix Oscar à titre de meilleur directeur&nbsp;?",
        choix: ["<cite>Traffic</cite>", "<cite>Ocean Eleven</cite>", "<cite>Erin Brockovich</cite>", "<cite>Sex, lies and videotapes</cite>", "<cite>Solaris</cite>"],
        bonneReponse: "<cite>Traffic</cite>",
        image: ["url(media/C001.jpg)", "url(media/C001_992.jpg)", "url(media/C001_1600.jpg)"],
    },
    {
        categorie: "Cinéma",
        question: "Quel film du réalisateur japonais Akira Kurosawa est une adaptation libre du <cite>Roi Lear</cite> de W. Shakespeare&nbsp;?",
        choix: ["<cite>Ran</cite>", "<cite>le Château de l'araignée</cite>", "<cite>La forteresse cachée</cite>", "<cite>Yojimbo</cite>", "<cite>Kagemusha</cite>"],
        bonneReponse: "<cite>Ran</cite>",
        image: ["url(media/C002.jpg)", "url(media/C002_992.jpg)", "url(media/C002_1600.jpg)"],
    },
    {
        categorie: "Cinéma",
        question: "Quelle actrice a incarné la Reine Margot dans le film du même nom réalisé par Patrice Chéreau en 1994&nbsp;?",
        choix: ["Isabelle Adjani", "Isabelle Huppert", "Juliette Binoche", "Sandrine Bonnaire", "Béatrice Dalle"],
        bonneReponse: "Isabelle Adjani",
        image: ["url(media/C003.jpg)", "url(media/C003_992.jpg)", "url(media/C003_1600.jpg)"],
    },
    {
        categorie: "Cinéma",
        question: "Quel réalisateur québécois a déjà remporté une Palme d'Or à Cannes&nbsp;?",
        choix: ["Norman McLaren", "Denys Arcand", "Anne-Claire Poirier", "Xavier Dolan", "Michel Brault"],
        bonneReponse: "Norman McLaren",
        image: ["url(media/C004.jpg)", "url(media/C004_992.jpg)", "url(media/C004_1600.jpg)"],
    },
    {
        categorie: "Cinéma",
        question: "Quel film de Kim Nguyen gagna 3 Prix Écrans en 2013, dont ceux de Meilleur film et Meilleur réalisateur&nbsp;?",
        choix: ["<cite>Rebelle</cite>", "<cite>Le Marais</cite>", "<cite>Truffle</cite>", "<cite>La Cité</cite>", "<cite>L'Odorat</cite>"],
        bonneReponse: "<cite>Rebelle</cite>",
        image: ["url(media/C005.jpg)", "url(media/C005_992.jpg)", "url(media/C005_1600.jpg)"],
    },
    {
        categorie: "Cinéma",
        question: "À quel réalisateur allemand doit-on le film <cite>Le roi des aulnes</cite> mettant en vedette John Malkovich&nbsp;?",
        choix: ["Volker Schlöndorff", "Werner Herzog", "Wim Wenders", "Tom Tykwer", "Joseph Vilsmaier"],
        bonneReponse: "Volker Schlöndorff",
        image: ["url(media/C006.jpg)", "url(media/C006_992.jpg)", "url(media/C006_1600.jpg)"],
    },
    {
        categorie: "Cinéma",
        question: "À quel réalisateur né en Union Soviétique doit-on le film <cite>Stalker</cite>, dont le jeu vidéo <cite>S.T.A.L.K.E.R.</cite> s'inspira&nbsp;?",
        choix: ["Andreï Tarkovski", "Boris Livanov", "Aleksander Sokurov", "Nikita Mikhalkov", "Sergeï Eisenstein"],
        bonneReponse: "Andreï Tarkovski",
        image: ["url(media/C007.jpg)", "url(media/C007_992.jpg)", "url(media/C007_1600.jpg)"],
    },
];

