# Government Welfare Schemes Portal - Setup Guide

## Prerequisites
- **Node.js**: Installed on your system.
- **MySQL Server**: Installed and running (e.g., via XAMPP, WAMP, or Workbench).

## Setup Steps

### 1. Database Setup
1. Open your MySQL Workbench or Command Line.
2. Create a database named `welfare_schemes_db`.
3. Import the `schema.sql` file provided in the project root:
   - File Path: `c:/Users/Ganesh/OneDrive/Desktop/PBL PROJECT/schema.sql`
   - This will create the tables and insert sample data.

### 2. Configure Environment
1. Open `server/.env` file.
2. Update the `DB_PASSWORD` with your MySQL password.
3. Update `DB_NAME` or `DB_USER` if they are different from defaults.

### 3. Run the Backend Server
1. Open a terminal in the project folder.
2. Navigate to the server directory:
   ```sh
   cd server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```
   - The server will run at `http://localhost:5002`.

### 4. Run the Website
1. Since the server is configured to serve the `public` folder statically, you can simply open:
   `http://localhost:5002`
   in your browser.

## Troubleshooting
- **Database Connection Failed?**: Check your `.env` password and ensure MySQL service is running.
