import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description: "Revolutionize your digital marketing with AI-powered automation, personalized campaigns, and data-driven insights. Join thousands of businesses achieving exceptional results.",
  keywords: "AI marketing, digital marketing automation, AI-powered campaigns, marketing suite, brand automation",
  authors: [{ name: "ADmyBRAND Team" }],
  creator: "ADmyBRAND AI Suite",
  publisher: "ADmyBRAND",
  metadataBase: new URL("https://admybrand.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://admybrand.com",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your digital marketing with AI-powered automation, personalized campaigns, and data-driven insights.",
    siteName: "ADmyBRAND AI Suite",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADmyBRAND AI Suite - AI-Powered Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your digital marketing with AI-powered automation, personalized campaigns, and data-driven insights.",
    creator: "@admybrand",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code-here",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
