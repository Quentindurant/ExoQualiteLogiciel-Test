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
├── tsconfig.json              # Configuration TypeScript
├── src/
│   ├── calculator/            # 📦 Logique métier (pure)
│   │   ├── calculator.ts      #    La fonction monstrueuse
│   │   ├── calculator.test.ts #    Tests unitaires
│   │   └── examples.ts        #    Exemples supplémentaires
│   └── web/                   # 🌐 Interface utilisateur
│       └── legacy/            #    ❌ Version couplée (mauvais exemple)
│           └── calculator-ui-legacy.ts
├── public/                    # 🎨 Fichiers HTML
│   └── index-legacy.html      #    Interface web legacy
├── dist/                      # Fichiers compilés (généré par npm run build)
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
```

#### Mode console (fonction monstrueuse)

```bash
# Compiler et exécuter en console
npm start

# Mode développement (recompile automatiquement)
npm run dev

# Exemples supplémentaires
npm run examples
```

#### Mode web (exercice couplage UI)

```bash
# Lancer l'interface web legacy (version couplée)
npm run start:web
# Ouvre automatiquement http://localhost:8080/public/index-legacy.html

# Mode développement web (recompile automatiquement)
npm run dev:web
```

#### Autres commandes

```bash
# Compiler uniquement
npm run build

# Lancer les tests
npm test

# Tests avec interface UI
npm run test:ui

# Tests avec couverture de code
npm run test:coverage

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

### Exercice 4 : Découplage de l'interface web (Chapitre 7)

**Objectif** : Séparer la logique métier de la manipulation DOM

#### Version Legacy (fournie)

La version `src/web/legacy/calculator-ui-legacy.ts` présente **tous les problèmes** de couplage :

**Problèmes identifiés** :
1. ❌ Variables globales (`calculationCount`, `lastResult`)
2. ❌ Logique couplée au DOM (impossible à tester unitairement)
3. ❌ Pas de séparation des responsabilités
4. ❌ Effets de bord partout (`console.log`, manipulation DOM directe)
5. ❌ Impossible de réutiliser sans navigateur

#### Votre mission

Créer une version **découplée** dans `src/web/refactored/` :

**Étape 1 : Extraire la logique métier**

Créer `src/web/refactored/calculator-logic.ts` avec des **fonctions pures** :

```typescript
// ✅ Logique pure (testable sans DOM)
export function detectError(result: number, expression: string): boolean {
  return result === 0 && expression !== "0" && !expression.includes("0 / 0");
}

export function formatResult(result: number, isError: boolean) {
  if (isError) {
    return { text: `❌ Erreur: ${result}`, className: 'error' };
  }
  return { text: `Résultat: ${result}`, className: 'success' };
}

export function validateExpression(expression: string): boolean {
  return expression !== null && expression !== undefined && expression.trim() !== '';
}
```

**Étape 2 : Créer l'interface découplée**

Créer `src/web/refactored/calculator-ui-refactored.ts` :

```typescript
import { calc } from '../../calculator/calculator.js';
import { detectError, formatResult, validateExpression } from './calculator-logic.js';

let inputElement: HTMLInputElement;
let resultElement: HTMLElement;

function handleCalculation() {
  const expression = inputElement.value;

  if (!validateExpression(expression)) { /* ... */ }

  const result = calc(expression);
  const isError = detectError(result, expression);  // ✅ Fonction pure
  const display = formatResult(result, isError);    // ✅ Fonction pure

  resultElement.textContent = display.text;
  resultElement.className = display.className;
}

function init() {
  inputElement = document.getElementById('calc-input') as HTMLInputElement;
  resultElement = document.getElementById('result')!;
  document.getElementById('calc-button')!.addEventListener('click', handleCalculation);
}
```

**Étape 3 : Comparer les deux versions**

| Aspect | Legacy (couplée) | Refactored (découplée) |
|--------|------------------|------------------------|
| Tests unitaires | ❌ Impossible | ✅ Facile |
| Réutilisabilité | ❌ Navigateur requis | ✅ Logique portable |
| Maintenance | ❌ Difficile | ✅ Simple |
| Responsabilités | ❌ Mélangées | ✅ Séparées (SRP) |
| Logique métier | ❌ Couplée au DOM | ✅ Fonctions pures |

**Étape 4 : Écrire des tests**

Créer `src/web/refactored/calculator-logic.test.ts` :

```typescript
import { describe, it, expect } from 'vitest';
import { detectError, formatResult, validateExpression } from './calculator-logic';

describe('detectError', () => {
  it('should detect division by zero as error', () => {
    expect(detectError(0, "10 / 0")).toBe(true);
  });

  it('should not detect error for valid zero result', () => {
    expect(detectError(0, "0")).toBe(false);
  });
});

describe('formatResult', () => {
  it('should format error result', () => {
    const result = formatResult(0, true);
    expect(result.text).toBe('❌ Erreur: 0');
    expect(result.className).toBe('error');
  });
});
```

**Avantage** : Tests rapides (~1ms), sans DOM, sans navigateur !

## 💡 Message clé

> **"Si c'est difficile à lire, c'est impossible à tester correctement."**

## 🔗 Prochaines étapes

Après ce module, vous saurez :
- ✅ Identifier les code smells
- ✅ Analyser la cohésion d'une fonction
- ✅ Extraire de la logique testable
- ✅ Écrire des tests unitaires simples

