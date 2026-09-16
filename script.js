const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/Kb1fSaWOySr3M9aRyGnULk?s=cl&p=i&mlu=0&ilr=4';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = WHATSAPP_GROUP_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.addEventListener('click', () => {
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'WhatsAppGroupClick', { page: 'lp2-nicho' });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'whatsapp_group_click',
        page: 'lp2-nicho'
      });
    }
  });
});
