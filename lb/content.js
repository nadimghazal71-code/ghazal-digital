/*
  Lebanese homepage — all the text, in Lebanese Arabic written in Latin
  letters (Arabizi). Same shape as the Swiss content.js, with one language
  ("lb"), so there's no language switch on this page.

  WhatsApp is the main way in here, so the call button opens a WhatsApp chat
  with a message already typed. Change BRAND.whatsapp if you get a Lebanese
  number.
*/
const BRAND = {
  name: "Ghazal — Digital Solutions",
  email: "nadimghazal71@gmail.com",
  phone: "+41 76 794 85 18",
  phoneHref: "tel:+41767948518",
  whatsapp: "https://wa.me/41767948518",
  portfolio: "https://ghazalcode.ch/",
  bookingUrl: ""
};

const PAGE = { region: "Lebanon" };

const WHATSAPP_HELLO = BRAND.whatsapp + "?text=" + encodeURIComponent("Marhaba Nadim, shefet el website w badde es2alak 3an shi la shoghle.");

const CONTENT = {
  lb: {
    meta: {
      title: "Ghazal — Digital Solutions | Apps, websites w systems la shoghlak",
      description: "Bala wara2, bala Excel, w bala wja3 ras. Apps, websites w systems 3a2ad shoghlak — w iza 3andak shi 3atlan aw 3am yekol wa2tak, bsalle7o w bkhallih yemshi la7alo."
    },
    nav: [["#services", "Shu ba3mel"], ["#work", "Shoghle"], ["#process", "Kif mnshteghel"], ["#contact", "7ke ma3e"]],
    call: { label: "7ke ma3e 3al WhatsApp", href: WHATSAPP_HELLO, style: "whatsapp" },

    hero: {
      eyebrow: "Ghazal — Digital Solutions",
      title: "Bala wara2, bala Excel, w bala wja3 ras.",
      text: "Ba3mellak app, website aw system 3a2ad shoghlak: el staff bisajjlo kel shi 3al telephone, w enta btshouf kel shi 3a wa2to. W iza 3andak shi 3atlan aw 3am yekol wa2tak, bsalle7o w bkhallih yemshi la7alo.",
      fixBtn: "Badde salle7 shi",
      buildBtn: "Badde app aw website",
      callPrefix: "aw",
      facts: ["Byeshteghel 7atta bala internet", "3arabe · English", "Ass3ar wad7a men el bidaye"]
    },

    services: {
      tag: "Shu ba3mel",
      heading: "Tnen tor2 la ykhaff 3annak el shoghl",
      paths: [
        {
          id: "fix",
          icon: "🛠️",
          title: "Salle7, tawwer w automate",
          lead: "3andak system, website aw Excel, bas mish 3am yemshi metl ma lazem?",
          points: [
            "Website bati2 aw 3atlan? Bsalle7o.",
            "System 2adim? Bjaddo w bzidlo li na2so.",
            "Shoghl byetkarrar kel yom — fawater, ta2arir, data entry? Bkhallih yemshi la7alo.",
            "Programs ma 3am ye7ko ba3don? Bwasselon ma3 ba3d."
          ],
          cta: "Khabberne shu el meshkle →"
        },
        {
          id: "build",
          icon: "🚀",
          title: "Apps w websites jdid",
          lead: "Baddak shi jdid, ma3moul 3a2ad ma7allak?",
          points: [
            "App lal staff ysajjlo el stock, el talabiyet w el zbeyen 3al telephone",
            "Website bijiblak zbeyen, bel 3arabe w bel English",
            "Systems lal ma7al byeshteghlo 7atta lamma ta3ti2 el kahraba aw el internet",
            "Dashboard la tshouf el mabi3at w el stock 3a wa2ton"
          ],
          cta: "Yalla nballesh →"
        }
      ]
    },

    work: {
      tag: "Shoghle",
      heading: "Systems 7a2i2iye, 3am tishteghel",
      intro: "Hayda masalan system 3melto la ma7al sayyarat — kel shi ken 3al wara2.",
      demoLabel: "Jarrebo ↗",
      items: [
        {
          title: "Tasjil test drive la ma7al sayyarat",
          text: "El staff bisajjel kel test drive 3al telephone: soura lal ruksa, el ma3loumet, imda bel isba3, w 3a2d jehez lal tab3a. Ma ba2a fi wara2, w byeshteghel 7atta bala internet.",
          tags: ["Android", "Web", "Bala internet", "PDF"]
        }
      ],
      more: "Shouf ba2it shoghle 3al portfolio ↗"
    },

    process: {
      tag: "Kif mnshteghel",
      heading: "Men awwal 7ake la system shaghghal",
      steps: [
        { n: "1", title: "7ake majjeniye", text: "Nos se3a 3al WhatsApp aw video call. Btfarjine kif 3am teshteghel hala2, w b2ellak b sara7a iza el software huwwe el 7al aw la2." },
        { n: "2", title: "3ard wade7", text: "Bta3tik kel shi maktoub: shu ra7 sawwi, ade byekhod wa2et w ade bikallef — abel ma nballesh. Bala mfeje2at." },
        { n: "3", title: "Shoghl 3a mara7el", text: "Btshouf nuskha shaghghale men bakkir, la nsalle7 el ghalat w huwwe ba3do rkhis. Ba3den b3allem el staff w b2a2 7addak ba3d ma nballesh." }
      ]
    },

    why: {
      tag: "Lesh ana",
      heading: "Ma3moul la shoghl Lebnen",
      items: [
        { icon: "⚡", title: "Byeshteghel bala internet", text: "Ra7et el kahraba? 2ata3 el internet? El system bikammel, w byerja3 bi3mel sync lamma yerja3 el khatt." },
        { icon: "💬", title: "3al WhatsApp", text: "El talabiyet, el fawater w el ta2arir bewsalo 3al WhatsApp — matra7 ma enta w zbeynak 3ayshin aslan." },
        { icon: "💵", title: "Ass3ar wad7a", text: "Kel shi bel dollar w maktoub men el awwal. Ma fi shi mkhabba." },
        { icon: "🤝", title: "Shakhs wa7ad men el awwal lal ekher", text: "Btehke ma3e ana, mish ma3 call center. W bjewbak." }
      ]
    },

    about: {
      tag: "Meen ana",
      heading: "Ahla, ana Nadim",
      text: "Developer, darast computer science w eshtaghalt 3a software lal bnouk w el fintech, mahall ma kel ra2em byefre2. Hala2 ba3mel w bsalle7 adawet 3amaliye lal ma7allat w el sharikat el zghire. B7ke ma3ak bel lugha li btefhama, w bkoun ma3ak men awwal 7ake la ekher tasli7.",
      alt: "Nadim Ghazal"
    },

    contact: {
      tag: "7ke ma3e",
      heading: "Khabberne shu baddak",
      text: "Fikra 3al sari3 bteke. Ekhtar el form li byenesbak w ektebli kam satr — aw b3atle direct 3al WhatsApp.",
      details: [
        { label: "WhatsApp", value: BRAND.phone, href: WHATSAPP_HELLO },
        { label: "Email", value: BRAND.email, href: "mailto:" + BRAND.email }
      ],
      tabsLabel: "Ekhtar el form",
      sending: "3am yetb3at…",
      success: "Wosolet! Brodd 3lek b2a2rab wa2et.",
      error: "Fi shi ma zabat. B3atle 3al WhatsApp aw 3al email: " + BRAND.email,
      forms: {
        fix: {
          tab: "Tasli7 / automation",
          intro: "Fi shi mish 3am yemshi, 2adim, aw 3am yekol wa2tak?",
          subject: "Fix / upgrade / automate — Ghazal Digital (LB)",
          submit: "B3at",
          fields: [
            { name: "name", label: "Esmak", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "phone", label: "Ra2m el WhatsApp", type: "tel", required: true, half: true, autocomplete: "tel" },
            { name: "email", label: "Email (optional)", type: "email", half: true, autocomplete: "email" },
            { name: "business", label: "Esm el ma7al aw el sharike (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "topic", label: "Shu baddo tasli7?", type: "select", required: true, half: true,
              options: ["Website", "App aw system", "Excel aw daftar", "Programs lazem ye7ko ma3 ba3don", "Shi tene"] },
            { name: "urgency", label: "Ade mesta3jel?", type: "select", half: true,
              options: ["3atlan hala2", "Bel jem3at el jeyye", "3am es2al bas"] },
            { name: "message", label: "Shu el meshkle, aw shu 3am yekol wa2tak?", type: "textarea", required: true }
          ]
        },
        build: {
          tab: "App aw website",
          intro: "Website jdid, app jdid, aw nuskha a7san men li 3andak.",
          subject: "Build / upgrade — Ghazal Digital (LB)",
          submit: "B3at",
          fields: [
            { name: "name", label: "Esmak", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "phone", label: "Ra2m el WhatsApp", type: "tel", required: true, half: true, autocomplete: "tel" },
            { name: "email", label: "Email (optional)", type: "email", half: true, autocomplete: "email" },
            { name: "business", label: "Esm el ma7al aw el sharike (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "project", label: "Shu baddak?", type: "select", required: true,
              options: ["Website jdid", "Tatwir el website li 3ande", "App jdid lal staff aw lal zbeyen", "Tatwir el app li 3ande", "System dakhile aw dashboard", "Ma ba3ref ba3d"] },
            { name: "timeline", label: "Emta baddak yeh?", type: "select", half: true,
              options: ["Bi2a2rab wa2et", "Khilel 1–3 ishhor", "Ba3d shway", "Ma fi 3ajle"] },
            { name: "budget", label: "Budget (optional)", type: "select", half: true,
              options: ["Ta7t $500", "$500–$1,500", "$1,500–$5,000", "Aktar men $5,000", "Ma ba3ref ba3d"] },
            { name: "message", label: "Khabberne 3an shoghlak w shu baddak ya3mel", type: "textarea", required: true }
          ]
        }
      }
    },

    footer: {
      copy: "© {year} Ghazal — Digital Solutions (Nadim Ghazal)",
      legal: "Legal & privacy",
      legalHref: "../legal.html",
      portfolio: "Portfolio",
      region: "Lebnen ·",
      regionOther: "Switzerland (English / Deutsch)",
      regionHref: "../?region=ch"
    }
  }
};
