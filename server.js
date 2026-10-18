const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 9000;
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { graphqlHTTP } = require('express-graphql');

const typeDefs = fs.readFileSync('./schema.graphql', 'utf-8');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`GraphQL Server running: http://localhost:${port}/graphql`);
});
