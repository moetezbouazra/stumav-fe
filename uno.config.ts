import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'box-border no-underline font-raleway text-xs font-semibold uppercase px-7 py-3 mb-1 leading-none inline-block min-w-[8.5em] text-center z-10 border border-blue-800 rounded-tl-[12px] rounded-br-[12px] relative transition-all duration-400 ease-linear text-blue-800 bg-transparent hover:bg-primary hover:text-white hover:border-primary hover:transition-ease-linear hover:transition-delay-75'],
    ['text-primary', 'text-[#0054A6]'],
    ['text-secondary', 'text-[#444444]'],
    ['text-light', 'text-[#b4b4b4]'],
    ['bg-primary', 'bg-[#0054A6]'],
    ['border-primary', 'border-[#0054A6]'],
    ['zoom-in', 'transition-all duration-400 ease-linear hover:scale-120 hover:brightness-135 hover:transition-ease-linear hover:transition-delay-200 hover:transition-duration-1000'],
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        raleway: 'Raleway',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
