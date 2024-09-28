# Task Manager App

Task Manager App is a web application that helps users manage their daily tasks. Users can log in, add new tasks, edit existing tasks, and delete unnecessary tasks. The application is built with a modern tech stack to ensure a smooth and efficient user experience.

![image](https://github.com/user-attachments/assets/0a292b57-9f37-4e8a-8fbe-7df0241cdf72)


## Deployment

You can visit the production deployment on Vercel with the following link:

[Task Manager](https://task-manager-fe-sigma.vercel.app/)

## Technologies Used

### Frontend

- **Next.js**: A React framework for building static and dynamic web applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that helps write more maintainable and less error-prone code.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Lucide-react**: A collection of SVG icons for React.
- **React Context**: Used for managing user and task state within the application.
- **Axios**: A promise-based HTTP client for making requests to the backend.
- **React Hot Toast**: For displaying notifications.

### [Backend](https://github.com/thuannguyenhuu11/Task-Manager-BE)

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing user and task data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT**: For user authentication and authorization.
- **bcrypt**: For hashing user passwords.

## Installation

### Frontend

To install and run the frontend of this project on your machine, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/thuannguyenhuu11/Task-Manager-FE

2. Install the dependencies:
   ```sh
   npm install

3. Create a .env.local file and add the necessary environment variables:
   ```sh
   NEXT_PUBLIC_SERVER_URL=http://localhost:8000/api/v1 || Your backend deployed

4. Run the application:
   ```sh
   npm run dev

### Usage

After installing and running the application, you can:

- Register a new account or log in if you already have an account.
- Add new tasks by clicking the "Add Task" button.
- Edit existing tasks by clicking on the task.
- Delete unnecessary tasks by clicking the trash icon.
