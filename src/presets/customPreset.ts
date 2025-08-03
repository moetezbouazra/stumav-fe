import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/nora'

const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#faf9e8',
      100: '#f4f0c5',
      200: '#ebe49e',
      300: '#e0d777',
      400: '#d6cc59',
      500: '#E6D134', // Main primary color (adjusted from #E6D134 for better contrast)
      600: '#E6D134',
      700: '#a3952e',
      800: '#8e8027',
      900: '#73661d',
      950: '#4d4313',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#0a0a0a',
        },
        gray: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#d9d9d9',
          400: '#bfbfbf',
          500: '#808080', // Your specified gray
          600: '#737373',
          700: '#666666',
          800: '#4d4d4d',
          900: '#333333',
          950: '#1a1a1a',
        },
      },
      dark: {
        surface: {
          0: '#121212',
          50: '#1e1e1e',
          100: '#282828',
          200: '#333333',
          300: '#424242',
          400: '#616161',
          500: '#757575',
          600: '#9e9e9e',
          700: '#bdbdbd',
          800: '#e0e0e0',
          900: '#eeeeee',
          950: '#f5f5f5',
        },
        gray: {
          50: '#1a1a1a',
          100: '#262626',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080', // Your specified gray
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f2f2f2',
        },
      },
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '8px',
        fontWeight: '500',
      },
      outlined: {
        borderWidth: '2px',
      },
    },
    card: {
      root: {
        borderRadius: '12px',
        shadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
    dataview: {
      gridItem: {
        shadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        hoverShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
})

export default customPreset
