// Récupérer le formulaire d'ajout de critique
const addReviewForm = document.getElementById('add-review-form');

// Écouter l'événement de soumission du formulaire
addReviewForm.addEventListener('submit', function(event
) {
event.preventDefault();

// Récupérer les valeurs des champs du formulaire
const title = document.getElementById('review-title').value;
const description = document.getElementById('review-description').value;
const author = document.getElementById('review-author').value;

// Créer un élément de critique
const reviewElement = document.createElement('div');
reviewElement.classList.add('review');

// Créer les éléments de titre, description et auteur de la critique
const titleElement = document.createElement('h2');
titleElement.classList.add('review-title');
titleElement.textContent = title;

const descriptionElement = document.createElement('p');
descriptionElement.classList.add('review-description');
descriptionElement.textContent = description;

const authorElement = document.createElement('p');
authorElement.classList.add('review-author');
authorElement.textContent = - ${author};

// Ajouter les éléments à l'élément de critique
reviewElement.appendChild(titleElement);
reviewElement.appendChild(descriptionElement);
reviewElement.appendChild(authorElement);

// Ajouter l'élément de critique au conteneur des critiques
const reviewsContainer = document.getElementById('reviews-container');
reviewsContainer.appendChild(reviewElement);

// Réinitialiser les champs du formulaire
addReviewForm.reset();
});