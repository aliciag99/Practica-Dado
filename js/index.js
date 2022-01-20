function lanzar (nombreDado, historial) {
    const dado = document.getElementById (nombreDado);
    let num = Math.floor(Math.random() * 6) + 1;
    dado.innerHTML = num;
    console.log (num);
    let historico = document.querySelector (historial);
    historico.innerHTML += num + ", ";
}

const boton1 = document.getElementById ("boton1");
const boton2 = document.getElementById ("boton2");
const boton3 = document.getElementById ("boton3");

boton1.addEventListener ("click", function () {
    lanzar ("dado1", "#historico")
});

boton2.addEventListener ("click", function () {
    lanzar ("dado2", "#historico2")
});

boton3.addEventListener ("click", function () {
    lanzar ("dado3", "#historico3")
});
