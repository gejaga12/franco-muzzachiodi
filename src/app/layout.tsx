import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FM & Asociados',
  description: 'Somos un equipo legal especializado en derecho de familia, accidentes laborales y de tránsito. Ofrecemos asesoramiento sin cargo, sin adelantos ni gastos, y nos dedicamos a proteger tus derechos en cada etapa del proceso legal.',
  keywords: ['abogado', 'accidentes laborales', 'accidentes de tránsito', 'asesoramiento legal', 'defensa penal', 'derecho de familia'],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
