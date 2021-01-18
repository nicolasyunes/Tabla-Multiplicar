
//const fs = require('express'); paquetes no nativos pero son librerias de node
//const fs = require('./fs');archivos que nosotros escribimos;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar');
const argv = require('./config/yargs').argv;
let comando = argv._[0];


console.log('argv :_ ' , argv);
console.log('comando:' ,comando);


switch (comando) {
    

    case 'crear':
        crearArchivo(argv.base)
        .then(archivo => console.log(`archivo creado ${archivo}`))
        .catch(e => console.log(e))
        
    break;

    default:
        console.log('comando no reconocido');

    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;
}

//console.log(argv);




//let argv2 = process.argv;
//console.log(argv.limite)
//console.log(argv.base)
//let parametro = argv[2]
//let base = parametro.split('=')[1]



 