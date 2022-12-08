import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
    theme: {
        colors: {
            primary: '#6366f1',
            'lightViolet': '#eff3f8',
        }
    },
    shortcuts: [
        ['btn-primary', 'px-4 py-1 rounded-sm bg-primary text-white']
    ],
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: ['DM Serif Display', 'Source Serif Pro'],
                mono: 'DM Mono',
                helvetica: 'Helvetica',
            }
        })
    ]
})