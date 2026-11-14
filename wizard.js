/*
  Guided picker ("Sa3edne ekhtar" / "Help me choose"). A 4-step dialog for
  visitors who'd rather tap than fill in a form:

    1. category  — one of six big tiles (tapping one moves on)
    2. details   — the options for that category, several allowed
    3. timing    — timeline and budget, both optional
    4. contact   — a summary, name + WhatsApp number, then send through the
                   form relay, or open WhatsApp with the request typed out

  All wording comes from t().wizard in content.js, so the dialog follows the
  site's language. Choices are stored as ids and indexes rather than text, so
  they stay valid if the visitor switches language mid-way.

  Opened by any element with [data-wizard], and by links/URLs ending in #guide.
  Relies on t(), lang, $, BRAND and PAGE from content.js / script.js.
*/

(function () {
  const dlg = $("wizard");
  const inner = $("wizardInner");
  const STEPS = ["category", "details", "timing", "contact"];
  const fresh = () => ({ step: 0, category: null, details: new Set(), timeline: null, budget: null, name: "", phone: "", note: "", done: false });
  let s = fresh();

  const w = () => t().wizard;
  const cat = () => w().categories.find(c => c.id === s.category);
  const esc = str => String(str).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  // The request as plain lines, used for both the WhatsApp message and the email
  function summaryLines(labels) {
    const c = w(), k = cat();
    const lines = [`${labels.category}: ${k.title}`];
    const picked = [...s.details].sort().map(i => k.details[i]);
    if (picked.length) lines.push(`${labels.details}: ${picked.join(", ")}`);
    if (s.timeline !== null) lines.push(`${labels.timeline}: ${c.timeline[s.timeline]}`);
    if (s.budget !== null) lines.push(`${labels.budget}: ${c.budget[s.budget]}`);
    return lines;
  }

  function whatsappHref() {
    const wa = w().wa;
    const lines = [wa.intro, "", ...summaryLines(wa)];
    if (s.name.trim()) lines.push(`${wa.name}: ${s.name.trim()}`);
    if (s.note.trim()) lines.push(`${wa.note}: ${s.note.trim()}`);
    return BRAND.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  function tile(k) {
    return `<button type="button" class="wizard-tile" data-cat="${k.id}" aria-pressed="${s.category === k.id}">
      <span class="wizard-tile-icon" aria-hidden="true">${k.icon}</span>
      <strong>${k.title}</strong>
      <span class="wizard-tile-text">${k.text}</span>
    </button>`;
  }

  const chip = (attr, i, label, on) =>
    `<button type="button" class="wizard-chip" ${attr}="${i}" aria-pressed="${on}">${label}</button>`;

  function body() {
    const c = w();
    switch (STEPS[s.step]) {
      case "category":
        return `<div class="wizard-tiles">${c.categories.map(tile).join("")}</div>`;
      case "details":
        return `<div class="wizard-chips">${cat().details.map((d, i) => chip("data-detail", i, d, s.details.has(i))).join("")}</div>`;
      case "timing":
        return `
          <p class="wizard-group-label">${c.timing.timeline}</p>
          <div class="wizard-chips">${c.timeline.map((x, i) => chip("data-timeline", i, x, s.timeline === i)).join("")}</div>
          <p class="wizard-group-label">${c.timing.budget}</p>
          <div class="wizard-chips">${c.budget.map((x, i) => chip("data-budget", i, x, s.budget === i)).join("")}</div>`;
      case "contact": {
        const k = cat();
        return `
          <div class="wizard-summary">
            <p class="wizard-summary-title">${c.contact.summary}</p>
            <p><strong>${k.icon} ${esc(k.title)}</strong></p>
            <p>${[...s.details].sort().map(i => esc(k.details[i])).join(" · ")}</p>
            ${s.timeline !== null ? `<p>${c.wa.timeline}: <strong>${esc(c.timeline[s.timeline])}</strong></p>` : ""}
            ${s.budget !== null ? `<p>${c.wa.budget}: <strong>${esc(c.budget[s.budget])}</strong></p>` : ""}
          </div>
          <form class="wizard-form" id="wizardForm" novalidate>
            <div class="wizard-fields">
              <label class="sr-only" for="wzName">${c.contact.name}</label>
              <input id="wzName" name="name" type="text" autocomplete="name" placeholder="${c.contact.name}" value="${esc(s.name)}">
              <label class="sr-only" for="wzPhone">${c.contact.phone}</label>
              <input id="wzPhone" name="phone" type="tel" autocomplete="tel" placeholder="${c.contact.phone}" value="${esc(s.phone)}">
            </div>
            <label class="sr-only" for="wzNote">${c.contact.note}</label>
            <textarea id="wzNote" name="note" rows="3" placeholder="${c.contact.note}">${esc(s.note)}</textarea>
            <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot">
            <div class="wizard-actions">
              <button type="submit" class="btn btn-primary" id="wzSend">${c.contact.send}</button>
              <a class="btn btn-whatsapp" id="wzWhatsapp" href="${whatsappHref()}" target="_blank" rel="noopener">${c.contact.whatsapp}</a>
            </div>
            <p class="form-note" id="wzNoteOut" role="status" aria-live="polite"></p>
          </form>`;
      }
    }
  }

  function render() {
    const c = w();
    if (s.done) {
      inner.innerHTML = `
        <div class="wizard-head"><span></span><button type="button" class="wizard-close" data-close aria-label="${c.close}">✕</button></div>
        <div class="wizard-done">
          <h2 id="wizardTitle" tabindex="-1">${c.done.title}</h2>
          <p>${c.done.text}</p>
          <button type="button" class="btn btn-primary" data-close>${c.done.close}</button>
        </div>`;
      $("wizardTitle").focus();
      return;
    }

    const stepName = STEPS[s.step];
    const q = c[stepName];
    const canNext = stepName === "details" ? s.details.size > 0 : true;
    inner.innerHTML = `
      <div class="wizard-head">
        <p class="wizard-step">${c.stepLabel.replace("{n}", s.step + 1).replace("{total}", STEPS.length)}</p>
        <button type="button" class="wizard-close" data-close aria-label="${c.close}">✕</button>
      </div>
      <div class="wizard-progress" aria-hidden="true"><span id="wizardBar"></span></div>
      <h2 id="wizardTitle" tabindex="-1">${q.q}</h2>
      ${q.hint ? `<p class="wizard-hint">${q.hint}</p>` : ""}
      ${body()}
      ${s.step > 0 ? `<div class="wizard-foot">
        <button type="button" class="wizard-back" data-back>${c.back}</button>
        ${stepName === "contact" ? "" : `<button type="button" class="btn btn-primary" data-next${canNext ? "" : " disabled"}>${c.next}</button>`}
      </div>` : ""}`;

    // Width set through CSSOM: the Content Security Policy blocks style="" attributes
    $("wizardBar").style.width = `${((s.step + 1) / STEPS.length) * 100}%`;
    $("wizardTitle").focus();
  }

  function open() {
    if (dlg.open) return;
    if (s.done) s = fresh();
    render();
    dlg.showModal();
    $("wizardTitle").focus();
  }

  function close() {
    dlg.close();
    if (s.done) s = fresh();
    if (location.hash === "#guide") history.replaceState(null, "", location.pathname + location.search);
  }

  // Openers: [data-wizard] buttons anywhere, and #guide links
  document.addEventListener("click", e => {
    const opener = e.target.closest('[data-wizard], a[href="#guide"]');
    if (!opener) return;
    e.preventDefault();
    open();
  });
  if (location.hash === "#guide") open();

  // Clicking the dimmed backdrop (outside the panel) closes it
  dlg.addEventListener("click", e => { if (e.target === dlg) close(); });
  dlg.addEventListener("cancel", e => { e.preventDefault(); close(); });

  inner.addEventListener("click", e => {
    const el = e.target.closest("button");
    if (!el || el.type === "submit") return;

    if (el.hasAttribute("data-close")) return close();
    if (el.hasAttribute("data-back")) { s.step--; return render(); }
    if (el.hasAttribute("data-next")) { s.step++; return render(); }

    if (el.dataset.cat) {
      // Picking a different category clears details that belonged to the old one
      if (s.category !== el.dataset.cat) s.details.clear();
      s.category = el.dataset.cat;
      s.step = 1;
      return render();
    }
    if (el.dataset.detail !== undefined) {
      const i = Number(el.dataset.detail);
      s.details.has(i) ? s.details.delete(i) : s.details.add(i);
      el.setAttribute("aria-pressed", s.details.has(i));
      inner.querySelector("[data-next]").disabled = s.details.size === 0;
      return;
    }
    // Timeline and budget are single choices; tapping the selected one clears it
    for (const key of ["timeline", "budget"]) {
      if (el.dataset[key] !== undefined) {
        const i = Number(el.dataset[key]);
        s[key] = s[key] === i ? null : i;
        inner.querySelectorAll(`[data-${key}]`).forEach(b => b.setAttribute("aria-pressed", s[key] === Number(b.dataset[key])));
        return;
      }
    }
  });

  // Keep typed contact details in state, and the WhatsApp link up to date
  inner.addEventListener("input", e => {
    if (!["name", "phone", "note"].includes(e.target.name)) return;
    s[e.target.name] = e.target.value;
    const wa = $("wzWhatsapp");
    if (wa) wa.href = whatsappHref();
  });

  inner.addEventListener("submit", async e => {
    e.preventDefault();
    const form = e.target;
    const c = w();
    const note = $("wzNoteOut");
    if (form.querySelector('[name="_honey"]').value) return;

    if (!s.name.trim() || !s.phone.trim()) {
      note.textContent = c.required;
      note.className = "form-note is-error";
      (!s.name.trim() ? $("wzName") : $("wzPhone")).focus();
      return;
    }

    const k = cat();
    const data = {
      form: "Guided picker",
      region: PAGE.region,
      language: lang,
      name: s.name.trim(),
      phone: s.phone.trim(),
      category: k.title,
      details: [...s.details].sort().map(i => k.details[i]).join(", "),
      timeline: s.timeline !== null ? c.timeline[s.timeline] : "",
      budget: s.budget !== null ? c.budget[s.budget] : "",
      message: s.note.trim(),
      _subject: c.subject,
      _template: "table",
      _captcha: "false"
    };

    const btn = $("wzSend");
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = c.sending;
    note.textContent = "";
    note.className = "form-note";

    try {
      const response = await fetch(BRAND.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error(`Relay responded ${response.status}`);
      s.done = true;
      render();
    } catch (error) {
      note.textContent = c.error;
      note.className = "form-note is-error";
      btn.disabled = false;
      btn.textContent = label;
    }
  });
})();
