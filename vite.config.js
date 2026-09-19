import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to strip the Live Server redirect script from the production build (dist/index.html)
// so that dist/index.html runs purely standalone with zero redirect loops.
const stripRedirectFromBuild = () => ({
  name: 'strip-redirect-from-build',
  transformIndexHtml(html, ctx) {
    if (ctx.bundle) {
      return html.replace(/<script>[\s\S]*?window\.location\.replace[\s\S]*?<\/script>\s*/gi, '');
    }
    return html;
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [stripRedirectFromBuild(), react()],
  base: './',
})
