his project is a web-based spreadsheet application that mimics Google Sheets with functionalities such as:
✔ Formula calculations (SUM, AVERAGE, MIN, MAX, COUNT)
✔ Drag & Drop for Rows
✔ Cell Formatting (Bold, Italics, Font Size, Colors)
✔ Find & Replace, Remove Duplicates
✔ Adding & Deleting Rows & Columns
✔ Saving & Loading Data from MongoDB Atlas

📌 Tech Stack & Libraries Used
This project is built using the following technologies:

Frontend (React.js)
    React 18 → UI framework
    react-beautiful-dnd → Drag & drop functionality
    axios → API calls to backend
    CSS (Flexbox & Grid) → Styling
Backend (Node.js & Express.js)
    Express.js → Backend server
    Mongoose → MongoDB ORM
    MongoDB Atlas → Cloud-based database
    dotenv → Environment variables management

📌 Features Implemented

1️. Spreadsheet Interface
✔ Google Sheets-style UI with toolbar, formula bar, and cells
✔ Drag & Drop rows (via react-beautiful-dnd)
✔ Column headers (A, B, C...) and Row numbers (1, 2, 3...)
✔ Cell selection with formula input support
✔ Add, Delete & Resize rows/columns

2️. Formula Calculations
✔ Supports the following functions:

SUM(A1:A5): Sum of a range
AVERAGE(A1:A5): Average value
MAX(A1:A5): Maximum value
MIN(A1:A5): Minimum value
COUNT(A1:A5): Count of non-empty cells

3️. Data Entry & Formatting
✔ Supports numeric, text, and date values
✔ Basic formatting (Bold, Italics, Font Size, Colors)
✔ Data validation (ensuring numeric input in number-only cells)

4️. Data Persistence
✔ Save & Load Data to/from MongoDB Atlas
✔ Auto-loads saved data on refresh

📌 Project Structure
📂 spreadsheet-clone/
 ├── 📂 backend/           # Backend API (Node.js, Express, MongoDB)
 │   ├── server.js        # Main server file
 │   ├── models/          # Mongoose models
 │   │   ├── Spreadsheet.js  
 │   ├── routes/          # API routes
 │   │   ├── spreadsheetRoutes.js  
 │   ├── .env             # Environment variables
 │   ├── package.json     # Backend dependencies
 ├── 📂 frontend/          # Frontend (React.js)
 │   ├── src/
 │   │   ├── components/  # UI components (Spreadsheet, Toolbar, etc.)
 │   │   ├── api.js       # API calls to backend
 │   │   ├── App.js       # Main frontend app
 │   │   ├── styles.css   # Spreadsheet styles
 │   ├── package.json     # Frontend dependencies
 ├── README.md            # Documentation


📌 Installation & Setup
1️. Clone the Repository

git clone https://github.com/yourusername/spreadsheet-clone.git
cd spreadsheet-clone

2️. Backend Setup
cd backend
npm install
Configure MongoDB Atlas
Create a MongoDB Atlas account
Get the connection URI
Create a .env file and add:
ini
MONGO_URI=your_mongodb_atlas_connection_string
Start Backend
npx nodemon server.js
✅ Server should start on http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
Start Frontend
bash
Copy
Edit
npm start
✅ React app will run at http://localhost:3000

📌 API Endpoints
Save Spreadsheet Data
POST /api/spreadsheet/save

📌 How It Works
Frontend (React.js)
Loads Data from MongoDB Atlas when the app starts
Allows editing cells & formatting
Processes formulas like SUM(A1:A5)
Handles row & column additions/deletions
Saves Data to MongoDB Atlas via API
Backend (Node.js + Express)
Serves API endpoints for saving & loading spreadsheet data
Stores spreadsheet data in MongoDB
Handles requests from React frontend
📌 Troubleshooting & Common Issues
🔹 1. Backend not starting?
✔ Check if MongoDB URI is set correctly
✔ Run:
npm install
npx nodemon server.js

🔹 2. Frontend shows blank page?
✔ Run:
npm start
✔ If issues persist, clear cache:

rm -rf node_modules package-lock.json
npm install
npm start

🔹 3. Formula not working?
✔ Ensure you’re entering correct formulas (SUM(A1:A5))
✔ Use uppercase function names (SUM, AVERAGE, etc.)

📌 Future Improvements (Bonus Features)
✅ Data Export & Import (CSV, JSON)
✅ Collaboration (Multi-user Editing)
✅ Dark Mode Support
✅ Charts & Data Visualization

📌 Contributors
💻 Developed by Sunkara Indrasena Reddy
📧 Contact: indrasenareddysunkara@gmail.com

Check the output attached.