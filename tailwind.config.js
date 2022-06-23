/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      typography: (theme) => ({

      }),
      fontFamily: {
        sans: ['Prompt', ...defaultTheme.fontFamily.sans],
        serif: ['Rammetto One', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        p: [
          "clamp(0.920rem, calc( 12px + 0.480vw ), 1rem)",
        ]
      },
      lineHeight: {
        "2xl": "80%",
        heading: "115%",
        span: "110%",
        base: "1.1",
        p: "123%",
      },
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
       
      },
      textColor: {
        base: 'var(--mine-shaft)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accent-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      textShadow: {
        'outline-normal': '0 0 0 2px var(--accent-2)',
        magical:
          '1px 1px 1px var(--accent-9)',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '500',
        bold: '800',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addBase, theme, addComponents }) {

      addBase({
        p: {
          fontFamily: theme("fontFamily.serif"),
          fontSize: theme("fontSize.p"),
          lineHeight: theme("lineHeight.p"),
        }
      });
      const buttons = {
        ".btn": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          backgroundColor: theme("colors.btn"),
          color: theme("colors.primary"),
        },
      };
      addComponents(buttons);
    }),
  ],
}
