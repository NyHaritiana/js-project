function submitResult1() {
    let a = parseFloat(document.querySelector("#ax").value),
        b = parseFloat(document.querySelector("#bx").value),
        c = parseFloat(document.querySelector("#c").value),
        delta, x0, x1, x2, x3;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        window.alert("Veuillez saisir uniquement des chiffres valides, toutes les cases doivent avoir des valeurs, mets 0 si une case n'a pas de valeur!");
    } else if (a === 0 && b === 0) {
        window.alert("Les valeurs de a et b ne doivent pas être nuls en même temps!");
    } else if(a === 0 && b !== 0 && c !== 0) {
        document.querySelector("#resultInput").value =`x = ${(-c / b).toFixed(2)}`;
    } else if(a !== 0 && b === 0 && c !== 0) {
        x3 = Math.sqrt(-c / a);
        if(!isFinite(x3)) {
            document.querySelector("#resultInput").value = "Impossible!";
        } else {
            document.querySelector("#resultInput").value = `x = ${x3.toFixed(2)}`;
        }
    } else if(a !== 0 && b !== 0 && c === 0) {
        document.querySelector("#resultInput").value = `x' = 0 et x" = ${(-b / a).toFixed(2)}`;
    } else if(a !== 0 && b !== 0 && c !== 0) {
        delta = (b * b) - (4 * a * c);
        if(delta < 0) {
            document.querySelector("#resultInput").value = "Delta Negatif, Pas de Solution pour l'instant!";
        } else if (delta === 0) {
            x0 = (-b) / (2 * a);
            document.querySelector("#resultInput").value = `Delta est nul, alors x' = x" = ${x0.toFixed(2)}`;
        } else {
            x1 = (-b - Math.sqrt(delta)) / (2 * a);
            x2 = (-b + Math.sqrt(delta)) / (2 * a);
            document.querySelector("#resultInput").value = `x' = ${x1.toFixed(2)} et x" = ${x2.toFixed(2)}`;
        }
    } else {
        document.querySelector("#resultInput").value = "x = 0";
    }
}

function clearFields() {
    document.querySelector("#ax").value = "";
    document.querySelector("#bx").value = "";
    document.querySelector("#c").value = "";
    document.querySelector("#resultInput").value = "";
}

