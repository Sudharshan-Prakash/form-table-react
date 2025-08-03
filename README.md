# React Form and Table Example

This is a simple React application demonstrating a form to add, edit, and delete entries in a table. The project uses functional components, React hooks for state management, and Tailwind CSS for styling.

---

## Features

- Add new entries with name and email.
- Edit existing entries.
- Delete entries.
- Table only renders when there is data.
- Responsive and clean UI using Tailwind CSS.

---

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

## Code Overview

- `App.js` contains the main state logic and handlers for add, edit, and delete operations.
- `components/Form.js` renders the input form and handles changes and submissions.
- `components/Table.js` displays the data in a table with Edit and Delete buttons.
- Tailwind CSS classes are used for styling the UI.

---

## Usage

- Fill in the "Name" and "Email" fields and click "Add" to insert a new row.
- Click "Edit" on any row to load its data into the form.
- Modify the form data and click "Update" to save changes.
- Click "Delete" to remove the row from the table.
- The table is hidden if no entries exist.

---

## Tailwind CSS Setup

Make sure you have Tailwind CSS configured to work with React. Your css file (e.g., `App.css`) should include:

