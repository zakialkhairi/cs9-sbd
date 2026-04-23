import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKEA Indonesia",
  description: "Frontend MVP e-commerce bergaya IKEA dengan katalog, detail cepat, dan keranjang belanja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
