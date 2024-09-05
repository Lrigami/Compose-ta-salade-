function afficherRetryOrShare() {
    let popup = document.getElementById("retryorshare")
    popup.classList.remove("cache")

    let recap = document.getElementById("récapitulatif")

    let listeBoutonsRadio = document.querySelectorAll("input[type=radio]")
    let boutonsRadiosCoches = Array.from(listeBoutonsRadio).filter(function(bouton) {
        return bouton.checked
    })
    let valeursBoutonsRadiosCoches = boutonsRadiosCoches.map(function(bouton) {
        return bouton.value
    })

    let listeCheckbox = document.querySelectorAll("input[type=checkbox]")
    let checkboxCoches = Array.from(listeCheckbox).filter(function(bouton) {
        return bouton.checked
    })
    let valeursCheckboxCoches = checkboxCoches.map(function(bouton) {
        return bouton.value
    })

    console.log(valeursBoutonsRadiosCoches, valeursCheckboxCoches)

    afficherElementsSalade(valeursBoutonsRadiosCoches, valeursCheckboxCoches, recap)
    recommencerSalade()
    partagerSalade(valeursBoutonsRadiosCoches, valeursCheckboxCoches, recap)
}

function cacherRetryOrShare() {
    let popup = document.getElementById("retryorshare")
    popup.classList.add("cache")

    let formPopup = document.getElementById("popup")
    formPopup.style.display = "none"
}

function afficherElementsSalade(valeursBoutonsRadiosCoches, valeursCheckboxCoches, recap) {
    // Ici il faut que j'ajoute du texte "Voici les ingrédients pour votre salade : " avec Base, Filler etc. et un récapitulatif de tout ce qui a été coché

    if (valeursCheckboxCoches.length > 0) {
        recap.innerHTML = valeursBoutonsRadiosCoches.join(", ") + ", " + valeursCheckboxCoches.join(", ")
    }
    else {
        recap.innerHTML = valeursBoutonsRadiosCoches.join()
    }

    // recap.appendChild(valeursBoutonsRadiosCoches) : J'avais d'abord pensé à du appendChild mais cela ne marche pas car appendChild est là pour ajouter un noeud DOM
    // recap.appendChild(valeursCheckboxCoches)        Or, les valeursCoches sont des tableaux de valeurs. J'ai donc utilisé innerHTML
}
    
function recommencerSalade() {
    // Ici je propose de recommencer (relancer le script à zéro)
    let recommencer = document.getElementById("retry")
    recommencer.addEventListener("click", (event) => {
        if (event.target === recommencer) {
            cacherRetryOrShare()
            location.reload()
        }
    })
}
    
function partagerSalade(valeursBoutonsRadiosCoches, valeursCheckboxCoches, recap) {
        // Ici je propose de pouvoir envoyer la recette via mail

    let share = document.getElementById("share")
    share.addEventListener("click", (event) => {
        if (event.target === share) {
            let popup = document.getElementById("popup")
            popup.style.display = "flex"

            let form = document.querySelector("form")

            form.addEventListener("submit", (event) => {
                event.preventDefault()
                
                let nom = document.getElementById("nom").value
                let email = document.getElementById("email").value
                let sujet = `Recette de super salade !`
                recap.innerHTML = valeursBoutonsRadiosCoches.join(", ") + ", " + valeursCheckboxCoches.join(", ")
                let récap = recap.innerHTML
                let message = `Voici les ingrédients que sélectionnés par ${nom} pour une superbe salade : %0A${récap} %0A Régalez-vous bien !`
            
                afficherEmail(email, sujet, message)
            })
            
// Si on clique en dehors de "submit" alors le popup "partager" disparait
// handleClickOutside permet de détecter et de gérer les clicks effectués en dehors d'un élément spécifique
            function handleClickOutside(event) { 
                if (!popup.contains(event.target) && event.target !== share) {
                    popup.style.display = "none";
                    document.removeEventListener("click", handleClickOutside); 
                }
            }

            document.addEventListener("click", handleClickOutside);
        }
    })
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du créateur de salade
 * @param {string} email : l'email de la personne avec qui il veut partager sa salade
 */
function afficherEmail(email, sujet, message) {
    let mailto = `mailto:${email}?subject=${sujet}&body=${message}`
    location.href = mailto
}