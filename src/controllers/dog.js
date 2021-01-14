const db = require(__dirDB).knex;

const table = async (req, res) =>{
    db.schema.createTable('perros', (table) => {
        table.increments('idchip')
        table.string('nombre')
        table.string('edad')
        table.string('raza')
    })
    .then(item => {res.json(item)})
    .catch(err => res.status(200).json({ message: 'Table Error', error:err+ "JJ"}));
}

const get = async (req, res) => {
    db
    .from('perros')
    .select('idchip','nombre','edad','raza')
    .then((rows) => {res.json(rows)})
    .catch(err => res.status(200).json({ message: 'Error listar Dog', error:err+ "JJ"}));
}

const getBy = async (req, res) => {
    db
    .from('perros')
    .select('idchip','nombre','edad','raza')
    .where('idchip', '=', req.params.id)
    .then((rows) => {res.json(rows)})
    .catch(err => res.status(200).json({ message: 'Error listar Dog', error:err+ "JJ"}));
}

const insert = async (req, res) => {
    const {idchip,nombre,edad,raza} = req.body;
    await db('perros')
        .insert({
            idchip,nombre,edad,raza
        })
        .returning('*')
        .then(item => {
            res
                .status(200)
                .json({ 
                    message: 'Dog Guardar',
                    idchip:req.body.idchip,
                    nombre:req.body.nombre,
                    edad:req.body.edad,
                    raza:req.body.raza,
                    item:item
            })
        })
        .catch(err => res
                    .status(200)
                    .json({ 
                        message: 'Dog Error Guardar',
                        idchip:req.body.idchip,
                        nombre:req.body.nombre,
                        edad:req.body.edad,
                        raza:req.body.raza,
                        error:err+ "JJ"
                     }));
}

const update = async (req, res) => {
    const {idchip,nombre,edad,raza} = req.body;
    await db('perros')
        .update({
            idchip,nombre,edad,raza
        })
        .where('idchip', '=', idchip)
        .returning('*')
        .then(item => {
            res
                .status(200)
                .json({ 
                    message: 'Dog Actualizado',
                    idchip:req.body.idchip,
                    nombre:req.body.nombre,
                    edad:req.body.edad,
                    raza:req.body.raza,
            });
        })
        .catch(err => res
                    .status(200)
                    .json({ 
                        message: 'Dog Error Actualizar',
                        idchip:req.body.idchip,
                        nombre:req.body.nombre,
                        edad:req.body.edad,
                        raza:req.body.raza,
                        error:err+ "JJ"
                     }));

        ;
}

const del = async (req, res) => {
    await db('perros')
        .where({idchip : req.body.idchip})
        .delete()
        .returning('*')
        .then(item => {
            res.json({
                message: 'Dog Elimi9nar',
                idchip:req.body.idchip,
            }
        )})
        .catch(err => res
        .status(200)
        .json({ 
            message: 'Dog Error Eliminar',
            idchip:req.body.idchip,
            error:err+ "JJ"
        }));
}

module.exports = {
    table,
    get,
    getBy,
    insert,
    update,
    del
}