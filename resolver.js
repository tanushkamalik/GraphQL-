const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 9000;

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { graphqlHTTP } = require('express-graphql');

// Load GraphQL Schema
const typeDefs = fs.readFileSync('./schema.graphql', 'utf-8');

// Load Resolvers
const resolvers = require('./resolver');

// Create executable schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GraphQL API Endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true   // Enables GraphiQL browser tool
}));

// Start Server
app.listen(port, () => {
    console.log(`GraphQL Server running at http://localhost:${port}/graphql`);
});