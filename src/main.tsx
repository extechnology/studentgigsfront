import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryclient = new QueryClient()

createRoot(document.getElementById('root')!).render(


  <StrictMode>

    <QueryClientProvider client={queryclient}>

      <BrowserRouter>

        <GoogleOAuthProvider clientId='497499738943-or63o18djrrdokq8mjh80p711cktfkmo.apps.googleusercontent.com'>

          <App />

        </GoogleOAuthProvider>

      </BrowserRouter>

    </QueryClientProvider>

  </StrictMode>,
)
