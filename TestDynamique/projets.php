<?php

// Définition des données des projets dans un tableau PHP
$projets = [
    [
        "nom" => "Tetris",
        "categorie" => "Projet_Etude",
        "langage" => "Python",
        "origine" => "Projet en L1",
        "date" => "Décembre 2022",
        "courteDescription" => "Projet réalisé dans le cadre du cours de L1 \"Programmation en Python\" à EFREI",
        "github" => "https://github.com/Corentin-k/Tetris",
        "image" => [
            "lien" => "img/tetris.png",
            "alt" => "Tetris"
        ],
        "longueDescription" => "Le jeu consiste à placer des blocs dans une grille (carré, triangle ou losange) et créer des lignes ou des colonnes pour gagner des points. L'utilisateur doit choisir un mode de jeux parmi deux politiques, le plateau de jeu et le score s’il le souhaite. Cependant, cette version est moins évoluée que le jeu d’origine puisque les blocs ne tombent pas.",
        "imageLongueDescription" => [
            "lien" => "img/tetris_exemple.png",
            "alt" => "Exemple de jeu Tetris"
        ]
    ],
    [
        "nom" => "GigaJump",
        "categorie" => "Projet_Etude",
        "langage" => "Python",
        "origine" => "Projet transverse en L1",
        "date" => "2023",
        "courteDescription" => "Jeu inspiré du jeu DoodleJump",
        "github" => "https://github.com/Corentin-k/GigaJump",
        "image" => [
            "lien" => "img/LOGO_JEU.png",
            "alt" => "GigaJump"
        ],
        "longueDescription" => "Le jeu consiste à placer des blocs dans une grille (carré, triangle ou losange) et créer des lignes ou des colonnes pour gagner des points. L'utilisateur doit choisir un mode de jeu parmi deux politiques, le plateau de jeu et le score s’il le souhaite. Cependant, cette version est moins évoluée que le jeu d’origine puisque les blocs ne tombent pas.",
        "imageLongueDescription" => [
            "lien" => "img/GigaJump-exemple.png",
            "alt" => "Exemple de jeu GigaJump"
        ]
    ],
    [
        "nom" => "BOT",
        "categorie" => "Projet_perso",
        "langages" => ["Python", "TypeScript"],
        "origine" => "Version Python et TypeScript",
        "githubPython" => "https://github.com/Corentin-k/GigaJump",
        "githubTypeScript" => "https://github.com/Corentin-k/Owl-Bot",
        "image" => [
            "lien" => "img/bot.png",
            "alt" => "Bot"
        ],
        "longueDescription" => "Bot Discord permettant d'afficher le planning d'une personne à partir d'un lien vers un calendrier iCalendar. Il existe deux versions du bot : une première en Python et une seconde en TypeScript, qui utilise Node.js. Le code utilisé pour le bot ts a été en partie fourni par Esteban Vincent et est disponible sur GitHub à l'adresse suivante : https://github.com/Crobot-ic/WebSite.",
        "imageLongueDescription" => [
            "lien" => "img/bot-exemple.png",
            "alt" => "Exemple du bot"
        ]
    ],
    [
        "nom" => "Dessin Vectoriel",
        "categorie" => "Projet_Etude",
        "langage" => "C",
        "origine" => "Projet de L1 à l'EFREI",
        "date" => "Second semestre 2023",
        "courteDescription" => "Projet réalisé dans le cadre du cours \"Algorithme et structure de données\".",
        "github" => "https://github.com/Corentin-k/Projet_dessin_vectoriel",
        "image" => [
            "lien" => "img/dessin_vectoriel.png",
            "alt" => "Dessin Vectoriel"
        ],
        "longueDescription" => "Le but de ce projet est de développer un logiciel de dessin vectoriel fonctionnant à partir de la console. Il permet à l'utilisateur de créer des formes graphiques en saisissant des instructions spécifiques. Les formes disponibles incluent des cercles, des points, des lignes, des rectangles, des carrés et des polygones.",
        "imagesLongueDescription" => [
            "lien" => "img/DV-exemple.png",
            "alt" => "Exemple de dessin vectoriel"
        ],
        [
            "lien" => "img/DV-démo.png",
            "alt" => "Démo du dessin vectoriel"
        ]
    ],
    [
        "nom" => "Apprendre C++",
        "categorie" => "Projet_perso",
        "langage" => "C++",
        "origine" => "Projet personnel",
        "date" => "Juin 2023",
        "github" => "https://github.com/Corentin-k/ProjetCplusplus",
        "notion" => "https://apprendre-cplusplus.notion.site/C-7dbfef941f9548caaaad1de624d8b3ec?pvs=4",
        "image" => [
            "lien" => "../img/cplusplus.png",
            "alt" => "C++"
        ]
    ],
    [
        "nom" => "Gestionnaire Agenda",
        "categorie" => "Projet_Etude",
        "langage" => "C",
        "origine" => "Projet de L2 à l'EFREI",
        "date" => "Troisième semestre 2023",
        "courteDescription" => "Projet réalisé dans le cadre du cours \"Algorithme et structure de données 2\".",
        "github" => "https://github.com/Corentin-k/Gestionnaire_Agenda",
        "image" => [
            "lien" => "img/agenda.png",
            "alt" => "Gestionnaire Agenda"
        ],
        "longueDescription" => "Le but de ce projet est de développer un gestionnaire d'agenda en vue de découvrir les différentes structures en langage C : listes chaînées, listes à niveaux, etc.",
        "imagesLongueDescription" => [
            "lien" => "img/agenda-demo.png",
            "alt" => "Démo du gestionnaire d'agenda"
        ]
    ],
    [
        "nom" => "Gestionnaire Automates finis",
        "categorie" => "Projet_Etude",
        "langage" => "Python",
        "origine" => "Projet de L2 à l'EFREI",
        "date" => "Quatrième semestre 2024",
        "courteDescription" => "Projet réalisé dans le cadre du cours \"Automates finis et expressions relationnelles\".",
        "github" => "https://github.com/Corentin-k/Automate",
        "image" => [
            "lien" => "img/automate.png",
            "alt" => "Gestionnaire Automates finis"
        ],
        "longueDescription" => "Le but de ce projet est de développer un gestionnaire d'automates finis afin d'exploiter tous les définitions des automates : déterminisation, standardisation, minimisation.",
        "imagesLongueDescription" => [
            "lien" => "img/img_1.png",
            "alt" => "Démo automate déterministe"
        ]
    ],
    [
        "nom" => "Mystère",
        "origine" => "Projet personnel",
        "image" => [
            "lien" => "img/mystere.png",
            "alt" => "Mystère"
        ]
    ]
];
