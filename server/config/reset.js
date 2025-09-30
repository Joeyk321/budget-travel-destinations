const pool = require('./database.js');
const destinationsData = require('../data/destinations.js');

const createTableQuery = `
  DROP TABLE IF EXISTS destinations;

  CREATE TABLE destinations (
    id SERIAL PRIMARY KEY,
    destination_id VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    estimated_cost VARCHAR(100) NOT NULL,
    best_season VARCHAR(255) NOT NULL,
    difficulty_level VARCHAR(50) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    must_see_spots TEXT[] NOT NULL
  );
`;

const seedTable = async () => {
  try {
    // Create the table
    await pool.query(createTableQuery);
    console.log('🏗️  Created destinations table');

    // Insert each destination
    for (const destination of destinationsData) {
      const insertQuery = `
        INSERT INTO destinations (destination_id, name, location, estimated_cost, best_season, difficulty_level, image, description, must_see_spots)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `;
      
      const values = [
        destination.id,
        destination.name,
        destination.location,
        destination.estimatedCost,
        destination.bestSeason,
        destination.difficultyLevel,
        destination.image,
        destination.description,
        destination.mustSeeSpots
      ];

      await pool.query(insertQuery, values);
      console.log(`✅ Added ${destination.name}`);
    }

    console.log('🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    pool.end();
  }
};

seedTable();