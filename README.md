OVERVIEW:----
This project is a secure Authentication API built using Node.js, Express.js, MongoDB, and JWT (JSON Web Tokens). It provides a complete user authentication system with secure registration, login, and protected routes.
The API follows RESTful principles and demonstrates how modern web applications securely verify users, protect sensitive resources, and manage authenticated sessions.

FEATURES:----
User Registration
User Login
JWT-based Authentication
Password Hashing with bcrypt
Protected Routes
Input Validation
Centralized Error Handling
Rate Limiting (to prevent abuse)
Secure Environment Variable Management
RESTful API Design

TECH STACK:---
Node.js
Express.js
MongoDB
Mongoose
JWT (jsonwebtoken)
bcryptjs
dotenv
Express Rate Limit
CORS

HELMET:----
Project Structure
config/
controllers/
middlewares/
models/
routes/
utils/
server.js
app.js

API endpoints:----
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login and receive JWT
GET	/auth/profile	Get authenticated user profile
POST	/auth/logout	Logout user (if implemented)

SECURITY FEATURES:----
Passwords are hashed before storing in the database.
JWT is used for secure authentication.
Protected routes require a valid access token.
Sensitive configuration is stored using environment variables.
Rate limiting helps prevent brute-force attacks.
Centralized error handling improves API consistency.