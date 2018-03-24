import path from 'path'
import express from 'express'
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import myGraphQLSchema from './graphql/schema'

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/react', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3004, () => console.log('Example app listening on port 3004!'))
