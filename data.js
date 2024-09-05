const data = {
    janvier : {
        base : ["chou kale", "épinards", "mâche", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "pommes de terre"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "endive", "pamplemousse", "pomme"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame"]
    },
    février : {
        base : ["chou kale", "épinards", "mâche", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "pommes de terre", "falafels", "haricots rouges"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "radis"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame"]
    },
    mars : {
        base : ["épinards", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "pommes de terre"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "asperges", "pamplemousse", "pomme", "radis", "chou fleur"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame"]
    },
    avril : {
        base : ["épinards", "laitue", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "pommes de terre"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "artichaut", "asperges", "concombre", "pamplemousse", "pomme", "radis"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame"]
    },
    mai : {
        base : ["épinards", "laitue", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "artichaut", "asperges", "concombre", "fraises", "pamplemousse", "radis", "tomates"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame"]
    },
    juin : {
        base : ["épinards", "laitue", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "artichaut", "asperges", "brocoli", "concombre", "fenouil", "fraises", "framboises", "groseilles", "melon", "pamplemousse", "pastèque", "poivron", "pomme", "radis", "tomates"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame"]
    },
    juillet : {
        base : ["épinards", "laitue", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "fèves"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "artichaut", "brocoli", "concombre", "fenouil", "figue", "fraises", "framboises", "groseilles", "maïs", "melon", "pastèque", "poivron", "radis", "tomates"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame"]
    },
    août : {
        base : ["épinards", "laitue", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "fèves"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "artichaut", "brocoli", "concombre", "fenouil", "fraises", "framboises", "groseilles", "maïs", "melon", "pastèque", "poivron", "pomme", "pruneau", "radis", "raisin", "tomates"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame", "noisettes"]
    },
    septembre : {
        base : ["chou kale", "épinards", "laitue", "aucune base"],
        filler : ["patate douce", "quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "pommes de terre"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "artichaut", "brocoli", "chou fleur", "concombre", "endive", "fenouil", "figue", "maïs", "melon", "pastèque", "poivron", "pomme", "pruneau", "radis", "raisin", "tomates"],
        toppings : ["pignons de pin", "grenade", "noix", "cacahuètes", "graines", "sésame", "noisettes"]
    },
    octobre : {
        base : ["chou kale", "épinards", "laitue", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "patate douce", "pommes de terre"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "brocoli", "chou fleur", "concombre", "échalote", "endive", "fenouil", "figue", "maïs", "pomme", "radis", "raisin", "tomates"],
        toppings : ["pignons de pin", "grenade", "noix", "cacahuètes", "graines", "sésame", "châtaigne", "noisettes"]
    },
    novembre : {
        base : ["chou kale", "épinards", "mâche", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "pommes de terre"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "brocoli", "échalote", "endive", "fenouil", "orange", "pomme", "radis"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame", "châtaigne"]
    },
    décembre : {
        base : ["chou kale", "épinards", "mâche", "aucune base"],
        filler : ["quinoa", "boulghour", "pâtes", "riz", "semoule", "falafels", "haricots rouges", "pommes de terre"],
        protéines : ["poulet", "thon", "tofu", "saumon", "sardines", "crevettes", "jambon", "oeufs", "féta", "jambon cru", "pois chiches"],
        légumes : ["betterave", "céleri", "carotte", "avocat", "échalote", "endive", "orange", "pomme", "radis"],
        toppings : ["pignons de pin", "grenade", "cacahuètes", "graines", "sésame", "châtaigne"]
    }
}

// Comme noté dans script.js, j'avais d'abord créé un fichier JSON pour le côté data, mais j'ai rencontré des problèmes de cross-origin, 
// donc j'ai décidé de créé un fichier JavaScript pour pouvoir traiter les données plus simplement