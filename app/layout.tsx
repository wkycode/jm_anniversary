import "@/styles/globals.scss"
import { Metadata, Viewport } from "next"
import clsx from "clsx"
import { Providers } from "./providers"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/config/fonts"
import Navbar from "@/components/navbar"
import CustomContainer from "@/components/CustomContainer"
import { AuthProvider } from "@/context/AuthContext"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="bg-sky-50 min-h-[calc(100vh-64px)]">
                <CustomContainer>{children}</CustomContainer>
              </main>
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
