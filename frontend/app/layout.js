import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evrenai-Ditch the Manual, Embrace the Future ",
  description: "Evren AI isn't just another automation tool. We partner with you to understand your unique challenges and deliver custom AI solutions that drive game-changing results. Boost efficiency, slash costs, and unlock new possibilities, all while feeling confident in a trusted partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
      <Footer/>  
        </body>
    </html>
  );
}
