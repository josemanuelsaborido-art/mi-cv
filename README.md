# José Manuel Saborido Vela — CV interactivo

Portfolio personal responsive construido con HTML, CSS y JavaScript vanilla. No necesita backend ni proceso de compilación y está listo para GitHub Pages.

## Incluye

- Modo claro/oscuro con persistencia en `localStorage`.
- Navegación por secciones y scroll suave.
- Trayectoria, áreas de trabajo y habilidades visuales.
- Botón de descarga del PDF incluido en la carpeta raíz.
- SEO básico, responsive, contraste y etiquetas semánticas.

## Uso local

Abre `index.html` directamente en un navegador o usa la extensión Live Server de VS Code. Sustituye el nombre, textos, enlaces y datos de contacto de ejemplo en `index.html`.

El botón **Descargar CV** descarga `CV_Jose_Manuel_Saborido_Vela.pdf`. Si sustituyes ese archivo por tu propio PDF, conserva el mismo nombre o actualiza el enlace en `index.html`. La hoja de estilos de impresión permite guardar la página como PDF desde el navegador.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `mi-cv`.
2. Sube `index.html`, `styles.css`, `script.js`, `README.md` y la carpeta `assets`.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`; pulsa **Save**.
6. GitHub mostrará una URL similar a `https://usuario.github.io/mi-cv/`.

Para dominios personalizados o errores de despliegue, consulta la documentación oficial de [GitHub Pages](https://docs.github.com/en/pages).

## Capturas

Añade tus capturas en `assets/` y actualiza esta sección, por ejemplo:

```md
![Vista desktop](assets/screenshot-desktop.png)
![Vista mobile](assets/screenshot-mobile.png)
```
