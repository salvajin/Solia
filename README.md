# sol.ia — ERP con IA legal para PYMEs

## 🚀 Descripción
Proyecto en Next.js + Tailwind. Genera y revisa contratos legales, calcula precios y presenta tokenomics "Soles Digitales".

## ✨ Características
- Generador de contratos básicos (demo).
- Revisión automática de cláusulas clave (precio, jurisdicción, RGPD).
- Sección de precios dinámicos (estimaciones).
- Declaración de términos y condiciones comunes y adaptados al uso de la plataforma.

## 📂 Estructura
- `app/page.tsx`: Landing principal con secciones de demo.
- `app/api/review/route.ts`: API de revisión legal básica.
- `app/layout.tsx`: Layout raíz.
- `app/globals.css`: Estilos globales + márgenes y animaciones suaves.

## 🛠️ Desarrollo local
```bash
npm install
npm run dev
```
Abrir en http://localhost:3000

## 📜 Términos
El uso de sol.ia implica aceptación de:
- Responsabilidad del usuario sobre contratos.
- Aplicación de RGPD y confidencialidad.
- Jurisdicción española.

## 📌 Próximos pasos
- Exportar contratos a PDF real.
- Integración con wallets Solana (Soles Digitales).
- Chat de soporte jurídico conectado a GPT.
- Persistencia de usuario y dashboards.

---
Hecho con ❤️ para impulsar la revolución cripto-legal en España.
