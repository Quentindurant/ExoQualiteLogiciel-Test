// Guard clause
function checkIfExpressionIsNotEmpty(expression: string): void {
    if (expression == null || expression == undefined || expression == "") {
        console.log("Erreur: expression vide");
        throw new Error("Expression vide");
    }
}


function checkIfExpressionInvalid(hasError: boolean): void {
    if (hasError) {
        console.log("Expression invalide");
        throw new Error("Expression invalide");
    }
}

// extraction de fonction
function Division(LeftOperand: number, RightOperand: number): number {
    return LeftOperand / RightOperand;
}
function Modulo(LeftOperand: number, RightOperand: number): number {
    return LeftOperand % RightOperand;
}
function Multiplicate(LeftOperand: number, RightOperand: number): number {
    return LeftOperand * RightOperand;
}
function Soustraction(LeftOperand: number, RightOperand: number): number {
    return LeftOperand - RightOperand;
}
function Addition(LeftOperand: number, RightOperand: number): number {
    return LeftOperand + RightOperand;
}

// Extract variable
const OPERATORS = ['+', '-', '*', '/', '%', '^'] as const;
const PARENTHESES = ['(', ')'] as const;
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

function isOperator(caractereCourant: string): boolean {
    return OPERATORS.includes(caractereCourant as any);
}

function isParentheses(caractereCourant: string): boolean {
    return PARENTHESES.includes(caractereCourant as any);
}

function isDigit(caractereCourant: string): boolean {
    return DIGITS.includes(caractereCourant as any);
}
// Calculatrice super intelligente
function calcule(expression: string): number {
    let resultats: number = 0;
    let temporaire: string = "";
    let numeros: number[] = [];
    let operations: string[] = [];
    let err: boolean = false;

    // Guard clause : vérifier si l'expression est vide
    try {
        checkIfExpressionIsNotEmpty(expression);
    } catch (error) {
        console.log(error);
        return 0;
    }
    try {
        checkIfExpressionInvalid(err);
    } catch (error) {
        console.log(error);
        return 0;
    }

    // enlever les espaces          
    let expressionSansEspace: string = "";
    for (let i: number = 0; i < expression.length; i++) {
        if (expression[i] != " ") {
            expressionSansEspace += expression[i];
        }
    }

    console.log("Expression à calculer: " + expressionSansEspace);

    // parser l'expression
    for (let i: any = 0; i < expressionSansEspace.length; i++) {
        let caractereCourant: any = expressionSansEspace[i];

        if (isDigit(caractereCourant)) {
            temporaire += caractereCourant;
        } else {
            if (temporaire != "") {
                numeros.push(parseFloat(temporaire));
                temporaire = "";
            }

            if (isOperator(caractereCourant)) {
                operations.push(caractereCourant);
            } else if (isParentheses(caractereCourant)) {
                // gérer les parenthèses
                let cnt: any = 1;
                let sub: any = "";
                i++;
                while (i < expressionSansEspace.length && cnt > 0) {
                    if (expressionSansEspace[i] == '(') cnt++;
                    if (expressionSansEspace[i] == ')') cnt--;
                    if (cnt > 0) sub += expressionSansEspace[i];
                    i++;
                }
                i--;
                let resultatSousExpression: any = calcule(sub);
                numeros.push(resultatSousExpression);
            } else {
                console.log("Caractère invalide: " + caractereCourant);
                err = true;
            }
        }
    }

    if (temporaire != "") {
        numeros.push(parseFloat(temporaire));
    }

    console.log("Nombres: " + numeros);
    console.log("Opérateurs: " + operations);

    // Guard clause : vérifier si l'expression est invalide (après parsing)
    try {
        checkIfExpressionInvalid(err);
    } catch (error) {
        return 0;
    }

    // si pas de nombres
    if (numeros.length == 0) {
        return 0;
    }

    // si un seul nombre
    if (numeros.length == 1) {
        return numeros[0];
    }

    // calculer d'abord * / % ^
    let i: any = 0;
    while (i < operations.length) {
        if (operations[i] == '*') {
            let LeftOperand: any = numeros[i];
            let RightOperand: any = numeros[i + 1];
            let r: any = Multiplicate(LeftOperand, RightOperand);
            console.log(LeftOperand + " * " + RightOperand + " = " + r);
            numeros.splice(i, 2, r);
            operations.splice(i, 1);
        } else if (operations[i] == '/') {
            let LeftOperand: any = numeros[i];
            let RightOperand: any = numeros[i + 1];
            if (RightOperand == 0) {
                console.log("Erreur: division par zéro");
                return 0;
            }
            let r: any = Division(LeftOperand, RightOperand);
            console.log(LeftOperand + " / " + RightOperand + " = " + r);
            numeros.splice(i, 2, r);
            operations.splice(i, 1);
        } else if (operations[i] == '%') {
            let LeftOperand: any = numeros[i];
            let RightOperand: any = numeros[i + 1];
            if (RightOperand == 0) {
                console.log("Erreur: modulo par zéro");
                return 0;
            }
            let r: any = Modulo(LeftOperand, RightOperand);
            console.log(LeftOperand + " % " + RightOperand + " = " + r);
            numeros.splice(i, 2, r);
            operations.splice(i, 1);
        } else if (operations[i] == '^') {
            let LeftOperand: any = numeros[i];
            let RightOperand: any = numeros[i + 1];
            let r: any = 1;
            for (let j: any = 0; j < RightOperand; j++) {
                r = r * LeftOperand;
            }
            console.log(LeftOperand + " ^ " + RightOperand + " = " + r);
            numeros.splice(i, 2, r);
            operations.splice(i, 1);
        } else {
            i++;
        }
    }

    // ensuite + et -
    i = 0;
    while (i < operations.length) {
        if (operations[i] == '+') {
            let LeftOperand: any = numeros[i];
            let RightOperand: any = numeros[i + 1];
            let r: any = Addition(LeftOperand, RightOperand);
            console.log(LeftOperand + " + " + RightOperand + " = " + r);
            numeros.splice(i, 2, r);
            operations.splice(i, 1);
        } else if (operations[i] == '-') {
            let LeftOperand: any = numeros[i];
            let RightOperand: any = numeros[i + 1];
            let r: any = Soustraction(LeftOperand, RightOperand);
            console.log(LeftOperand + " - " + RightOperand + " = " + r);
            numeros.splice(i, 2, r);
            operations.splice(i, 1);
        } else {
            i++;
        }
    }

    resultats = numeros[0];

    // arrondir si nécessaire
    if (resultats != null && resultats != undefined) {
        if (resultats.toString().includes('.')) {
            let parts: any = resultats.toString().split('.');
            if (parts[1].length > 10) {
                resultats = parseFloat(resultats.toFixed(10));
            }
        }
    }

    console.log("Résultat final: " + resultats);
    return resultats;
}



// Exemples d'utilisation
console.log("\n=== Test 1 ===");
let r1: any = calcule("2 + 3 * 4");
console.log(">>> " + r1);

console.log("\n=== Test 2 ===");
let r2: any = calcule("(2 + 3) * 4");
console.log(">>> " + r2);

console.log("\n=== Test 3 ===");
let r3: any = calcule("10 / 2 + 3");
console.log(">>> " + r3);

console.log("\n=== Test 4 ===");
let r4: any = calcule("2 ^ 3 + 1");
console.log(">>> " + r4);

console.log("\n=== Test 5 ===");
let r5: any = calcule("100 % 7");
console.log(">>> " + r5);

console.log("\n=== Test 6 ===");
let r6: any = calcule("(10 + 20) / (3 * 2)");
console.log(">>> " + r6);

console.log("\n=== Test 7 - Erreur ===");
let r7: any = calcule("10 / 0");
console.log(">>> " + r7);

console.log("\n=== Test 8 - Expression vide ===");
let r8: any = calcule("");
console.log(">>> " + r8);

export { calcule, Addition };




