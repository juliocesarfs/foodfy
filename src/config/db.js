const { Pool } = require('pg')

module.exports = new Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: '5433',
  database: 'foodfy'
})