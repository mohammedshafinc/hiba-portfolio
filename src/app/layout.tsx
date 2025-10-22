import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hiba - Digital Author and Copywriter",
  description: "Professional portfolio showcasing published articles and copywriting work across various industries.",
  keywords: "copywriter, digital author, content writer, portfolio, writing services",
  authors: [{ name: "hiba" }],
  openGraph: {
    title: "hiba - Digital Author and Copywriter",
    description: "Professional portfolio showcasing published articles and copywriting work across various industries.",
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
