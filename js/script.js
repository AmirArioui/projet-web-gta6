// Script du site GTA 6

// 1. Nombre de jours avant la sortie (page d'accueil)
let compte = document.getElementById("compte");

if (compte != null) {
    let maintenant = new Date();
    let sortie = new Date("2026-11-19");
    let difference = sortie - maintenant;
    let jours = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (jours > 0) {
        compte.textContent = "Plus que " + jours + " jours avant la sortie !";
    } else {
        compte.textContent = "Le jeu est sorti !";
    }
}

// 2. Boutons "Plus d'infos" (page personnages)
let boutons = document.querySelectorAll(".bouton-info");

for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", function () {
        // le texte caché est juste après le bouton
        let info = boutons[i].nextElementSibling;

        if (info.style.display == "block") {
            info.style.display = "none";
            boutons[i].textContent = "Plus d'infos";
        } else {
            info.style.display = "block";
            boutons[i].textContent = "Moins d'infos";
        }
    });
}
