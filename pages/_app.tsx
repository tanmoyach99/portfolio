import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css';
import {ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider attribute='class'>
     <div  className="grid grid-cols-12 gap-6 px-5 lg:px-48 sm:px-20 md:px-32 my-14">
    <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
     <Sidebar></Sidebar>
    </div>
    <div className="flex flex-col col-span-12 bg-white dark:bg-dark rounded-2xl lg:col-span-9 shadow-custom-light dark:shadow-custom-dark ">
      <Navbar></Navbar> 
    <Component {...pageProps} /></div>
  </div>

  </ThemeProvider>
}

export default MyApp

