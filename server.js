// declare dependencies /variables

const express = require('express');
const app = express();
const mysql = require ('mysql2');
const dotenv = require ('dotenv');
const cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

//connect to the database***

const db = mysql.createConnection
    ({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
// check if db connection works
db.connect((err) =>{
    //No Wedding today
    if (err) return console.log("Error connecting to the db");

        // Yes wedding 
        console.log("Connected to mysql successfully as id: ", db.threadId)
        app.listen(process.env.PORT, () =>{
            console.log(`Server listening on port ${process.env.PORT}`)

            //your code goes here
            //GET METHOD example
            apps.set('view engine', 'ejs');
            app.set('views', _dirname + '/views');

            //data is the name of the file inside the
            app.get('/data', (req,res) => {
                //retrieve data from database
                db.query('SELECT * FROM patients', (err, result) => {
                    if (err){
                        console.error(err);
                        res.status(500).send('Error retrieving data');
                    }else{
                        //Display the records to the browser
                        res.render('data', { results: results});
                    }
                });
            });

            //send a message to the browser
            console.log('sending message to browser...');
            app.get('/,', (req,res) => {
                res.send('Server started sucessfully! Wedding can go ON!!!')
            })
        });
})
