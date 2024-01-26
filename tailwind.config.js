import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
      serif: ['Noto Serif TC', 'serif']
    },
    fontSize: {
      display: [
        '6.25rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h1: [
        '3rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h2: [
        '2.5rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h3: [
        '2rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h4: [
        '1.75rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h5: [
        '1.5rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h6: [
        '1.25rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      title: [
        '1rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '700'
        }
      ],
      'sub-title': [
        '0.75rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '700'
        }
      ],
      'body-2': [
        '0.75rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '500'
        }
      ],
      tiny: [
        '0.75rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '500'
        }
      ]
    },
    screens: {
      sm: '375px',
      md: '720px',
      lg: '960px',
      xl: '1320px',
      '2xl': '1920px',
      'mobile': '375px',
      'tablet': '640px',
      'desktop': '1920px'
    },
    container: {
      center: true,
      padding: '0.75rem'
    },
    extend: {
      colors: {
        'vtd-primary': colors.stone, // Light mode Datepicker color
        'vtd-secondary': colors.stone, // Dark mode Datepicker color
        system: {
          primary: {
            120: '#7B6651',
            100: '#BF9D7D',
            80: '#AE9984',
            60: '#E1D1C2',
            40: '#F1EAE4',
            10: '#FAF7F5'
          },
          success: {
            120: '#299F65',
            100: '#52DD7E',
            20: '#BCFBBD',
            10: '#E8FEE7'
          },
          info: {
            120: '#1D66AC',
            100: '#3BADEF',
            20: '#B1EFFD',
            10: '#E6FBFE'
          },
          error: {
            120: '#C22538',
            100: '#DA3E51',
            20: '#F5CCD1',
            10: '#FDECEF'
          },
          background: '#140F0A',
          gray: {
            80: '#4B4B4B',
            70:'#909090',
            60: '#ECECEC',
            40: '#ECECEC',
            10: '#F9F9F9'
          }
        }
      },
      width:{
        '773px':'773px'
      },
      height:{
        '28rem':'28rem'
      },
      padding: {
        '120px': '120px',
        '168px': '168px',
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.h1[0]'),
          lineHeight: theme('fontSize.h1[1].lineHeight'),
          letterSpacing: theme('fontSize.h1[1].letterSpacing'),
          fontWeight: theme('fontSize.h1[1].fontWeight'),
          fontFamily: theme('fontFamily.serif')
        },
        h2: {
          fontSize: theme('fontSize.h2[0]'),
          lineHeight: theme('fontSize.h2[1].lineHeight'),
          letterSpacing: theme('fontSize.h2[1].letterSpacing'),
          fontWeight: theme('fontSize.h2[1].fontWeight'),
          fontFamily: theme('fontFamily.serif')
        },
        h3: {
          fontSize: theme('fontSize.h3[0]'),
          lineHeight: theme('fontSize.h3[1].lineHeight'),
          letterSpacing: theme('fontSize.h3[1].letterSpacing'),
          fontWeight: theme('fontSize.h3[1].fontWeight'),
          fontFamily: theme('fontFamily.serif')
        },
        h4: {
          fontSize: theme('fontSize.h4[0]'),
          lineHeight: theme('fontSize.h4[1].lineHeight'),
          letterSpacing: theme('fontSize.h4[1].letterSpacing'),
          fontWeight: theme('fontSize.h4[1].fontWeight'),
          fontFamily: theme('fontFamily.serif')
        },
        h5: {
          fontSize: theme('fontSize.h5[0]'),
          lineHeight: theme('fontSize.h5[1].lineHeight'),
          letterSpacing: theme('fontSize.h5[1].letterSpacing'),
          fontWeight: theme('fontSize.h5[1].fontWeight'),
          fontFamily: theme('fontFamily.serif')
        },
        'input': {
          border: '1px solid #ddd',
          borderRadius: '.25rem',
          padding: '.5rem .75rem',
          // 其他您想添加的樣式
        },
      })
    }),
    import('flowbite/plugin'),
    import('@tailwindcss/forms')
  ]
}
