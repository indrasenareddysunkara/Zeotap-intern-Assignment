The CDP Chatbot is an AI-powered assistant that helps users answer "how-to" questions about Segment, mParticle, Lytics, and Zeotap. It extracts information from official documentation using web scraping (Puppeteer) and serves responses via a Node.js backend with Express.js. The frontend is built using React.js and communicates with the backend API.

🛠️ Tech Stack & Dependencies
Frontend (React.js)
    react - UI framework
    axios - API calls to backend
   react-dom - Renders React components
   react-scripts - Development tools
Backend (Node.js + Express)
   express - Web framework for API
   dotenv - Loads environment variables
   cors - Enables frontend-backend communication
   axios - Fetches web data (if needed)
   puppeteer - Web scraping from documentation
   nodemon - Auto-restarts server during development
⚙️ How It Works

1️. User asks a question in the chatbot UI (React.js)

2️. Frontend sends API request to backend (/api/chatbot/ask)

3️. Backend processes request:
Detects the relevant CDP (Segment, mParticle, etc.)
Uses Puppeteer to scrape documentation
Extracts relevant text based on question

4️. Backend sends answer back to the frontend

5️. Frontend displays the response to the user

🚀 Installation & Setup

1️. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/cdp-chatbot.git
cd cdp-chatbot

2️. Backend Setup
bash
Copy
Edit
cd backend
npm install  # Install dependencies
npx nodemon server.js  # Start backend

3️. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install  # Install dependencies
npm start  # Start frontend


💡 Running the Project
1️. Start Backend (Port: 5000)
bash
Copy
Edit
cd backend
npx nodemon server.js

2. Start Frontend (Port: 3000)

bash
Copy
Edit
cd frontend
npm start

3️. Open Browser & Test Chatbot
http://localhost:3000

📌 Contributors
💻 Developed by Sunkara Indrasena Reddy
📧 Contact: indrasenareddysunkara@gmail.com

Check the output attached.