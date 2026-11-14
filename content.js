/*
  All the text on the site, in two languages for the Lebanese market:
    lb — Lebanese Arabic in Latin letters (Arabizi). The default.
    en — English.
  Both have the same shape; script.js renders whichever is active, with a
  switch in the navbar. The order of the keys below sets the default: the
  first one is what a new visitor sees.

  Written in company voice ("we" / "ne7na"). No personal name, photo, email
  address or phone number is shown on the page; visitors reach you through
  the two forms and the WhatsApp button.

  Things you'll most likely want to change:
    - BRAND.whatsapp     the number every WhatsApp button opens
    - BRAND.formEndpoint once FormSubmit has sent you an activation email, swap
                         the address here for the random alias it gives you,
                         so your Gmail address isn't in the page source
    - contact.forms      the two enquiry forms: fields, choices, budget ranges
*/
const BRAND = {
  name: "Ghazal — Digital Solutions",
  whatsapp: "https://wa.me/41767948518",
  formEndpoint: "https://formsubmit.co/ajax/nadimghazal71@gmail.com"
};

// Sent with every enquiry
const PAGE = { region: "Lebanon" };

const wa = text => BRAND.whatsapp + "?text=" + encodeURIComponent(text);

const CONTENT = {
  lb: {
    langLabel: "3arabe",
    htmlLang: "ar-Latn",
    meta: {
      title: "Ghazal — Digital Solutions | Apps, websites w systems la shoghlak",
      description: "Bala wara2, bala Excel, w bala wja3 ras. Mna3mellak apps, websites w systems 3a2ad shoghlak — w iza 3andak shi 3atlan aw 3am yekol wa2tak, mnsalle7o w mnkhallih yemshi la7alo."
    },
    nav: [["#services", "Shu mna3mel"], ["#work", "Shoghlna"], ["#process", "Kif mnshteghel"], ["#contact", "7kina"]],
    langSwitch: { aria: "Show the English version" },
    call: { label: "7kina 3al WhatsApp", href: wa("Marhaba, shefet el website w badde es2al 3an shi la shoghle."), style: "whatsapp" },

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
      intro: "Hawde systems 3melnehon la ma7allat kenet tishteghel 3al wara2 w el Excel.",
      items: [
        {
          title: "Wasl tasleem w 7sebet el shahr la laundry",
          text: "Laundry bikhdom 2arib el 30 mat3am w otel, ken 3endo Excel la kel zbun kel shahr, w el tasleemet maktoube 3al telephone. Hala2 el staff bisajjel kel tasleeme 3al telephone: el app btitba3 wasl el tasleem dagre, w bt3abbe el Excel el shahri la kel zbun la7ala — metl el files el 2adime bel zabt, w jehze lal mo7aseb.",
          tags: ["Android w iPhone", "Bala internet", "Excel", "Wasl tasleem"]
        },
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
        { label: "WhatsApp", value: "B3atelna resele", href: wa("Marhaba, shefet el website w badde es2al 3an shi la shoghle.") }
      ],
      tabsLabel: "Ekhtar el form",
      sending: "3am yetb3at…",
      success: "Wosolet! Mnrodd 3lek b2a2rab wa2et.",
      error: "Fi shi ma zabat. Jarreb kamen marra, aw b3atelna 3al WhatsApp.",
      forms: {
        fix: {
          tab: "Tasli7 / automation",
          intro: "Fi shi mish 3am yemshi, 2adim, aw 3am yekol wa2tak?",
          subject: "Fix / upgrade / automate — Ghazal Digital",
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
          subject: "Build / upgrade — Ghazal Digital",
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
      legal: "Legal & privacy"
    }
  },

  en: {
    langLabel: "EN",
    htmlLang: "en",
    meta: {
      title: "Ghazal — Digital Solutions | Apps, websites & systems for your business",
      description: "No paper, no Excel, no headache. Apps, websites and systems built around how your business works — and if something's broken or eating your time, we fix it and automate it."
    },
    nav: [["#services", "What we do"], ["#work", "Our work"], ["#process", "How it works"], ["#contact", "Contact"]],
    langSwitch: { aria: "Shoufa bel 3arabe" },
    call: { label: "Chat with us on WhatsApp", href: wa("Hi, I saw your website and I'd like to ask about something for my business."), style: "whatsapp" },

    hero: {
      eyebrow: "Ghazal — Digital Solutions",
      title: "No paper. No Excel. No headache.",
      text: "We build apps, websites and systems around the way you work: your staff log everything on their phones, and you see it all in real time. And if something's broken or eating your time, we fix it and make it run itself.",
      fixBtn: "Fix something",
      buildBtn: "Get an app or website",
      callPrefix: "or",
      facts: ["Works even without internet", "English · 3arabe", "Clear prices from day one"]
    },

    services: {
      tag: "What we do",
      heading: "Two ways to take work off your plate",
      paths: [
        {
          id: "fix",
          icon: "🛠️",
          title: "Fix, upgrade & automate",
          lead: "You have a system, a website or an Excel sheet — but it's not working the way it should?",
          points: [
            "Website slow or broken? We fix it.",
            "System outdated? We modernise it and add what's missing.",
            "Same work every day — invoices, reports, data entry? We make it run itself.",
            "Programs that don't talk to each other? We connect them."
          ],
          cta: "Tell us the problem →"
        },
        {
          id: "build",
          icon: "🚀",
          title: "New apps & websites",
          lead: "Want something new, made for your shop or business?",
          points: [
            "An app for your staff to log stock, orders and customers on their phones",
            "A website that brings you customers, in English and Arabic",
            "Systems that keep working when the power or the internet cuts out",
            "A dashboard to see your sales and stock in real time"
          ],
          cta: "Let's get started →"
        }
      ]
    },

    work: {
      tag: "Our work",
      heading: "Real systems, already in use",
      intro: "Systems we built for businesses that used to run on paper and Excel.",
      items: [
        {
          title: "Delivery slips & monthly billing for a commercial laundry",
          text: "A laundry serving around 30 restaurants and hotels kept an Excel file per client per month, with deliveries noted on a phone. Now staff log each delivery on a phone: the app prints the delivery slip on the spot and fills in every client's monthly Excel automatically — identical to the old files, ready for the accountant.",
          tags: ["Android & iPhone", "Works offline", "Excel export", "Delivery slips"]
        },
        {
          title: "Test-drive registration for a car dealership",
          text: "Staff register each test drive on a phone: driver's licence photo, details, a finger-drawn signature, and a ready-to-print agreement. It replaced paper forms and works even without internet.",
          tags: ["Android", "Web", "Works offline", "Print / PDF"]
        }
      ]
    },

    process: {
      tag: "How it works",
      heading: "From first chat to a working system",
      steps: [
        { n: "1", title: "Free chat", text: "Half an hour on WhatsApp or a video call. You show us how you work today, and we tell you honestly whether software is the answer." },
        { n: "2", title: "Clear proposal", text: "You get everything in writing — what we'll build, how long it takes and what it costs — before we start. No surprises." },
        { n: "3", title: "Built in steps", text: "You see a working version early, so mistakes get fixed while they're cheap. Then we train your staff and stay on hand after launch." }
      ]
    },

    why: {
      tag: "Why us",
      heading: "Built for how business works in Lebanon",
      items: [
        { icon: "⚡", title: "Works without internet", text: "Power gone? Internet down? The system keeps going and syncs when the line is back." },
        { icon: "💬", title: "On WhatsApp", text: "Orders, invoices and reports arrive on WhatsApp — where you and your customers already are." },
        { icon: "💵", title: "Clear prices", text: "Everything in dollars and in writing from the start. Nothing hidden." },
        { icon: "🤝", title: "One contact, start to finish", text: "You talk to the same person from the first chat to the last fix — not a call centre. And we answer." }
      ]
    },

    about: {
      tag: "About us",
      heading: "Who we are",
      text: "Ghazal — Digital Solutions builds and fixes practical software for shops and small businesses. Our background is banking and fintech software, where every number has to be right. We talk to you in plain language and stay with you from the first chat to the last fix."
    },

    contact: {
      tag: "Contact",
      heading: "Tell us what you need",
      text: "A rough idea is enough. Pick the form that fits and write us a few lines — or message us straight on WhatsApp.",
      details: [
        { label: "WhatsApp", value: "Send us a message", href: wa("Hi, I saw your website and I'd like to ask about something for my business.") }
      ],
      tabsLabel: "Choose a form",
      sending: "Sending…",
      success: "Got it! We'll get back to you shortly.",
      error: "Something went wrong. Try again, or message us on WhatsApp.",
      forms: {
        fix: {
          tab: "Fix / automate",
          intro: "Something not working, outdated, or eating your time?",
          subject: "Fix / upgrade / automate — Ghazal Digital",
          submit: "Send",
          fields: [
            { name: "name", label: "Your name", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "phone", label: "WhatsApp number", type: "tel", required: true, half: true, autocomplete: "tel" },
            { name: "email", label: "Email (optional)", type: "email", half: true, autocomplete: "email" },
            { name: "business", label: "Shop or company name (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "topic", label: "What needs fixing?", type: "select", required: true, half: true,
              options: ["A website", "An app or system", "Excel or a paper notebook", "Programs that should work together", "Something else"] },
            { name: "urgency", label: "How urgent is it?", type: "select", half: true,
              options: ["It's broken right now", "In the coming weeks", "Just asking"] },
            { name: "message", label: "What's the problem, or what's eating your time?", type: "textarea", required: true }
          ]
        },
        build: {
          tab: "App or website",
          intro: "A new website, a new app, or a better version of what you have.",
          subject: "Build / upgrade — Ghazal Digital",
          submit: "Send",
          fields: [
            { name: "name", label: "Your name", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "phone", label: "WhatsApp number", type: "tel", required: true, half: true, autocomplete: "tel" },
            { name: "email", label: "Email (optional)", type: "email", half: true, autocomplete: "email" },
            { name: "business", label: "Shop or company name (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "project", label: "What do you need?", type: "select", required: true,
              options: ["A new website", "Upgrade my existing website", "A new app for staff or customers", "Upgrade my existing app", "An internal system or dashboard", "Not sure yet"] },
            { name: "timeline", label: "When do you need it?", type: "select", half: true,
              options: ["As soon as possible", "Within 1–3 months", "Later on", "No rush"] },
            { name: "budget", label: "Budget (optional)", type: "select", half: true,
              options: ["Under $500", "$500–$1,500", "$1,500–$5,000", "Over $5,000", "Not sure yet"] },
            { name: "message", label: "Tell us about your business and what you need", type: "textarea", required: true }
          ]
        }
      }
    },

    footer: {
      copy: "© {year} Ghazal — Digital Solutions",
      legal: "Legal & privacy"
    }
  }
};
