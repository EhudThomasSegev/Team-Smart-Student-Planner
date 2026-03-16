# Student Smart Planner

## Project Description

Student Smart Planner is a **Full-Stack web application** designed for university students to manage their academic workload. Unlike simple task lists, this system implements a complete **Client-Server-Database** architecture to provide a personalized and data-driven experience.

This project is the primary deliverable for the **Software Project Management** course (Week 12 Goal).

## Team Members & Roles
* **Ehud Thomas segev** - Scrum Master & Product Owner
* **Nizar Moklada** - Full Stack Developer
* **Ahrar Assleh** - QA Engineer & DevOps

## Technology Stack
* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js (REST API)
* **Database:** MongoDB
* **Project Tools:** Jira (Agile/Scrum), GitHub (Version Control)

## Project Architecture & Modules
To meet the course complexity requirements, the app is divided into three functional modules:
1. **User Authentication Module:** Secure login/sign-up to manage individual student profiles.
2. **Core Task Management (CRUD):** Full lifecycle of academic tasks (Create, Read, Update, Delete).
3. **Analytics & Reporting:** A productivity dashboard visualizing task completion rates and deadlines.

## Project Management
The project follows **Agile/Scrum** methodology.
* **Jira Board:** https://student-planner-site.atlassian.net/jira/software/projects/PDM/boards/1
* **Workflow:** Branch-based development with mandatory Pull Request reviews.

---

# Project Setup & Contribution Guide

## Installation & Setup
### 1. Prerequisites (Mandatory)
* **Git:** [Download here](https://git-scm.com/)
* **Node.js:** [Download here](https://nodejs.org/)

### 2. Identity Setup (One-time)
Open your terminal and run these commands with your details:
bash
git config --global user.name "Your Full Name"
git config --global user.email "your-email@example.com"

### 3. Download the Project (Clone)
Navigate to your projects folder and run:
bash
git clone [https://github.com/EhudThomasSegev/Team-Smart-Student-Planner](https://github.com/EhudThomasSegev/Team-Smart-Student-Planner)

Note: This will create the project folder for you automatically.

## running the server (Backend)
1. Open the project in VSCode.
2. In the terminal, navigate to the server folder: 
bash
cd server

3. Install the necessary libraries (one-time or after updates): 
bash
npm install

4. Start the server: 
bash
node index.js

Server is running at: http://localhost:5000

## Daily Workflow (How to contribute)
To avoid merge conflicts, follow these steps:
**Step 1:** Get the latest changes: 
bash
git pull

**Step 2:** Make your changes in VSCode.
**Step 3:** Save and Upload (Commit & Push)
bash
git add .
git commit -m "PDM-XX: brief description of what you did"
git push

Important: Replace PDM-XX with your specific Jira task key (e.g., PDM-20).