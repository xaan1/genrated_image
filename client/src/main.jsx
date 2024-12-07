import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { ClerkProvider } from '@clerk/clerk-react'



const PUBLISHABLE_KEY = "pk_test_ZXhvdGljLXB1bWEtNTEuY2xlcmsuYWNjb3VudHMuZGV2JA"



if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')).render(

     <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  
          <App />
   
      </ClerkProvider>

  </BrowserRouter>

)
