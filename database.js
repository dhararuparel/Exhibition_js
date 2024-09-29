const { Pool } = require("pg"); // Correctly importing Pool from pg

// Create a connection pool
const pool = new Pool({
  user: "postgres",
  password: "dhara16",  // Recommend using environment variables for sensitive info
  host: "localhost",
  port: 5433,
  database:"exhibition",
});

pool.query(`
  CREATE TABLE Exhibition (
    id SERIAL PRIMARY KEY,
    hall_dimensions VARCHAR(255),
    is_enclosed BOOLEAN,
    can_be_darkened BOOLEAN,
    ac_or_fans VARCHAR(255),
    floor_level INT,
    storage_space BOOLEAN,
    proximity_to_entrance VARCHAR(255),
    power_outlets INT,
    table_availability BOOLEAN,
    vr_space VARCHAR(255),
    wifi_access BOOLEAN
  );
`)
.then(response => {
  console.log("Table created successfully");
  console.log(response);
})
.catch(err => {
  console.log("Error:", err);
});

module.exports = pool;
