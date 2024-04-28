global$projects; global$projets; <!DOCTYPE html>
<html class="html" lang="fr" xmlns="http://www.w3.org/1999/html">

<head>
    <meta charset="utf-8">
    <meta name="name" content="Apprendre_html">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HTML</title>

    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/menu.css">
    <link rel="stylesheet" type="text/css" href="../css/projet.css">
    <link rel="stylesheet" type="text/css" href="../css/modal.css">
    <link rel="stylesheet" type="text/css" href="../css/notifications.css">
    <link rel="stylesheet" type="text/css" href="../css/tel.css">

</head>


<body>
<header id="header">

    Mes projets

</header>

<div class="container hidden">

    <nav class="menu">
        <div class="divBouton">
            <div class="BoutonMenu">
                    <span>
                            <svg  width="50" height="40">
                            <rect width="35" height="8" fill="white" rx="5"></rect>
                            <rect y="15" width="35" height="8" fill="white" rx="5"></rect>
                            <rect y="30" width="35" height="8" fill="white" rx="5"></rect>
                            </svg>
                        </span>
            </div>

            <div class="BoutonQuitté">
                    <span>
                            <svg width="50" height="40">
                            <rect x="12" y="-5" width="35" height="8" fill="white" transform="rotate(45 0 0)"></rect>
                            <rect x="-18" y="25" width="35" height="8" fill="white" transform="rotate(-45 0 0)"></rect>
                            </svg>
                        </span>
            </div>
        </div>

        <div class="Contenu_Bouton">
            <br>
            <br>
            <input type="checkbox" id="Bouton_etude" onclick="APPUYER_BOUTON_ETUDE()">
            <label for="Bouton_etude">Projet de cours</label>
            <br>

            <input type="checkbox" id="Bouton_perso" onclick="APPUYER_BOUTON_PERSO()">
            <label for="Bouton_perso">Projet personnel</label>
            <br>
            <br>

            <input type="checkbox" id="Bouton_trad" onclick="trad()">
            <label for="Bouton_trad">Traduction</label>
            <br>
            <br>

            <div class="switch">
                <i class="fas fa-moon"></i>
                <div class="btn">

                </div>

            </div>

        </div>
    </nav>

    <div class="Projet">

        <?php
        include 'projets.php';
        global $projets;
        foreach ($projets as $projet) {
            echo '<div class="projet">';
            echo '<h2>' . $projet['nom'] . '</h2>';
            echo '<p>Catégorie: ' . $projet['categorie'] . '</p>';
            echo '<p>Langage: ' . $projet['langage'] . '</p>';
            echo '<p>Origine: ' . $projet['origine'] . '</p>';
            echo '<p>Date: ' . $projet['date'] . '</p>';
            echo '<p>Description courte: ' . $projet['courteDescription'] . '</p>';

            // Affichage des liens GitHub s'ils existent
            if (isset($projet['github'])) {
                echo '<p><a href="' . $projet['github'] . '">Voir sur GitHub</a></p>';
            }

            // Affichage de l'image du projet
            if (isset($projet['image'])) {
                echo '<img src="' . $projet['image']['lien'] . '" alt="' . $projet['image']['alt'] . '">';
            }

            // Affichage de la longue description
            if (isset($projet['longueDescription'])) {
                echo '<p>Longue description: ' . $projet['longueDescription'] . '</p>';
                // Affichage de l'image longue description s'il existe
                if (isset($projet['imageLongueDescription'])) {
                    echo '<img src="' . $projet['imageLongueDescription']['lien'] . '" alt="' . $projet['imageLongueDescription']['alt'] . '">';
                }
            }

            echo '</div>';
        }
        ?>


    </div>
    <div style=" grid-column: 2;display: flex; align-items: center; justify-content: center; margin: 3%;">
        <svg width="50" height="50" class="inutil">
            <rect x="10" y="-5" width="50" height="10" fill="white" transform="rotate(45 0 0)" rx="5px"></rect>
            <rect x="-25" y="30" width="50" height="10" fill="white" transform="rotate(-45 0 0)" rx="5px"></rect>
            <rect x="3" y="-30" width="44" height="10" fill="white" transform="rotate(90 0 0)" rx="5px"></rect>
            <rect x="3" y="20" width="44" height="10" fill="white" transform="rotate(0 0 0)" rx="5px"></rect>
        </svg>
    </div>

    <div class="NotifCache">
        <div class="container-notifications">
            <!-- Dans cette DIV, viendront se placer
            les notifications
            -->

        </div>
    </div>

    <footer>
        Site réalisé par Corentin KERVAGORET en 2023
    </footer>


    <script type="text/javascript" src="../js/javascript.js"></script>
    <script type="text/javascript" src="testJS.js"></script>
</div>
</body>

</html>