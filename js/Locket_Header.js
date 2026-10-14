// Scope RevenueCat ETag removal to Locket's User-Agent only.
(function () {
  try {
    var h = ($request && $request.headers) ? $request.headers : {};
    var ua = h["User-Agent"] || h["user-agent"] || "";
    if (!/locket/i.test(String(ua))) { $done({}); return; }
    Object.keys(h).forEach(function (key) {
      if (key.toLowerCase() === "x-revenuecat-etag") delete h[key];
    });
    $done({ headers: h });
  } catch (err) { $done({}); }
})();
