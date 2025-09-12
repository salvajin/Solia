import "./globals.css";

export const metadata = { title: "sol.ia", description: "ERP ligero con IA legal para PYMEs" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen text-zinc-100 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 selection:bg-amber-300 selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
