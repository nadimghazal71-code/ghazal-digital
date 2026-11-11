/*
  All the text on the site lives in this file, once per language:
  CONTENT.en and CONTENT.de have the same shape. script.js renders whichever
  language is active (English by default, switchable in the navbar). To change
  any wording, edit both languages here — index.html and script.js don't need
  to be touched for text changes.

  Things you'll most likely want to change:
    - brand            business name, email, phone, WhatsApp number, booking link
    - contact.bookingUrl   set this to a Calendly / Cal.com link and the
                       "Book a free call" buttons go straight to your calendar
                       (until then they open an email).
*/
const BRAND = {
  name: "Ghazal — Digital Solutions",
  email: "nadimghazal71@gmail.com",
  phone: "+41 76 794 85 18",
  phoneHref: "tel:+41767948518",
  whatsapp: "https://wa.me/41767948518",
  portfolio: "https://ghazalcode.ch/",
  // Leave empty to fall back to an email. Example: "https://cal.com/yourname/intro"
  bookingUrl: ""
};

const CONTENT = {
  en: {
    meta: {
      title: "Ghazal — Digital Solutions | Apps & systems for businesses in Switzerland and Lebanon",
      description: "Custom mobile apps, websites and data-entry systems that replace paper and spreadsheets in shops and small businesses. Based in Zurich, working with clients in Switzerland and Lebanon."
    },
    nav: { services: "What I build", work: "Work", process: "How it works", markets: "Switzerland & Lebanon", contact: "Contact" },
    langSwitch: { aria: "Deutsche Version anzeigen" },
    callLabel: "Book a free call",
    callSubject: "Free call",

    hero: {
      eyebrow: "Ghazal — Digital Solutions",
      title: "Software that gets your business off paper and spreadsheets.",
      text: "Custom mobile apps, websites and data-entry systems for shops and small businesses in Switzerland and Lebanon. You tell me how you work today; I build the tool that makes it faster and error-free.",
      primary: "Book a free call",
      secondary: "Send an enquiry",
      facts: ["Based in Zurich", "Clients in Switzerland & Lebanon", "English · Deutsch · العربية"]
    },

    services: {
      tag: "What I build",
      heading: "Practical tools for the way your business really runs",
      items: [
        { icon: "📱", title: "Data-entry & operations apps", text: "Replace paper forms and Excel with an app your staff use on a phone or tablet: stock, orders, customer records, registrations, checklists. Works in the shop, with a simple view for the owner." },
        { icon: "🌐", title: "Websites that bring enquiries", text: "A fast, clear website in the languages your customers speak, with contact and booking forms that land straight in your inbox. Built to be found on Google and to load on any phone." },
        { icon: "🧾", title: "Invoicing & reporting", text: "Swiss QR-bill invoices, printable documents, dashboards and exports to Excel or PDF, so the numbers are ready when you or your accountant need them." },
        { icon: "🔧", title: "Custom systems & integrations", text: "Something that doesn't exist off the shelf? A small internal system, an admin panel, or a link between the tools you already use. Scoped small, delivered in steps." }
      ]
    },

    work: {
      tag: "Work",
      heading: "Real systems, already in use",
      intro: "A few examples of what I've built. Each one started as a paper or spreadsheet process.",
      demoLabel: "Live demo ↗",
      items: [
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
      ],
      more: "See more of my work in my developer portfolio ↗"
    },

    process: {
      tag: "How it works",
      heading: "From first call to a working tool",
      steps: [
        { n: "1", title: "Free call", text: "A relaxed 30 minutes. You show me how things work today; I ask questions and tell you honestly whether software is the right answer." },
        { n: "2", title: "Clear proposal", text: "You get a written scope, timeline and price before any work starts. No surprises, no jargon." },
        { n: "3", title: "Built in steps", text: "You see working versions early and often, so we fix things while they're cheap to change. Then I train your team and stay on hand after launch." }
      ]
    },

    markets: {
      tag: "Switzerland & Lebanon",
      heading: "Built for where you work",
      items: [
        {
          flag: "🇨🇭",
          title: "In Switzerland",
          points: ["Swiss QR-bill invoicing and print-ready documents", "German and English, with Swiss data-protection (nDSG) in mind", "On-site meetings in the Zurich area, or remote anywhere in Switzerland"]
        },
        {
          flag: "🇱🇧",
          title: "In Lebanon",
          points: ["Apps that keep working through power and internet cuts", "Arabic interfaces, and WhatsApp-friendly workflows", "Fully remote, with clear communication in Arabic or English"],
          arabic: "أنظمة وتطبيقات تحلّ مكان الورق وجداول إكسل في متجرك أو شركتك، بالعربية أو الإنجليزية، وتعمل حتى عند انقطاع الكهرباء أو الإنترنت."
        }
      ]
    },

    about: {
      tag: "About",
      heading: "Hi, I'm Nadim",
      text: "I'm a software developer with a computer-science degree and a background in banking and fintech software, where accuracy matters. I now build practical tools for small and mid-sized businesses. I write in plain language, deliver in small steps, and I'm the person you talk to from the first call to the last fix.",
      alt: "Nadim Ghazal"
    },

    contact: {
      tag: "Contact",
      heading: "Tell me what you'd like to fix",
      text: "A rough idea is enough. Send a few lines about your business and what's slowing it down, and I'll reply within one working day, or book a free call straight away.",
      details: [
        { label: "Email", value: BRAND.email, href: "mailto:" + BRAND.email },
        { label: "WhatsApp / Phone", value: BRAND.phone, href: BRAND.whatsapp },
        { label: "Location", value: "Zurich, Switzerland" }
      ],
      form: {
        name: "Your name",
        email: "Your email",
        company: "Business name (optional)",
        message: "What would you like to improve or build?",
        submit: "Send enquiry",
        // Messages are relayed by FormSubmit, which needs no account: it posts to
        // the address below and forwards it on.
        endpoint: "https://formsubmit.co/ajax/" + BRAND.email,
        subject: "New enquiry from Ghazal Digital Solutions",
        sending: "Sending…",
        success: "Thank you — your enquiry is on its way. I'll reply within one working day.",
        error: "Something went wrong sending that. Please email me directly at " + BRAND.email + "."
      }
    },

    footer: {
      copy: "© {year} Ghazal — Digital Solutions (Nadim Ghazal), Zurich",
      legal: "Legal notice & privacy",
      portfolio: "Developer portfolio"
    }
  },

  de: {
    meta: {
      title: "Ghazal — Digital Solutions | Apps & Systeme für Unternehmen in der Schweiz und im Libanon",
      description: "Individuelle Mobile-Apps, Websites und Erfassungssysteme, die Papier und Excel-Listen in Läden und kleinen Unternehmen ersetzen. Mit Sitz in Zürich, für Kunden in der Schweiz und im Libanon."
    },
    nav: { services: "Leistungen", work: "Referenzen", process: "Ablauf", markets: "Schweiz & Libanon", contact: "Kontakt" },
    langSwitch: { aria: "Show English version" },
    callLabel: "Gratis-Gespräch buchen",
    callSubject: "Gratis-Gespräch",

    hero: {
      eyebrow: "Ghazal — Digital Solutions",
      title: "Software, die Ihr Unternehmen von Papier und Excel befreit.",
      text: "Individuelle Mobile-Apps, Websites und Erfassungssysteme für Läden und kleine Unternehmen in der Schweiz und im Libanon. Sie zeigen mir, wie Sie heute arbeiten; ich baue das Werkzeug, das es schneller und fehlerfrei macht.",
      primary: "Gratis-Gespräch buchen",
      secondary: "Anfrage senden",
      facts: ["Sitz in Zürich", "Kunden in der Schweiz & im Libanon", "English · Deutsch · العربية"]
    },

    services: {
      tag: "Leistungen",
      heading: "Praktische Werkzeuge für den echten Betriebsalltag",
      items: [
        { icon: "📱", title: "Erfassungs- und Betriebs-Apps", text: "Papierformulare und Excel werden durch eine App ersetzt, die Ihr Team auf Handy oder Tablet nutzt: Lager, Bestellungen, Kundendaten, Registrierungen, Checklisten. Im Laden einsetzbar, mit einfacher Übersicht für die Inhaberin oder den Inhaber." },
        { icon: "🌐", title: "Websites, die Anfragen bringen", text: "Eine schnelle, klare Website in den Sprachen Ihrer Kundschaft, mit Kontakt- und Buchungsformularen, die direkt in Ihrem Postfach landen. Gut auffindbar bei Google und auf jedem Handy schnell geladen." },
        { icon: "🧾", title: "Rechnungen & Auswertungen", text: "Rechnungen mit Schweizer QR-Zahlteil, druckfertige Dokumente, Dashboards und Exporte nach Excel oder PDF, damit die Zahlen bereit sind, wenn Sie oder Ihre Treuhänderin sie brauchen." },
        { icon: "🔧", title: "Individuelle Systeme & Schnittstellen", text: "Etwas, das es von der Stange nicht gibt? Ein kleines internes System, ein Admin-Bereich oder eine Verbindung zwischen Ihren bestehenden Tools. Klein geplant, in Etappen geliefert." }
      ]
    },

    work: {
      tag: "Referenzen",
      heading: "Echte Systeme, bereits im Einsatz",
      intro: "Einige Beispiele aus meiner Arbeit. Jedes begann als Papier- oder Excel-Prozess.",
      demoLabel: "Live-Demo ↗",
      items: [
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
      ],
      more: "Mehr Arbeiten finden Sie in meinem Entwickler-Portfolio ↗"
    },

    process: {
      tag: "Ablauf",
      heading: "Vom ersten Gespräch zum funktionierenden Werkzeug",
      steps: [
        { n: "1", title: "Gratis-Gespräch", text: "Entspannte 30 Minuten. Sie zeigen mir, wie es heute läuft; ich stelle Fragen und sage Ihnen ehrlich, ob Software die richtige Lösung ist." },
        { n: "2", title: "Klares Angebot", text: "Sie erhalten schriftlich Umfang, Zeitplan und Preis, bevor die Arbeit beginnt. Keine Überraschungen, kein Fachjargon." },
        { n: "3", title: "Umsetzung in Etappen", text: "Sie sehen früh und oft funktionierende Versionen, damit wir Anpassungen machen, solange sie günstig sind. Danach schule ich Ihr Team und bleibe nach dem Start erreichbar." }
      ]
    },

    markets: {
      tag: "Schweiz & Libanon",
      heading: "Gemacht für Ihren Standort",
      items: [
        {
          flag: "🇨🇭",
          title: "In der Schweiz",
          points: ["Rechnungen mit Schweizer QR-Zahlteil und druckfertige Dokumente", "Deutsch und Englisch, unter Beachtung des Schweizer Datenschutzes (nDSG)", "Treffen vor Ort im Raum Zürich oder remote in der ganzen Schweiz"]
        },
        {
          flag: "🇱🇧",
          title: "Im Libanon",
          points: ["Apps, die auch bei Strom- und Internetausfällen weiterlaufen", "Arabische Oberflächen und WhatsApp-taugliche Abläufe", "Vollständig remote, mit klarer Kommunikation auf Arabisch oder Englisch"],
          arabic: "أنظمة وتطبيقات تحلّ مكان الورق وجداول إكسل في متجرك أو شركتك، بالعربية أو الإنجليزية، وتعمل حتى عند انقطاع الكهرباء أو الإنترنت."
        }
      ]
    },

    about: {
      tag: "Über mich",
      heading: "Hallo, ich bin Nadim",
      text: "Ich bin Softwareentwickler mit Informatik-Abschluss und Erfahrung mit Banken- und Fintech-Software, wo Genauigkeit zählt. Heute baue ich praktische Werkzeuge für kleine und mittlere Unternehmen. Ich schreibe in einfacher Sprache, liefere in kleinen Schritten und bin Ihre Ansprechperson vom ersten Gespräch bis zur letzten Korrektur.",
      alt: "Nadim Ghazal"
    },

    contact: {
      tag: "Kontakt",
      heading: "Sagen Sie mir, was Sie verbessern möchten",
      text: "Eine grobe Idee genügt. Schreiben Sie ein paar Zeilen zu Ihrem Unternehmen und dazu, was es bremst; ich antworte innert eines Arbeitstages. Oder buchen Sie gleich ein Gratis-Gespräch.",
      details: [
        { label: "E-Mail", value: BRAND.email, href: "mailto:" + BRAND.email },
        { label: "WhatsApp / Telefon", value: BRAND.phone, href: BRAND.whatsapp },
        { label: "Ort", value: "Zürich, Schweiz" }
      ],
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        company: "Firmenname (optional)",
        message: "Was möchten Sie verbessern oder aufbauen lassen?",
        submit: "Anfrage senden",
        endpoint: "https://formsubmit.co/ajax/" + BRAND.email,
        subject: "New enquiry from Ghazal Digital Solutions",
        sending: "Wird gesendet…",
        success: "Vielen Dank — Ihre Anfrage ist unterwegs. Ich melde mich innert eines Arbeitstages.",
        error: "Beim Senden ist etwas schiefgelaufen. Bitte schreiben Sie mir direkt an " + BRAND.email + "."
      }
    },

    footer: {
      copy: "© {year} Ghazal — Digital Solutions (Nadim Ghazal), Zürich",
      legal: "Impressum & Datenschutz",
      portfolio: "Entwickler-Portfolio"
    }
  }
};
