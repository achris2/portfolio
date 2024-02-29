import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Christakou | Software Engineer',
  description: `Alex Christakou's personal portfolio.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-950 relative pt-28 sm:pt-36`}>
      <div className="fixed top-0 left-0 h-full w-full z-[-10] bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(180,65%,55%,0)_0,rgba(130,175,255,0.2)_100%)]">    
      <Header />
      {children}   
        </div>
      </body>
    
    </html>
  )
}
