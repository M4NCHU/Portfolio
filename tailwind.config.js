/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "var(--primary-bg-color)",
        "second-bg": "var(--second-bg-color)",
        "third-bg": "var(--third-bg-color)",
        "forth-bg": "var(--forth-bg-color)",

        "primary-font": "var(--primary-font-color)",
        "second-font": "var(--second-font-color)",
        "third-font": "var(--third-font-color)",

        "primary-orange": "var(--primary-orange-color)",
        "second-orange": "var(--second-orange-color)",
        "third-orange": "var(--third-orange-color)",
        
        "primary-danger": "var(--primary-danger-color)",
        "primary-info": "var(--primary-info-color)",
        "primary-success": "var(--primary-success-color)",
        "primary-warning": "var(--primary-warning-color)",

        "second-danger": "var(--second-danger-color)",
        "second-info": "var(--second-info-color)",
        "second-success": "var(--second-success-color)",
        "second-warning": "var(--second-warning-color)",

        "gray-color": "var(--gray-color)",
        "gray-color-2": "var(--gray-color-2)",
        
      },
      screens: {
        'xs': '1145px',
        'small': '1450px',
        'tablet': '1195px',
        'laptop': '1450px',
        
      },
    },
  },
  plugins: [],
}
