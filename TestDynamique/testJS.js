function generateProjects(projets) {
    const container = document.querySelector('.Projet');
    projets.forEach(projet => {
        // Crée la boîte de projet
        const projetBox = document.createElement('div');
        projetBox.className = 'flip-box ' + (projet.categorie || '');

        // Crée l'intérieur de la boîte de projet
        const innerBox = document.createElement('div');
        innerBox.className = 'flip-box-inner';

        // Crée le côté avant de la boîte
        const frontBox = document.createElement('div');
        frontBox.className = 'flip-box-front';
        const img = document.createElement('img');
        img.src = projet.image?.lien || '';
        img.alt = projet.image?.alt || '';
        img.style.width = '100%';
        img.style.height = '200%';
        frontBox.appendChild(img);

        // Crée le côté arrière de la boîte
        const backBox = document.createElement('div');
        backBox.className = 'flip-box-back';
        const title = document.createElement('h1');
        title.style.textDecoration = 'underline';
        title.innerText = projet.nom;
        backBox.appendChild(title);

        // Ajoutez les autres détails du projet
        const description = document.createElement('p');
        description.innerText = projet.courteDescription || '';
        backBox.appendChild(description);

        if (projet.date) {
            const date = document.createElement('p');
            date.innerText = `Date: ${projet.date}`;
            backBox.appendChild(date);
        }

        if (projet.langage) {
            const langage = document.createElement('p');
            langage.innerText = `Langage: ${projet.langage}`;
            backBox.appendChild(langage);
        }

        // Ajoutez le lien GitHub
        if (projet.github) {
            const githubLink = document.createElement('a');
            githubLink.href = projet.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
            githubLink.textContent = 'Lien GitHub';
            backBox.appendChild(githubLink);
        }
        const voirPlusButton = document.createElement('a');
        voirPlusButton.href = '#';
        voirPlusButton.innerText = 'Voir plus';
        voirPlusButton.onclick = function() {
            // Remplacez 'MODAL' par le nom de votre fonction pour ouvrir la modale
            MODAL(projet.nom); // passez le nom du projet comme argument pour ouvrir la modale spécifique
            return false;
        };
        backBox.appendChild(voirPlusButton);
        // Ajoutez les côtés avant et arrière à l'intérieur de la boîte
        innerBox.appendChild(frontBox);
        innerBox.appendChild(backBox);

        // Ajoutez l'intérieur de la boîte à la boîte de projet
        projetBox.appendChild(innerBox);

        // Ajoutez la boîte de projet au conteneur principal
        container.appendChild(projetBox);
        // Créez la modal pour le projet
        const modal = document.createElement('div');
        modal.id = projet.nom; // Utilise le nom du projet comme ID pour la modale
        modal.className = 'modal';

// Ajoutez le masque
        const mask = document.createElement('div');
        mask.className = 'mask';
        modal.appendChild(mask);

// Créez le contenu de la modale
        const messageModal = document.createElement('div');
        messageModal.className = 'message_modal auto';

// Ajoutez le titre
        const modalTitle = document.createElement('h2');
        modalTitle.innerText = projet.nom.toUpperCase(); // Utilisez le nom du projet en majuscules
        messageModal.appendChild(modalTitle);

// Ajoutez la description
        const modalDescription = document.createElement('p');
        modalDescription.innerText = projet.longueDescription;
        messageModal.appendChild(modalDescription);

// Ajoutez l'image
        const modalImage = document.createElement('img');
        modalImage.src = projet.imageLongueDescription.lien;
        modalImage.alt = projet.imageLongueDescription.alt;
        modalImage.style.width = '90%'; // Ajustez le style d'image selon vos besoins
        messageModal.appendChild(modalImage);

// Ajoutez le bouton de fermeture
        const closeButton = document.createElement('a');
        closeButton.href = '#';
        closeButton.className = 'close';
        closeButton.innerHTML = '&#10006;'; // Caractère de fermeture (croix)
        closeButton.onclick = function() {
            // Remplacez 'FERMER_MODAL' par la fonction qui ferme la modale
            FERMER_MODAL(modal.id);
            return false;
        };
        messageModal.appendChild(closeButton);

// Ajoutez le contenu de la modale à la modale
        modal.appendChild(messageModal);

// Ajoutez la modale au conteneur principal
        document.body.appendChild(modal);

    });
}

// URL du fichier JSON
const url = "../src/projets.json";

// Déclarez une variable pour stocker les données JSON
let data;

// Fonction pour charger et traiter les données JSON
function chargerDonneesJSON() {
    // Utilisez l'URL correcte du fichier JSON
    fetch(url)
        .then(response => {
            // Vérifier si la réponse est réussie
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            // Convertir la réponse en JSON
            return response.json();
        })
        .then(jsonData => {
            // Stocker les données JSON dans la variable data
            data = jsonData;

            // Appeler la fonction generateProjects en utilisant les données JSON chargées
            generateProjects(data.projets);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

// Appeler la fonction pour charger les données JSON
chargerDonneesJSON();
