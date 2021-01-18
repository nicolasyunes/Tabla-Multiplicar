const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const colors = require('colors');



const crearArchivo = (base) => {
    return new Promise ((resolve,rejects) => {
        let data = '';
        if (!Number(base)){
            rejects( `la base ${base} NO ES UN NUMERO`)
        }
        
        for (i=1 ; i<=10 ; i++) {
            data += (`${base} * ${i} = ${base * i }\n`)}

        fs.writeFile(`tablas/tabla-${base}.txt`, data ,(err) => { 
            if (err) {
                rejects(err)}
           else {
                resolve(`tabla-${base}.txt`)}
            })
    });
}

let listarTabla = (base, limite) => {
        console.log('=================');
        console.log(`=======TABLA DE ${base}========`.blue);
        console.log('=================');

        for (i=1 ; i <= limite ; i++){
        console.log((`${base} * ${i} = ${base * i }`))}
    
}
module.exports={
    listarTabla,
    crearArchivo
    
}