
const descripcion ={
        demand:true,
        alias:'d',
        desc:'descripcion de la tarea por hace'
};

const completado ={
        default:true,
        alias:'c',
        desc:'marca como completado o pendinte la terea'
    
};

const argv = require('yargs')
            .command ('crear' ,'Crear un elemento por hacer',{
                descripcion
            })
            .command('actualizar', 'actualizar el estado completado de una tarea',{
                descripcion,
                completado
            })

            .command('borrar', 'borra una tarea',{
                descripcion
            })

            .help()
            .argv;


            module.exports = {
                argv
            }

