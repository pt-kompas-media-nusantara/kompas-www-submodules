module.exports = {
  mode: 'jit',
  theme: {
    /**
     * Bagian ini mengubah palet warna default
     */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      /**
       * Di bawah ini adalah warna lama
       * Kalau ada kesamaan dengan warna baru, hapus saja
       * warna lama lalu nama kelas yg memakai warna lama
       * diganti dengan nama kelas dengan warna baru.
       */

      'blue-royal': {
        100: '#E9F5FD',
        200: '#C8E6F9',
        300: '#A6D6F6',
        400: '#42A8EB',
        500: '#2196F3',
        600: '#0C81DF',
        700: '#00599A',
        800: '#004C83',
        900: '#003E6C'
      },

      gray: {
        10: '#fefefe',
        150: '#cccccc',
        650: '#222222',
        700: '#111111'
      },

      'orange-tangerine': {
        100: '#FCF0C3',
        200: '#F9E79F',
        300: '#F7DD74',
        400: '#F4CF3A',
        500: '#F1C40F',
        600: '#FFB12E',
        700: '#FFA000',
        800: '#FF7F0F',
        900: '#EE7721'
      },

      'red-thunderbird': {
        100: '#FDF6F6',
        200: '#F5C6C7',
        300: '#EFA3A6',
        400: '#E98184',
        500: '#E35E63',
        600: '#DD3C41',
        700: '#D71920',
        800: '#B7151B',
        900: '#971216'
      },

      'white-citrine': '#faf2de',

      /**
       * Di bawah ini adalah warna baru
       */
      brand: {
        1: '#00559A',
        2: '#00447B'
      },
      blue: {
        100: '#E1F0FF',
        200: '#93C8FD',
        300: '#5AABFC',
        400: '#057DF4',
        500: '#0468CB',
        600: '#0356A8',
        700: '#023B73'
      },
      // nama key dobel, sementara dikomen dulu sampai warna lama dihapus
      // 200-600 ada kesamaan dengan gray 50-600, akan di cek next task
      grey: {
        100: '#FFFFFF',
        200: '#EEEEEE',
        300: '#DDDDDD',
        400: '#999999',
        500: '#666666',
        600: '#333333',
        700: '#000000'
      },
      green: {
        100: '#EEFCD2',
        200: '#D9F9A6',
        300: '#97DB53',
        400: '#6AC322',
        500: '#50A718',
        600: '#3A8C11',
        700: '#1A5D06'
      },
      orange: {
        100: '#FFEECC',
        200: '#FFD999',
        300: '#FFA53F',
        400: '#FF7A00',
        500: '#DB5D00',
        600: '#B74400',
        700: '#7A2100'
      },
      red: {
        100: '#FEE1CF',
        200: '#FDBDA0',
        300: '#F7644C',
        400: '#F32013',
        500: '#D00D12',
        600: '#AE091B',
        700: '#740322'
      },
      yellow: {
        100: '#FFF9CC',
        200: '#FFF099',
        300: '#FFDC3F',
        400: '#FFCC00',
        500: '#DBAA00',
        600: '#B78B00',
        700: '#7A5700'
      }

    },
    /**
     * Bagian ini mengubah huruf default
     */
    fontFamily: {
      serif: [
        'Lora',
        'serif'
      ],
      system: [
        'Georgia',
        'Times New Roman',
        'Times',
        'serif'
      ],
      sans: [
        '"PT Sans"',
        'Arial',
        'Verdana',
        'Helvetica',
        'sans-serif'
      ]
    },
    /**
     * Bagian ini mengubah nilai maxWidth default
     */
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      // sm: '24rem', // nilai default
      sm: '30rem',
      // md: '28rem', // nilai default
      md: '40rem',
      // lg: '32rem', // nilai default
      lg: '50rem',
      // xl: '36rem', // nilai default
      xl: '60rem',
      // '2xl': '42rem', // nilai default
      '2xl': '70rem',
      // '3xl': '48rem', // nilai default
      '3xl': '80rem',
      // '4xl': '56rem', // nilai default
      '4xl': '90rem',
      // '5xl': '64rem', // nilai default
      '5xl': '100rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens'))
    }),

    /**
     * Bagian ini digunakan ketika setelan bawaan Tailwind tidak
     * menyediakan nilai yang dibutuhkan. Ini tidak mengubah setelan
     * awal Tailwind. Sebelum menambah bagian ini wajib cek
     * https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
     */
    extend: {
      spacing: {
        13: '3.25rem'
      },
      borderWidth: {
        3: '3px'
      },
      container: {
        center: true,
        padding: '1rem'
      },
      fontSize: {
        xxs: ['.625rem', { lineHeight: '1rem' }]
      },
      minHeight: {
        7: '7rem',
        8: '8rem',
        320: '320px'
      }
    }
  }
}
