 #  Login & Register in React JS with Local Storage

A simple React.js project demonstrating user login and registration using local storage. This project helps beginners understand how to implement a basic authentication system in a React application with the help of Local Storage for managing user sessions.


#  Table of Contents


Project Overview
Features
Technologies
Getting Started
Installing React.js
Installation
Running the Project
Project Structure
How Local Storage Works


#  Project Overview
This project provides basic user authentication with registration and login functionality. Once users register, their data is stored in Local Storage. When logging in, the app checks the user credentials against the stored data.

Local storage is used for saving the user information so that the session persists, even if the page is reloaded. No backend API is required, which makes this a great learning project for beginners.


 # Features

 
User Registration
User Login
Form validation for both login and registration
Local Storage used to store user data
Basic session management (keeping users logged in on page reload)
Error handling for incorrect credentials
 #  Technologies
React.js (JavaScript library for building user interfaces)
Local Storage (Web Storage API for persisting data on the client-side)
Getting Started
Follow the instructions below to get a copy of the project up and running on your local machine.

 # Installing React.js
Before proceeding with the project setup, make sure you have Node.js and npm (Node package manager) installed on your system.

Install Node.js and npm:

You can download and install Node.js from here.
Install React.js:

To create a new React.js project, run the following command in your terminal or command prompt:


 # npx create-react-app login-register-react
This command creates a new React project with all the necessary dependencies set up.

# Install React
  # npm i react-router-dom

 # Running the Project
After installing the dependencies, run the project using the following command:
   # npm start


# How Local Storage Works
Local Storage is a simple way to store user data in the browser, where data persists even after a page reload.
Upon registration, the user's information (username and password) is saved to local storage.
During login, the app checks the input credentials against the stored data in local storage to verify if the user exists and if the password matches.
Once logged in, the user is redirected to a Dashboard page, and their session is preserved using local storage.
If the user logs out, the local storage is cleared, ending the session.

#  Output Images 
![Screenshot (20)](https://github.com/user-attachments/assets/7ec3bc80-7eaf-4b26-b852-b7c1070526ad)
![Screenshot (21)](https://github.com/user-attachments/assets/6eba724b-8d1f-43ed-bf40-2577900e55f1)
![Screenshot (22)](https://github.com/user-attachments/assets/c735cf49-c222-42a8-8af5-7f6c639d3805)
![Screenshot (23)](https://github.com/user-attachments/assets/c73cf536-f266-4c00-8bbb-98b060459215)


