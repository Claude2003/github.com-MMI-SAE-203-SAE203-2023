- Nom: MALANDA SAMBA
- Prénom: Claude Rolia 
- URL du site:
- Url de la maquette : https://www.figma.com/file/LumZJbV2bdo9U9oZ5jli8L/maquette-pour-CLAUDE-MALAMDA-SAMBA?type=design&node-id=1-1042&t=qZFE45YWQlsQ4ys3-0

# Sujet : Description de la SAE

Cette SAÉ s’inscrit dans le prolongement de la SAÉ 105 du premier semestre sur la réalisation d’un site évènementiel pour promouvoir une exposition temporaire sur un mouvement artistique.

En partant du travail effectué lors de cette SAE, vous devrez :

- Reprendre les éléments graphiques de l’interface en vue de l’améliorer
- Réaliser la version bureau de l’interface
- Reprendre totalement l’intégration en vue d’une intégration Vite / Vue 3 / Tailwind / Pocketbase
- **Mettre en ligne le site sur votre VPS**

# Consignes

- Le rendu se fait en publiant vos modifications dans ce dépôt.
- Le site doit être publié à une adresse publique sous peine de perdre des points dans toutes les matières.
- Lire les consignes et répondre aux éventuelles questions sur ce même document.
- [ ] Cochez si vous avez compris !

Pour éventuellement archiver ou tester séparément votre projet, **faire une "release" (Rendu) dans GitHub** où vous déposerez une archive avec la base de données pocketbase et les éventuelles images associées (simplement faire une archive de tout le dossier)

## Consignes Intégration (Xavier Senente)

### Maquette

À partir de la maquette réalisée lors de la SAÉ 105, apporter quelques corrections mineures pour améliorer l’interface mobile du site. Réaliser ensuite la version bureau.

Conseil ⇒ mettez en place une grille pour agencer le contenu dans la version bureau.

Exportez les icônes vectorielles au format SVG.

### Intégration

Voici les attendus pour cette partie :

- Structure du code HTML (pertinence sémantique du code HTML + validation)
- Définition des paramètres graphiques dans le fichier tailwind.config.js (couleurs + typo)
- Définition des styles bases
- Définition de quelques classes utilitaires souvent utilisées
- Mise en place du responsive
- Utilisation des grilles avec CSS grid
- Interactions (menu mobile, carrousel, effet de scroll…)

## Consignes Système d'information (Abdallah Makhoul)

Voici les attendus concernant cette partie :

- Un modèle conceptuel de données
- Structuration de la base de données et saisie de données dans Pocketbase
- Saisir les données dans PocketBase
- Un fichier `backend.mjs` comportant les fonctions suivantes qui sont testées dans un fichier `testback.js`
  - une fonction qui retourne la liste de tous les artistes (page)
  - une fonction qui retourne la liste de toutes les œuvres (page)
  - une fonction qui retourne les infos d'un artiste en donnant son id en paramètre avec liste de ses œuvres (page)
  - une fonction qui retourne la liste des œuvres d'un artiste donné
  - une fonction qui retourne la liste des artistes triés par date (d'une manière chronologique) (frise)
  - une fonction qui retourne la liste des œuvres triées par date (d'une manière chronologique) (frise)
- **travail supplémentaire :**
  - **saisir ou modifier des données automatiquement à partir du front**
  - **une page de connexion (en utilisant la collection users)**

Assurez-vous que vous rendez les fichiers suivants (liens) :

- [ ] [backend](/pocketbase1/backend.mjs)
- [ ] [test backen](/pocketbase1/testBack.js)
- [ ] [MCD] (/pocketbase1/MCD.pdf)

## Consignes Développent web (Pierre Pracht)

Recopier `/pocketbase/backend.mjs` en `/pocketbase/backend.ts`. C'est le premier qui est noté en Système d'information. Le second indirectement dans le cadre de ma matière.

Si vous avez fini la base de données (PocketBase), n'oublier pas de générer ou régénérer `/src/pocketbase-types.ts` . Simplement faire :

```
npm run typegen
```

Réalisez le site en utilisant VueJS/ViteJS fourni et configuré pour l'usage TailwindCSS.

- Usage de `<RouterLink>` et `<RouterView>`
- Pages et routes paramétriques avec "Vite Pages Plugin"
- Usage de `<Suspense>` et d'"`avait`" pour récupérer les données du backend. (appel de fonction)

Barème indicatif :

- Minimum pour la moyenne :
  - 10 pour un site complet et bien intégré, mais ne faisant qu'une simple boucle pour afficher une collection.
  - Peu descendre jusqu'à 7 si peu ou pas d'intégration.
  - Des points retirés pour tous les problèmes affectant le site ou la qualité du code.
- Pour plus que 10 :
  - 12 afficher la liste d'une collection sur une page et le détail d'un élément de la collection sur une page
  - Jusqu'à 14, si plusieurs pages affichant les données de différentes façons et toujours bien intégrées.
  - Vous pouvez perdre jusqu'à 4 points pour une intégration absente.
  - Jusqu'à +2 points pour l'usage exhaustif de TypeScript.
    - Dont 1 point, si `/src/pocketbase-types.ts` fait et à jour.
  - Jusqu'à +2 points pour l'intégration d'une page 404 bien intégrée.
  - Jusqu'à +2 points pour l'affiche de tailles, couleurs, positions... pilotées par des classes CSS ou styles. (eg. frise.)

## Consignes Hébergement (Hakim Mabed)

Donnez les URL demandées et vérifiez qu’elles fonctionnent. Si vous utilisez des ports non standards : bien les spécifier dans vos URL (ex. http://foo.bar:81 ici port **81** !).

Barème de l'évaluation :

- Installation et lancement de pocketbase sur le VPS -> **3 pts**
- Transfert de la version "distribuable" de l'application web sur le VPS et sont accessibilité (dossier pb_public) -> **5 pts**
- Association d'un nom de sous domaine à l'application web (accès en http:\\nom-sous-domaine.mon-domaine.tld) -> **5 pts**
- Création d'une licence https avec let's encrypt pour le sous-domaine et lancement de pocketbase sur le port 443 -> **7 pts**

**P.S. si les accès par https sont OK alors l'accès en http n'est plus nécessaire !**

Renseigner les informations suivantes :

- [ ] Donnez l'adresse IP de votre VPS : 193.168.146.17

- [ ] Donnez le login et le mot de passe admin du compte pocketbase : claudemalanda32@gmail.com / Gredelia2007

- [ ] Donnez l'URL du backend `http://.../_/` (IP ou dommaine) :http://193.168.146.17/_/

- [ ] Donnez l'URL du frontend `http://.../` (IP ou domaine) :http://193.168.146.17/

- [ ] Donnez l'URL HTTP**S** du frontend `https://foo.bar/` (nom de dommaine) :https://sae3.claudesamba.fr/
