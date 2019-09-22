const neo4j = require('neo4j-driver');

const City = require('../models/City');

const uri = 'http://localhost:7474';
const user = 'neo4j';
const password = 'password';

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

const resultPromise = session.writeTransaction((tx) => tx.run(
  'CREATE (a:Greeting) SET a.message = $message RETURN a.message + ", from node " + id(a)',
  { message: 'hello, world' },
));

resultPromise.then((result) => {
  session.close();

  const singleRecord = result.records[0];
  const greeting = singleRecord.get(0);

  console.log(greeting);

  // on application exit:
  driver.close();
});
