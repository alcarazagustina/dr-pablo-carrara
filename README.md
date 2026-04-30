# Dr. Pablo Carrara

Sitio web personal del Dr. Pablo Carrara, Gastroenterólogo en Santa Fe, Argentina.

## Descripción

Landing page profesional que presenta la trayectoria, consultorios y servicios del Dr. Pablo Carrara, especialista en Gastroenterología y Endoscopia Digestiva.

## Tecnologías

- **Astro** — Framework web moderno y rápido
- **React** — Componentes interactivos (shadcn/ui)
- **Tailwind CSS** — Estilos utilitarios y responsive
- **TypeScript** — Tipado seguro

## Comandos

| Comando           | Acción                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Instalar dependencias                            |
| `npm run dev`     | Iniciar servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Compilar sitio para producción en `./dist/`       |
| `npm run preview` | Previsualizar build localmente                    |

## Estructura del proyecto

```text
/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── PabloCarraraProfile.jpg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Trayectoria.astro
│   │   ├── Consultorios.astro
│   │   ├── Footer.astro
│   │   └── ui/
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Desarrollo

Requiere Node.js >= 22.12.0

## Licencia

© 2024 Dr. Pablo Carrara
