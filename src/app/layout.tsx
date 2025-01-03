export const metadata = {
  title: 'InstantResume',
  description: 'craft professional looking resume without hazzle',
}

import './_styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
