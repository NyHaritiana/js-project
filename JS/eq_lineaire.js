function submitResult() {
    let a = parseFloat(document.querySelector("#inputx1").value),
        b = parseFloat(document.querySelector("#inputy1").value),
        c = parseFloat(document.querySelector("#inputz1").value),
        d = parseFloat(document.querySelector("#inputAfterEqual1").value),
        e = parseFloat(document.querySelector("#inputx2").value),
        f = parseFloat(document.querySelector("#inputy2").value),
        g = parseFloat(document.querySelector("#inputz2").value),
        h = parseFloat(document.querySelector("#inputAfterEqual2").value),
        i = parseFloat(document.querySelector("#inputx3").value),
        j = parseFloat(document.querySelector("#inputy3").value),
        k = parseFloat(document.querySelector("#inputz3").value),
        l = parseFloat(document.querySelector("#inputAfterEqual3").value),
        delta = (a*(f*k - j*g)) - (b*(e*k - g*i)) + (c*(e*j - f*i)),
        deltaX = (d*(f*k - g*j)) - (b*(k*h - l*g)) + (c*(h*j - f*l)),
        deltaY = (a*(h*k - g*l)) - (d*(e*k - g*i)) + (c*(e*l - h*i)),
        deltaZ = (a*(f*l - h*j)) - (b*(e*l - h*i)) + (d*(e*j - f*i)),
        x = deltaX / delta,
        y = deltaY / delta,
        z = deltaZ / delta;

    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f) || isNaN(g) || isNaN(h) || isNaN(i) || isNaN(j) || isNaN(k) || isNaN(l)) {
        window.alert("Veuillez saisir uniquement des chiffres valides, toutes les cases doivent avoir des valeurs, mets 0 si une case n'a pas de valeur!");
    } else if ((a === 0 && b === 0 && c === 0) || (e === 0 && f === 0 && g === 0) || (i === 0 && j === 0 && k === 0)) {
        window.alert("!!!Math ERROR!!!");
    } else if (delta === 0) {
        $(function(){
            $("#reponse").show();
            $(".close").click(function() {
                $("#reponse").hide();
            })
        });
    } else {
        document.querySelector("#xResult").value = x.toFixed(2);
        document.querySelector("#yResult").value = y.toFixed(2);
        document.querySelector("#zResult").value = z.toFixed(2);
    }
}

function clearFields() {
    document.querySelector("#inputx1").value = "";
    document.querySelector("#inputx2").value = "";
    document.querySelector("#inputx3").value = "";
    document.querySelector("#inputAfterEqual1").value = "";
    document.querySelector("#inputy1").value = "";
    document.querySelector("#inputy2").value = "";
    document.querySelector("#inputy3").value = "";
    document.querySelector("#inputAfterEqual2").value = "";
    document.querySelector("#inputz1").value = "";
    document.querySelector("#inputz2").value = "";
    document.querySelector("#inputz3").value = "";
    document.querySelector("#inputAfterEqual3").value = "";
    document.querySelector("#xResult").value = "";
    document.querySelector("#yResult").value = "";
    document.querySelector("#zResult").value = "";
}
