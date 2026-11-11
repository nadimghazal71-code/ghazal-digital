/*
  Reads CONTENT (content.js) and renders the active language into the empty
  placeholders in index.html. renderAll() runs on load and again whenever the
  language is switched. Also wires up the mobile nav, the enquiry form and the
  scroll-reveal animation.
*/

const LANG_KEY = "lang";

// English is the default; ?lang=de links straight to German, and a visitor's
// last choice is remembered. Storage can throw (privacy mode), so it's guarded.
function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (CONTENT[fromUrl]) return fromUrl;
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (CONTENT[stored]) return stored;
  } catch (e) {}
  return "en";
}

let lang = initialLang();
const t = () => CONTENT[lang];
const $ = id => document.getElementById(id);

function setLang(next) {
  lang = next;
  try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
  renderAll();
}

// With no booking link configured, the call buttons open an email instead.
function setCallButton(el) {
  const label = t().callLabel;
  el.textContent = label;
  if (BRAND.bookingUrl) {
    el.href = BRAND.bookingUrl;
    el.target = "_blank";
    el.rel = "noopener";
  } else {
    el.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(t().callSubject)}`;
    el.removeAttribute("target");
    el.removeAttribute("rel");
  }
}

function renderMeta() {
  const m = t().meta;
  document.documentElement.lang = lang;
  document.title = m.title;
  document.querySelector('meta[name="description"]').content = m.description;
  const btn = $("langToggle");
  btn.innerHTML = Object.keys(CONTENT)
    .map(code => `<span class="lang-option${code === lang ? " is-active" : ""}">${code.toUpperCase()}</span>`)
    .join("");
  btn.setAttribute("aria-label", t().langSwitch.aria);
}

function renderNav() {
  const n = t().nav;
  $("navLinks").innerHTML = [
    ["#services", n.services], ["#work", n.work], ["#process", n.process],
    ["#markets", n.markets], ["#contact", n.contact]
  ].map(([href, label]) => `<a href="${href}">${label}</a>`).join("");

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => $("navLinks").classList.remove("open"));
  });
}

function renderHero() {
  const h = t().hero;
  $("heroEyebrow").textContent = h.eyebrow;
  $("heroTitle").textContent = h.title;
  $("heroText").textContent = h.text;
  setCallButton($("heroCallBtn"));
  $("heroEnquiryBtn").textContent = h.secondary;
  $("heroFacts").innerHTML = h.facts.map(f => `<li>${f}</li>`).join("");
}

function renderServices() {
  const c = t().services;
  $("servicesTag").textContent = c.tag;
  $("servicesHeading").textContent = c.heading;
  $("servicesGrid").innerHTML = c.items.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>
  `).join("");
}

function renderWork() {
  const c = t().work;
  $("workTag").textContent = c.tag;
  $("workHeading").textContent = c.heading;
  $("workIntro").textContent = c.intro;
  $("workGrid").innerHTML = c.items.map(w => `
    <div class="work-card">
      <h3>${w.title}</h3>
      <p>${w.text}</p>
      <ul class="chips">${w.tags.map(tag => `<li>${tag}</li>`).join("")}</ul>
      ${w.demo ? `<a href="${w.demo}" class="work-link" target="_blank" rel="noopener">${c.demoLabel}</a>` : ""}
    </div>
  `).join("");
  $("workMore").textContent = c.more;
}

function renderProcess() {
  const c = t().process;
  $("processTag").textContent = c.tag;
  $("processHeading").textContent = c.heading;
  $("processSteps").innerHTML = c.steps.map(s => `
    <li class="step">
      <span class="step-n">${s.n}</span>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </li>
  `).join("");
}

function renderMarkets() {
  const c = t().markets;
  $("marketsTag").textContent = c.tag;
  $("marketsHeading").textContent = c.heading;
  $("marketsGrid").innerHTML = c.items.map(m => `
    <div class="market-card">
      <h3><span class="market-flag">${m.flag}</span> ${m.title}</h3>
      <ul class="market-points">${m.points.map(p => `<li>${p}</li>`).join("")}</ul>
      ${m.arabic ? `<p class="arabic" lang="ar" dir="rtl">${m.arabic}</p>` : ""}
    </div>
  `).join("");
}

function renderAbout() {
  const c = t().about;
  $("aboutTag").textContent = c.tag;
  $("aboutHeading").textContent = c.heading;
  $("aboutText").textContent = c.text;
  $("aboutPhoto").alt = c.alt;
}

function renderContact() {
  const c = t().contact;
  $("contactTag").textContent = c.tag;
  $("contactHeading").textContent = c.heading;
  $("contactText").textContent = c.text;
  setCallButton($("contactCallBtn"));
  $("contactDetails").innerHTML = c.details.map(d => `
    <li>
      <span class="detail-label">${d.label}</span>
      ${d.href ? `<a href="${d.href}"${d.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${d.value}</a>` : `<span>${d.value}</span>`}
    </li>
  `).join("");

  const f = c.form;
  [["Name", f.name], ["Email", f.email], ["Company", f.company], ["Message", f.message]].forEach(([key, text]) => {
    $("form" + key).placeholder = text;
    $("label" + key).textContent = text;
  });
  $("formSubmit").textContent = f.submit;
}

function renderFooter() {
  const f = t().footer;
  $("footerCopy").textContent = f.copy.replace("{year}", new Date().getFullYear());
  $("footerLegal").textContent = f.legal;
  $("footerPortfolio").textContent = f.portfolio;
}

function renderAll() {
  renderMeta();
  renderNav();
  renderHero();
  renderServices();
  renderWork();
  renderProcess();
  renderMarkets();
  renderAbout();
  renderContact();
  renderFooter();
}

$("navToggle").addEventListener("click", () => $("navLinks").classList.toggle("open"));
$("langToggle").addEventListener("click", () => setLang(lang === "en" ? "de" : "en"));

renderAll();

/*
  Enquiry form. The site is static, so the message is handed to a relay service
  (contact.form.endpoint in content.js) which forwards it by email. The button
  is disabled while the request is in flight so a slow connection can't send
  the same enquiry three times.
*/
const contactForm = $("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = t().contact.form;
  const note = $("formNote");
  const submitBtn = $("formSubmit");

  // Bots fill in every field they find; a real visitor never sees this one.
  if (contactForm.querySelector('[name="_honey"]').value) return;

  const label = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = f.sending;
  note.textContent = "";
  note.className = "form-note";

  try {
    const response = await fetch(f.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: $("formName").value,
        email: $("formEmail").value,
        company: $("formCompany").value,
        message: $("formMessage").value,
        _subject: f.subject,
        _template: "table",
        _captcha: "false"
      })
    });
    if (!response.ok) throw new Error(`Relay responded ${response.status}`);
    note.textContent = f.success;
    note.classList.add("is-success");
    contactForm.reset();
  } catch (error) {
    note.textContent = f.error;
    note.classList.add("is-error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = label;
  }
});

// Fade + slide each section into view the first time it scrolls onscreen.
// Skipped entirely for visitors who ask their system to reduce motion.
// Setting .style properties is CSSOM, which the Content Security Policy allows.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(24px)";
    sec.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(sec);
  });
}
