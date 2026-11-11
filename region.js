/*
  Picks the regional homepage. Loaded synchronously in the Swiss page's <head>
  so a visitor bound for /lb/ is redirected before anything is painted.

  The site is static (GitHub Pages), so there's no server to look up an IP
  address. Instead the device's own time zone is checked locally: a phone set
  to Beirut time goes to the Lebanese page, everyone else stays here. Nothing
  is sent anywhere.

  A visitor's explicit choice always wins: the footer's region links add
  ?region=ch or ?region=lb, which is remembered so the guess never overrides it.
  An auto-detected region is deliberately NOT stored, so a wrong guess doesn't
  stick to someone who travels.
*/
(function () {
  var KEY = "region";
  var forced = new URLSearchParams(location.search).get("region");
  if (forced !== "ch" && forced !== "lb") forced = null;

  try { if (forced) localStorage.setItem(KEY, forced); } catch (e) {}

  var region = forced;
  if (!region) {
    try { region = localStorage.getItem(KEY); } catch (e) {}
  }
  if (region !== "ch" && region !== "lb") {
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    var langs = navigator.languages || [navigator.language || ""];
    var inLebanon = tz === "Asia/Beirut" || langs.some(function (l) { return /^ar-LB/i.test(l); });
    region = inLebanon ? "lb" : "ch";
  }

  if (region === "lb") location.replace("lb/" + location.hash);
})();
