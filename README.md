# udevs-backend
Node.js + Express.js backend for user management with PostgreSQL integration and Swagger API documentation. Includes endpoints for creating and fetching users.
# Udevs Backend

A Node.js and Express.js-based RESTful API for user management with PostgreSQL integration and Swagger documentation.

## Features

- Create and fetch users via REST API
- PostgreSQL database integration
- Swagger UI for API documentation and testing
- Clean and modular route/controller structure

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- Swagger (swagger-jsdoc + swagger-ui-express)
- dotenv

## Getting Started

### 1. Install Dependencies
```bash
npm install
2. Set Up Environment
Create a .env file in the root of your project with your database credentials:

ini
Copy
Edit
PORT=5000
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_password
DB_PORT=5432
3. Run the Server
bash
Copy
Edit
npx nodemon app.js
4. API Documentation
Visit Swagger UI at:

http://localhost:5000/api-docs

API Endpoints
Method	Endpoint	Description
GET	/api/users	Fetch all users
POST	/api/users	Add a new user

License
MIT

yaml
Copy
Edit

---

## ✅ 2. `.gitignore` file

Create a file named `.gitignore` in your root directory with the following content:

```bash
# Node modules
node_modules/

# Environment variables
.env

# Logs
logs/
*.log
npm-debug.log*

# OS
.DS_Store
Thumbs.db

# VSCode settings
.vscode/
✅ How to push this to GitHub (just in case you need the steps):
bash
Copy
Edit
git init
git remote add origin https://github.com/your-username/udevs-backend.git
git add .
git commit -m "Initial commit with working user API and Swagger docs"
git push -u origin main
