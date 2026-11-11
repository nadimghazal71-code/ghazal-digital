/*
  Shared by both homepages. Reads CONTENT / BRAND / PAGE from the page's own
  content.js (Swiss: ./content.js, Lebanese: lb/content.js) and renders the
  active language into the empty placeholders in the HTML. renderAll() runs on
  load and again whenever the language is switched.

  Also wires up the mobile nav, the two enquiry forms (tabbed, with #fix and
  #build links that open the right one), and the scroll-reveal animation.
*/

const LANG_KEY = "lang";

// ?lang=de links straight to German; otherwise a visitor's last choice, else
// the page's first language. A page with one language (Lebanese) ignores both.
function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (CONTENT[fromUrl]) return fromUrl;
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (CONTENT[stored]) return stored;
  } catch (e) {}
  return Object.keys(CONTENT)[0];
}

let lang = initialLang();
const t = () => CONTENT[lang];
const $ = id => document.getElementById(id);
const FORM_IDS = Object.keys(Object.values(CONTENT)[0].contact.forms);
let activeForm = FORM_IDS[0];

function setLang(next) {
  lang = next;
  try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
  renderAll();
}

// The call button opens the booking calendar if one is configured, otherwise
// the page's own link (a WhatsApp chat with a message already typed).
function setCallButton(el) {
  const call = t().call;
  el.textContent = call.label;
  el.classList.toggle("btn-whatsapp", call.style === "whatsapp");
  el.href = BRAND.bookingUrl || call.href;
  el.target = "_blank";
  el.rel = "noopener";
}

function renderMeta() {
  const m = t().meta;
  document.title = m.title;
  document.querySelector('meta[name="description"]').content = m.description;

  const btn = $("langToggle");
  if (!btn) return;
  if (Object.keys(CONTENT).length < 2) { btn.hidden = true; return; }
  document.documentElement.lang = lang;
  btn.innerHTML = Object.keys(CONTENT)
    .map(code => `<span class="lang-option${code === lang ? " is-active" : ""}">${code.toUpperCase()}</span>`)
    .join("");
  btn.setAttribute("aria-label", t().langSwitch.aria);
}

function renderNav() {
  $("navLinks").innerHTML = t().nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("");
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => $("navLinks").classList.remove("open"));
  });
}

function renderHero() {
  const h = t().hero;
  $("heroEyebrow").textContent = h.eyebrow;
  $("heroTitle").textContent = h.title;
  $("heroText").textContent = h.text;
  $("heroFixBtn").textContent = h.fixBtn;
  $("heroBuildBtn").textContent = h.buildBtn;
  $("heroCallPrefix").textContent = h.callPrefix;
  setCallButton($("heroCallBtn"));
  $("heroFacts").innerHTML = h.facts.map(f => `<li>${f}</li>`).join("");
}

function renderServices() {
  const c = t().services;
  $("servicesTag").textContent = c.tag;
  $("servicesHeading").textContent = c.heading;
  $("servicesGrid").innerHTML = c.paths.map((p, i) => `
    <div class="path-card path-card--${p.id}">
      <div class="path-icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p class="path-lead">${p.lead}</p>
      <ul class="path-points">${p.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
      <a class="btn ${i === 0 ? "btn-primary" : "btn-outline"} path-cta" href="#${p.id}">${p.cta}</a>
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
  $("workGrid").classList.toggle("work-grid--single", c.items.length === 1);
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

function renderWhy() {
  const c = t().why;
  $("whyTag").textContent = c.tag;
  $("whyHeading").textContent = c.heading;
  $("whyGrid").innerHTML = c.items.map(w => `
    <div class="why-card">
      <div class="why-icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.text}</p>
    </div>
  `).join("");
}

function renderAbout() {
  const c = t().about;
  $("aboutTag").textContent = c.tag;
  $("aboutHeading").textContent = c.heading;
  $("aboutText").textContent = c.text;
}

function fieldHtml(formId, f) {
  const id = `${formId}-${f.name}`;
  const req = f.required ? " required" : "";
  const label = `<label class="sr-only" for="${id}">${f.label}</label>`;
  let control;
  if (f.type === "select") {
    // The empty first option doubles as the visible label, and keeps a
    // required select invalid until a real choice is made.
    control = `<select id="${id}" name="${f.name}"${req}>
      <option value="" disabled selected hidden>${f.label}</option>
      ${f.options.map(o => `<option>${o}</option>`).join("")}
    </select>`;
  } else if (f.type === "textarea") {
    control = `<textarea id="${id}" name="${f.name}" rows="5" placeholder="${f.label}"${req}></textarea>`;
  } else {
    control = `<input id="${id}" name="${f.name}" type="${f.type}" placeholder="${f.label}"${f.autocomplete ? ` autocomplete="${f.autocomplete}"` : ""}${req}>`;
  }
  return `<div class="field${f.half ? " field--half" : ""}">${label}${control}</div>`;
}

// Switching language re-renders the forms, so whatever was typed is carried
// across. Selects are matched by position, since their wording changes.
function snapshotForms() {
  const saved = {};
  document.querySelectorAll(".enquiry-form").forEach(form => {
    [...form.elements].forEach(el => {
      if (!el.name || el.name === "_honey") return;
      saved[`${form.dataset.form}:${el.name}`] = el.tagName === "SELECT" ? { index: el.selectedIndex } : { value: el.value };
    });
  });
  return saved;
}

function restoreForms(saved) {
  document.querySelectorAll(".enquiry-form").forEach(form => {
    [...form.elements].forEach(el => {
      const s = saved[`${form.dataset.form}:${el.name}`];
      if (!s) return;
      if ("index" in s) el.selectedIndex = s.index;
      else el.value = s.value;
    });
  });
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

  const saved = snapshotForms();
  const tabs = $("formTabs");
  tabs.setAttribute("aria-label", c.tabsLabel);
  tabs.innerHTML = FORM_IDS.map(id => `
    <button type="button" role="tab" class="form-tab" id="tab-${id}" data-form="${id}" aria-controls="form-${id}">${c.forms[id].tab}</button>
  `).join("");

  $("formsWrap").innerHTML = FORM_IDS.map(id => {
    const f = c.forms[id];
    return `
      <form class="enquiry-form" id="form-${id}" data-form="${id}" role="tabpanel" aria-labelledby="tab-${id}">
        <p class="form-intro">${f.intro}</p>
        <div class="form-grid">${f.fields.map(field => fieldHtml(id, field)).join("")}</div>
        <!-- Spam trap: hidden from people, irresistible to bots -->
        <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot">
        <button type="submit" class="btn btn-primary">${f.submit}</button>
        <p class="form-note" role="status" aria-live="polite"></p>
      </form>
    `;
  }).join("");
  restoreForms(saved);
  selectForm(activeForm);
}

function selectForm(id, focusTab) {
  if (!FORM_IDS.includes(id)) return;
  activeForm = id;
  FORM_IDS.forEach(fid => {
    const on = fid === id;
    const tab = $("tab-" + fid);
    tab.setAttribute("aria-selected", on);
    tab.tabIndex = on ? 0 : -1;
    tab.classList.toggle("is-active", on);
    $("form-" + fid).hidden = !on;
  });
  if (focusTab) $("tab-" + id).focus();
}

function renderFooter() {
  const f = t().footer;
  $("footerCopy").textContent = f.copy.replace("{year}", new Date().getFullYear());
  $("footerLegal").textContent = f.legal;
  $("footerLegal").href = f.legalHref;
  $("footerRegion").textContent = f.region;
  $("footerRegionLink").textContent = f.regionOther;
  $("footerRegionLink").href = f.regionHref;
}

function renderAll() {
  renderMeta();
  renderNav();
  renderHero();
  renderServices();
  renderWork();
  renderProcess();
  renderWhy();
  renderAbout();
  renderContact();
  renderFooter();
}

$("navToggle").addEventListener("click", () => $("navLinks").classList.toggle("open"));
if ($("langToggle")) {
  $("langToggle").addEventListener("click", () => {
    const codes = Object.keys(CONTENT);
    setLang(codes[(codes.indexOf(lang) + 1) % codes.length]);
  });
}

renderAll();

// Tabs: click to switch, arrow keys to move between them (standard tab pattern)
$("formTabs").addEventListener("click", e => {
  const tab = e.target.closest("[data-form]");
  if (tab) selectForm(tab.dataset.form);
});
$("formTabs").addEventListener("keydown", e => {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  const step = e.key === "ArrowRight" ? 1 : -1;
  const next = FORM_IDS[(FORM_IDS.indexOf(activeForm) + step + FORM_IDS.length) % FORM_IDS.length];
  selectForm(next, true);
});

// #fix and #build links (hero buttons, service cards, outreach links) open the
// matching form and scroll to it. Handled on click rather than hashchange so a
// second click on the same link still works.
function openFormFromHash(hash) {
  const id = hash.replace("#", "");
  if (!FORM_IDS.includes(id)) return false;
  selectForm(id);
  $("contact").scrollIntoView();
  return true;
}
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');
  if (a && openFormFromHash(a.getAttribute("href"))) {
    e.preventDefault();
    history.replaceState(null, "", a.getAttribute("href"));
  }
});
if (location.hash) openFormFromHash(location.hash);

/*
  Enquiry forms. The site is static, so a message is handed to a relay service
  (FormSubmit) which forwards it by email. Each form arrives with its own
  subject line, and every message says which homepage and form it came from.
  The button is disabled while sending so a slow connection can't send it twice.
*/
$("formsWrap").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const c = t().contact;
  const f = c.forms[form.dataset.form];
  const note = form.querySelector(".form-note");
  const submitBtn = form.querySelector('button[type="submit"]');

  // Bots fill in every field they find; a real visitor never sees this one.
  if (form.querySelector('[name="_honey"]').value) return;

  const data = { form: f.tab, region: PAGE.region, language: lang };
  new FormData(form).forEach((value, key) => { if (key !== "_honey") data[key] = value; });
  Object.assign(data, { _subject: f.subject, _template: "table", _captcha: "false" });

  const label = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = c.sending;
  note.textContent = "";
  note.className = "form-note";

  try {
    const response = await fetch(BRAND.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Relay responded ${response.status}`);
    note.textContent = c.success;
    note.classList.add("is-success");
    form.reset();
  } catch (error) {
    note.textContent = c.error;
    note.classList.add("is-error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = label;
  }
});

// Fade + slide each section into view the first time it scrolls onscreen.
// Skipped entirely for visitors who ask their system to reduce motion.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
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
