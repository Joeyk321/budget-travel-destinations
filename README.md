# WEB103 Project 2 - Budget Travel Destinations

Submitted by: **Joey Katach**

About this web app: **A comprehensive guide to budget-friendly travel destinations around the world, now powered by PostgreSQL database. Features detailed information about costs, best seasons to visit, and must-see attractions for 8 incredible destinations.**

Time spent: **12** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='budget-travel-walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with **[ScreenToGif](https://www.screentogif.com/)**

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

## Screenshots
<img width="2796" height="1666" alt="image" src="https://github.com/user-attachments/assets/0a79e10f-164c-4dc8-a145-03582c4ac21c" />
<img width="2808" height="1722" alt="image" src="https://github.com/user-attachments/assets/65b40225-bf72-4b37-8fa9-5612dfec7e82" />
<img width="2792" height="1752" alt="image" src="https://github.com/user-attachments/assets/02b369c3-ccd2-4800-82af-b97302c1e210" />

## License

Copyright 2025 Joey Katach

Licensed under the Apache License, Version 2.0
