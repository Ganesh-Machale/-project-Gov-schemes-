# 🏛️ Government Welfare Schemes Portal

A web-based **Government Welfare Schemes Portal** designed to help users discover and explore various government welfare schemes through a centralized platform.

The project uses a **Node.js + Express.js backend**, **MySQL database**, and a frontend served through the backend. It demonstrates full-stack development concepts including database integration, REST-style server architecture, SQL queries, and frontend-backend communication.

## 🌐 Live Demo

🚀 **Live Website:**
https://project-gov-schemes.vercel.app/

> Note: The application requires the backend and database to be configured correctly for all features to work.

## ✨ Features

* Browse government welfare schemes
* Centralized platform for scheme information
* MySQL database integration
* Node.js and Express.js backend
* Dynamic data retrieval from MySQL
* Static frontend served by the backend
* SQL database schema and sample data
* Environment-based database configuration
* Simple and user-friendly interface

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL
* SQL

### Development Tools

* Git
* GitHub
* MySQL Workbench / XAMPP / WAMP
* npm

## 📂 Project Structure

```text
-project-Gov-schemes-/
│
├── public/
│   ├── ...                 # Frontend files
│
├── server/
│   ├── ...                 # Backend application
│   ├── .env                # Environment configuration
│   └── package.json        # Backend dependencies
│
├── schema.sql              # Database schema and sample data
├── view_data.sql           # SQL queries/views for database data
├── fix_server.bat          # Server setup/fix utility
└── README.md               # Project documentation
```

## 🏗️ Application Architecture

```text
             User
               │
               ▼
        ┌───────────────┐
        │    Frontend   │
        │ HTML/CSS/JS   │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ Node.js +     │
        │ Express.js    │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │    MySQL      │
        │   Database    │
        └───────────────┘
```

The backend handles requests from the frontend, communicates with the MySQL database, and returns the required information to the user.

## 🗄️ Database

The project uses a MySQL database named:

```text
welfare_schemes_db
```

The `schema.sql` file is provided to create the required database structure and insert sample data.

### Database Setup

Open MySQL Workbench or the MySQL command line and create the database:

```sql
CREATE DATABASE welfare_schemes_db;
```

Then select the database:

```sql
USE welfare_schemes_db;
```

Import the provided schema:

```sql
SOURCE schema.sql;
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Ganesh-Machale/-project-Gov-schemes-.git
```

### 2. Navigate into the project

```bash
cd -project-Gov-schemes-
```

### 3. Configure MySQL

Make sure MySQL is installed and running.

You can use:

* MySQL Workbench
* XAMPP
* WAMP
* MySQL Server

Create the database:

```sql
CREATE DATABASE welfare_schemes_db;
```

Then import:

```text
schema.sql
```

### 4. Configure environment variables

Navigate to:

```text
server/.env
```

Configure your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=welfare_schemes_db
```

> Use the variable names already expected by your server configuration.

### 5. Install backend dependencies

```bash
cd server
npm install
```

### 6. Start the server

```bash
npm start
```

The application is configured to run on:

```text
http://localhost:5002
```

The backend serves the `public` folder, so the website can be accessed directly through the server.

## 🔐 Environment Variables

For security, database credentials should be stored inside `.env` rather than being hard-coded.

Example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=welfare_schemes_db
```

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
node_modules/
```

**Never commit your real MySQL password or other secrets to GitHub.**

## 🧠 What I Learned

This project helped me understand:

* Full-stack web application development
* Node.js backend development
* Express.js routing
* MySQL database integration
* SQL database design
* Connecting backend applications with databases
* CRUD/database operations
* Environment variables
* Serving static frontend files with Express
* Frontend-backend communication
* Project organization
* Git and GitHub workflow

## 🔮 Future Improvements

Some features that can be added in future versions:

* 🔍 Search government schemes
* 🏷️ Filter schemes by category
* 📍 Filter schemes by state
* 👤 User registration and authentication
* ⭐ Save favorite schemes
* 📄 Detailed scheme information pages
* 📱 Improved mobile responsiveness
* 🔔 Scheme deadline notifications
* 🌐 Multi-language support
* 🤖 AI-powered scheme recommendation
* 📊 Personalized scheme suggestions
* 🔗 Links to official government application portals

## 📸 Screenshots

Add screenshots of the project here:

```text
screenshots/
├── home.png
├── schemes.png
└── scheme-details.png
```

Example:

```markdown
![Home Page](screenshots/home.png)
```

## 🚀 Project Highlights

This project demonstrates practical experience with:

```text
JavaScript
    ↓
Node.js
    ↓
Express.js
    ↓
MySQL
    ↓
SQL
    ↓
Frontend Integration
```

It is a practical full-stack project focused on solving a real-world problem: **making government welfare scheme information easier to access from a single platform.**

## 👨‍💻 Author

**Ganesh Machale**

Full Stack Web Developer | MERN Stack Developer

### GitHub

https://github.com/Ganesh-Machale

### Project Repository

https://github.com/Ganesh-Machale/-project-Gov-schemes-

---

⭐ If you found this project useful, consider giving the repository a sta 





    In depth 

     
# Government Schemes Portal

A web-based platform designed to improve public awareness of government welfare schemes and help citizens discover government benefits, understand eligibility criteria, and access important scheme-related information.

## Overview

Many citizens are unaware of the government welfare schemes available to them, including eligibility requirements, required documents, and application procedures.

The **Government Schemes Portal** aims to solve this problem by providing a centralized platform where users can explore government schemes and understand the benefits and services they can access.

## Objectives

- Increase public awareness of government welfare schemes.
- Provide information about various government schemes.
- Help citizens understand eligibility criteria.
- Explain the documents required for different schemes.
- Make government services and benefits easier to discover.
- Improve accessibility of welfare-related information.

## Key Features

- **Scheme Discovery:** Explore different government welfare schemes.
- **Scheme Information:** View scheme descriptions, benefits, and important details.
- **Eligibility Guidance:** Understand the eligibility requirements for schemes.
- **Document Requirements:** Learn which documents are required for applications.
- **User-Friendly Interface:** Simple and organized navigation.
- **Public Awareness:** Help citizens discover government services and benefits.

## Future Enhancements

- AI-based scheme recommendations and eligibility checking.
- OCR-based document verification.
- Multilingual support for regional languages.
- Blockchain-based tamper-proof record management.
- Direct Benefit Transfer (DBT) integration.
- Advanced search and filtering functionality.

## Technology Stack

Update this section according to the technologies implemented in the project.

- **Frontend:** HTML, CSS, JavaScript / React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB / MySQL
- **Tools:** VS Code, Git, GitHub

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ganesh-Machale/-project-Gov-schemes.git
```

### 2. Navigate to the Project Directory

```bash
cd -project-Gov-schemes
```

### 3. Install Dependencies

If your project uses Node.js:

```bash
npm install
```

### 4. Run the Project

For a Node.js application:

```bash
npm start
```

For a static HTML project, open `index.html` in your browser or use the VS Code Live Server extension.

## Project Structure

```text
-project-Gov-schemes/
│
├── frontend/
├── backend/
├── public/
├── src/
├── index.html
├── package.json
└── README.md
```

*Note: Actual folders may differ depending on your implementation.*

## How to Use

1. Open the Government Schemes Portal.
2. Explore the available government schemes.
3. Select a scheme to view its details.
4. Check eligibility requirements.
5. Review the required documents.
6. Follow the relevant application instructions.

## Future Scope

- Integration with additional central and state government schemes.
- AI-powered personalized scheme recommendations.
- Support for multiple Indian languages.
- Improved accessibility for rural communities.
- Integration with official government portals.

## Important Disclaimer

This project is developed for educational purposes and public awareness. Scheme information, eligibility criteria, benefits, and application procedures may change. Users should verify the latest details through official government websites before applying.

## Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Commit and push your changes.
5. Submit a Pull Request.

## Author

**Ganesh Machale**

- GitHub: [Ganesh-Machale](https://github.com/Ganesh-Machale)
- LinkedIn: [Ganesh Machale](https://www.linkedin.com/in/ganesh-machale-1b6941349)

---

If you find this project useful, consider giving the repository a star!
