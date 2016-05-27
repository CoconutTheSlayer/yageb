import express from 'express';
import Schema from './graphql.js';
import GraphHTTP from 'express-graphql';
import mongoose from './db.js';
import migrate from './migration/first.js';

const app = express();

// GraphQL
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

//create some data
migrate();

app.listen(3000, ()=>{
    console.log("running on port 3000");
});
