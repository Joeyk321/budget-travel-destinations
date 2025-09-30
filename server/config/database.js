const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'budget_travel',
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || 5432,
});

module.exports = pool;