import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REAL LEVELING | AI Powered Self Improvement App",
  description: "Turn your real life into a game with AI. Build habits. Earn XP. Improve fitness, productivity and discipline.",
  openGraph: {
    title: "REAL LEVELING | AI Powered Self Improvement App",
    description: "Turn your real life into a game with AI. Build habits. Earn XP. Improve fitness, productivity and discipline.",
    url: "https://realleveling.com",
    siteName: "REAL LEVELING",
    images: [
      {
        url: "https://realleveling.com/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REAL LEVELING | AI Powered Self Improvement App",
    description: "Turn your real life into a game with AI. Build habits. Earn XP. Improve fitness, productivity and discipline.",
    images: ["https://realleveling.com/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-indigo-500/30">
        <SmoothScrollProvider>
          <Header />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
