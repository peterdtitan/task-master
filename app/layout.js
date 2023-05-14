'use client';

import './globals.css'
import { ThemeProvider } from 'next-themes';

import { Navbar } from '../components';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body> 
            <ThemeProvider enableSystem={true} attribute='class'>
              <Navbar />
              <div className="p-4">{children}</div>
            </ThemeProvider>
          </body>
    </html>
  )
}
