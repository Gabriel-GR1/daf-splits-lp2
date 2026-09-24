// TikTok Pixel (LP2)
!function (w, d, t) {
  w.TiktokAnalyticsObject = t;
  var ttq = w[t] = w[t] || [];
  ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
  ttq.setAndDefer = function (queue, method) {
    queue[method] = function () {
      queue.push([method].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };
  for (var i = 0; i < ttq.methods.length; i++) {
    ttq.setAndDefer(ttq, ttq.methods[i]);
  }
  ttq.instance = function (id) {
    for (var queue = ttq._i[id] || [], i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(queue, ttq.methods[i]);
    }
    return queue;
  };
  ttq.load = function (id, options) {
    var url = "https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i = ttq._i || {};
    ttq._i[id] = [];
    ttq._i[id]._u = url;
    ttq._t = ttq._t || {};
    ttq._t[id] = +new Date();
    ttq._o = ttq._o || {};
    ttq._o[id] = options || {};
    var script = d.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url + "?sdkid=" + id + "&lib=" + t;
    var firstScript = d.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  };
  ttq.load("DAQ2BHBC77UFPT802QG0");
  ttq.page();
}(window, document, "ttq");

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/Kb1fSaWOySr3M9aRyGnULk?s=cl&p=i&mlu=0&ilr=4';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = WHATSAPP_GROUP_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.addEventListener('click', () => {
    // Mantém a conversão principal da LP2 como Lead, agora no TikTok.
    if (typeof window.ttq?.track === 'function') {
      window.ttq.track('Lead');
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
