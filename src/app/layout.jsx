import "../styles/globals.css";
import { Bebas_Neue, Inter } from "next/font/google";
import Header from "../components/Header/Header";
import ClientWrapper from "./ClientWrapper";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "The Weeknd | Official Website",
    template: "%s | The Weeknd",
  },
  description: "Official website of The Weeknd. Music, tour dates, merchandise, and more.",
  keywords: ["The Weeknd", "Abel Tesfaye", "music", "tour", "merchandise", "albums", "songs"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.theweeknd.com",
    siteName: "The Weeknd",
    title: "The Weeknd | Official Website",
    description: "Official website of The Weeknd. Music, tour dates, merchandise, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Weeknd | Official Website",
    description: "Official website of The Weeknd. Music, tour dates, merchandise, and more.",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${bebasNeue.variable} ${inter.variable}`}>
          <Header />
          {children}
          <ClientWrapper />
        </body>
      </html>
    </>
  );
}
