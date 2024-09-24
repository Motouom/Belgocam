# Belgocam Website Documentation
## Project Overview
The Belgocam website is a complete web solution for your company, consisting of:

**Frontend:** Built with React, TypeScript, and Tailwind CSS for styling.

**Backend:** Built with Node.js, Express, and Nodemailer for handling form submissions and sending emails.
The project is divided into two main folders:

**Frontend:** React application for the UI.

**Backend:** Express server for API and email handling.
## 1. Project Structure
```

belgocam/
│
├── belgocam/   # Frontend code (React, TypeScript, Tailwind CSS)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── belgocam-backend/    # Backend code (Node.js, Express, Nodemailer)
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md            # Documentation
```
## 2. Prerequisites
Before running the project, ensure you have the following installed:

### Node.js (v14 or higher)

### npm or yarn

### Git

## 3. Setting Up the Project

### 3.1. Cloning the Project
Clone the project from the repository:

```bash
git clone git@github.com:Motouom/Belgocam.git
```
Navigate to the project directory:

```bash
cd belgocam
```
## 4. Frontend Setup (belgocam-frontend)
The frontend is built using React with TypeScript and Tailwind CSS.

## 4.1. Installation
Navigate to the frontend directory and install the dependencies:

```bash
cd belgocam

npm install
```

## 4.2. Running the Frontend
To start the frontend development server:

```bash

npm start
```
This will start the React app, and it will be available on 

http://localhost:3000.

## 4.3. Building the Frontend for Production
To create an optimized production build:

```bash
npm run build
```
This will generate a build/ folder with the optimized static files for deployment.

## 5. Backend Setup (belgocam-backend)
The backend is built using Node.js with Express. It handles the API for sending emails using Nodemailer.

### 5.1. Configuration
Before starting the backend, ensure you set up the environment variables for handling email credentials.

Create a .env file in the belgocam-backend directory:

```bash
touch .env
```
Add the following content to the .env file (replace the email and password with your actual credentials):

```env
EMAIL_ADDRESS='motouomvictoire@gmail.com'
EMAIL_PASSWORD='your_app_password'  # App-specific password from Gmail
```
### 5.2. Installation
Navigate to the backend directory and install the dependencies:

```bash
cd belgocam-backend

npm install
```
### 5.3. Running the Backend
To start the backend server:

```bash
npm run dev
```
This will start the server on http://localhost:5000.

### 5.4. Testing the Backend
The contact form on the frontend will submit data to the backend at http://localhost:5000/contact.

The backend will handle the request, and send an email to motouomvictoire@gmail.com.

## 6. Connecting Frontend and Backend
The frontend sends a POST request to the backend API when the contact form is submitted.

In the frontend, the form sends the request to /contact:

```typescript
fetch('http://localhost:5000/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }),
})
```

The backend receives the data and uses Nodemailer to send an email with the form contents to motouomvictoire@gmail.com.

## 7. Running Both Frontend and Backend
To run both the frontend and backend simultaneously:

Start the Backend:

```bash
cd belgocam-backend

npm run dev
```
Start the Frontend (in a separate terminal):

```bash
cd belgocam-frontend

npm start
```
Now, the frontend will be running on http://localhost:3000, and the backend will be running on http://localhost:5000.

## 8. Deployment

### Frontend Deployment
You can deploy the frontend (React app) using any static hosting service such as Vercel, Netlify, or GitHub Pages.

Create a production build:

```bash
npm run build
```
Deploy the contents of the build/ folder.

Backend Deployment
For deploying the backend (Express server), use services like Heroku, Vercel, or AWS.

Ensure the backend is configured with the correct environment variables on the hosting platform.
Set up the backend to listen on the hosting service's provided port.
