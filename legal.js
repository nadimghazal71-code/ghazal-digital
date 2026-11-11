/*
  Renders the legal notice and privacy policy in the visitor's language (same
  remembered choice as the main page). The wording lives here rather than in
  content.js because it is long and rarely changes.

  This is the one place the owner's name and an email address appear. Swiss
  law expects a business website to say who is behind it, and the revised Data
  Protection Act (nDSG) requires the privacy notice to name the person
  responsible and give a way to contact them. The homepages themselves stay
  in company voice with no personal details.

  TODO before relying on this page: add the business's postal address and, once
  registered, its UID number to `identity` below. Switch LEGAL_CONTACT.email to
  a business address (e.g. hello@ghazalcode.ch) once you have one. Delete this
  note when done.
*/

const LEGAL_CONTACT = {
  owner: "Nadim Ghazal",
  email: "nadimghazal71@gmail.com"
};

const mail = `<a href="mailto:${LEGAL_CONTACT.email}">${LEGAL_CONTACT.email}</a>`;

const LEGAL = {
  en: {
    title: "Legal notice & privacy",
    back: "← Back to the site",
    updated: "Last updated: 11 November 2026",
    identity: {
      heading: "Legal notice",
      lines: [
        ["Business", BRAND.name + " (sole proprietorship)"],
        ["Owner", LEGAL_CONTACT.owner],
        ["Location", "Zurich, Switzerland"],
        ["Email", mail]
      ]
    },
    privacy: {
      heading: "Privacy policy",
      blocks: [
        ["Who is responsible", `Responsible for data processing on this website is ${BRAND.name}, owned by ${LEGAL_CONTACT.owner}, Zurich, Switzerland (${mail}). This notice follows the Swiss Federal Act on Data Protection (nDSG) and, where it applies, the EU GDPR.`],
        ["What this website collects", "No cookies, no analytics and no tracking tools are used. Fonts and all other files are served from this website itself, so no visitor data is passed to font or advertising providers. To show the right regional homepage, your device's time zone is checked inside your own browser; nothing is sent anywhere. Your language choice, and your region if you pick one yourself, are stored in your own browser so the site can remember them; they never leave your device."],
        ["Server logs", "This site is hosted on GitHub Pages (GitHub, Inc., USA). Like any web host, GitHub may technically log visitors' IP addresses and request data to deliver and secure the service. We have no access to or control over these logs. See GitHub's privacy statement for details."],
        ["Enquiry forms", "If you use one of the enquiry forms, the details you enter (such as your name, email or phone number, business name, the options you choose and your message) are sent through the relay service FormSubmit (formsubmit.co) to our email inbox. We use them only to reply to you and to prepare a proposal if you ask for one, and we do not pass them to anyone else. We keep enquiries for as long as needed to handle them and for normal business records, then delete them. Messaging us directly (including via WhatsApp) works the same way: we use what you send only to answer you."],
        ["Data abroad", "FormSubmit and GitHub are operated outside Switzerland (for example in the USA). If you prefer not to use the forms, you can message us on WhatsApp or email us instead."],
        ["Your rights", `You may ask us at any time for access to the data we hold about you, to have it corrected or deleted, or to object to its use. Write to ${mail}. You can also contact the Swiss Federal Data Protection and Information Commissioner (FDPIC).`]
      ]
    },
    footer: "© {year} Ghazal — Digital Solutions"
  },

  de: {
    title: "Impressum & Datenschutz",
    back: "← Zurück zur Website",
    updated: "Stand: 11. November 2026",
    identity: {
      heading: "Impressum",
      lines: [
        ["Unternehmen", BRAND.name + " (Einzelunternehmen)"],
        ["Inhaber", LEGAL_CONTACT.owner],
        ["Ort", "Zürich, Schweiz"],
        ["E-Mail", mail]
      ]
    },
    privacy: {
      heading: "Datenschutzerklärung",
      blocks: [
        ["Verantwortlich", `Verantwortlich für die Datenbearbeitung auf dieser Website ist ${BRAND.name}, Inhaber ${LEGAL_CONTACT.owner}, Zürich, Schweiz (${mail}). Diese Erklärung orientiert sich am Schweizer Datenschutzgesetz (nDSG) und, soweit anwendbar, an der EU-DSGVO.`],
        ["Was diese Website erfasst", "Es werden keine Cookies, keine Analyse- und keine Tracking-Werkzeuge eingesetzt. Schriftarten und alle weiteren Dateien werden von dieser Website selbst geliefert, sodass keine Besucherdaten an Schrift- oder Werbeanbieter gelangen. Um die passende regionale Startseite anzuzeigen, wird die Zeitzone Ihres Geräts direkt in Ihrem Browser geprüft; dabei wird nichts übermittelt. Ihre Sprachwahl und, falls Sie selbst eine wählen, Ihre Region werden in Ihrem eigenen Browser gespeichert, damit die Website sie sich merken kann; sie verlassen Ihr Gerät nicht."],
        ["Server-Protokolle", "Diese Website wird über GitHub Pages (GitHub, Inc., USA) gehostet. Wie jeder Webhoster kann GitHub technisch bedingt IP-Adressen und Anfragedaten der Besucher protokollieren, um den Dienst bereitzustellen und abzusichern. Auf diese Protokolle haben wir weder Zugriff noch Einfluss. Einzelheiten finden Sie in der Datenschutzerklärung von GitHub."],
        ["Anfrageformulare", "Wenn Sie eines der Anfrageformulare nutzen, werden Ihre Angaben (etwa Name, E-Mail oder Telefonnummer, Firmenname, die gewählten Optionen und Ihre Nachricht) über den Weiterleitungsdienst FormSubmit (formsubmit.co) an unser E-Mail-Postfach gesendet. Wir verwenden sie nur, um Ihnen zu antworten und auf Wunsch ein Angebot zu erstellen, und geben sie nicht an Dritte weiter. Anfragen bewahren wir so lange auf, wie es für die Bearbeitung und übliche Geschäftsunterlagen nötig ist, und löschen sie danach. Wenn Sie uns direkt schreiben (auch per WhatsApp), gilt dasselbe: Wir verwenden Ihre Angaben nur, um Ihnen zu antworten."],
        ["Daten im Ausland", "FormSubmit und GitHub werden ausserhalb der Schweiz betrieben (z. B. in den USA). Wenn Sie die Formulare lieber nicht nutzen möchten, können Sie uns auch per WhatsApp oder E-Mail schreiben."],
        ["Ihre Rechte", `Sie können jederzeit Auskunft über die bei uns gespeicherten Daten verlangen, deren Berichtigung oder Löschung beantragen oder der Bearbeitung widersprechen. Schreiben Sie dazu an ${mail}. Sie können sich auch an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden.`]
      ]
    },
    footer: "© {year} Ghazal — Digital Solutions"
  }
};

const LANG_KEY = "lang";

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LEGAL[fromUrl]) return fromUrl;
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (LEGAL[stored]) return stored;
  } catch (e) {}
  return "en";
}

let lang = initialLang();

function render() {
  const c = LEGAL[lang];
  document.documentElement.lang = lang;
  document.title = `${c.title} — Ghazal Digital Solutions`;

  const btn = document.getElementById("langToggle");
  btn.innerHTML = Object.keys(LEGAL)
    .map(code => `<span class="lang-option${code === lang ? " is-active" : ""}">${code.toUpperCase()}</span>`)
    .join("");
  btn.setAttribute("aria-label", lang === "en" ? "Deutsche Version anzeigen" : "Show English version");

  document.getElementById("legalRoot").innerHTML = `
    <a class="back" href="./">${c.back}</a>
    <h1>${c.title}</h1>
    <p class="updated">${c.updated}</p>
    <h2>${c.identity.heading}</h2>
    <ul>${c.identity.lines.map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join("")}</ul>
    <h2>${c.privacy.heading}</h2>
    ${c.privacy.blocks.map(([h, p]) => `<h3>${h}</h3><p>${p}</p>`).join("")}
  `;
  document.getElementById("footerCopy").textContent = c.footer.replace("{year}", new Date().getFullYear());
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "de" : "en";
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  render();
});

render();
