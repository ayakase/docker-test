const mysql = require('mysql2');

function establishConnection() {
    const connection = mysql.createConnection({
        host: 'db',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'test',
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL: ', err);

            setTimeout(establishConnection, 5000); 
        } else {
            console.log('Connected to MySQL!');
        }
    });

    connection.on('error', (err) => {
        console.error('MySQL Connection Error: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {

            setTimeout(establishConnection, 5000); 
        } else {
            throw err;
        }
    });

    return connection;
}

const connection = establishConnection();
module.exports = connection;
