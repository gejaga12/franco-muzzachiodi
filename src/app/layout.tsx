import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Importa la fuente Roboto desde Google Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "100", "300", "700", "900"], // Puedes ajustar los pesos según lo necesites
});

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
    <html lang="es"> {/* Cambié el idioma a "es" si tu público objetivo habla español */}
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
