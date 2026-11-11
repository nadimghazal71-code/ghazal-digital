/*
  Lebanese homepage — all the text, in Lebanese Arabic written in Latin
  letters (Arabizi), in company voice ("ne7na"). Same shape as the Swiss
  content.js, with one language ("lb"), so there's no language switch here.

  WhatsApp is the main way in, so the call button opens a WhatsApp chat with
  a message already typed. Change BRAND.whatsapp if you get a Lebanese number,
  and BRAND.formEndpoint once you have a FormSubmit alias (see ../content.js).
*/
const BRAND = {
  name: "Ghazal — Digital Solutions",
  whatsapp: "https://wa.me/41767948518",
  formEndpoint: "https://formsubmit.co/ajax/nadimghazal71@gmail.com",
  bookingUrl: ""
};

const PAGE = { region: "Lebanon" };

const wa = text => BRAND.whatsapp + "?text=" + encodeURIComponent(text);
const WHATSAPP_HELLO = wa("Marhaba, shefet el website w badde es2al 3an shi la shoghle.");

const CONTENT = {
  lb: {
    meta: {
      title: "Ghazal — Digital Solutions | Apps, websites w systems la shoghlak",
      description: "Bala wara2, bala Excel, w bala wja3 ras. Mna3mellak apps, websites w systems 3a2ad shoghlak — w iza 3andak shi 3atlan aw 3am yekol wa2tak, mnsalle7o w mnkhallih yemshi la7alo."
    },
    nav: [["#services", "Shu mna3mel"], ["#work", "Shoghlna"], ["#process", "Kif mnshteghel"], ["#contact", "7kina"]],
    call: { label: "7kina 3al WhatsApp", href: WHATSAPP_HELLO, style: "whatsapp" },

    hero: {
      eyebrow: "Ghazal — Digital Solutions",
      title: "Bala wara2, bala Excel, w bala wja3 ras.",
      text: "Mna3mellak app, website aw system 3a2ad shoghlak: el staff bisajjlo kel shi 3al telephone, w enta btshouf kel shi 3a wa2to. W iza 3andak shi 3atlan aw 3am yekol wa2tak, mnsalle7o w mnkhallih yemshi la7alo.",
      fixBtn: "Badde salle7 shi",
      buildBtn: "Badde app aw website",
      callPrefix: "aw",
      facts: ["Byeshteghel 7atta bala internet", "3arabe · English", "Ass3ar wad7a men el bidaye"]
    },

    services: {
      tag: "Shu mna3mel",
      heading: "Tnen tor2 la ykhaff 3annak el shoghl",
      paths: [
        {
          id: "fix",
          icon: "🛠️",
          title: "Mnsalle7, mntawwer w mna3mel automation",
          lead: "3andak system, website aw Excel, bas mish 3am yemshi metl ma lazem?",
          points: [
            "Website bati2 aw 3atlan? Mnsalle7o.",
            "System 2adim? Mnjaddo w mnzidlo li na2so.",
            "Shoghl byetkarrar kel yom — fawater, ta2arir, data entry? Mnkhallih yemshi la7alo.",
            "Programs ma 3am ye7ko ba3don? Mnwasselon ma3 ba3d."
          ],
          cta: "Khabbirna shu el meshkle →"
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
      tag: "Shoghlna",
      heading: "Systems 7a2i2iye, 3am tishteghel",
      intro: "Hayda masalan system 3melne la ma7al sayyarat — kel shi ken 3al wara2.",
      demoLabel: "Jarrebo ↗",
      items: [
        {
          title: "Tasjil test drive la ma7al sayyarat",
          text: "El staff bisajjel kel test drive 3al telephone: soura lal ruksa, el ma3loumet, imda bel isba3, w 3a2d jehez lal tab3a. Ma ba2a fi wara2, w byeshteghel 7atta bala internet.",
          tags: ["Android", "Web", "Bala internet", "PDF"]
        }
      ]
    },

    process: {
      tag: "Kif mnshteghel",
      heading: "Men awwal 7ake la system shaghghal",
      steps: [
        { n: "1", title: "7ake majjeniye", text: "Nos se3a 3al WhatsApp aw video call. Btfarjina kif 3am teshteghel hala2, w mn2ellak b sara7a iza el software huwwe el 7al aw la2." },
        { n: "2", title: "3ard wade7", text: "Mna3tik kel shi maktoub: shu ra7 nsawwi, ade byekhod wa2et w ade bikallef — abel ma nballesh. Bala mfeje2at." },
        { n: "3", title: "Shoghl 3a mara7el", text: "Btshouf nuskha shaghghale men bakkir, la nsalle7 el ghalat w huwwe ba3do rkhis. Ba3den mn3allem el staff w mnb2a 7addak ba3d ma nballesh." }
      ]
    },

    why: {
      tag: "Lesh ne7na",
      heading: "Ma3moul la shoghl Lebnen",
      items: [
        { icon: "⚡", title: "Byeshteghel bala internet", text: "Ra7et el kahraba? 2ata3 el internet? El system bikammel, w bi3mel sync lamma yerja3 el khatt." },
        { icon: "💬", title: "3al WhatsApp", text: "El talabiyet, el fawater w el ta2arir bewsalo 3al WhatsApp — matra7 ma enta w zbeynak 3ayshin aslan." },
        { icon: "💵", title: "Ass3ar wad7a", text: "Kel shi bel dollar w maktoub men el awwal. Ma fi shi mkhabba." },
        { icon: "🤝", title: "Nafs el shakhs men el awwal lal ekher", text: "Btehke ma3 nafs el shakhs men awwal 7ake la ekher tasli7 — mish ma3 call center. W mnjewbak." }
      ]
    },

    about: {
      tag: "Meen ne7na",
      heading: "Ahla w sahla 3and Ghazal",
      text: "Ne7na Ghazal — Digital Solutions: mna3mel w mnsalle7 software 3amali lal ma7allat w el sharikat el zghire. Khebretna men software el bnouk w el fintech, mahall ma kel ra2em byefre2. Mn7ke ma3ak bel lugha li btefhama, w mnkoun ma3ak men awwal 7ake la ekher tasli7."
    },

    contact: {
      tag: "7kina",
      heading: "Khabbirna shu baddak",
      text: "Fikra 3al sari3 bteke. Ekhtar el form li byenesbak w ektebelna kam satr — aw b3atelna direct 3al WhatsApp.",
      details: [
        { label: "WhatsApp", value: "B3atelna resele", href: WHATSAPP_HELLO }
      ],
      tabsLabel: "Ekhtar el form",
      sending: "3am yetb3at…",
      success: "Wosolet! Mnrodd 3lek b2a2rab wa2et.",
      error: "Fi shi ma zabat. Jarreb kamen marra, aw b3atelna 3al WhatsApp.",
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
            { name: "message", label: "Khabbirna 3an shoghlak w shu baddak ya3mel", type: "textarea", required: true }
          ]
        }
      }
    },

    footer: {
      copy: "© {year} Ghazal — Digital Solutions",
      legal: "Legal & privacy",
      legalHref: "../legal.html",
      region: "Lebnen ·",
      regionOther: "Switzerland (English / Deutsch)",
      regionHref: "../?region=ch"
    }
  }
};
