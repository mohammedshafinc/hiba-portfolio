import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIBA — Digital Author & Copywriter",
  description: "Crafting compelling narratives and persuasive copy that resonates. Specializing in articles, copywriting, and content strategy.",
  keywords: "copywriter, digital author, content writer, portfolio, writing services, articles, storytelling",
  authors: [{ name: "Hiba" }],
  openGraph: {
    title: "HIBA — Digital Author & Copywriter",
    description: "Crafting compelling narratives and persuasive copy that resonates. Specializing in articles, copywriting, and content strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
