const Pool = require("pg").Pool;

const pool = new Pool({
    
host:"localhost",
user:"postgres",
port:5432,
password:"Balu@123",
database:"cruddb"
});

pool.connect();

module.exports = pool;