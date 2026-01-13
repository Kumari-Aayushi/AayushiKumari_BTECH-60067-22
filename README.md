**System for Managing Tasks (Kanban Based)**

This project is a full stack task management system that was developed for an academic SDE Assignment. The users can arrange and monitor their tasks by moving them between various stages like Pending, In Progress and Completed using application's design which is based on the Kanban board concept. This project's primary goal is to demonstrate backend API development, safe authentication, CRUD operations and frontend–backend integration while keeping the codebase tidy and readable.
Each user can only view and manage their own tasks after logging in because the system supports user specific task handling. 

**Project Goals**
Create a full stack, end toend application.
Put in place safe user authorization and authentication
Create RESTful API's with appropriate error management.
Create an interactive task board in the style of Kanban.
Keep your folder structure tidy and your code reusable.
Observe appropriate Git and documentation procedures.
The Tech Stack
Backend: MongoDB, Mongoose, Express.js, Node.js and JWT
Frontend: CSS, JavaScript (ES6+), React.js and react beautiful dnd
Tools: Postman, Git, GitHub and Visual Studio Code

**Motivation**
I developed this project to gain insight into how various task management systems are designed and built as well as understand how to implement authentication methods using protected routes and CRUD functionality between data sources on a full stack setup (client side and server side). Building this project really helped me strengthen my understanding of backend concepts for software development engineering (SDE).

**User Management and Authentication**
The program allows users to register, log in, update their profiles and delete their accounts. JWT tokens are used for authentication and middleware is used to secure protected routes and stop unwanted access.

**Task Administration**
A task's title, description, status, due date and creation timestamp are all included. Tasks can be created, updated, deleted and filtered according to their status by users. Every task is exclusively associated with the user who is logged in.

**Board for Kanban**
Three columns are Pending, In Progress and Completed are used to show tasks. Changes are immediately saved to the database when users drag and drop tasks between columns. 

**Structure of the Project**
To ensure better maintainability and a clear separation of concerns, the project is separated into separate frontend and backend folders. 

**Environment Variables**
Environment variables are used to manage sensitive data that includes secret keys and database URLs. The version control does not apply to the actual.env file.

**Set Up and Run**
To set up & run both the back end and front end of this project I install all required Node.js dependencies with npm install and then start your development server.

**Security and Error Management**
To ensure that all of the routes for your application tasks are protected and that any time a client requests to perform an action that the JWT for that the client is validated and that it returns a meaningful HTTP status code & error message.

**Testing and Deploying the API**
The REST API has been tested with Postman and currently the code base is being run on a local machine. In the near future you can deploy your application using Render, Railway or Vercel which are known to host Node.js applications in a cloud based environment.

**Summary**
This project has provided proof of secure authentication practices through RESTful APIs that allows user to access only their specific data and perform actions on that data as well as an interactive Kanban workspace that meets all requirements outlined in the SDE Assignment. 

**Authors**
Name: Aayushi Kumari
Roll Number: BTECH/60067/22
Program of Study: BTech CSE
