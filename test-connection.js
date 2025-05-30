const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => {
    console.log('Connection successful!');
    return client.end();
  })
  .catch((err) => {
    console.error('Connection failed:', err);
  });
