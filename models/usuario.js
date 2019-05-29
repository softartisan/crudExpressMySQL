const db = require('../database/db');


const readAll = (callback) => {
  const consulta = 'SELECT * from usuario';
  db.query(consulta,function(err, result) {
    if (err) throw err;
    callback(result);
  })
}
  
const readByName = (name, callback) => {
  const consulta = `SELECT * FROM usuario WHERE nombre_usuario = '${name}'`;
  db.query(consulta,function(err, result) {
    if (err) throw err;
    callback(result[0]);
  })
}
  
const insert = (nombre, clave, callback) => {
  const consulta = `INSERT INTO usuario(nombre_usuario, password_usuario) VALUES('${nombre}', '${clave}')`;
  db.query(consulta,function(err, result) {
    if (err) return callback(false);
    callback(true);
  })
}

const deleteByName = (name, callback) => {
  const consulta = `DELETE FROM usuario WHERE nombre_usuario= '${name}'`;
  db.query(consulta,function(err, result) {
    if (err) return callback(false);
    callback(true);
  })
}

module.exports = {
  readAll,
  insert,
  readByName,
  deleteByName
}