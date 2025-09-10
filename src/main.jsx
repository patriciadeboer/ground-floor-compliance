import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Entry point for the React application. It just mounts the app into the page. Shouldn't change.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
