import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Padel Factory Courts",
  description: "En Padel Factory, nos enorgullece ser líderes mundiales en la fabricación de canchas de pádel de lujo. Con un compromiso inquebrantable con la calidad y la excelencia, hemos establecido un estándar global en la industria del pádel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>


      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
