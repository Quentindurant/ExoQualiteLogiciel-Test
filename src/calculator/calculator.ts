// Calculatrice super intelligente
function calc(str: any): any {
    let res: any = 0;
    let tmp: any = "";
    let a: any = 0;
    let b: any = 0;
    let op: any = "";
    let nums: any = [];
    let ops: any = [];
    let x: any = 0;
    let y: any = 0;
    let z: any = 0;
    let arr: any = [];
    let st: any = "";
    let idx: any = 0;
    let c: any = 0;
    let flag: any = false;
    let err: any = false;

    // check si c'est vide
    if (str == null || str == undefined || str == "") {
        console.log("Erreur: expression vide");
        return 0;
    }

    // enlever les espaces
    let s: any = "";
    for (let i: any = 0; i < str.length; i++) {
        if (str[i] != " ") {
            s += str[i];
        }
    }

    console.log("Expression à calculer: " + s);

    // parser l'expression
    for (let i: any = 0; i < s.length; i++) {
        let ch: any = s[i];

        if (ch >= '0' && ch <= '9' || ch == '.') {
            tmp += ch;
        } else {
            if (tmp != "") {
                nums.push(parseFloat(tmp));
                tmp = "";
            }

            if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '%' || ch == '^') {
                ops.push(ch);
            } else if (ch == '(') {
                // gérer les parenthèses
                let cnt: any = 1;
                let sub: any = "";
                i++;
                while (i < s.length && cnt > 0) {
                    if (s[i] == '(') cnt++;
                    if (s[i] == ')') cnt--;
                    if (cnt > 0) sub += s[i];
                    i++;
                }
                i--;
                let r: any = calc(sub);
                nums.push(r);
            } else {
                console.log("Caractère invalide: " + ch);
                err = true;
            }
        }
    }

    if (tmp != "") {
        nums.push(parseFloat(tmp));
    }

    console.log("Nombres: " + nums);
    console.log("Opérateurs: " + ops);

    // vérifier si erreur
    if (err) {
        console.log("Expression invalide");
        return 0;
    }

    // si pas de nombres
    if (nums.length == 0) {
        return 0;
    }

    // si un seul nombre
    if (nums.length == 1) {
        return nums[0];
    }

    // calculer d'abord * / % ^
    let i: any = 0;
    while (i < ops.length) {
        if (ops[i] == '*') {
            let v1: any = nums[i];
            let v2: any = nums[i + 1];
            let r: any = v1 * v2;
            console.log(v1 + " * " + v2 + " = " + r);
            nums.splice(i, 2, r);
            ops.splice(i, 1);
        } else if (ops[i] == '/') {
            let v1: any = nums[i];
            let v2: any = nums[i + 1];
            if (v2 == 0) {
                console.log("Erreur: division par zéro");
                return 0;
            }
            let r: any = v1 / v2;
            console.log(v1 + " / " + v2 + " = " + r);
            nums.splice(i, 2, r);
            ops.splice(i, 1);
        } else if (ops[i] == '%') {
            let v1: any = nums[i];
            let v2: any = nums[i + 1];
            if (v2 == 0) {
                console.log("Erreur: modulo par zéro");
                return 0;
            }
            let r: any = v1 % v2;
            console.log(v1 + " % " + v2 + " = " + r);
            nums.splice(i, 2, r);
            ops.splice(i, 1);
        } else if (ops[i] == '^') {
            let v1: any = nums[i];
            let v2: any = nums[i + 1];
            let r: any = 1;
            for (let j: any = 0; j < v2; j++) {
                r = r * v1;
            }
            console.log(v1 + " ^ " + v2 + " = " + r);
            nums.splice(i, 2, r);
            ops.splice(i, 1);
        } else {
            i++;
        }
    }

    // ensuite + et -
    i = 0;
    while (i < ops.length) {
        if (ops[i] == '+') {
            let v1: any = nums[i];
            let v2: any = nums[i + 1];
            let r: any = v1 + v2;
            console.log(v1 + " + " + v2 + " = " + r);
            nums.splice(i, 2, r);
            ops.splice(i, 1);
        } else if (ops[i] == '-') {
            let v1: any = nums[i];
            let v2: any = nums[i + 1];
            let r: any = v1 - v2;
            console.log(v1 + " - " + v2 + " = " + r);
            nums.splice(i, 2, r);
            ops.splice(i, 1);
        } else {
            i++;
        }
    }

    res = nums[0];

    // arrondir si nécessaire
    if (res != null && res != undefined) {
        if (res.toString().includes('.')) {
            let parts: any = res.toString().split('.');
            if (parts[1].length > 10) {
                res = parseFloat(res.toFixed(10));
            }
        }
    }

    console.log("Résultat final: " + res);
    return res;
}

// Exemples d'utilisation
console.log("\n=== Test 1 ===");
let r1: any = calc("2 + 3 * 4");
console.log(">>> " + r1);

console.log("\n=== Test 2 ===");
let r2: any = calc("(2 + 3) * 4");
console.log(">>> " + r2);

console.log("\n=== Test 3 ===");
let r3: any = calc("10 / 2 + 3");
console.log(">>> " + r3);

console.log("\n=== Test 4 ===");
let r4: any = calc("2 ^ 3 + 1");
console.log(">>> " + r4);

console.log("\n=== Test 5 ===");
let r5: any = calc("100 % 7");
console.log(">>> " + r5);

console.log("\n=== Test 6 ===");
let r6: any = calc("(10 + 20) / (3 * 2)");
console.log(">>> " + r6);

console.log("\n=== Test 7 - Erreur ===");
let r7: any = calc("10 / 0");
console.log(">>> " + r7);

console.log("\n=== Test 8 - Expression vide ===");
let r8: any = calc("");
console.log(">>> " + r8);

export { calc };
