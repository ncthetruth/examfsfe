// next.config.js
module.exports = {
    images: {
      domains: ['cdn.cgv.id', 'dummyjson.com', 'vietguys.biz','encrypted-tbn0.gstatic.com','cgv.id'],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: getSecurityHeaders(process.env.NODE_ENV === 'production'),
        },
      ]
    },
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    serverRuntimeConfig: require('./appsettings'),
  }
  
  function getSecurityHeaders(isProd) {
    const headers = [
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
      },
      {
        key: 'Permissions-Policy',
        value: 'accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()'
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      }
    ];
  
    if (isProd) {
      headers.push(
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload'
        },
        {
          key: 'Content-Security-Policy',
          value: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`
        }
      );
    }
  
    return headers;
  }
  