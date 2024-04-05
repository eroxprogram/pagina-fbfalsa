let mysql = require("mysql");


let conexion = mysql.createConnection({
    host:"localhost",
    database: "facebook",
    user: "root",
    password: "Estaquita1509"
})

conexion.connect(function(err){

    if(err){
        throw err;
    }else{
        console.log("conexion exitosa");
    }
});