const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calcula1");
const input2 = document.querySelector("#calcula2");
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector("#result");

btn.addEventListener('click', btnOnclic);

function btnOnclic(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;

}
