function proceso(H) {
    var a = process.argv.indexOf(H);
    return process.argv[a + 1];
}

var nombre = proceso('--nombre');
var edad = proceso('--edad');

console.log(`Tu nombre es "${nombre}", tienes "${edad}" años.`); // texto interpolado



/*
process.stdout.write("Hola mundo");

process.stdin.on('data',function(data){
    process.stdout.write(data)
    process.exit()
})*/