# Demo Qualité Logicielle - La Fonction Monstrueuse

## 🎯 Objectif pédagogique

Ce projet fait partie du **Jour 1** de la formation "Qualité Logiciel" (Chapitre 2 - Étude Legacy #1).

**Objectif** : Apprendre à identifier les problèmes d'un code legacy avant de le refactorer.

## 📋 Description

Une mini-calculatrice **en TypeScript** capable d'évaluer des expressions mathématiques avec :
- Opérations de base : `+`, `-`, `*`, `/`
- Opérations avancées : `%` (modulo), `^` (puissance)
- Support des parenthèses
- Gestion de la priorité des opérateurs

## 🚨 Attention : Code Legacy Volontairement Mauvais

Ce code contient **TOUS** les défauts classiques d'un code legacy :

### Défauts à identifier

#### 1. Noms non explicites
- Variables génériques : `a`, `b`, `tmp`, `res`, `x`, `y`, `z`
- Fonction peu claire : `calc`
- Variables inutilisées : `st`, `c`, `flag`, `arr`

#### 2. Structure problématique
- Fonction trop longue : ~190 lignes
- Niveaux d'imbrication profonds (if dans while dans for)
- Trop de variables locales (17 variables !)

#### 3. Duplication de code
- Blocs similaires pour chaque opération
- Code répété pour la validation
- Logs dupliqués partout

#### 4. Cohésion absente
- Plusieurs responsabilités mélangées :
  - Parsing de l'expression
  - Validation des données
  - Calcul mathématique
  - Affichage des résultats (console.log)
  - Gestion des erreurs
  - Formatage du résultat

#### 5. Gestion d'erreur incohérente
- Try/catch absent
- Certaines erreurs retournent 0
- D'autres affichent juste un message
- Pas de véritable propagation d'erreur

#### 6. Mauvaises pratiques TypeScript
- **Type `any` partout** : aucun bénéfice du typage statique
- Perte de l'autocomplétion et de la vérification de types
- TypeScript utilisé comme JavaScript avec des annotations
- `strict: false` dans tsconfig.json

#### 7. Autres problèmes
- Pas de tests unitaires
- Commentaires inutiles ou absents
- Logique métier couplée à l'affichage
- Fonction récursive sans limite de profondeur

## 🏗️ Structure du projet

```
demo-qualite-calculatrice/
├── package.json
├── tsconfig.json         # Configuration TypeScript
├── src/
│   ├── calculator.ts     # La fonction monstrueuse (TypeScript)
│   └── examples.ts       # Exemples supplémentaires
├── dist/                 # Fichiers compilés (généré par npm run build)
└── README.md
```

## 🚀 Utilisation

### Avec Docker (recommandé)

**Option 1 : Docker Compose**

```bash
# Démarrer l'environnement
docker-compose up -d

# Se connecter au conteneur
docker-compose exec dev bash

# Dans le conteneur
npm install
npm start

# Arrêter l'environnement
docker-compose down
```

**Option 2 : Docker run**

```bash
# Depuis le dossier racine du projet
docker run -it --rm -v $(pwd):/app alexisdelaporte/node-dev:latest bash

# Dans le conteneur
npm install
npm start
```

### Sans Docker

```bash
# Prérequis : Node.js 20+
npm install

# Compiler et exécuter
npm start

# Mode développement (recompile automatiquement)
npm run dev

# Exemples supplémentaires
npm run examples

# Compiler uniquement
npm run build

# Nettoyer les fichiers compilés
npm run clean
```

## 📝 Exercices

### Exercice 1 : Analyse

Utilisez la grille d'analyse pour lister tous les défauts :

| Catégorie | Défauts identifiés | Gravité (1-5) |
|-----------|-------------------|---------------|
| Noms | | |
| Structure | | |
| Duplication | | |
| Cohésion | | |
| Gestion d'erreur | | |

### Exercice 2 : Refactor minimal

**Objectif** : Découper la fonction sans changer le comportement

**Interdictions** :
- ❌ Ne PAS changer la logique
- ❌ Ne PAS "améliorer" le fonctionnel
- ❌ Ne PAS ajouter de nouvelles fonctionnalités

**À faire** :
- ✅ Extraire les fonctions : parsing, validation, calcul
- ✅ Renommer les variables
- ✅ Séparer les responsabilités

### Exercice 3 : Premiers tests

**Objectif** : Tester uniquement les fonctions extraites

**Tests à écrire** :
- Cas nominal : `2 + 3 = 5`
- Cas limites : `0`, nombres négatifs, décimaux
- Cas d'erreur : division par zéro, expression invalide

## 💡 Message clé

> **"Si c'est difficile à lire, c'est impossible à tester correctement."**

## 🔗 Prochaines étapes

Après ce module, vous saurez :
- ✅ Identifier les code smells
- ✅ Analyser la cohésion d'une fonction
- ✅ Extraire de la logique testable
- ✅ Écrire des tests unitaires simples

