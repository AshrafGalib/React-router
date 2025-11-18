import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Writers from './components/Writers/Writers.jsx'
import Emails from './components/Emails/Emails.jsx'

const EmailsPromise = fetch('https://jsonplaceholder.typicode.com/comments').then(res=>res.json())

const router = createBrowserRouter([
{
  path : '/',
  Component : Root,
  children :[
    {index : true,Component : Home},
    {path :'blogs', Component:Blogs},
    {path :'writers',
    loader :()=>fetch('https://jsonplaceholder.typicode.com/users'),  
    Component: Writers},
    {path :'emails',
    element: <Suspense fallback={<span>Loading...</span>} >
      <Emails EmailsPromise={EmailsPromise}></Emails>
    </Suspense>,  
    //Component: Emails
    }
    ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
