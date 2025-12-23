# Portafolio WebMapping

## Descripción del Proyecto

Este repositorio contiene un portafolio digital en formato de página web, desarrollado como actividad de cierre para la asignatura de Tecnologías de la Información Geográfica (TIG). El portafolio recopila los resultados de las prácticas realizadas durante el curso, presentados en diversos formatos como imágenes (PNG/JPG), PDFs, y mapas web interactivos (WebMaps) embebidos vía HTML (usando herramientas como Leaflet).

El sitio web está construido con HTML5, CSS3 y JavaScript puro, sin frameworks externos, para una estructura simple y responsiva. Incluye una navegación por pestañas con un carrusel deslizante para visualizar el contenido de cada práctica. Las prácticas implementadas son: 1, 3, 4, 5, 7, 8, 9 y 10, siguiendo las especificaciones del enunciado (e.g., formatos requeridos y estética profesional).

Desarrollado por Víctor Morant y Denys Litvynov.

## Requisitos

- Un navegador web moderno (e.g., Chrome, Firefox).
- Python 3.x instalado (para servir el sitio localmente vía HTTP server simple). No se requieren dependencias adicionales.

## Cómo Ejecutar en Producción (Localmente)

Este es un sitio web estático, por lo que se puede servir fácilmente con un servidor HTTP simple. A continuación, instrucciones por sistema operativo usando la terminal/comando. Una vez iniciado, abre un navegador y navega a `http://localhost:8000` (o el puerto especificado).

### Linux / macOS

1. Abre una terminal y navega al directorio del proyecto:
cd /ruta/al/proyecto/tig-portafoglio-webmapping
text# Portafolio WebMapping

## Descripción del Proyecto

Este repositorio contiene un portafolio digital en formato de página web, desarrollado como actividad de cierre para la asignatura de Tecnologías de la Información Geográfica (TIG). El portafolio recopila los resultados de las prácticas realizadas durante el curso, presentados en diversos formatos como imágenes (PNG/JPG), PDFs, y mapas web interactivos (WebMaps) embebidos vía HTML (usando herramientas como Leaflet).

El sitio web está construido con HTML5, CSS3 y JavaScript puro, sin frameworks externos, para una estructura simple y responsiva. Incluye una navegación por pestañas con un carrusel deslizante para visualizar el contenido de cada práctica. Las prácticas implementadas son: 1, 3, 4, 5, 7, 8, 9 y 10, siguiendo las especificaciones del enunciado (e.g., formatos requeridos y estética profesional).

Desarrollado por Víctor Morant y Denys Litvynov.

## Requisitos

- Un navegador web moderno (e.g., Chrome, Firefox).
- Python 3.x instalado (para servir el sitio localmente vía HTTP server simple). No se requieren dependencias adicionales.

## Cómo Ejecutar en Producción (Localmente)

Este es un sitio web estático, por lo que se puede servir fácilmente con un servidor HTTP simple. A continuación, instrucciones por sistema operativo usando la terminal/comando. Una vez iniciado, abre un navegador y navega a `http://localhost:8000` (o el puerto especificado).

### Linux / macOS

1. Abre una terminal y navega al directorio del proyecto:
cd /ruta/al/proyecto/tig-portafoglio-webmapping


2. Inicia el servidor HTTP con Python:
python3 -m http.server 8000


- El sitio estará disponible en `http://localhost:8000`.
- Para detener: Presiona Ctrl+C en la terminal.

### Windows

1. Abre el Símbolo del sistema (CMD) o PowerShell como administrador.
2. Navega al directorio del proyecto:

cd \ruta\al\proyecto\tig-portafoglio-webmapping


3. Inicia el servidor HTTP con Python:
python -m http.server 8000


- El sitio estará disponible en `http://localhost:8000`.
- Para detener: Presiona Ctrl+C en la terminal.

**Nota:** Si Python no está en tu PATH, asegúrate de instalarlo desde https://www.python.org/ y agregar al PATH durante la instalación.

Para despliegue en producción real (e.g., hosting web), sube los archivos a un servicio como GitHub Pages, Netlify o un servidor Apache/Nginx.

## Estructura del Repositorio

- `index.html`: Página principal.
- `styles.css`: Estilos CSS.
- `main.js`: Lógica JavaScript para el carrusel.
- `res/`: Directorio de recursos, con subdirectorios por práctica (e.g., `pract1/`, `pract3/`, etc.) conteniendo imágenes, PDFs y HTMLs.
