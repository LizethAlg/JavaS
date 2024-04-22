const NELEMENTOS=10;
// crear un Array de nombres
let nombres = ['Juan', 'Maria','Pedro','Luis','Ana','Carlos','Laura','Diego','Sofia','Miguel'];

//CREAR UN ARRAY DE APELLIDOS
let apellidos = ['Rodriguez', 'Gomez', 'Fernandez', 'Lopez', 'Martinez', 'Garcia', 'Sanchez', 'Diaz', 'Albis', 'Cespedes'];

let nomape=[];

function generarNomApe(){
    let nomal, apeal;
    for(let i=0;i<NELEMENTOS;i++){
        nomal=nombres[Math.floor(Math.random()*nombres.length)];
        apeal=apellidos[Math.floor(Math.random()*apellidos.length)];
        nomape.push(nomal+""+apeal);        
    }
}
function imprimir(){
    nomape.forEach(persona=>{
        console.log(persona);
    });
}
generarNomApe();
imprimir();



