function calcularBhaskara(){
    var a = Number(document.getElementById('coeficienteA').value);
    var b = Number(document.getElementById('coeficienteB').value);
    var c = Number(document.getElementById('coeficienteC').value);

    var delta = (b**2 -4) *a*c;
    if (delta<0){
        document.getElementById('resultado').innerText = 'Delta é negativo, não possui raíz real!';
    } else {
        
        var x1 = (-b + Math.sqrt(delta)) / (2*a);
        var x2 = (-b - Math.sqrt(delta)) / (2*a);
        document.getElementById('resultado').innerText = `O valor de x' é: ${x1}, e de x'' é: ${x2}`;
    }
}