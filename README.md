# WEB103 Project 2 - Budget Travel Destinations

Submitted by: **Joey Katach**

About this web app: **A comprehensive guide to budget-friendly travel destinations around the world, now powered by PostgreSQL database. Features detailed information about costs, best seasons to visit, and must-see attractions for 8 incredible destinations.**

Time spent: **12** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**

## Database Schema

The destinations table includes:
- id (Primary Key)
- destination_id (Unique identifier for URLs)
- name
- location
- estimated_cost
- best_season
- difficulty_level
- image (URL)
- description
- must_see_spots (Array)

## Notes

Successfully migrated from static JSON data to PostgreSQL database. Main challenges included:
- Setting up PostgreSQL locally and configuring database connection
- Converting camelCase field names to snake_case for database consistency
- Restructuring project files into client/server architecture
- Updating all API endpoints to query database instead of static files

The app maintains all original functionality while now pulling data dynamically from the database.

## License

Copyright 2025 Joey Katach

Licensed under the Apache License, Version 2.0