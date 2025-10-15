# 😂 Random Meme Generator

A beginner-friendly meme generator application built with React.js. Perfect for learning React fundamentals including component architecture, state management, API integration, and responsive design.

## ✨ Features

### 🎭 Meme Generation

- Every time you click the "Generate Meme" button, a new meme      appears instantly.
- Uses a meme API to fetch the latest memes directly from the internet.
- Minimum loading time using React hooks and async API calls.

## 🚀 Getting Started

### Step-by-Step Setup

#### 1. Download the project

```bash
git clone https://github.com/jitanshu-27/random-meme-generator.git
cd random-meme-generator
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Start the app

```bash
npm start
```

The app will open in your browser:

```
http://localhost:3000
```
## 🛠️ Technologies Used

- **React.js** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **Tailwind CSS** - Styling and animations
- **Axios** - HTTP requests


## 🔧 Configuration

### API Endpoint

You can change the meme API in `src/App.js`:

```javascript
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY};
```

## 📁 Project Structure

```
random-meme-generator/
│
├── public/
│   ├── index.html          # Main HTML file
│     
├── src/
│   ├── components/
│   │   ├── Random.js       # Meme display component
│   │   └── Tags.js         # Generate button component
│   │
│   ├── App.js              # Main app component
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
│
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```
