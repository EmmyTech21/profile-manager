# React + Vite

Profile Manager
This project is a Profile Manager React component that allows users to add or edit their personal information, professional experiences, and skills. It also includes an option to upload and manage a resume file. The component is responsive and works well on both mobile and desktop devices.

Features
Add, edit, and delete personal information, professional experiences, and skills.
Upload and manage resume documents.
Display uploaded resume and entered information in a user-friendly format.
Responsive design for mobile and desktop devices.
State management using React hooks.
Form validation using Yup and React Hook Form.
Technologies Used
React
React Hook Form
Yup
Vite
CSS
Installation and Setup
Prerequisites
Node.js
npm (Node Package Manager)
Steps

1) Clone the repository:


git clone https://github.com/EmmyTech21/profile-manager.git

2) Navigate to the project directory:
cd profile-manager

3) Install dependencies:
npm install

4) Run the development server:
npm run dev

5) Open your browser and navigate to:
http://localhost:3000

Usage
Adding Work Experience
1) Fill in the position, company, start date, end date, and description fields.
2) Click the "Add Work Experience" button to add the experience to the list.
Adding Skills
1) Enter the skill in the input field.
2) Click the "Add New Skill" button to add the skill to the list.
Uploading a Resume
Click the "Choose File" button and select a resume file.
The uploaded file's name will be displayed along with options to preview or download.

Form Validation
Form validation is implemented using Yup and React Hook Form. The validation schema ensures that all fields are required, and it checks for proper formats (e.g., valid email format).

Validation Schema

const schema = yup.object().shape({
  position: yup.string().required('Position is required'),
  company: yup.string().required('Company is required'),
  startDate: yup.string().required('Start Date is required'),
  endDate: yup.string().required('End Date is required'),
  description: yup.string().required('Description is required'),
  skill: yup.string().required('Skill is required'),
  resume: yup.mixed().required('Resume is required'),
});

File Structure

profile-manager/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── ProfileManager.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ProfileManager.css
│
├── .gitignore
├── index.html
├── package.json
└── README.md



The project uses Vite for fast builds and a great development experience.
Ensure you have the latest version of Node.js and npm installed for compatibility.
The component is styled using normal CSS, with a focus on responsiveness and usability.