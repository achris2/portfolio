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
      <body className={`${inter.className} text-slate-950`}>
        <div className="relative pt-14 sm:pt-18 top-0 left-0 h-full w-full bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(180,65%,55%,0)_0,rgba(130,175,255,0.3)_100%)]">
          <Header />
          {children}   
        </div>

      </body>
    
    </html>
  )
}
