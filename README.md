# MovieOrganizer

# Description

Movie Organizer is a full-stack web application built with MongoDB, Express, Handlebars, and Node (MEHN). The app allows users to create movie lists to manage movies they love, want to watch, or just to catalogue their entire movie collection.

# Models

1. List (Full CRUD)

- Title
- Description
- Movie [Accepts array of movies]

2. Movie (CRD only)

- Title
- Genre (only one allowed)
- Rating (IMDb)

# Deployed app

The app is deployed on Heroku:

# Technologies Used

This app was built with MongoDB, Express, Handlebars, and Node (MEHN Stack). The database used for live deployment is MongoDB Atlas.

#The approach taken

#Install and Run Locally

The app is active and running in Heroku, but if you want to run it locally

1. Fork and clone this repository
2. Run npm install in the foot folder

3. Seed the list and movie files first, in that specfic order

4. Start up the server

#Unsolved Issues

- Incorporating best practice to reference my movies in my list
- Fix my movie cards on the homepage so they are all the same height

#Additional Features to add:

- Incorporate a Movie API - www.themoviedb.org
- Set up my new movie form to allow image url
- Authentication with flash messages
- Add show and delete action when adding movies to my list
- Add Search movie option
- Update Lists model to reference my movie model
