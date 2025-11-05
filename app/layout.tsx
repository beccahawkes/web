import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A Next.js app with TypeScript and ESLint',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



