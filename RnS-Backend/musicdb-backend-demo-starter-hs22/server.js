// Imports
const express = require('express');
const {MongoClient, ObjectId} = require('mongodb'); // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
const cors = require('cors')
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./config');

// Set up App
const app = express();
app.use(cors()); // Allow all cross-origing requests. More information: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.static('public')); // Host all static files in the folder /public
app.use(bodyParser.json()); // Support json encoded bodies
const port = process.env.PORT || '3001'; // Use the PORT variable if set (e.g., when deploying to Heroku)
app.set('port', port);

const server = http.createServer(app);


// Create the client and connect to the database
let database;
const client = new MongoClient(config.mongodb_connection_string);
client.connect((error, db) => {
    if (error || !db) {
        console.log("Could not connect to MongoDB:")
        console.log(error.message);
    } else {
        database = db.db('RnS');
        console.log("Successfully connected to MongoDB.");
    }
})

// Get all Bücher

app.get('/api/Books', async (req, res) => {
    try {
        const collection = database.collection('Bücher');
        // You can specify a query/filter here
        // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
        const query = {};
        // Get all objects that match the query
        const result = await collection.find(query).toArray();
        res.send(result);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})
// Get all Authors
app.get('/api/Authors/', async (req, res) => {
    try {
        const collection = database.collection('Autoren');
        // You can specify a query/filter here
        // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
        const query = {};
        // Get all objects that match the query
        const result = await collection.find(query).toArray();
        res.send(result);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})

// Get Books by id
app.get('/api/Books/:id', async (req, res) => { // read the path parameter :id
    let id = req.params.id;
    try {
        const collection = database.collection('Bücher');
        const query = {
            _id: ObjectId(id)
        }; // filter by id
        const result = await collection.findOne(query);
        if (! result) {
            let responseBody = {
                status: "No object with id " + id
            }
            res.status(404).send(responseBody);
        } else {
            res.send(result);
        }
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})
// get Author by name
app.get('/api/Authors/:id', async (req, res) => { // read the path parameter :id
    let id = req.params.id;
    try {
        const collection = database.collection('Autoren');
        const query = {
            _id: ObjectId(id)
        }; // filter by id
        const result = await collection.findOne(query);

        if (! result) {
            let responseBody = {
                status: "No object with id " + id
            }
            res.status(404).send(responseBody);
        } else {
            res.send(result);
        }

    } catch (error) {
        res.status(500).send({error: error.message});
    }
})
//Create Book
app.post('/api/Books', async (req, res) => {

    try {
        const collection = database.collection('Bücher');

        var Bücher = {
            Name:req.body.Name,
            Author:req.body.Author,
            Userrrating: req.body.Userrrating,
            Reviews: req.body.Reviews,
            Price: req.body.Price,
            Year: req.body.Year,
            Genre: req.body.Genre,
        };
        const result = await collection.insertOne(Bücher);

        res.status(201).send({ _id: result.insertedId });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})
//Add to List
app.post('/api/MyList', async (req, res) => {

    try {
        const collection = database.collection('Merkliste');

        var Bücher = {
            Name:req.body.Name,
            Author:req.body.Author,
            Userrrating: req.body.Userrrating,
            Reviews: req.body.Reviews,
            Price: req.body.Price,
            Year: req.body.Year,
            Genre: req.body.Genre,
        };
        const result = await collection.insertOne(Bücher);

        res.status(201).send({ _id: result.insertedId });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})
//Get List
app.get('/api/MyList/', async (req, res) => {
    try {
        const collection = database.collection('Merkliste');
        const query = {};
        // Get all objects that match the query
        const result = await collection.find(query).toArray();
        res.send(result);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})
// --------------------------------------------------------------------------------------------------
// Update an existing artist
// --------------------------------------------------------------------------------------------------
app.put('/api/changebook/:id', async (req, res) => { // read the path parameter :id
    let id = req.params.id;
    let Bücher = req.body;  
       
    delete id; // delete the _id from the object, because the _id cannot be updated
    try {
        const collection = database.collection('Bücher');
        const query = {_id: ObjectId(id)}; // filter by id
        const result = await collection.updateOne(query, {$set: Bücher});
        if (result.matchedCount === 0) {
            let responseBody = {
                status: "No artist with id " + id
            }
            res.status(404).send(responseBody);
        } else {
            res.send({
                status: "Artist with id " + id + " has been updated."
            });
        }
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})
//delete from mylist
app.delete('/api/MyList/:id', async (req, res) => { // read the path parameter :id
    let id = req.params.id;
    try {   
        const collection = database.collection('Merkliste');
        const query = {
            _id: ObjectId(id)
        }; // filter by id
        const result = await collection.deleteOne(query);
        if (result.deletedCount === 0) {
            let responseBody = {
                status: "No object with id " + id
            }
            res.status(404).send(responseBody);
        } else {
            let responseBody = {
                status: "Object with id " + id + " has been successfully deleted."
            }
            res.send(responseBody);
        }
    } catch (error) {
        res.status(500).send({error: error.message});
    }
})

server.listen(port, () => console.log("app listening on port " + port));
