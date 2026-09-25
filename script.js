const TIKTOK_PIXEL_ID = 'DAQ2BHBC77UFPT802QG0';
const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/Kb1fSaWOySr3M9aRyGnULk?s=cl&p=i&mlu=0&ilr=4';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = WHATSAPP_GROUP_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.addEventListener('click', () => {
    // Dispara explicitamente no pixel da LP2.
    if (
      window.ttq &&
      typeof window.ttq.instance === 'function'
    ) {
      window.ttq.instance(TIKTOK_PIXEL_ID).track('CompleteRegistration');
    } else if (window.ttq && typeof window.ttq.track === 'function') {
      window.ttq.track('CompleteRegistration');
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'complete_registration',
        page: 'lp2-nicho',
        source: 'whatsapp_group'
      });
    }
  });
});
