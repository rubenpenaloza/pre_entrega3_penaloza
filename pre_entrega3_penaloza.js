//Se crea un sistema logístico para ayudar a la planificación de la producción



//Se solicita programa de producción de cada producto día a día mediante imputs
//Se crean 3 inputs para solicitar información con respecto al plan de producción diario de cada uno de los 3 productos (A,B,C)

let arreglo_de_produccion=[];

function set_data(){
    let produccion_a=document.getElementById("produccion_a");
    let produccion_b=document.getElementById("produccion_b");
    let produccion_c=document.getElementById("produccion_c");


    let plan_produccion={produccion_a:produccion_a.value,produccion_b:produccion_b.value,produccion_c:produccion_c.value};
    
    arreglo_de_produccion.push(plan_produccion);

    let arreglo_produccion_JSON=JSON.stringify(arreglo_de_produccion);
    localStorage.setItem("arreglo_produccion",arreglo_produccion_JSON);
let recuperando_produccion=localStorage.getItem("arreglo_produccion")
    recuperando_produccion=JSON.parse(recuperando_produccion);
}

let boton=document.getElementById("boton");
boton.addEventListener("click",set_data);
boton.addEventListener("click",function(){


let li=document.createElement("li");
li.innerHTML=//Agregar día con arreglo
            `<h2>Día de producción </h2>
            <span>Producción del producto A:</span>
            <span>${produccion_a.value}</span>
            <br>
            <span>Producción del producto B:</span>
            <span>${produccion_b.value}</span>
            <br>
            <span>Producción del producto C:</span>
            <span>${produccion_c.value}</span> 
            <button class="btn_borrar">Borrar</button>`
            
plan_produccion.append(li);
//Se crea un boton para borrar en caso de uqe los datos ingresados sean incorrectos! 
let botones_borrar=document.querySelectorAll(".btn_borrar");

for(let boton of botones_borrar){
    boton.addEventListener("click",borrar_elemento);

//Creación de clases: Se declaran los componentes que lleva cada producto terminado, stocks iniciales y finales
class composicion_producto {
    constructor (codigo,compo_1,compo_2,compo_3,stock_inicial_prod,stock_final_prod){
        this.codigo=codigo;
        this.compo_1=compo_1;
        this.compo_2=compo_2;
        this.compo_3=compo_3;
        this.stock_inicial_prod=stock_inicial_prod;
        this.stock_final_prod=stock_final_prod;
        
    }
    //Se verifica que sean números
    set_compo_1( compo_1 ){
        
        if( typeof(compo_1) == "number"){
            this.compo_1 = compo_1
        }
        
    }
    set_compo_2( compo_2 ){
        
        if( typeof(compo_2) == "number"){
            this.compo_2 = compo_2
        }
        
    }
    set_compo_3( compo_3 ){
        
        if( typeof(compo_3) == "number"){
            this.compo_3 = compo_3
        }
        
    }
    set_nuevo_stock(){
        this.stock_inicial_prod=this.stock_final_prod
        console.log("Nuevo stock inicial",this.stock_inicial_prod)
    }
    
}
//Se declaran los productos con sus composiciones
let compo_prod_a= new composicion_producto ("A",3,12,25,800,0);
let compo_prod_b= new composicion_producto ("B",15,20,10,350,0);
//Control, se revisa que se ejecuten las funciones
compo_prod_a.set_compo_1();
compo_prod_a.set_compo_2();
compo_prod_a.set_compo_3();





//Creación de clases: Se crean las características de los componentes
class componente {
    constructor (codigo,farmaco,medida,precio,stock_inicial_comp){
        this.codigo=codigo;
        this.farmaco=farmaco;
        this.medida=medida;
        this.precio=precio;
        this.stock_inicial_comp=stock_inicial_comp;
        this.stock_final_comp=this.stock_final_comp
    } 
    set_precio( precio ){
        
        if( typeof(precio) == "number"){
            this.precio = precio
        }
        
    }
   set_stock_inicial(){
    this.stock_inicial_comp=this.stock_final_comp;
    console.log(this.stock_inicial_comp)

   }
    mostrar_precio(){
        console.log("mostrar" ,this.precio);
        } 
        set_stock_inicial(){
            this.stock_inicial_comp=this.stock_final_comp;
            console.log(this.stock_inicial_comp)
        }
}

// Se declaran los componentes que utilizan los productos a fabricar
    let comp_1 = new componente ("b","farma_2","litro",125,400);
    let comp_2 = new componente ("c","farma_3","gramo",40,630);
    let comp_3 = new componente ("d","farma_1","gramo",210,980);
// Se listan los componentes para utilizar las características que tienen cada uno luego
    let lista_componentes =[comp_1,comp_2];

  
//Se calcula stock al final del día de los Productos A y B
for(let i=0;i<arreglo_de_produccion.length;i++){
    console.log("Día: ",i);


compo_prod_a.stock_final_prod=compo_prod_a.stock_inicial_prod+parseInt(produccion_a.value);
compo_prod_b.stock_final_prod=compo_prod_b.stock_inicial_prod+parseInt(produccion_b.value);

comp_1.stock_final_comp=comp_1.stock_inicial_comp-(compo_prod_a.compo_1*parseInt(produccion_a.value)+compo_prod_b.compo_1*parseInt(produccion_b.value));
comp_2.stock_final_comp=comp_2.stock_inicial_comp-(compo_prod_a.compo_2*parseInt(produccion_a.value)+compo_prod_b.compo_2*parseInt(produccion_b.value));
comp_3.stock_final_comp=comp_3.stock_inicial_comp-(compo_prod_a.compo_3*parseInt(produccion_a.value)+compo_prod_b.compo_3*parseInt(produccion_b.value));


compo_prod_a.stock_inicial_prod=compo_prod_a.stock_final_prod;
compo_prod_b.stock_inicial_prod=compo_prod_b.stock_final_prod;
comp_1.stock_inicial_comp=comp_1.stock_final_comp;
comp_2.stock_inicial_comp=comp_2.stock_final_comp;
comp_3.stock_inicial_comp=comp_3.stock_final_comp;

console.log("El stock al final del día del Producto A es: ",compo_prod_a.stock_final_prod)
console.log("El stock al final del día del Producto B es: ",compo_prod_b.stock_final_prod)
console.log("El stock al final del día del componente 1 es: ",comp_1.stock_final_comp);
console.log("El stock al final del día del componente 2 es: ",comp_2.stock_final_comp);
console.log("El stock al final del día del componente 3 es: ",comp_3.stock_final_comp);
console.log("El stock al inicio del día del componente 1 es: ",comp_1.stock_inicial_comp);
console.log("El stock al inicio del día del componente 2 es: ",comp_2.stock_inicial_comp);
console.log("El stock al inicio del día del componente 3 es: ",comp_3.stock_inicial_comp);
}

}




function borrar_elemento(e){
    console.log("Se ha borrado la producción del día");
    let hijo=e.target;
    let padre=hijo.parentNode;
   
    padre.remove();


}   

})