let notas=[{nombre:'Juan',nota:0},
           {nombre:'Maria',nota:0},
           {nombre:'Jose',nota:0},
           {nombre:'Rene',nota:0},
           {nombre:'Pedro',nota:0},];

           function genRandomico($max,$min){
            return Math.floor(Math.random()*($max-$min+1)+2);
        }
        function cargarNotas(){
            notas.forEach(nota=>{
                nota.nota=genRandomico(10,2);
            });
        }
        //console.log("NUmero random: "+genRandomico(10,2));
        
        function fclasificar(nota){
                let $clasificar;
                switch(nota){
                    case 2: case 3: case 4:
                        $clasificar="Insuficiente";
                        break;
                    case 5: case 6:
                        $clasificar="Suficiente";
                        break;
                    case 7: case 8:
                        $clasificar="Bien";
                        break;
                    case 9: 
                        $clasificar="Notable";
                        break;
                    case 10: 
                        $clasificar="Sobresaliente";
                        break;
                    default:
                        $clasificar="Fuera de rango";
                }
                return $clasificar;
        }
        
        function impNotas() {
            notas.forEach(nota => {
                console.log(nota.nombre + " - " + nota.nota + ": " + fclasificar(nota.nota) + "\n");
            });
        }
        
        
        cargarNotas();
        impNotas();




/*
// dame en una linea que aparezca las notas
//Ibsuficiente de 0 a 4
//suficiente de 5 a 9
//bien de 10 a 15


notas.forEach(nota=>{
    nota.nota=Math.random()*(10-2+1);
});

notas.forEach(nota => {
    let $clasificar;
    switch(nota.nota){
        case 2: case 3:case4:
            $clasificar="Insuficiente";
            break;
        case 5: case 6:
            $clasificar="Suficiente";
            break;
        case 7: case 8:
            $clasificar="Bien";
            break;
        case 9:
            $clasificar="Notable";
            break
        case 10:
            $clasificar="Sobresaliente";
            break;
        default:
            $clasificar="Fuera de rango";

    }   
    console.log(nota.nombre+" - "+nota.nota+": "+$clasificar+"\n");
});
*/
/*
function genRandomico($max,$min){
    return Math.floor(math.random()*($max-$min+1)+2);
    }
    function cargarNotas(){
        notas.forEach(nota=>{
            nota.nota=genRandomico(10,2);
    });
}

    function imporNotas(){
        notas.forEach(nota=>{
            console.log(nota.nombre+" - "+nota.nota+":"+fclasificar(nota.nota)+"\n");
        });
    }
    
    
    function fclasificar(nota) {
        let $clasificar;
        switch(nota){
            case 2: case 3: case 4:
                $clasificar="Insuficiente";
                break;
            case 5: case 6:
                $clasificar="Suficiente";
                break;
            case 7: case 8:
                $clasificar="Bien";
                break;
            case 9:
                $clasificar="Notable";
                break
            case 10:
                $clasificar="Sobresaliente";
                break;
            default:
                $clasificar="Fuera de rango";
    
        }
        return $clasificar; 
    } 
    cargarNotas();
    imporNotas();


// crear un Array de nombres
//nombres = ['Juan', 'Mari','Pedro','Luis','Ana']

//CREAR UN ARRAY DE APELLIDOS
//apellidos = ['Rodriguez','Gomez','Fernandez','Lopez','Martinez']

//nombres completos= ['Juan Rodriguez','Mari Gomez','Pedro Fernandez','Luis Lopes','Ana Martinez']
/*
// dame en una linea que aparezca las notas
//Ibsuficiente de 0 a 4
//suficiente de 5 a 9
//bien de 10 a 15


notas.forEach(nota=>{
    nota.nota=Math.random()*(10-2+1);
});

notas.forEach(nota => {
    let $clasificar;
    switch(nota.nota){
        case 2: case 3:case4:
            $clasificar="Insuficiente";
            break;
        case 5: case 6:
            $clasificar="Suficiente";
            break;
        case 7: case 8:
            $clasificar="Bien";
            break;
        case 9:
            $clasificar="Notable";
            break
        case 10:
            $clasificar="Sobresaliente";
            break;
        default:
            $clasificar="Fuera de rango";

    }   
    console.log(nota.nombre+" - "+nota.nota+": "+$clasificar+"\n");
});
*/
