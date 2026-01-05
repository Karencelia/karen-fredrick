import './globals.css'
import { Quicksand } from 'next/font/google'

// Import the Roboto font
const quicksand = Quicksand({
  weight: ['300','400','500','700'], // choose the weights you need
  subsets: ['latin'], // include subsets you need
  display: 'swap', // optional but recommended
})

export const metadata = {
  title: 'Our Wedding Website',
  description: 'Wedding Website for Karen & Fredrick',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>{children}</body>
    </html>
  )
}
