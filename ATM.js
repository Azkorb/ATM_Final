var img = [];
img["50"]= "imagenes/50.png";
img["20"]= "imagenes/20.png";
img["10"]= "imagenes/10.png";
img["5"]= "imagenes/5.png";
img["1"]= "imagenes/1.png";

    class billete {
        constructor(v,c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = img[this.valor];
    }
}

var caja = [];
caja.push(new billete(50,10));
caja.push(new billete(20,15));
caja.push(new billete(10,15));
caja.push(new billete(5,20));
caja.push(new billete(1,100));
contar();
function contar() {
    total=0
    for(var $ of caja){
        total = total + ($.valor * $.cantidad);
    }
    console.log(total);
}
var saldo = document.getElementById("saldo");
saldo.innerHTML+="me quedan " + total + " dolares para entregar";
var dinero;
var entregado = [];
var papeles = 0;
var div = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("retirar");
boton.addEventListener("click", retirarDinero);

//comienza la funcion que realiza la ecuasion
function retirarDinero() {
    var t = document.getElementById("cantidad");
    dinero = parseInt(t.value);
    for(var bi of caja) {

        if (dinero > 0) {
            div = Math.floor(dinero/bi.valor);
            
            if(div>bi.cantidad){
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }

            entregado.push(new billete(bi.valor,papeles))
            dinero = dinero - (bi.valor*papeles);
        } 
    }
    
    if(dinero>0) {
        resultado.innerHTML = "soy un cajero pobre y no tengo dinero";
    }else {
        resultado.innerHTML+= " se retiro: " + "<br>";
        for (var e of entregado) 
        {
            total= total-(e.valor*e.cantidad);
            //if (e.cantidad > 0) {
                resultado.innerHTML += e.cantidad+"x " +"<img src=" + e.imagen.src + " />";            
            //}
        }
    }
}
resultado.innerHTML+= "<hr>";
