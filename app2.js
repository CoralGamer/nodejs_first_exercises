var util=require('path');
var readline=require('readline');
var rl=readline.createInterface(process.stdin,process.stdout)
var datos={
    nombre:"",
    edad:""
};

rl.setPrompt("Ingrese los datos: ");
rl.prompt();

rl.question('Ingrese su nombre: ', function(respuesta) {
    datos.nombre = respuesta;

    rl.question('Ingrese su edad: ', function(respuestaEdad) {
        datos.edad = respuestaEdad;

        console.log(`Tu nombre es "${datos.nombre}", tienes "${datos.edad}" años.`);
        rl.close();
    });
});