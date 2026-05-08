import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import { getCareerYearsPlusLabel } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export function generateMetadata() {
  const years = getCareerYearsPlusLabel(1);
  return {
    title: "Jaswinder Singh - Frontend Developer",
    description: `Senior Software Engineer with ${years} years of experience in React, Next.js, Vue, Node.js, and modern web technologies.`,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <main className="pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}
