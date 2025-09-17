# 🚀 Portfolio Personal - Cristian Crisan

Un portfolio web moderno y elegante construido con **Astro**, **TypeScript** y **Tailwind CSS**. Diseñado para mostrar proyectos, habilidades y experiencia profesional de manera atractiva y funcional.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia con efectos glassmorphism y animaciones suaves
- 📱 **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Alto Rendimiento**: Construido con Astro para máxima velocidad de carga
- 🔗 **Integración con GitHub**: Muestra automáticamente repositorios desde GitHub API
- 🌙 **Tema Oscuro**: Diseño elegante con esquema de colores oscuro
- 🎯 **SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda
- 📄 **CV Interactivo**: Timeline de experiencia profesional y educación
- 🚀 **Animaciones Fluidas**: Transiciones y efectos hover profesionales

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **[GitHub API](https://docs.github.com/en/rest)** - Integración de repositorios
- **HTML5 & CSS3** - Estándares web modernos

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/CristianAntonioCrisan21/cristian-portfolio.git
   cd cristian-portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:4321
   ```

## 📁 Estructura del Proyecto

```
cristian-portfolio/
├── public/                 # Archivos estáticos
│   ├── Avatar.JPG         # Foto de perfil
│   ├── Perfil.jpeg        # Imagen adicional
│   └── favicon.svg        # Icono del sitio
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── About.astro    # Sección "Sobre mí"
│   │   ├── CvTimeline.astro # Timeline de CV
│   │   ├── FeaturedProjects.astro # Proyectos destacados
│   │   ├── Header.astro   # Navegación principal
│   │   ├── Hero.astro     # Sección hero/banner
│   │   ├── ProjectCard.astro # Tarjeta de proyecto
│   │   └── ProjectGrid.astro # Grid de proyectos
│   ├── data/
│   │   └── cv.json        # Datos del CV (experiencia, educación)
│   ├── pages/
│   │   ├── index.astro    # Página principal
│   │   └── cv.astro       # Página del CV
│   ├── styles/
│   │   └── global.css     # Estilos globales y componentes
│   └── utils/
│       └── github.ts      # Utilidades para GitHub API
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.mjs    # Configuración de Tailwind
└── tsconfig.json          # Configuración de TypeScript
```

## 🎨 Personalización

### Colores y Tema

El tema principal se define en `tailwind.config.mjs`:

```javascript
colors: {
  brand: {
    DEFAULT: "#10B981", // Verde principal
    // ... más variaciones
  }
}
```

### Datos Personales

Actualiza la información en:
- `src/data/cv.json` - Experiencia profesional y educación
- `src/components/About.astro` - Información personal
- `src/components/Hero.astro` - Presentación principal

### Proyectos

Los proyectos se cargan automáticamente desde GitHub API. Para proyectos destacados, edita:
- `src/components/FeaturedProjects.astro`

## 🚀 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Previsualiza la build localmente |
| `npm run astro check` | Verifica errores de TypeScript |
| `npm run astro sync` | Sincroniza tipos de Astro |

## 📱 Secciones del Portfolio

### 🏠 Inicio
- Presentación personal con call-to-action
- Navegación suave entre secciones
- Efectos visuales atractivos

### 👨‍💻 Sobre Mí
- Información personal y profesional
- Habilidades técnicas
- Intereses y objetivos

### 🚀 Proyectos
- Grid automático de repositorios de GitHub
- Filtrado por estrellas y demos
- Enlaces directos a código y demos

### 📄 CV
- Timeline interactivo de experiencia
- Educación y certificaciones
- Descarga de CV en PDF

## 🌐 Despliegue

### Netlify (Recomendado)
```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

### Vercel
```bash
npm run build
# Conecta tu repositorio con Vercel
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Actions para despliegue automático
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Cristian Crisan**
- GitHub: [@CristianAntonioCrisan21](https://github.com/CristianAntonioCrisan21)
- Portfolio: [Tu URL de portfolio]
- Email: [tu-email@ejemplo.com]

---

⭐ **¡Dale una estrella si te gusta este proyecto!** ⭐
