import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Thirunavukkarasu - Full Stack Developer",
  description: "Full Stack Developer Portfolio - Laravel, Vue.js, React.js, Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
