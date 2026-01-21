import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Position Labs",
  description:
    "Strategic positioning, branding, IT services, and digital systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}