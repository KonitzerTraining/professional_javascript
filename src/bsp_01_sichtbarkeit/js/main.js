// Sichtbarkeit von Variablen

// Globaler Bereich

var a = 1; // Globale Variable
var erg = f1("text");

function f1(c) { // Hoisting

    var b = 2; // lokale Variable

    // Zugriff auf alle höheren Sichtbarkeitsbereiche
    console.log(a);
    console.log(c);

    return "aha";
}

console.log(erg);
console.log(f2);


// Funktionsausdruck
var f2 = function () {
    var globale; // Hoisting vorweg genommen
    console.log(globale);
    globale = "Neu";
    console.log(globale);
};

var globale = "Inhalt";  // Hoisting
f2();
console.log(globale);


if (true) {
    // IIFE
    // Simulation eines lokalen Block-Scopes
    (function () {
        var x = 1;
    }());
}
//console.log(x);


var shop = function () { // Hoisting der Variablen shop
    var basket = [];  // Closure

    return {
        add: function (item) {
            basket.push(item); //Auslöser
            console.log(basket);
        }
    }
};

var myShop = shop(); // Hoisting von myShop

myShop.add("Haus");
myShop.add("Haus");
myShop.add("Auto");
