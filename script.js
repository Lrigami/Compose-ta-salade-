// J'ai d'abord créé ma base de données JSON afin de récupérer ces données dans le JavaScript (échec : explications lignes 27-28)

// Je veux que les données affichées diffèrent en fonction du mois, afin de ne proposer à l'utilisateur que des ingrédients de saison et frais
const date = new Date()
const nomMois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
const moisActuel = nomMois[date.getMonth()] // getMonth permet de récupérer le mois actuel selon la zone géographique
// getMonth permet d'obtenir un nombre entre 0 et 12, et moisActuel va donc aller récupérer le nomMois correspondant au nombre dans la liste
console.log(moisActuel)

// Maintenant je veux afficher dans un console.log les différentes catégories du mois en cours du fichier JSON (base, filler, protéines, légumes, toppings) :
// fetch('ingrédients.json') // fetch est une fonction JavaScript qui me permet de faire des requêtes HTTP. L'URL est relative au fichier HTML qui a chargé le script. 
// // //Fetch renvoie immédiatement une Promise, qui résoudra avec l'objet response une fois la requête terminée. 
// // //Fetch est recommandée pour les opérations réseau JS, remplaçant progressivement XMLHttpRequest
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("La réponse n'est pas ok")
//         }
//         return response.json() // Ceci permet de convertir la response en json
//     })
//     .then(data => {
//         console.log(data) // Traite les données ici
//     })
//     .catch(error => {
//         console.error("Erreur lors du chargement du fichier json : ", error)
//     })

// Je voulais importer du Json mais problème de cross-origin avec fetch, et pour utiliser import data from 'ingrédients.json', je devrais utiliser node.js 
// donc j'ai importé le data json directement dans un fichier JavaScript data.js 

// Je veux donc récupérer les données du mois en cours :
let moisActuelData = data[moisActuel]
console.log(moisActuelData)

//Je veux maintenant que l'utilisateur puisse d'abord sélectionner une base, puis un ou plusieurs fillers, une ou plusieurs protéines, 
//un ou plusieurs légumes et enfin un ou plusieurs toppings :

const boutonValiderContainer = document.getElementById("bouton-valider") // bouton pour valider les sélections où il existe plusieurs choix possibles

function afficherBases (moisActuelData) {
    const baseContainer = document.getElementById("options")
    const texte = document.getElementById("texteOptions")
    texte.textContent = "Choisissez une base : "

    moisActuelData.base.forEach(option => { // ici je crée des boutons radio pour chaque option qui vont venir s'inclure dans le html
        const imageLabel = document.createElement("div")
        imageLabel.classList.add("ensembleCarte")
        
        const carte = document.createElement("div") // je trasnforme mes boutons radio en cartes cliquables
        carte.classList.add("carteOption")

        const image = document.createElement("img")
        image.src = `images/${option}.png`
        image.alt = option
        
        const radio = document.createElement("input")
        radio.type = 'radio'
        radio.id = option
        radio.value = option 
        radio.name = 'base'
        radio.classList.add("cache")

        const label = document.createElement("label")
        label.htmlFor = option
        label.textContent =  option 

        imageLabel.addEventListener("click", () => {
            radio.checked = true
            // Pour décocher les autres cartes :
            document.querySelectorAll("div.carteOption").forEach(carte => {
                carte.classList.remove("selected")
            })
            carte.classList.add("selected")

            // je veux qu'une fois la base choisie, on passe à l'étape suivante
            if (radio.checked) {
                document.querySelectorAll(".ensembleCarte").forEach(c => {
                    c.style.display = "none"
                })
                afficherFillers(moisActuelData) // j'appelle donc la fonction suivante
            }
        }) 
        
        // ici les boutons sont ajoutés au html 
        carte.appendChild(radio)
        carte.appendChild(image)
        imageLabel.appendChild(carte)
        imageLabel.appendChild(label)
        baseContainer.appendChild(imageLabel)
    })
}

// Lorsque les boutons radio n'étaient pas des images cliquables, je vérifiais qu'un boutuon radio était sélectionné
//     for (let i = 0 ; i < listeDesCartes.length ; i++) { // donc je cherche pour chaque bouton radio si l'un d'entre eux est sélectionné
//         console.log(listeDesCartes[i])
//         listeDesCartes[i].addEventListener("change", (event) => {
//             console.log(event.target.value)
//             if (!listeDesCartes[i].classList.add("selected")) { // tant qu'aucun n'est sélectionné, il ne se passe rien
// // si l'un d'entre eux est sélectionné, les choix de bases disparaissent et laissent leur place aux choix de fillers
//                 listeDesCartes.forEach(function(bouton) {
//                     bouton.style.display = "none"
//                 });
//                 let listeLabels = document.querySelectorAll("label")
//                 listeLabels.forEach(function(bouton) {
//                     bouton.style.display = "none"
//                 })
//                 afficherFillers(moisActuelData) // j'appelle donc la fonction suivante
//             }
//         });
//     }
// }

function afficherFillers (moisActuelData) { // ensuite c'est très répétitif. 
    const fillersContainer = document.getElementById("options")
    const texte = document.getElementById("texteOptions")
    texte.textContent = "Choisissez un ou plusieurs fillers : "

    moisActuelData.filler.forEach(option => { // je crée des checkbox afin de pouvoir choisir plusieurs options
        const imageLabel = document.createElement("div")
        imageLabel.classList.add("ensembleCarte")        

        const carte = document.createElement("div") // je trasnforme mes checkbox en cartes cliquables
        carte.classList.add("carteOption")

        const image = document.createElement("img")
        image.src = `images/${option}.png`
        image.alt = option

        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
        checkbox.id = option
        checkbox.value = option 
        checkbox.name = 'base'
        checkbox.classList.add("cache")

        const label = document.createElement("label")
        label.htmlFor = option
        label.textContent = option 

        imageLabel.addEventListener("click", () => {
            carte.classList.toggle("selected")
            if (carte.classList.contains("selected")) {
                checkbox.checked = true 
            }
            else 
            {
                checkbox.checked = false
            }
        })

        carte.appendChild(checkbox)
        carte.appendChild(image)
        imageLabel.appendChild(carte)
        imageLabel.appendChild(label)
        fillersContainer.appendChild(imageLabel)
    }) 

    const boutonValiderFiller = document.createElement("input") // je crée un bouton de validation
    boutonValiderFiller.type = 'button'
    boutonValiderContainer.appendChild(boutonValiderFiller)
    boutonValiderFiller.value = "Valider"

    boutonValiderFiller.addEventListener("click", (event) => { // lorsque ce bouton est clické, on passe à la phase suivante
        console.log(event.target.value)
        document.querySelectorAll(".ensembleCarte").forEach(c => {
            c.style.display = "none"
        })
        boutonValiderContainer.removeChild(boutonValiderFiller)
        afficherProtéines(moisActuelData) // j'appelle la fonction suivante
    })

    // si j'ai le temps rajouter un bouton "revenir en arrière" afin de pouvoir modifier ses choix
}

function afficherProtéines (moisActuelData) { // idem que pour afficherFillers()
    const protéinesContainer = document.getElementById("options")
    const texte = document.getElementById("texteOptions")
    texte.textContent = "Choisissez une ou plusieurs protéines : "

    moisActuelData.protéines.forEach(option => {
        const imageLabel = document.createElement("div")
        imageLabel.classList.add("ensembleCarte")     

        const carte = document.createElement("div") // je trasnforme mes checkbox en cartes cliquables
        carte.classList.add("carteOption")

        const image = document.createElement("img")
        image.src = `images/${option}.png`
        image.alt = option

        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
        checkbox.id = option
        checkbox.value = option 
        checkbox.name = 'base'
        checkbox.classList.add("cache")

        const label = document.createElement("label")
        label.htmlFor = option
        label.textContent =  option 

        imageLabel.addEventListener("click", () => {
            carte.classList.toggle("selected")
            if (carte.classList.contains("selected")) {
                checkbox.checked = true 
            }
            else 
            {
                checkbox.checked = false
            }
        })

        carte.appendChild(checkbox)
        carte.appendChild(image)
        imageLabel.appendChild(carte)
        imageLabel.appendChild(label)
        protéinesContainer.appendChild(imageLabel)
    });

    const boutonValiderProtéines = document.createElement("input")
    boutonValiderProtéines.type = 'button'
    boutonValiderProtéines.value = "Valider"
    boutonValiderContainer.appendChild(boutonValiderProtéines)

    boutonValiderProtéines.addEventListener("click", (event) => { // lorsque ce bouton est clické, on passe à la phase suivante
        console.log(event.target.value)
        document.querySelectorAll(".ensembleCarte").forEach(c => {
            c.style.display = "none"
        })
        boutonValiderContainer.removeChild(boutonValiderProtéines)
        afficherLégumes(moisActuelData) // j'appelle la fonction suivante
    })
}

function afficherLégumes (moisActuelData) { // idem que pour afficherProtéines()
    const légumesContainer = document.getElementById("options")
    const texte = document.getElementById("texteOptions")
    texte.textContent = "Choisissez un ou plusieurs légumes : "

    moisActuelData.légumes.forEach(option => {
        const imageLabel = document.createElement("div")
        imageLabel.classList.add("ensembleCarte")     

        const carte = document.createElement("div") // je trasnforme mes checkbox en cartes cliquables
        carte.classList.add("carteOption")

        const image = document.createElement("img")
        image.src = `images/${option}.png`
        image.alt = option

        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
        checkbox.id = option
        checkbox.value = option 
        checkbox.name = 'base'
        checkbox.classList.add("cache")

        const label = document.createElement("label")
        label.htmlFor = option
        label.textContent =  option 

        imageLabel.addEventListener("click", () => {
            carte.classList.toggle("selected")
            if (carte.classList.contains("selected")) {
                checkbox.checked = true 
            }
            else 
            {
                checkbox.checked = false
            }
        })

        carte.appendChild(checkbox)
        carte.appendChild(image)
        imageLabel.appendChild(carte)
        imageLabel.appendChild(label)
        légumesContainer.appendChild(imageLabel)
    });

    const boutonValiderLégumes = document.createElement("input")
    boutonValiderLégumes.type = 'button'
    boutonValiderLégumes.value = "Valider"
    boutonValiderContainer.appendChild(boutonValiderLégumes)


    boutonValiderLégumes.addEventListener("click", (event) => { // lorsque ce bouton est clické, on passe à la phase suivante
        console.log(event.target.value)
        document.querySelectorAll(".ensembleCarte").forEach(c => {
            c.style.display = "none"
        })
        boutonValiderContainer.removeChild(boutonValiderLégumes)
        afficherToppings(moisActuelData) // j'appelle la fonction suivante
    })
}

function afficherToppings (moisActuelData) { // idem que pour afficherLégumes()
    const toppingsContainer = document.getElementById("options")
    const texte = document.getElementById("texteOptions")
    texte.textContent = "Choisissez un ou plusieurs toppings : "

    moisActuelData.toppings.forEach(option => {
        const imageLabel = document.createElement("div")
        imageLabel.classList.add("ensembleCarte")     

        const carte = document.createElement("div") // je trasnforme mes checkbox en cartes cliquables
        carte.classList.add("carteOption")

        const image = document.createElement("img")
        image.src = `images/${option}.png`
        image.alt = option

        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
        checkbox.id = option
        checkbox.value = option 
        checkbox.name = 'base'
        checkbox.classList.add("cache")

        const label = document.createElement("label")
        label.htmlFor = option
        label.textContent =  option 

        imageLabel.addEventListener("click", () => {
            carte.classList.toggle("selected")
            if (carte.classList.contains("selected")) {
                checkbox.checked = true 
            }
            else 
            {
                checkbox.checked = false
            }
        })

        carte.appendChild(checkbox)
        carte.appendChild(image)
        imageLabel.appendChild(carte)
        imageLabel.appendChild(label)
        toppingsContainer.appendChild(imageLabel)
    });

    const boutonValiderToppings = document.createElement("input")
    boutonValiderToppings.type = 'button'
    boutonValiderToppings.value = "Valider"
    boutonValiderContainer.appendChild(boutonValiderToppings)

    boutonValiderToppings.addEventListener("click", (event) => { // lorsque ce bouton est clické, on passe à la phase suivante
        console.log(event.target.value)
        document.querySelectorAll(".ensembleCarte").forEach(c => {
            c.style.display = "none"
        })
        texte.style.display = "none"
        boutonValiderContainer.removeChild(boutonValiderToppings)
        afficherRetryOrShare()  // ici cependant, on arrive à la fin des sélections possibles. J'appelle donc un popup à apparaitre pour récapituler les choix, 
    })                          // permettre à l'utilisateur de recommencer à composer une salade, ou partager sa sélection
}                               // voir popup.js pour les fonctions liées au popup