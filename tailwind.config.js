export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { navy:'#102A56', brand:'#1769C2', soft:'#EAF3FF', cyan:'#38BDF8', ink:'#172B4D', muted:'#64748B' },
    fontFamily: { sans: ['Inter','system-ui','sans-serif'] },
    boxShadow: { card: '0 4px 20px rgba(16,42,86,0.07)', lift: '0 12px 30px rgba(23,105,194,0.15)' }
  } },
  plugins: []
}
