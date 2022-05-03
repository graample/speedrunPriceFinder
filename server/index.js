// const fs = require('fs');
// const path = require('path');
// const { gql, ApolloServer } = require("apollo-server");
// const { Neo4jGraphQL } = require("@neo4j/graphql");
// const neo4j = require("neo4j-driver");
// var { graphqlHTTP } = require('express-graphql');
// require("dotenv").config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// // graphql schema
// const typeDefs = fs.readFileSync(
//   path.join(__dirname, 'src/schema.graphql'),
//   'utf8'
// )


// // Neo4J connection
// const driver = neo4j.driver(
//   process.env.NEO4J_URI,
//   neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD),
// );

// const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

// neoSchema.getSchema().then((schema) => {
//     const server = new ApolloServer({
//       schema,
//     });

//     server.listen().then(({ url }) => {
//         console.log(`GraphQL server ready on ${url}`);
//     });
// });


// Express connection
var app = express();
app.use(cors());
app.use(express.json());

// test grample route
app.use('/test', (req, res) => {
  axios('https://www.speedrun.com/api/v1/users/kjpkee4x/personal-bests')
  .then(result => {
    res.send(result.data);
  })
})

app.use('/', (req, res) => {
  // console.log(req.query.query)
  if (req.query.query === undefined) {
    res.status(500).send('user not found');
    return;
  }
  axios('https://www.speedrun.com/api/v1/users', {
    params: {
      lookup: req.query.query
    }
  })
  .then(response => {
    console.log(response.data.data[0])
    if (response.data.data[0] === undefined) {
      res.status(500).send('user not found');
      return;
    }
    var name = response.data.data[0].names.international;
    axios(response.data.data[0].links[3].uri)
    .then(data => {
      // console.log(data.data.data)
      // extract every game the user has run
      let list = [];
      for (let i = 0; i < data.data.data.length; i++) {
        if (!list.includes(data.data.data[i].run.game)) {
          list.push(data.data.data[i].run.game)
        }
      }
      // console.log(list);
      // convert game id's into names
      const games = [];
      for (let i = 0; i < list.length; i++) {
        axios(`https://www.speedrun.com/api/v1/games/${list[i]}`)
        .then(result => {
          // console.log(result.data.data.names.international)
          games.push(result.data.data.names.international);
          // console.log(games)
          if (i === list.length - 1) {
            // for (let i = 0; i < games.length; i++) {
            //   if (games[i].includes('Category')) {
            //     games.splice(i, 1);
            //   }
            // }
            console.log(games)
            res.send({
              name: name,
              games: games
            });
          }
        })
      }
    })
  })
})

app.listen(3000);
console.log('express listener at localhost:3000')