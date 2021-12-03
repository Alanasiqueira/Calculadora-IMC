function calcular() {
    let textoAltura = document.getElementById('altura');
    let textoPeso = document.getElementById('peso');
    let resultado = document.getElementById('resultado');

    let altura = Number(textoAltura.value);
    let peso = Number(textoPeso.value);

    let resultadoIMC = Math.round((peso / (altura * altura)));

    if (resultadoIMC < 17) {

        resultado.innerHTML = `Você está muito abaixo do peso! SEU IMC: ${resultadoIMC} `;

    } else if (resultadoIMC >= 17 && resultadoIMC <= 18.49) {

        resultado.innerHTML = `Você está abaixo do peso! SEU IMC: ${resultadoIMC} `;
    }
    else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.99) {

        resultado.innerHTML = `Você está com seu peso normal! SEU IMC: ${resultadoIMC} `;
    }
    else if (resultadoIMC >= 25 && resultadoIMC <= 29.99) {


        resultado.innerHTML = `Cuidado! você está acima do peso ! SEU IMC: ${resultadoIMC} `;
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.99) {
        resultado.innerHTML = `Cuidado, obesidade I SEU IMC: ${resultadoIMC} `;

    }
    else if (resultadoIMC >= 35 && resultadoIMC <= 39.99) {
        resultado.innerHTML = `Cuidado, obesidade II severa! SEU IMC:${resultadoIMC}`;

    }else{
        resultado.innerHTML = `Cuidado, obesidade III mórbida! SEU IMC:${resultadoIMC}`;
    }
}   

