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
    - BRAND.formEndpoint where the forms deliver (info@ghazalcode.ch, which
                         forwards to the company Gmail). FormSubmit asks this
                         address to confirm once before anything arrives.
    - contact.forms      the two enquiry forms: fields and choices
*/
const BRAND = {
  name: "Ghazal — Digital Solutions",
  whatsapp: "https://wa.me/9613998193",
  formEndpoint: "https://formsubmit.co/ajax/info@ghazalcode.ch",
  // Our own product, a separate app served by Cloudflare at ghazaldigital.com/talabiyye
  talabiyye: "/talabiyye"
};

// Sent with every enquiry
const PAGE = { region: "Lebanon" };

const wa = text => BRAND.whatsapp + "?text=" + encodeURIComponent(text);

const CONTENT = {
  lb: {
    langLabel: "3arabe",
    htmlLang: "ar-Latn",
    meta: {
      title: "Ghazal — Digital Solutions | Apps, websites w systems la sheghlak",
      description: "Bala wra2, bala Excel, w bala waja3 ras. Mna3mellak apps, websites w systems 3a2ad sheghlak — w iza 3endak shi 3atlan aw 3am yekhud wa2tak, mensal7u w menkhalli Automatic!."
    },
    nav: [["#services", "Shu mna3mel"], ["#talabiyye", "Talabiyye"], ["#process", "Kif mnshteghel"], ["#contact", "7kina"]],
    langSwitch: { aria: "Show the English version" },
    call: { label: "7kina 3al WhatsApp", href: wa("Marhaba, shefet el website w badde es2al 3an shi la sheghle."), style: "whatsapp" },

    hero: {
      title: "Bala wra2, bala Excel, w bala waja3 ras.",
      text: "Mna3mellak apps, websites w systems 3a2ad sheghlak — w iza 3endak shi 3atlan aw 3am yekhud wa2tak, mensal7u w menkhalli Automatic!.",
      offer: "🎁 <b>Mnfarjik awwal prototype bbalesh</b>, w ba3den men7ke bel masari. Ma fi wala dollar abel.",
      callPrefix: "aw",
      facts: ["Byeshteghel 7atta bala internet", "3arabe · English", "As3ar wad7a men el bidaye"]
    },

    // The guided picker ("Sa3edne ekhtar"): 4 short steps instead of a form.
    // Each category's `details` are the options shown in step 2.
    wizard: {
      open: "Se3edne ekhtar",
      openHint: "Mish akid shu baddak? Jaweb 3a 3 as2ile w khalas.",
      banner: "Mish akid ayya form? Khalline sa3dak tekhtar.",
      close: "Sakker",
      back: "← Rje3",
      next: "Kammel →",
      stepLabel: "Khatwe {n} men {total}",
      category: { q: "3a shu 3am tdawwer?", hint: "Ekhtar wa7ad." },
      details: { q: "Shu baddo ya3mel?", hint: "Ekhtar kel shi byenteb2." },
      timing: { q: "Emta baddak yeh?", hint: "Iza mish akid, fik tetrok w tkammel." },
      contact: { q: "Ra7 nkhallis — wen fina n7kik?", summary: "Talabak", name: "Esmak", phone: "Ra2m el WhatsApp", note: "Fi shi tene? (optional)", send: "B3at", whatsapp: "Aw b3at 3al WhatsApp" },
      categories: [
        { id: "website", icon: "🌐", title: "Website", text: "Tkoun mawjoud online w tjib zbeyen",
          details: ["Safha bta3rruf 3an sheghle", "Online shop / talabiyet", "7ajez w mawa3id", "Menu aw catalogue lal products"] },
        { id: "app", icon: "📱", title: "App", text: "Lal staff aw lal zbeyen",
          details: ["Lal staff ysajjlo stock, talabiyet aw tesleem", "Lal zbeyen yotlobo aw ye7jzo", "Points w offers lal zbeyen", "Byeshteghel bala internet"] },
        { id: "both", icon: "🔗", title: "Website + App", text: "Kel shi byeshteghel ma3 ba3do",
          details: ["El zbun byotlob online w el staff bit2abba3 bel app", "7ajez online, w el idara men el telephone", "Catalogue 3al website w talabiyet bel app", "Ma ba3ref ba3d — sa3edne khattet"] },
        { id: "system", icon: "⚙️", title: "System lal sheghl", text: "Stock, talabiyet w staff b mahall wa7ad",
          details: ["Stock w inventory", "Talabiyet w tesleem", "Zbeyen w follow-up", "Staff, shifts w mahamm", "Dashboard w ta2arir"] },
        { id: "billing", icon: "🧾", title: "Fawater w 7sebet", text: "Fawater, wusulat w meen 3leh masari",
          details: ["Fawater w wusulat jehze lal tab3a", "Shouf meen 3leh masari", "Kashf 7sab shahri la kel zbun", "Export lal mo7aseb"] },
        { id: "fix", icon: "🛠️", title: "Tasli7 aw ta7sin", text: "Shi 3endak mish 3am yemshi mni7",
          details: ["El website bati2 aw 3atlan", "El app fiya mashekel", "El Excel tafaj", "Automation la sheghl byetkarrar kel yom", "Wassel programs ma 3am ye7ko ba3don"] }
      ],
      timeline: ["Bi2a2rab wa2et", "Khilel 1–3 ishhor", "Ma fi 3ajle"],
      subject: "Guided request — Ghazal Digital",
      required: "Kteb esmak w ra2m el WhatsApp.",
      sending: "3am yetb3at…",
      done: { title: "Wosolet! 🎉", text: "Mnb3atlak 3al WhatsApp b2a2rab wa2et.", close: "Tamem" },
      error: "Fi shi ma zabat. Jarreb kamen marra, aw b3at 3al WhatsApp.",
      wa: { intro: "Marhaba! 3abbet el guide 3al website.", category: "Baddi", details: "Lezem ya3mel", timeline: "Emta", name: "Esme", note: "Mula7aza" }
    },

    services: {
      tag: "Shu mna3mel",
      heading: "El baddak eyye",
      paths: [
        {
          id: "fix",
          icon: "🛠️",
          title: "Mnsalle7, mntawwer w mna3mel automation",
          lead: "3endak system, website aw Excel, bas mish 3am yemshi metl ma lezem?",
          points: [
            "Website bati2 aw 3atlan? Mnsalle7o.",
            "System 2adim? Mnjaddo w mnzidlo li na2so.",
            "Sheghl byetkarrar kel yom — fawater, ta2arir, data entry? Mnkhalli yemshi la7alo.",
            "Programs ma 3am ye7ko ba3don? Mnwasselon ma3 ba3d."
          ],
          cta: "Khabberna shu el meshkle →"
        },
        {
          id: "build",
          icon: "🚀",
          title: "Apps w websites jdid",
          lead: "Baddak shi jdid, ma3moul 3a2ad ma7allak?",
          points: [
            "App lal staff ysajjlo el stock, el talabiyet w el zbeyen 3al telephone",
            "Website bijiblak zbeyen, bel 3arabe w bel English",
            "Systems lal ma7al byeshteghlo 7atta lamma tun2ute3 el kahraba aw el internet",
            "Dashboard la tshouf el mabi3at w el stock 3a wa2ton",
            "w Aktar!"
          ],
          cta: "Yalla nballesh →"
        }
      ]
    },

    // Our own product: a ready-made order app for Instagram / WhatsApp shops
    product: {
      tag: "Product men 3enna",
      heading: "Talabiyye: kel talabiyetak men Instagram w WhatsApp b mahall wa7ad",
      text: "Ma baddak system 3a2ad? Ballesh el yom b Talabiyye: link wa7ad bel bio, el zbun byotlob la7alo, w enta btshouf el talabiyet, el stock, el drivers w masari el cash.",
      points: ["Link lal talabiyet bel Instagram bio", "El stock byenzal la7alo", "Drivers w cash bel dollar w bel lira", "Messages jehze 3al WhatsApp"],
      cta: "Shouf Talabiyye →"
    },

    process: {
      tag: "Kif mnshteghel",
      heading: "Men awwal meeting la system shaghal",
      steps: [
        { n: "1", title: "meeting majjene", text: "Nos se3a 3al WhatsApp aw video call. Btfarjina kif 3am teshteghel hala2, w mn2ellak b sara7a iza el software huwwe el 7al aw la2." },
        { n: "2", title: "Prototype bbalesh", text: "Mna3mellak awwal nuskha (prototype) w mnfarjik yeha 3al telephone. Ma btedfa3 shi la hon." },
        { n: "3", title: "Ba3den men7ke bel masari", text: "Iza 3ajabak, mna3tik kel shi maktoub: shu ba3d fi, ade byekhod wa2et w ade bikallef. Ba3den mnkammel, mn3allem el staff w mnb2a 7addak. Iza ma 3ajabak, ma btedfa3 shi." }
      ]
    },

    why: {
      tag: "Lesh ne7na",
      heading: "Kelfe madruse, sheghel sari3, support men ba3d l sheghel",
      items: [
        { icon: "⚡", title: "Byeshteghel bala internet", text: "Ra7et el kahraba? 2ata3 el internet? El system bikammel, w bi3mel sync lamma yerja3 el khatt." },
        { icon: "💬", title: "3al WhatsApp", text: "El talabiyet, el fawater w el ta2arir bewsalo 3al WhatsApp — matra7 ma enta w zbeynak 3ayshin aslan." },
        { icon: "💵", title: "As3ar wad7a", text: "Kel shi bel dollar w maktoub men el awwal. Ma fi shi mkhabba." },
        { icon: "🤝", title: "Nafs el shakhs men el awwal lal ekher", text: "Btehke ma3 nafs el shakhs men awwal 7ake la ekher tasli7 — mish ma3 call center. W mnjewbak." }
      ]
    },

    about: {
      tag: "Meen ne7na",
      heading: "Ahla w sahla 3end Ghazal Digital",
      text: "Ne7na Ghazal — Digital Solutions: mna3mel w mnsalle7 software 3amali lal ma7allat w el sharikat el zghire. Khebretna men software el bnouk w el fintech, mahall ma kel ra2em byefre2. Mn7ke ma3ak bel lugha li btefhama, w mnkoun ma3ak men el awwal lal ekher."
    },

    contact: {
      tag: "7kina",
      heading: "Khabberna shu baddak",
      text: "fekra 3al sari3 bteke. Ekhtar el form li byenesbak w ektebelna kam satr — aw b3atelna direct 3al WhatsApp.",
      quick: { title: "Ahsan 3al WhatsApp?", text: "B3atelna resele w mnrodd 3lek b2a2rab wa2et." },
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
              options: ["Website", "App aw system", "Excel aw daftar", "Programs lezem ye7ko ma3 ba3don", "Shi tene"] },
            { name: "urgency", label: "Ade mesta3jel?", type: "select", half: true,
              options: ["3atlan hala2", "Bel jem3at el jeyye", "3am es2al bas"] },
            { name: "message", label: "Shu el meshkle, aw shu 3am yekol wa2tak?", type: "textarea", required: true }
          ]
        },
        build: {
          tab: "App aw website",
          intro: "Website jdid, app jdid, aw nuskha a7san men li 3endak.",
          subject: "Build / upgrade — Ghazal Digital",
          submit: "B3at",
          fields: [
            { name: "name", label: "Esmak", type: "text", required: true, half: true, autocomplete: "name" },
            { name: "phone", label: "Ra2m el WhatsApp", type: "tel", required: true, half: true, autocomplete: "tel" },
            { name: "email", label: "Email (optional)", type: "email", half: true, autocomplete: "email" },
            { name: "business", label: "Esm el ma7al aw el sharike (optional)", type: "text", half: true, autocomplete: "organization" },
            { name: "project", label: "Shu baddak?", type: "select", required: true,
              options: ["Website jdid", "Tatwir el website li 3ande", "App jdid lal staff aw lal zbeyen", "Tatwir el app li 3ande", "System dakhile aw dashboard", "Ma ba3ref ba3d"] },
            { name: "timeline", label: "Emta baddak yeh?", type: "select",
              options: ["Bi2a2rab wa2et", "Khilel 1–3 ishhor", "Ba3d shway", "Ma fi 3ajle"] },
            { name: "message", label: "Khabberna 3an sheghlak w shu baddak ya3mel", type: "textarea", required: true }
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
    nav: [["#services", "What we do"], ["#talabiyye", "Talabiyye"], ["#process", "How it works"], ["#contact", "Contact"]],
    langSwitch: { aria: "Shoufa bel 3arabe" },
    call: { label: "Chat with us on WhatsApp", href: wa("Hi, I saw your website and I'd like to ask about something for my business."), style: "whatsapp" },

    hero: {
      title: "No paper. No Excel. No headache.",
      text: "We build apps, websites and systems around the way you work: your staff log everything on their phones, and you see it all in real time. And if something's broken or eating your time, we fix it and make it run itself.",
      offer: "🎁 <b>We show you a first prototype for free</b>, then we talk about payment. Not a dollar before that.",
      callPrefix: "or",
      facts: ["Works even without internet", "English · 3arabe", "Clear prices from day one"]
    },

    wizard: {
      open: "Help me choose",
      openHint: "Not sure what you need? Answer 3 quick questions.",
      banner: "Not sure which form? Let us help you choose.",
      close: "Close",
      back: "← Back",
      next: "Next →",
      stepLabel: "Step {n} of {total}",
      category: { q: "What are you looking for?", hint: "Pick one." },
      details: { q: "What should it do?", hint: "Pick everything that applies." },
      timing: { q: "When do you need it?", hint: "Not sure? Skip ahead." },
      contact: { q: "Almost done — where can we reach you?", summary: "Your request", name: "Your name", phone: "WhatsApp number", note: "Anything else? (optional)", send: "Send request", whatsapp: "Or send it on WhatsApp" },
      categories: [
        { id: "website", icon: "🌐", title: "Website", text: "Be found online and get customers",
          details: ["A page that presents my business", "Online shop / take orders", "Bookings & appointments", "Menu or product catalogue"] },
        { id: "app", icon: "📱", title: "App", text: "For your staff or your customers",
          details: ["For my staff to log stock, orders or deliveries", "For my customers to order or book", "Loyalty points & offers", "Works without internet"] },
        { id: "both", icon: "🔗", title: "Website + App", text: "Everything working together",
          details: ["Customers order online, staff handle it in the app", "Bookings online, managed from a phone", "Catalogue on the site, orders in the app", "Not sure yet — help me plan it"] },
        { id: "system", icon: "⚙️", title: "Business system", text: "Stock, orders and staff in one place",
          details: ["Stock & inventory", "Orders & deliveries", "Customers & follow-ups", "Staff, shifts & tasks", "Dashboard & reports"] },
        { id: "billing", icon: "🧾", title: "Billing & invoices", text: "Invoices, receipts and who owes what",
          details: ["Print-ready invoices & receipts", "Track who owes me money", "Monthly statement per client", "Export for the accountant"] },
        { id: "fix", icon: "🛠️", title: "Fix or improve", text: "Something you have isn't working well",
          details: ["My website is slow or broken", "My app has problems", "My Excel is out of control", "Automate work we repeat every day", "Connect programs that don't talk"] }
      ],
      timeline: ["As soon as possible", "Within 1–3 months", "No rush"],
      subject: "Guided request — Ghazal Digital",
      required: "Please add your name and WhatsApp number.",
      sending: "Sending…",
      done: { title: "Got it! 🎉", text: "We'll message you on WhatsApp shortly.", close: "Done" },
      error: "Something went wrong. Try again, or send it on WhatsApp.",
      wa: { intro: "Hi! I used the guide on your website.", category: "I'm looking for", details: "It should cover", timeline: "When", name: "Name", note: "Note" }
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

    product: {
      tag: "Our product",
      heading: "Talabiyye: all your Instagram and WhatsApp orders in one place",
      text: "Don't need a custom system? Start today with Talabiyye: one link in your bio, customers order on their own, and you see orders, stock, drivers and the cash they collect.",
      points: ["Order link for your Instagram bio", "Stock updates by itself", "Drivers and cash in USD and LBP", "Ready-made WhatsApp messages"],
      cta: "See Talabiyye →"
    },

    process: {
      tag: "How it works",
      heading: "From first chat to a working system",
      steps: [
        { n: "1", title: "Free chat", text: "Half an hour on WhatsApp or a video call. You show us how you work today, and we tell you honestly whether software is the answer." },
        { n: "2", title: "Free prototype", text: "We build a first version (a prototype) and show it to you on your phone. You pay nothing up to here." },
        { n: "3", title: "Then we talk payment", text: "If you like it, you get everything in writing: what's left to build, how long it takes and what it costs. Then we finish it, train your staff and stay on hand. If you don't like it, you pay nothing." }
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
      quick: { title: "Prefer to chat?", text: "Message us on WhatsApp and we will get back to you shortly." },
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
            { name: "timeline", label: "When do you need it?", type: "select",
              options: ["As soon as possible", "Within 1–3 months", "Later on", "No rush"] },
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
