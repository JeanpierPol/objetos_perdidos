const Objeto = require('../models/Objetos')

const daoObjetos={}

//guardar
daoObjetos.guardar = function save(objeto){
    return new Promise((resolved, reject)=>{
        let o = new Objeto(objeto)
        if(o.errores.length<=0) o.save()
        resolved(o)
    })
}
//listar

//buscar

//eliminar

//modificar

module.exports=daoObjetos