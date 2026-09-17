// Meta Pixel
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('set', 'autoConfig', false, '1470839471393001');
fbq('init', '1470839471393001');
fbq('track', 'PageView');

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/Kb1fSaWOySr3M9aRyGnULk?s=cl&p=i&mlu=0&ilr=4';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = WHATSAPP_GROUP_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.addEventListener('click', () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'lead',
        page: 'lp2-nicho',
        source: 'whatsapp_group'
      });
    }
  });
});
