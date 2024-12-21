import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')!).render(
   <StrictMode>
        <GoogleOAuthProvider clientId={"94861184406-0icmlam1endhalnu5d23b1ljhgkusk90.apps.googleusercontent.com"}><App /></GoogleOAuthProvider>
  </StrictMode>,
)
