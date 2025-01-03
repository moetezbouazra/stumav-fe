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
    ['btn', 'box-border no-underline font-raleway text-xs font-semibold uppercase px-7 py-3 mb-1 leading-none inline-block min-w-[8.5em] text-center z-10 border  rounded-tl-[12px] rounded-br-[12px] relative transition-all duration-400 ease-linear text-[#000000] bg-transparent hover:bg-[#808080] hover:text-white hover:border-[#808080] hover:transition-ease-linear hover:transition-delay-75'],
    ['btn-inverted', 'box-border no-underline font-raleway text-xs font-semibold uppercase px-7 py-3 mb-1 leading-none inline-block min-w-[8.5em] text-center z-10 border border-[#808080] rounded-tl-[12px] rounded-br-[12px] relative transition-all duration-400 ease-linear text-white bg-[#808080] hover:bg-transparent hover:transition-ease-linear hover:transition-delay-75'],
    ['text-primary', 'text-[#808080]'],
    ['text-secondary', 'text-[#444444]'],
    ['text-light', 'text-[#b4b4b4]'],
    ['bg-primary', 'bg-[#808080]'],
    ['border-primary', 'border-[#808080]'],
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
  rules: [
    ['bg-products', { 'background-image': 'url(https://www.cna.com.tn/assets/images/parallax/product-list.png)', 'background-position': '50% -50px;' }],
    ['custom-shadow', { 'box-shadow': '0px 0px 25px 0px rgba(236, 236, 236, 1);' }],
    ['bg-alu-texture', {
      'background': '-webkit-radial-gradient(center, circle, rgba(255, 255, 255, .35), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 21%), -webkit-radial-gradient(center, circle, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 21%), -webkit-radial-gradient(center, circle farthest-corner, #f0f0f0, #c0c0c0);',
      'background-size': '10px 10px, 10px 10px, 100% 100%',
      'background-position': '1px 1px, 0px 0px, center center',
    }],
  ],
})
