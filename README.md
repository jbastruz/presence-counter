# Compteur de Présence

Un compteur simple et élégant pour suivre le nombre de personnes présentes dans un espace.

## Fonctionnalités

- ✅ Interface simple avec boutons + et −
- ✅ Compteur qui ne peut pas être négatif
- ✅ Persistance des données avec localStorage
- ✅ Design responsive et moderne
- ✅ Raccourcis clavier (+ et − pour incrémenter/décrémenter)
- ✅ Animation fluide des boutons

## Utilisation

1. Cliquez sur le bouton **+** pour ajouter une personne
2. Cliquez sur le bouton **−** pour retirer une personne
3. Le compteur ne peut pas descendre en dessous de 0
4. La valeur est automatiquement sauvegardée dans votre navigateur

### Raccourcis clavier
- **+** ou **=** : Incrémenter le compteur
- **-** : Décrémenter le compteur

## Installation locale

1. Téléchargez tous les fichiers
2. Ouvrez `index.html` dans votre navigateur
3. C'est tout ! Aucune installation requise.

## Hébergement sur GitHub Pages

### Méthode rapide

1. **Créer un nouveau repository** sur GitHub
2. **Uploader les fichiers** : `index.html`, `style.css`, `script.js`
3. **Activer GitHub Pages** :
   - Aller dans Settings du repository
   - Scroller jusqu'à "Pages"
   - Source : "Deploy from a branch"
   - Branch : "main" (ou "master")
   - Folder : "/ (root)"
   - Cliquer "Save"

4. **Accéder au site** : `https://votreusername.github.io/nom-du-repository`

### Méthode avec Git

```bash
# Cloner le repository
git clone https://github.com/votreusername/nom-du-repository.git
cd nom-du-repository

# Ajouter les fichiers
git add index.html style.css script.js README.md
git commit -m "Ajouter compteur de présence"
git push origin main
```

## Structure du projet

```
presence-counter/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # Logique JavaScript
└── README.md           # Documentation
```

## Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec Flexbox et animations
- **JavaScript ES6+** : Logique applicative avec classes
- **localStorage** : Persistance des données côté client

## Compatibilité

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)  
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- 📱 Compatible mobile et tablette

## Personnalisation

### Changer les couleurs

Modifier les variables dans `style.css` :

```css
.btn-plus { background: #votre-couleur; }
.btn-minus { background: #votre-couleur; }
```

### Modifier la valeur initiale

Dans `script.js`, changer :

```javascript
this.counter = 0; // Valeur par défaut
```

## Support

Si vous rencontrez des problèmes, vérifiez que :
- Votre navigateur supporte localStorage
- JavaScript est activé
- Les fichiers sont bien dans le même dossier
