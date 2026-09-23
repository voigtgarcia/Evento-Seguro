function aceitarCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
  ativarAnalytics();
}

function recusarCookies() {
  localStorage.setItem('cookie_consent', 'rejected');
  document.getElementById('cookie-banner').style.display = 'none';
}

function verificarConsentimento() {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) {
    document.getElementById('cookie-banner').style.display = 'block';
  } else if (consent === 'accepted') {
    ativarAnalytics();
  }
}

function ativarAnalytics() {
  
  if (localStorage.getItem('cookie_consent') !== 'accepted') return;
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; //colocar id qnd subir o site
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}

document.addEventListener('DOMContentLoaded', verificarConsentimento);