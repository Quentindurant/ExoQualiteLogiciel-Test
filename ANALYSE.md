# Grille d'analyse - Fonction Monstrueuse

## 📋 Instructions

Durée : 30 minutes

Analysez le fichier `src/calculator.ts` et identifiez tous les défauts du code selon les catégories ci-dessous.

**Travail demandé** : Lister les défauts visibles **SANS** refactorer

## 🔍 Catégories d'analyse

### 1. Noms (Naming)

**Questions** :
- Les noms de variables sont-ils explicites ?
- Les noms de fonctions décrivent-ils clairement leur rôle ?
- Y a-t-il des variables inutilisées ?

**Défauts identifiés** :

| Variable/Fonction | Problème | Suggestion |
|-------------------|----------|------------|
| | | |
| | | |
| | | |

---

### 2. Structure

**Questions** :
- La fonction est-elle trop longue ?
- Combien de niveaux d'imbrication ?
- Combien de variables locales ?
- Combien de responsabilités ?

**Défauts identifiés** :

| Métrique | Valeur actuelle | Valeur cible | Écart |
|----------|-----------------|--------------|-------|
| Lignes de code | | < 20 | |
| Niveaux d'imbrication | | < 3 | |
| Variables locales | | < 5 | |
| Responsabilités | | 1 | |

---

### 3. Duplication

**Questions** :
- Y a-t-il des blocs de code similaires ?
- Des patterns répétés ?
- Du code copié-collé avec de légères variations ?

**Défauts identifiés** :

| Localisation (lignes) | Code dupliqué | Nombre d'occurrences |
|-----------------------|---------------|----------------------|
| | | |
| | | |

---

### 4. Cohésion

**Questions** :
- La fonction fait-elle une seule chose ?
- Quelles responsabilités sont mélangées ?
- Peut-on facilement expliquer ce que fait la fonction en une phrase ?

**Responsabilités identifiées** :

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

**Test de cohésion** :
> Si je ne sais pas comment tester cette fonction, c'est qu'elle fait trop de choses.

Comment testeriez-vous cette fonction ?

---

### 5. Utilisation de TypeScript

**Questions** :
- Les types sont-ils correctement utilisés ?
- Le type `any` est-il surulisé ?
- Quels sont les avantages perdus du typage statique ?
- Le code bénéficie-t-il vraiment de TypeScript ?

**Défauts identifiés** :

| Variable/Paramètre | Type actuel | Type correct suggéré | Impact |
|--------------------|-------------|----------------------|--------|
| | | | |
| | | | |

**Bénéfices TypeScript perdus** :
- [ ] Autocomplétion
- [ ] Vérification de types à la compilation
- [ ] Documentation automatique
- [ ] Refactoring sécurisé
- [ ] Détection d'erreurs avant l'exécution

---

### 6. Gestion des erreurs

**Questions** :
- Les erreurs sont-elles gérées de manière cohérente ?
- Y a-t-il des try/catch ?
- Les erreurs sont-elles propagées ou masquées ?
- Que se passe-t-il en cas d'entrée invalide ?

**Défauts identifiés** :

| Type d'erreur | Gestion actuelle | Problème |
|---------------|------------------|----------|
| Expression vide | | |
| Division par zéro | | |
| Caractère invalide | | |
| Parenthèses non fermées | | |

---

## 🎯 Synthèse

### Top 3 des problèmes critiques

1.
2.
3.

### Message clé retenu

> "Si c'est difficile à lire, c'est impossible à tester correctement."

Comment ce code illustre-t-il ce message ?

---

## 📝 Notes additionnelles

Autres observations :

---

## ✅ Validation

**Question finale** :
Si vous deviez ajouter une nouvelle opération (ex: racine carrée), où et comment le feriez-vous ?

**Réponse** :

Qu'est-ce que cela révèle sur la qualité du code ?
