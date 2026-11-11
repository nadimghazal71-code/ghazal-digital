/*
  Swiss homepage — all the text, in English and German. CONTENT.en and
  CONTENT.de have the same shape; script.js renders whichever is active
  (English by default, switchable in the navbar). The Lebanese homepage has
  its own copy in lb/content.js with the same shape.

  Written in company voice ("we"). No personal name, photo, email address or
  phone number is shown on the page; visitors reach you through the two forms
  and the WhatsApp button.

  Things you'll most likely want to change:
    - BRAND.bookingUrl   set to a Calendly / Cal.com link and "Book a free call"
                         opens your calendar (until then it opens WhatsApp)
    - BRAND.formEndpoint once FormSubmit has sent you an activation email, swap
                         the address here for the random alias it gives you,
                         so your Gmail address isn't in the page source
    - contact.forms      the two enquiry forms: their fields, choices, and the
                         email subject each one arrives with
*/
const BRAND = {
  name: "Ghazal — Digital Solutions",
  whatsapp: "https://wa.me/41767948518",
  formEndpoint: "https://formsubmit.co/ajax/nadimghazal71@gmail.com",
  // Leave empty to fall back to WhatsApp. Example: "https://cal.com/ghazal-digital/intro"
  bookingUrl: ""
};

// Sent with every enquiry so you can tell which homepage it came from
const PAGE = { region: "Switzerland" };

const wa = text => BRAND.whatsapp + "?text=" + encodeURIComponent(text);

const CONTENT = {
  en: {
    meta: {
      title: "Ghazal — Digital Solutions | Apps, websites & automation for businesses in Zurich",
      description: "Custom apps, websites and data-entry systems that replace paper and spreadsheets — plus fixing, upgrading and automating the tools you already have. Based in Zurich."
    },
    nav: [["#services", "What we do"], ["#work", "Work"], ["#process", "How it works"], ["#contact", "Contact"]],
    langSwitch: { aria: "Deutsche Version anzeigen" },
    call: { label: "Book a free call", href: wa("Hello, I'd like to book a free call.") },

    hero: {
      eyebrow: "Ghazal — Digital Solutions",
      title: "Software that gets your business off paper and spreadsheets.",
      text: "We build custom apps, websites and data-entry systems for shops and small businesses — and when your current tools are slow, broken or eat up your day, we fix, upgrade and automate them.",
      fixBtn: "Fix or automate something",
      buildBtn: "Build an app or website",
      callPrefix: "or",
      facts: ["Based in Zurich", "On-site or remote", "English · Deutsch · العربية"]
    },

    services: {
      tag: "What we do",
      heading: "Two ways to make your work easier",
      paths: [
        {
          id: "fix",
          icon: "🛠️",
          title: "Fix, upgrade & automate",
          lead: "Your tools work — just not the way they should.",
          points: [
            "Fix a slow or broken website or app",
            "Upgrade an outdated system or a spreadsheet that's outgrown itself",
            "Automate repetitive work: data entry, QR-bill invoices, reports, emails",
            "Connect tools that don't talk to each other today"
          ],
          cta: "Describe the problem →"
        },
        {
          id: "build",
          icon: "🚀",
          title: "Build apps & websites",
          lead: "Something new, made for the way you work.",
          points: [
            "Data-entry apps for your staff: stock, orders, customer records",
            "Websites that bring enquiries — fast, clear, multilingual",
            "Mobile apps for Android and iOS",
            "Admin panels and dashboards with your numbers at a glance"
          ],
          cta: "Start a project →"
        }
      ]
    },

    work: {
      tag: "Work",
      heading: "Real systems, already in use",
      intro: "A few examples of what we've built. Each one started as a paper or spreadsheet process.",
      demoLabel: "Live demo ↗",
      items: [
        {
          title: "Delivery slips & monthly billing for a commercial laundry",
          text: "A laundry in the Zurich area serving around 30 restaurants, hotels and gyms kept a separate Excel file per client per month, plus daily notes on a phone. Now staff enter each delivery on a phone: the app prints the delivery slip on the spot and fills in every client's monthly Excel automatically — identical to the old files, ready for the accountant.",
          tags: ["Android & iPhone", "Works offline", "Excel export", "Delivery slips", "German / English"]
        },
        {
          title: "Test-drive registration for a car dealership",
          text: "Staff register each test drive on a phone: driver's licence photo, details, a finger-drawn signature, and a ready-to-print agreement. It replaced paper forms, works offline, and runs on Android and in the browser.",
          tags: ["Android", "Web", "Works offline", "Print / PDF"]
        },
        {
          title: "Swiss QR-bill generator",
          text: "Creates, validates and decodes Swiss QR-bill payment slips to the official SIX specification, rendered at true print size. A working tool you can try now.",
          tags: ["Swiss payment standards", "Print-ready", "Live demo"],
          demo: "https://ghazalcode.ch/projects/qr-bill/"
        }
      ]
    },

    process: {
      tag: "How it works",
      heading: "From first call to a working tool",
      steps: [
        { n: "1", title: "Free call", text: "A relaxed 30 minutes. You show us how things work today; we ask questions and tell you honestly whether software is the right answer." },
        { n: "2", title: "Clear proposal", text: "You get a written scope, timeline and price before any work starts. No surprises, no jargon." },
        { n: "3", title: "Built in steps", text: "You see working versions early and often, so we fix things while they're cheap to change. Then we train your team and stay on hand after launch." }
      ]
    },

    why: {
      tag: "Why work with us",
      heading: "What you can count on",
      items: [
        { icon: "📍", title: "Local in Zurich", text: "On-site meetings in the Zurich area, or remote anywhere in Switzerland." },
        { icon: "🧾", title: "Swiss standards built in", text: "QR-bill invoicing, print-ready documents and data protection under the nDSG are part of the job, not an afterthought." },
        { icon: "📋", title: "A clear price up front", text: "You get the scope, timeline and price in writing before any work starts." },
        { icon: "🤝", title: "One contact, start to finish", text: "You deal with the same person from the first call to the last fix — not a call centre." }
      ]
    },

    about: {
      tag: "About us",
      heading: "Who we are",
      text: "Ghazal — Digital Solutions builds and fixes practical software for small and mid-sized businesses. Our background is banking and fintech software, where every number has to be right. We explain things in plain language, deliver in small steps, and stay with you from the first call to the last fix."
    },

    contact: {
      tag: "Contact",
      heading: "Tell us what you need",
      text: "Pick the form that fits — a rough idea is enough. We reply within one working day.",
      details: [
        { label: "WhatsApp", value: "Chat with us", href: wa("Hello, I have a question about my business.") },
        { label: "Location", value: "Zurich, Switzerland" }
      ],
      tabsLabel: "Choose a form",
      sending: "Sending…",
      success: "Thank you — your request is on its way. We'll reply within one working day.",
      error: "Something went wrong sending that. Please try again, or message us on WhatsApp.",
      forms: {
        fix: {
          tab: "Fix, upgrade or automate",
          intro: "Something isn't working, is outdated, or eats up your time.",
          subject: "Fix / upgrade / automate — Ghazal Digital (CH)",
          submit: "Send request",
          fields: [
            { name: "name", label: "Your name", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "email", label: "Your email", type: "email", required: true, half: true, autocomplete: "email" },
            { name: "phone", label: "Phone (optional)", type: "tel", half: true, autocomplete: "tel" },
            { name: "business", label: "Business name (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "topic", label: "What needs attention?", type: "select", required: true, half: true,
              options: ["A website", "An app or system", "An Excel or paper process", "Tools that should work together", "Something else"] },
            { name: "urgency", label: "How urgent is it?", type: "select", half: true,
              options: ["It's broken right now", "In the next few weeks", "Just exploring"] },
            { name: "message", label: "What's going wrong, or what takes too much time?", type: "textarea", required: true }
          ]
        },
        build: {
          tab: "Create or upgrade an app or website",
          intro: "A new website, a new app, or a better version of what you have.",
          subject: "Build / upgrade — Ghazal Digital (CH)",
          submit: "Send project",
          fields: [
            { name: "name", label: "Your name", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "email", label: "Your email", type: "email", required: true, half: true, autocomplete: "email" },
            { name: "phone", label: "Phone (optional)", type: "tel", half: true, autocomplete: "tel" },
            { name: "business", label: "Business name (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "project", label: "What would you like?", type: "select", required: true,
              options: ["A new website", "Upgrade my existing website", "A new app for staff or customers", "Upgrade my existing app", "An internal system or dashboard", "Not sure yet"] },
            { name: "timeline", label: "When do you need it?", type: "select", half: true,
              options: ["As soon as possible", "Within 1–3 months", "Later this year", "Flexible"] },
            { name: "budget", label: "Budget (optional)", type: "select", half: true,
              options: ["Under CHF 2,000", "CHF 2,000–5,000", "CHF 5,000–15,000", "Over CHF 15,000", "Not sure yet"] },
            { name: "message", label: "Tell us about your business and what it should do", type: "textarea", required: true }
          ]
        }
      }
    },

    footer: {
      copy: "© {year} Ghazal — Digital Solutions, Zurich",
      legal: "Legal notice & privacy",
      legalHref: "legal.html",
      region: "Region: Switzerland ·",
      regionOther: "Lebanon",
      // ?region= stores the choice so the time-zone check stops overriding it
      regionHref: "./?region=lb"
    }
  },

  de: {
    meta: {
      title: "Ghazal — Digital Solutions | Apps, Websites & Automatisierung für Unternehmen in Zürich",
      description: "Individuelle Apps, Websites und Erfassungssysteme, die Papier und Excel ersetzen — und Reparatur, Modernisierung und Automatisierung Ihrer bestehenden Tools. Mit Sitz in Zürich."
    },
    nav: [["#services", "Leistungen"], ["#work", "Referenzen"], ["#process", "Ablauf"], ["#contact", "Kontakt"]],
    langSwitch: { aria: "Show English version" },
    call: { label: "Gratis-Gespräch buchen", href: wa("Grüezi, ich möchte gerne ein Gratis-Gespräch buchen.") },

    hero: {
      eyebrow: "Ghazal — Digital Solutions",
      title: "Software, die Ihr Unternehmen von Papier und Excel befreit.",
      text: "Wir bauen individuelle Apps, Websites und Erfassungssysteme für Läden und kleine Unternehmen — und wenn Ihre bestehenden Tools langsam, fehlerhaft oder zeitraubend sind, reparieren, modernisieren und automatisieren wir sie.",
      fixBtn: "Etwas reparieren oder automatisieren",
      buildBtn: "App oder Website erstellen",
      callPrefix: "oder",
      facts: ["Sitz in Zürich", "Vor Ort oder remote", "English · Deutsch · العربية"]
    },

    services: {
      tag: "Leistungen",
      heading: "Zwei Wege, Ihren Alltag zu vereinfachen",
      paths: [
        {
          id: "fix",
          icon: "🛠️",
          title: "Reparieren, verbessern & automatisieren",
          lead: "Ihre Tools laufen — nur nicht so, wie sie sollten.",
          points: [
            "Langsame oder fehlerhafte Website oder App beheben",
            "Veraltete Systeme und ausgereizte Excel-Lösungen modernisieren",
            "Wiederkehrende Arbeit automatisieren: Erfassung, QR-Rechnungen, Reports, E-Mails",
            "Tools verbinden, die heute nicht miteinander reden"
          ],
          cta: "Problem schildern →"
        },
        {
          id: "build",
          icon: "🚀",
          title: "Apps & Websites erstellen",
          lead: "Etwas Neues, gebaut für Ihre Arbeitsweise.",
          points: [
            "Erfassungs-Apps für Ihr Team: Lager, Bestellungen, Kundendaten",
            "Websites, die Anfragen bringen — schnell, klar, mehrsprachig",
            "Mobile Apps für Android und iOS",
            "Admin-Bereiche und Dashboards mit Ihren Zahlen auf einen Blick"
          ],
          cta: "Projekt starten →"
        }
      ]
    },

    work: {
      tag: "Referenzen",
      heading: "Echte Systeme, bereits im Einsatz",
      intro: "Einige Beispiele aus unserer Arbeit. Jedes begann als Papier- oder Excel-Prozess.",
      demoLabel: "Live-Demo ↗",
      items: [
        {
          title: "Lieferscheine & Monatsabrechnung für eine Wäscherei",
          text: "Eine Wäscherei im Raum Zürich mit rund 30 Kunden aus Gastronomie, Hotellerie und Fitness führte pro Kunde und Monat eine eigene Excel-Datei und notierte die Tageslieferungen im Handy. Heute erfasst das Team jede Lieferung auf dem Handy: Die App druckt den Lieferschein sofort und füllt die monatliche Excel-Datei jedes Kunden automatisch aus — identisch mit den bisherigen Dateien und bereit für die Treuhand.",
          tags: ["Android & iPhone", "Offline nutzbar", "Excel-Export", "Lieferscheine", "Deutsch / Englisch"]
        },
        {
          title: "Probefahrt-Erfassung für ein Autohaus",
          text: "Das Team erfasst jede Probefahrt auf dem Handy: Foto des Führerausweises, Angaben, Unterschrift mit dem Finger und ein druckfertiger Vertrag. Es ersetzte Papierformulare, funktioniert offline und läuft auf Android und im Browser.",
          tags: ["Android", "Web", "Offline nutzbar", "Druck / PDF"]
        },
        {
          title: "Generator für die Schweizer QR-Rechnung",
          text: "Erstellt, prüft und liest Schweizer QR-Zahlteile nach der offiziellen SIX-Spezifikation, in echter Druckgrösse. Ein funktionierendes Werkzeug, das Sie gleich ausprobieren können.",
          tags: ["Schweizer Zahlungsstandards", "Druckfertig", "Live-Demo"],
          demo: "https://ghazalcode.ch/projects/qr-bill/"
        }
      ]
    },

    process: {
      tag: "Ablauf",
      heading: "Vom ersten Gespräch zum funktionierenden Werkzeug",
      steps: [
        { n: "1", title: "Gratis-Gespräch", text: "Entspannte 30 Minuten. Sie zeigen uns, wie es heute läuft; wir stellen Fragen und sagen Ihnen ehrlich, ob Software die richtige Lösung ist." },
        { n: "2", title: "Klares Angebot", text: "Sie erhalten schriftlich Umfang, Zeitplan und Preis, bevor die Arbeit beginnt. Keine Überraschungen, kein Fachjargon." },
        { n: "3", title: "Umsetzung in Etappen", text: "Sie sehen früh und oft funktionierende Versionen, damit wir Anpassungen machen, solange sie günstig sind. Danach schulen wir Ihr Team und bleiben nach dem Start erreichbar." }
      ]
    },

    why: {
      tag: "Warum wir",
      heading: "Worauf Sie zählen können",
      items: [
        { icon: "📍", title: "Lokal in Zürich", text: "Treffen vor Ort im Raum Zürich oder remote in der ganzen Schweiz." },
        { icon: "🧾", title: "Schweizer Standards inklusive", text: "QR-Rechnung, druckfertige Dokumente und Datenschutz nach nDSG gehören dazu — nicht nachträglich angeflickt." },
        { icon: "📋", title: "Klarer Preis vorab", text: "Umfang, Zeitplan und Preis erhalten Sie schriftlich, bevor die Arbeit beginnt." },
        { icon: "🤝", title: "Eine Ansprechperson", text: "Sie haben vom ersten Gespräch bis zur letzten Korrektur dieselbe Ansprechperson — kein Callcenter." }
      ]
    },

    about: {
      tag: "Über uns",
      heading: "Wer wir sind",
      text: "Ghazal — Digital Solutions baut und repariert praktische Software für kleine und mittlere Unternehmen. Unser Hintergrund ist Banken- und Fintech-Software, wo jede Zahl stimmen muss. Wir erklären in einfacher Sprache, liefern in kleinen Schritten und begleiten Sie vom ersten Gespräch bis zur letzten Korrektur."
    },

    contact: {
      tag: "Kontakt",
      heading: "Sagen Sie uns, was Sie brauchen",
      text: "Wählen Sie das passende Formular — eine grobe Idee genügt. Wir antworten innert eines Arbeitstages.",
      details: [
        { label: "WhatsApp", value: "Schreiben Sie uns", href: wa("Grüezi, ich habe eine Frage zu meinem Unternehmen.") },
        { label: "Ort", value: "Zürich, Schweiz" }
      ],
      tabsLabel: "Formular wählen",
      sending: "Wird gesendet…",
      success: "Vielen Dank — Ihre Anfrage ist unterwegs. Wir melden uns innert eines Arbeitstages.",
      error: "Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.",
      forms: {
        fix: {
          tab: "Reparieren, verbessern, automatisieren",
          intro: "Etwas funktioniert nicht, ist veraltet oder kostet Sie zu viel Zeit.",
          subject: "Fix / upgrade / automate — Ghazal Digital (CH)",
          submit: "Anfrage senden",
          fields: [
            { name: "name", label: "Ihr Name", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "email", label: "Ihre E-Mail", type: "email", required: true, half: true, autocomplete: "email" },
            { name: "phone", label: "Telefon (optional)", type: "tel", half: true, autocomplete: "tel" },
            { name: "business", label: "Firmenname (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "topic", label: "Worum geht es?", type: "select", required: true, half: true,
              options: ["Eine Website", "Eine App oder ein System", "Ein Excel- oder Papierprozess", "Tools, die zusammenarbeiten sollten", "Etwas anderes"] },
            { name: "urgency", label: "Wie dringend ist es?", type: "select", half: true,
              options: ["Es ist gerade kaputt", "In den nächsten Wochen", "Ich schaue mich erst um"] },
            { name: "message", label: "Was läuft schief, oder was kostet zu viel Zeit?", type: "textarea", required: true }
          ]
        },
        build: {
          tab: "App oder Website erstellen / erneuern",
          intro: "Eine neue Website, eine neue App oder eine bessere Version dessen, was Sie haben.",
          subject: "Build / upgrade — Ghazal Digital (CH)",
          submit: "Projekt senden",
          fields: [
            { name: "name", label: "Ihr Name", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "email", label: "Ihre E-Mail", type: "email", required: true, half: true, autocomplete: "email" },
            { name: "phone", label: "Telefon (optional)", type: "tel", half: true, autocomplete: "tel" },
            { name: "business", label: "Firmenname (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "project", label: "Was möchten Sie?", type: "select", required: true,
              options: ["Eine neue Website", "Meine bestehende Website erneuern", "Eine neue App für Team oder Kundschaft", "Meine bestehende App erneuern", "Ein internes System oder Dashboard", "Noch unklar"] },
            { name: "timeline", label: "Bis wann brauchen Sie es?", type: "select", half: true,
              options: ["So bald wie möglich", "Innert 1–3 Monaten", "Später im Jahr", "Flexibel"] },
            { name: "budget", label: "Budget (optional)", type: "select", half: true,
              options: ["Unter CHF 2'000", "CHF 2'000–5'000", "CHF 5'000–15'000", "Über CHF 15'000", "Noch unklar"] },
            { name: "message", label: "Erzählen Sie uns von Ihrem Unternehmen und was es können soll", type: "textarea", required: true }
          ]
        }
      }
    },

    footer: {
      copy: "© {year} Ghazal — Digital Solutions, Zürich",
      legal: "Impressum & Datenschutz",
      legalHref: "legal.html",
      region: "Region: Schweiz ·",
      regionOther: "Libanon",
      regionHref: "./?region=lb"
    }
  }
};
