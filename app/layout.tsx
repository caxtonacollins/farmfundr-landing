import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FarmFundr - Crowdfund Nigerian Farms | Agricultural Investment Platform",
  description:
    "Crowdfund and connect directly with real Nigerian farms. Invest in sustainable agriculture, support local farmers, and earn returns while making a positive impact.",
  keywords:
    "Nigerian agriculture, farm investment, crowdfunding, sustainable farming, agricultural returns, farm funding",
  authors: [{ name: "FarmFundr Team" }],
  creator: "FarmFundr",
  publisher: "FarmFundr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://farmfundr.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FarmFundr - Crowdfund Nigerian Farms",
    description:
      "Crowdfund and connect directly with real Nigerian farms. Invest in sustainable agriculture and earn returns.",
    url: "https://farmfundr.com",
    siteName: "FarmFundr",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "FarmFundr - Agricultural Investment Platform",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FarmFundr - Crowdfund Nigerian Farms",
    description: "Invest in sustainable agriculture and support Nigerian farmers",
    images: ["/placeholder.svg?height=630&width=1200"],
    creator: "@farmfundr",
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
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
