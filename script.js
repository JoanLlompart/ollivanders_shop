

function comprovar() { //La funcio que enllaça amb el HTML.
    
    var num=prompt("Introdueix un numero"); //demana amb un prompt que se introdueixi un numero.
    
    var num = document.getElementById("x").value;
    try { //Si hay algun if que no se cumpla entrara en el catch.
        if (num == "") { //Comproba que si es igual a no introduir cap numero, el throw fa que pasi a ser un error
            throw "No s'ha introduït cap número";
        }
        if (isNaN(num)) { //si no es un numero mostrara el mensatge del throw
            throw "La dada introduïda no és un número";
        }   //
        num = Number(num);
        if (num > 10) { //si el numero es mes gran que 10, throw fara que se convertesqui amb un error
            throw "el número introduït és massa gran";
        }
        if (num < 5) { //si el numero introduit es mes petit a 5, se convertira amb un error. 
            throw "el número introduït és massa petit";
        }
    } catch (err) { //Si dona un error entra el catch i mostrara el missatge del error.
        alert("Error: " + err + ".");
    } finally { //Fainally se executara despres de executar en try i el catch.
        document.getElementById("x").value = " ";  //Finalment tengui error o no acabara cambiant el id que tengui el valor "x" per un espai en blanc.
    }
}