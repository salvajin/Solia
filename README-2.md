# sol.ia (MegaRevamp)

Este repositorio contiene **sol.ia**, un prototipo de plataforma legal, ERP ligero y Web3 pensado para PYMEs españolas. Incluye generación y revisión de contratos con IA ligera, exportación a diferentes formatos, integración cripto y gestión de RGPD. Todo escrito en Next.js (App Router), Tailwind CSS y TypeScript.

## Funcionalidades y nombres en clave

| Nombre en clave            | Descripción                                                                                        | Ruta/archivo                           |
|----------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------|
| **SunContractor**         | Generador de contratos: formulario guiado con campos de proveedor, cliente, objeto, precio y jurisdicción. Incluye autosave, hash SHA-256, firma ECDSA para integridad, y exportación a HTML, TXT, PDF (React‑PDF) y Google Docs. | `app/contracts/page.tsx`               |
| **LegalLens**             | Revisión legal de documentos: analiza el texto del contrato y devuelve un *risk score* con hallazgos (cláusulas ausentes, incoherencias). Usa API `/api/review` con fallback local. | `app/review/page.tsx` y `app/api/review/route.ts` |
| **PricePilot**            | Página de precios dinámica: calcula tarifas mensuales según sector (e‑commerce, agencias) y número de usuarios/documentos.     | `app/pricing/page.tsx`                |
| **TokenForge**            | Sección de “Soles Digitales”: muestra el token vectorial (basado en sucesión de Fibonacci) con nombre oculto al pasar el ratón, gráfico de volumen mock y estadísticas básicas del token. | `app/token/page.tsx`                  |
| **TermsKeeper**           | Página de términos y condiciones: incluye cláusulas estándar de uso (uso legítimo, licencia, descargo de responsabilidad, RGPD, etc.) y términos específicos (hash/firma de contratos, almacenamiento cifrado, uso de IA). | `app/terms/page.tsx`                 |
| **AdminBoard**            | Panel de control (placeholder): listado de contratos exportados y acceso a configuraciones futuras.                         | `app/dashboard/page.tsx`             |
| **QuickExport**           | API de exportación: endpoints para crear y descargar documentos en Google Docs, PDF (React‑PDF) y HTML/TXT.               | `app/api/export/*/route.ts`          |
| **RiskChecker**           | API de revisión: endpoint que recibe texto y devuelve un análisis de riesgos.                                            | `app/api/review/route.ts`            |
| **CryptoGuard**           | Biblioteca de utilidades criptográficas: calculo de hash SHA‑256, generación de claves, firma/validación ECDSA.        | `lib/crypto.ts`                      |
| **SafeCall**              | Utilidad de `safeFetch` con reintentos exponenciales y timeout para robustez en llamadas a la API.                      | `lib/utils.ts`                       |
| **AutoStore**             | Hook React `useLocalStorage` para autosalvar formularios.                                                               | `lib/useLocalStorage.ts`             |

## Instalación y uso

1. Asegúrate de tener **Node.js** 18 o superior. Descarga o clona este repositorio. 
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta en desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación se servirá en `http://localhost:3000`. Para acceder desde otro dispositivo en la misma red, usa la IP local de tu ordenador (`http://tu-ip-local:3000`).

4. (Opcional) Exportar a Google Docs: crea un archivo `.env.local` en la raíz con:

   ```
   GOOGLE_CLIENT_ID=tu-client-id.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=tu-client-secret
   GOOGLE_REFRESH_TOKEN=tu-refresh-token
   ```

   Consulta la guía de configuración en `app/api/export/google-docs/route.ts` para generar el `refresh token`.

5. Elige una de las funcionalidades desde el menú. El generador de contratos permite generar, firmar y exportar de inmediato. La revisión muestra hallazgos de riesgos y puede exportarse también.

## Estructura del proyecto

```
solia-megarevamp-crypto/
├─ app/
│  ├─ api/
│  │  ├─ export/
│  │  │  ├─ google-docs/route.ts      # QuickExport: crea un Google Doc
│  │  │  ├─ pdf/route.ts             # QuickExport: genera PDF con React‑PDF
│  │  │  └─ html-or-txt/route.ts     # QuickExport: exporta HTML o TXT
│  │  └─ review/route.ts             # RiskChecker: API de revisión legal
│  ├─ contracts/page.tsx            # SunContractor: formulario y export
│  ├─ review/page.tsx               # LegalLens: revisión de textos
│  ├─ pricing/page.tsx              # PricePilot: precios dinámicos
│  ├─ token/page.tsx                # TokenForge: token y estadísticas
│  ├─ terms/page.tsx                # TermsKeeper: términos y condiciones
│  ├─ dashboard/page.tsx            # AdminBoard: panel de control
│  ├─ layout.tsx                    # Layout global: navbar, footer, mobile menu
│  ├─ globals.css                   # Estilos base y utilidades Tailwind
│  └─ page.tsx                      # Página de inicio (hero, CTA)
├─ components/
│  ├─ Logo.tsx                      # Logo vectorial Fibonacci
│  ├─ MobileMenu.tsx                # Menú móvil accesible
│  └─ ui/
│     ├─ Button.tsx                 # Botón reutilizable
│     ├─ Input.tsx                  # Input con estilos
│     └─ Textarea.tsx               # Textarea estilizado
├─ lib/
│  ├─ utils.ts                      # SafeCall y helpers de clase
│  ├─ validation.ts                 # Validación tipada para contratos
│  ├─ useLocalStorage.ts            # AutoStore: hook de autosalvado
│  └─ crypto.ts                     # CryptoGuard: funciones de hash/firma
├─ next.config.mjs                  # Configuración de Next.js
├─ tailwind.config.ts               # Configuración de Tailwind CSS
├─ postcss.config.mjs               # Configuración de PostCSS
├─ tsconfig.json                    # Configuración de TypeScript
├─ package.json
├─ .gitignore
└─ README.md
```

## Licencia

MIT. Puedes utilizar este código como base para tus propios proyectos, bajo tu propia responsabilidad. Ten en cuenta que el proyecto es un prototipo y no constituye asesoría legal.