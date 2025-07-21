# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
 # Dashboard de Impresiones – Prensa Libre

> **Prueba práctica para desarrollador Front-End**  
> Panel interactivo que visualiza métricas de campañas publicitarias de **Claro** y **Tigo**.  
> React + TypeScript + Vite + TailwindCSS + Recharts.

---

## ✨ Características

- **Filtro dinámico** “Marca” (Claro / Tigo / Todos).
- **Tarjetas KPI** que resumen Impresiones, Inversión y Alcance.
- **Pie Chart**: participación de inversión por marca.
- **Stacked Bar Chart**: distribución porcentual de tipos de contenido (`text`, `display`, `video`).
- **Line Chart**: evolución diaria de la inversión (rango 20-30 may 2025, 8 puntos).
- **Diseño responsivo** con Tailwind y gradientes de colores corporativos.
- **Code Splitting** y Hot Module Replacement gracias a Vite.
- **ESLint + TypeScript** en modo estricto para un código limpio.

---

## 🏗️ Tecnologías

| Herramienta | Versión | Uso |
|-------------|---------|-----|
| [React](https://react.dev/) | 18.3 | UI y estado |
| [TypeScript](https://www.typescriptlang.org/) | 5.4 | Tipado estricto |
| [Vite](https://vitejs.dev/) | 5.2 | Bundler / HMR |
| [TailwindCSS](https://tailwindcss.com/) | 3.4 | Estilos utilitarios |
| [Recharts](https://recharts.org/) | 2.9 | Gráficas |
| ESLint (+ plugins React, React-Hooks, React-Refresh, TS) | — | Linting |

---

## ⚙️ Requisitos

- **Node.js ≥ 18**  
- **npm ≥ 9** (o pnpm/yarn)

---

## 🚀 Instalación local

```bash
# 1. Clonar repositorio
git clone https://github.com/<usuario>/dashboard-prensa.git
cd dashboard-prensa

# 2. Instalar dependencias
npm install    # o pnpm install

# 3. Arrancar entorno de desarrollo
npm run dev
# → http://localhost:5173
```

Para un **build de producción**:

```bash
npm run build    # genera /dist
npm run preview  # servidor local para /dist
```

---

## 📂 Estructura de carpetas

```
dashboard-prensa/
│
├─ public/                 # recursos estáticos (favicon, screenshots)
├─ src/
│   ├─ dashboard/
│   │   ├─ components/     # Filtro, KPI, y charts
│   │   ├─ data/           # Datos mock en JSON/TS
│   │   ├─ hooks/          # Lógica reutilizable (useFiltered)
│   │   └─ Dashboard.tsx   # Vista principal
│   ├─ styles.css          # Tailwind (import base/components/utilities)
│   ├─ App.tsx
│   └─ main.tsx
│
├─ tailwind.config.cjs     # paleta y sombreado personalizados
├─ eslint.config.js        # reglas JS/TS/React
├─ vite.config.ts          # plugins Vite + React
└─ README.md               # (este archivo)
```

---

## 🧑‍💻 Desarrollo

1. **Añadir datos reales**  
   Reemplace los archivos en `src/dashboard/data/` o consuma una API externa.
2. **Personalizar estilos**  
   Edite `tailwind.config.cjs` y use clases utilitarias.
3. **Agregar tests** (opcional)  
   Integre Vitest o React Testing Library para pruebas unitarias.

---

## 📤 Entrega

* **Opción 1**: Comprimir el proyecto (`zip`) y enviarlo a  
  `caperez@prensalibre.com.gt`  
* **Opción 2**: Publicar en GitHub y compartir acceso al usuario **cpereztecmart**  
  *(o al correo anterior)*.

---

## 📄 Licencia

Proyecto de uso académico / prueba técnica. Queda a discreción de Prensa Libre su uso posterior.

---

## 🙋 Autor

**Daniel Valenzuela** — [hetzondaniel1@gmail.com](mailto:hetzondaniel1@gmail.com)  
**+502 4680 8475** • Desarrollador Front-End
