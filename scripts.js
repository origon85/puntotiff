const card_1 = document.getElementById('card1');
const card_2 = document.getElementById('card2');
const card_3 = document.getElementById('card3');
const totalPagar = document.getElementById('totalAPagar');
var total = 0;

card_1.addEventListener('click',(e)=>{
    e.preventDefault()
    seleccionarTarjeta1()
});

function seleccionarTarjeta1(){
    if (card_1.classList.contains('card-select')){
        card_1.classList.remove('card-select');
        calcularPago(-40);
    }else{
        card_1.classList.add('card-select');
        calcularPago(40);
    }
}


card_2.addEventListener('click',(e)=>{
    e.preventDefault()
    seleccionarTarjeta2()
});

function seleccionarTarjeta2(){
    if (card_2.classList.contains('card-select')){
        card_2.classList.remove('card-select');
        calcularPago(-20);
    }else{
        card_2.classList.add('card-select');
        calcularPago(20);
    }
}



card_3.addEventListener('click',(e)=>{
    e.preventDefault()
    seleccionarTarjeta3()
});

function seleccionarTarjeta3(){
    if (card_3.classList.contains('card-select')){
        card_3.classList.remove('card-select');
        calcularPago(-50);
    }else{
        card_3.classList.add('card-select');
        calcularPago(50);
    }
}

function calcularPago(monto){
    total = total + monto;
    

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}

function enviarCorreo(){
    alert("Su consulta ha sido enviada");
}

const consultar = document.getElementById('consultar');
consultar.addEventListener('onsubmit',(e)=>{
    e.preventDefault()
    enviarCorreo()
});