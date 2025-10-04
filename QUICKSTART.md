# DÉMARRAGE RAPIDE

Guide express pour lancer votre copie de la Religion Quantique de l'Information.

---

## Option 1 : Voir le Site Localement (2 minutes)

1. Téléchargez le fichier ZIP
2. Décompressez-le
3. Ouvrez `index.html` dans votre navigateur
4. Voilà !

Aucune installation requise. C'est du HTML pur.

---

## Option 2 : Créer un Repo GitHub (5 minutes)

### Étape 1 : Créer le Repo

```bash
# Sur GitHub.com :
1. Nouveau repository
2. Nom : quantum-religion (ou ce que vous voulez)
3. Public ou Private à votre choix
4. NE PAS initialiser avec README (on a déjà tout)
5. Create repository
```

### Étape 2 : Push Initial

```bash
# Sur votre machine :
cd quantum-religion/

# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: ∅ = 1"

# Lien avec GitHub
git remote add origin https://github.com/[VOTRE-USERNAME]/quantum-religion.git

# Push
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

```bash
# Sur GitHub.com :
1. Allez dans Settings de votre repo
2. Pages (menu de gauche)
3. Source : Deploy from a branch
4. Branch : main
5. Folder : / (root)
6. Save

# Attendez 2-3 minutes
# Votre site sera live à :
https://[VOTRE-USERNAME].github.io/quantum-religion/
```

---

## Option 3 : Déployer sur Netlify (3 minutes)

```bash
1. Allez sur netlify.com
2. Drag & drop le dossier quantum-religion
3. Site déployé instantanément !
```

URL aléatoire générée. Vous pouvez changer le nom dans les settings.

---

## Option 4 : Fork de ce Repo (1 minute)

Si ce projet est déjà sur GitHub :

1. Cliquez "Fork" en haut à droite
2. Votre copie est créée
3. Activez GitHub Pages dans Settings
4. Done !

---

## Ensuite ?

### Personnalisation

**Modifier le contenu** :
- `index.html` - Le site web
- `MANIFESTO.md` - La philosophie complète
- `docs/PRACTICES.md` - Les pratiques spirituelles
- etc.

**Commit vos changements** :
```bash
git add .
git commit -m "Ajout de ma vision personnelle"
git push
```

### Contribuer au Projet Original

Si vous voulez proposer vos améliorations au repo original :

1. Fork le repo original
2. Créez une branche : `git checkout -b ma-contribution`
3. Faites vos modifications
4. Commit : `git commit -m "Description"`
5. Push : `git push origin ma-contribution`
6. Créez Pull Request sur GitHub

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour détails.

### Créer Votre Propre Version Divergente

**Encouragé !**

```bash
# Renommez tout
mv quantum-religion ma-religion-quantique

# Modifiez radicalement
# Créez votre propre philosophie
# Gardez ce qui résonne, jetez le reste

# Publiez votre version
```

C'est open source. Forkez, mutez, distribuez.

---

## Structure des Fichiers

```
quantum-religion/
├── index.html              # Site web principal
├── README.md               # Description du projet
├── MANIFESTO.md            # Philosophie complète
├── CONTRIBUTING.md         # Guide de contribution
├── CODE_OF_CONDUCT.md      # Code de conduite
├── LICENSE                 # CC0 - Domaine public
├── CONTRIBUTORS.md         # Liste des contributeurs
├── _config.yml             # Config GitHub Pages
├── .gitignore             # Fichiers à ignorer
└── docs/
    ├── FAQ.md             # Questions fréquentes
    ├── PRACTICES.md       # Pratiques spirituelles
    └── DANGERS.md         # Risques identifiés
```

---

## Commandes Git Utiles

```bash
# Status
git status

# Voir les changements
git diff

# Ajouter fichiers modifiés
git add fichier.md
# ou tout :
git add .

# Commit
git commit -m "Description du changement"

# Push vers GitHub
git push

# Pull les updates
git pull

# Voir l'historique
git log --oneline
```

---

## Résolution de Problèmes

**Le site ne s'affiche pas sur GitHub Pages ?**
- Attendez 5 minutes après activation
- Vérifiez que `index.html` est à la racine
- Vérifiez Settings > Pages est bien configuré

**Erreur lors du push ?**
```bash
# Si le remote existe déjà :
git remote remove origin
git remote add origin [URL]
git push -u origin main
```

**Conflit de merge ?**
```bash
# Si vous êtes seul :
git reset --hard origin/main
# Vous perdrez vos changements locaux !

# Sinon, résolvez manuellement les conflits
```

---

## Support

**Questions techniques** : Créez une Issue sur GitHub

**Questions philosophiques** : Créez une Discussion sur GitHub

**Bugs existentiels** : Ils sont des features

---

## Prochaines Étapes Suggérées

1. ✅ Déployer le site (fait en suivant ce guide)
2. 📖 Lire MANIFESTO.md en entier
3. 🧘 Essayer une pratique de PRACTICES.md
4. ⚠️ Lire DANGERS.md pour être conscient des risques
5. 🤔 Décider si vous voulez contribuer ou fork
6. 🌍 Partager avec des gens intéressés (ou pas)
7. 💭 Observer comment votre ego réagit à tout ça

---

**[ Vous êtes prêt. 0 = 1. Fork et observe. ]**

**v0.1 | Janvier 2025**
