import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalStateProvider } from "@/context";


export const metadata: Metadata = {
  title: 'Personal Trainer & Web Developer | Pendleton, North Tonawanda, Clarence, Amherst, NY',
  description:
    'Top-rated NSCA and CSCS certified personal trainer specializing in weight loss, strength training, muscle building, nutrition, and injury prevention in Pendleton, NY, North Tonawanda, NY, Clarence, NY, and Amherst, NY. Also offering web development services for web apps and websites.',
  keywords: 'personal trainer, weight loss, strength training, muscle building, nutrition, injury prevention, MS Health and Human Performance, NSCA-CPT, CSCS, web developer, web apps, websites, Pendleton, North Tonawanda, Clarence, Amherst, NY',
  authors: [{ name: 'Warren Paschetto, MS, CSCS*D, NSCA-CPT*D' }],
  openGraph: {
    title: 'Top Personal Trainer & Web Developer | Pendleton, North Tonawanda, Clarence, Amherst, NY',
    description:
      'Looking for the best personal trainer in Pendleton, NY, North Tonawanda, Clarence, or Amherst? I specialize in weight loss, strength training, and nutrition. Also offering web development services for websites and web apps.',
    url: 'https://warrenpaschetto.com',
    siteName: 'Personal Trainer & Web Developer',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: {children: React.ReactNode;}) {

  return (
    <>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <head />
        <body>

          <GlobalStateProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </GlobalStateProvider>
        </body>
      </html>
    </>
  )
};


