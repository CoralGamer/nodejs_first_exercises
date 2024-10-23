var events=require('events')
var emmiter= new events.EventEmitter()
var hola="Buenos dias"
emmiter.on('evento1', (mensajes)=>{
    console.log(`${mensajes}  `)
})

emmiter.emit('evento1',"Hola")

module.exports= hola
