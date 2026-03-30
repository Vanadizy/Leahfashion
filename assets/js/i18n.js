"use strict";

(function initializeLeahI18n() {
  const STORAGE_KEY = "leah-fashion-language";
  const DEFAULT_LANGUAGE = "en";

  const LANGUAGES = {
    en: {
      label: "English",
      flag: "🇬🇧"
    },
    sw: {
      label: "Kiswahili",
      flag: "🇹🇿"
    }
  };

  const UI_TEXT = {
    en: {
      menu: "Menu",
      language: "Language",
      readMore: "Read More",
      contactUs: "Contact Us",
      awardMark: "Award",
      presentedIn: "Presented in {year}",
      inquiryRequired: "Complete all fields before sending the inquiry.",
      inquiryOpening: "Opening your email app with the inquiry prepared for Leah Fashion.",
      inquirySubject: "Leah Fashion Inquiry",
      inquiryGreeting: "Hello {name},",
      inquiryLead: "I found you on the website and I would like to ask about my bridal design / fitting request.",
      eventDate: "Event date:",
      preferredStyle: "Preferred style:",
      moreDetails: "More details:",
      slideLabel: "Go to slide {index}",
      aboutKickers: ["Bloom", "Joy", "Grace"],
      backToTop: "Back to top",
      whatsapp: "WhatsApp"
    },
    sw: {
      menu: "Menyu",
      language: "Lugha",
      readMore: "Soma Zaidi",
      contactUs: "Wasiliana Nasi",
      awardMark: "Tuzo",
      presentedIn: "Iliwasilishwa mwaka {year}",
      inquiryRequired: "Jaza taarifa zote kabla ya kutuma ombi.",
      inquiryOpening: "Tunafungua programu yako ya barua pepe na ombi lililoandaliwa kwa Leah Fashion.",
      inquirySubject: "Ombi la Leah Fashion",
      inquiryGreeting: "Habari {name},",
      inquiryLead: "Nimekuona kupitia tovuti na ningependa kuuliza kuhusu ombi langu la ubunifu au kipimo cha harusi.",
      eventDate: "Tarehe ya tukio:",
      preferredStyle: "Mtindo ninaopendelea:",
      moreDetails: "Maelezo zaidi:",
      slideLabel: "Nenda kwenye slaidi ya {index}",
      aboutKickers: ["Mng'aro", "Furaha", "Neema"],
      backToTop: "Rudi juu",
      whatsapp: "WhatsApp"
    }
  };

  const META = {
    sw: {
      home: {
        title: "Leah Fashion | Mbunifu Bora wa Mitindo ya Harusi Afrika Mashariki",
        description:
          "Leah Fashion ni studio ya mavazi ya harusi inayotambulika Afrika Mashariki, ikiwa na couture ya kifahari, vipimo vilivyo makini, Mwanamke Kinara Awards 2025, Mwanamke Shupavu 2025, na uongozi wa ubunifu kutoka Mwanza."
      },
      catalog: {
        title: "Leah Fashion | Katalogi ya Harusi na Couture",
        description:
          "Chunguza katalogi ya Leah Fashion yenye gauni za harusi, mavazi ya mapokezi, couture maalum, na mwongozo wa vipimo unaoongozwa kwa umaridadi kutoka Mwanza."
      },
      gallery: {
        title: "Leah Fashion | Galeri ya Harusi na Studio",
        description:
          "Tazama galeri ya Leah Fashion yenye picha za studio, matukio ya vipimo, mwonekano wa harusi, na maelezo ya mavazi ya kifahari yaliyoandaliwa kwa furaha na umaridadi."
      }
    }
  };

  const HOME_SW_CONTENT = {
    brand: {
      tagline: "Studio ya mavazi ya harusi"
    },
    hero: {
      eyebrow: "Mavazi ya Harusi ya Leah Fashion",
      title:
        "Gauni za harusi, mavazi ya mapokezi, na couture maalum iliyobuniwa kwa umakini wa kifahari na mwisho wenye furaha.",
      text:
        "Leah Fashion hutengeneza mavazi ya harusi yanayoonekana ya kifahari kwenye picha, yaliyo tulivu wakati wa kutembea, na yanayokumbukwa kuanzia kipimo cha kwanza hadi muonekano wa mwisho.",
      buttonLabel: "Soma Zaidi"
    },
    whyUs: {
      title: "Kwa nini wateja wanamwamini Leah Fashion",
      intro:
        "Wateja huchagua Leah Fashion kwa sababu studio inaunganisha mwongozo wenye utulivu, usahihi wa vipimo, na mwonekano wa harusi uliokamilika vizuri. Chapa hii pia imebeba utambuzi wa wanawake wa mwaka 2025 pamoja na hadithi ya ubunifu iliyoanzia Mwanza, jambo linalowapa mabibi harusi imani kwa kazi na kwa mwanamke aliye nyuma ya jina hili.",
      pillars: [
        {
          title: "Ushauri Unaokuongoza",
          text: "Kila bibi harusi huongozwa katika kuchagua vitambaa, miundo, maelezo ya mwisho, na njia ya vipimo kwa utulivu, kwa karibu, na kwa urahisi kueleweka."
        },
        {
          title: "Ukamilishaji wa Kipekee",
          text: "Leah Fashion huboresha kila vazi kwa kuzingatia umbo la mteja, hali ya tukio, na mwendo wa mwili ili muonekano wa mwisho uwe wa asili, wa kuvutia, na wa kujiamini."
        },
        {
          title: "Vipimo vya Furaha",
          text: "Mawasiliano ya joto, ratiba zilizo wazi, na marekebisho yenye umakini huifanya safari iwe ya kusisimua badala ya kuwa ya shinikizo hasa karibu na siku ya harusi."
        },
        {
          title: "Uongozi Uliotambuliwa",
          text: "Leah Fashion inaunganisha ustadi wa mavazi ya harusi na utambuzi wa hadharani, ikiwemo Mwanamke Kinara 2025, Mwanamke Shupavu 2025, na hadithi ya mwanzilishi wa Cherehani Festival Tanzania kutoka Mwanza."
        }
      ],
      awardsTitle: "Tuzo na hatua za uongozi zilizo nyuma ya Leah Fashion",
      awards: [
        {
          year: "2025",
          title: "Mwanamke Kinara Awards 2025",
          meta: "Utambuzi wa mchango wa wanawake",
          text: "Ufafanuzi wa Mwanamke Kinara huonesha jukwaa la kutambua wanawake wenye mchango unaoonekana katika jamii au biashara. Kwenye tovuti hii, tuzo hiyo inaashiria utambuzi wa Leah Fashion mwaka 2025 kwa uongozi wa ubunifu na ushawishi wa chapa kutoka Mwanza."
        },
        {
          year: "2025",
          title: "Mwanamke Shupavu 2025",
          meta: "Ujasiri na uongozi imara",
          text: "Tovuti hii inawasilisha tuzo hii ya 2025 kama utambuzi wa ujasiri, uthabiti, na ukuaji wa biashara inayoongozwa na mwanamke. Taarifa za umma kuhusu jina halisi la tuzo hii ni chache, hivyo maelezo haya yanategemea jina ulilotoa pamoja na maana ya kawaida ya mwanamke shupavu nchini Tanzania."
        },
        {
          year: "Mwanzilishi",
          title: "Cherehani Festival Tanzania",
          meta: "Ilianzia Mwanza",
          text: "Leah Fashion pia humtambulisha Leah kama mwanzilishi wa Cherehani Festival Tanzania, mpango wa ubunifu unaoelezwa na chapa kuanzia Mwanza kwa lengo la kusherehekea ustadi wa moda, mwonekano wa wabunifu, na nguvu ya ubunifu wa ndani."
        }
      ]
    },
    catalog: {
      title: "Makusanyo ya Leah Fashion, vipimo, na mwelekeo wa ubunifu wa kipekee",
      intro:
        "Muhtasari huu wa katalogi unakutambulisha kwenye mitindo maarufu ya Leah Fashion. Fungua ukurasa kamili wa katalogi kuona mavazi ya sherehe kuu, mapokezi, maelezo ya vipimo, na taarifa za ubunifu wa kipekee kwa upana zaidi.",
      items: [
        {
          title: "Bridal Signature",
          subtitle: "Mkusanyiko wa gauni za harusi",
          description: "Miundo ya maharusi yenye neema iliyoundwa kwa kuingia kwa heshima, umbo linalovutia, uvaaji unaosaidia, na mwonekano wa sherehe usiopitwa na wakati.",
          action: "Angalia Maelezo ya Mkusanyiko"
        },
        {
          title: "Reception Glow",
          subtitle: "Mitindo ya mapokezi ya usiku",
          description: "Mitindo ya mapokezi yenye mvuto iliyoundwa kwa kuingia kwa kujiamini, mwendo mzuri, picha zenye nguvu, na hali ya sherehe baada ya ibada kuu.",
          action: "Fungua Maelezo ya Mapokezi"
        },
        {
          title: "Celebration Couture",
          subtitle: "Mavazi ya kifahari ya hafla",
          description: "Gauni zenye maelezo tajiri zinazotengenezwa kwa ajili ya utambulisho, mapokezi ya jioni, sherehe za kifamilia, na picha zenye kukumbukwa.",
          action: "Chunguza Couture Maalum"
        }
      ]
    },
    gallery: {
      title: "Galeri ya studio na matukio ya harusi ya karibuni",
      intro:
        "Tazama muhtasari wa picha hapa, kisha fungua ukurasa kamili wa galeri kuona picha zaidi za vipimo, muonekano uliokamilika, maelezo ya atelier, na mitindo ya sherehe.",
      items: [
        {
          title: "Wakati wa Studio ya Leah",
          text: "Picha tulivu ya studio inayoonyesha kujiamini, umakini wa ushonaji, na mwongozo wa kibunifu unaoongoza kila kipande cha Leah Fashion."
        },
        {
          title: "Maelezo ya Kifahari",
          text: "Ushonaji wa vito, rangi zenye joto, na ukamilishaji uliochongwa huungana kuunda muonekano wa jioni wenye nguvu."
        },
        {
          title: "Kipimo Kilichomfurahisha Mteja",
          text: "Kipimo kilichokamilika kikiwa na furaha, utulivu, na kujiamini katika umbo la mwisho."
        },
        {
          title: "Neema ya Maharusi",
          text: "Picha safi ya bibi harusi inayoonyesha umbo la mavazi, mguso wa lace, na mwisho uliopangika vizuri kwa siku ya harusi."
        },
        {
          title: "Mwonekano wa Mapokezi",
          text: "Muonekano wa sherehe wenye utofauti wa kuvutia, hisia tajiri, na nguvu ya kusherehekea isiyofichika."
        }
      ]
    },
    about: {
      title: "Studio ya maharusi iliyojengwa kwa uchangamfu, umaridadi, na maelezo yenye furaha",
      story:
        "Leah Fashion inaunganisha ushonaji wa maharusi wenye neema, mazingira ya vipimo yenye utulivu, na mwonekano wa joto unaobaki wa kifahari bila kuwa mzito. Mbinu ya studio ni ya karibu, maumbo ya mavazi ni yaliyosafishwa vizuri, na kila maelezo hupangwa ili mteja ajisikie mzuri, mwenye furaha, na kuonekana kikamilifu.",
      quote:
        "Mitindo ya maharusi yenye furaha inastahili mchakato wenye utulivu, maelezo yenye neema, na mwisho unaohisi kuwa wa binafsi.",
      values: [
        {
          title: "Uchangamfu wa Kifloral",
          text: "Mchanganyiko wa tabaka za dhahabu laini, mapambo ya utulivu, na mwonekano wa kukaribisha hujenga hali ya maharusi yenye mwanga, ya kike, na ya kukumbukwa."
        },
        {
          title: "Vipimo vya Furaha",
          text: "Mchakato umeundwa kumfanya mteja ajisikie huru, kusherehekewa, na kuelewa hatua inayofuata kuanzia ushauri hadi marekebisho ya mwisho."
        },
        {
          title: "Umaridadi wa Rangi Zinazofanana",
          text: "Paleti ya dhahabu, krimu, na vivuli vya kina huweka chapa ikiwa thabiti huku ikitoa nafasi kwa kila gauni na picha kuonekana zaidi."
        }
      ]
    },
    contact: {
      title: "Panga kipimo au uliza kuhusu ubunifu maalum",
      intro:
        "Tuma fomu ya ombi la maharusi, omba maelekezo, au tumia njia za mawasiliano ya moja kwa moja na Leah Fashion Busweru, Mwanza.",
      cards: [
        {
          title: "Simu na WhatsApp",
          text: "+255 769 727 070"
        },
        {
          title: "Barua Pepe",
          text: "hello@leahfashion.com"
        },
        {
          title: "Mahali",
          text: "Leah Fashion Busweru, Mwanza"
        },
        {
          title: "Saa za Studio",
          text: "Jumatatu - Alhamisi | 9:00 AM - 6:00 PM, Ijumaa | 9:00 AM - 2:00 PM, Jumamosi - Jumapili | Imefungwa"
        }
      ],
      locationTitle: "Leah Fashion Busweru Mwanza",
      locationSummary:
        "Tembelea Leah Fashion Busweru Mwanza kwa vipimo vya maharusi, ushauri wa ubunifu wa kipekee, na mwongozo wa mavazi ya harusi katika studio yenye utulivu, kisha tumia kiungo cha maelekezo kufungua njia moja kwa moja kwenye Google Maps."
    },
    footer: {
      note: "Leah Fashion ya Busweru, Mwanza inaunganisha ustadi wa maharusi uliotambuliwa kwa tuzo, mwongozo wa karibu, na mitindo ya sherehe yenye furaha."
    }
  };

  const catalogCardsSw = [
    {
      tag: "Bridal Signature",
      title: "Gauni za sherehe kuu zilizoundwa kwa umaridadi na kujiamini.",
      text: "Mstari wa Bridal Signature unaweka mkazo kwenye muundo safi, ukamilishaji laini, maelezo yaliyosawazishwa, na umbo linalopendeza kwenye picha kutoka kila upande. Leah Fashion huandaa muonekano huu kwa wateja wanaotaka neema ya kudumu bila kupoteza utu wao.",
      list: [
        {
          title: "Inafaa kwa",
          text: "Ibada za kanisani, ndoa za kiraia, picha za maharusi, na mapokezi yenye umaridadi."
        },
        {
          title: "Mwelekeo wa ubunifu",
          text: "Umbo linalokaa vizuri, usaidizi wa kuvaa, usimamizi wa mkia wa gauni, na ukamilishaji uliosafishwa."
        },
        {
          title: "Mchakato wa studio",
          text: "Ushauri, mapitio ya vipimo, marekebisho ya umbo, na ukamilishaji wa mwisho wa maharusi."
        }
      ]
    },
    {
      tag: "Reception Glow",
      title: "Mavazi ya mapokezi yaliyoundwa kwa mwendo, mvuto, na sherehe.",
      text: "Mitindo ya mapokezi ya Leah Fashion husawazisha mwonekano wa kuvutia na uvaaji ulio rahisi. Vipande hivi vinafaa kwa muonekano wa pili wa bibi harusi, kuingia usiku, ngoma za sherehe, na picha za nguvu baada ya ibada kuu.",
      list: [
        {
          title: "Inafaa kwa",
          text: "Mapokezi ya jioni, muonekano wa pili wa bibi harusi, utambulisho, na kuingia kwenye sherehe."
        },
        {
          title: "Mwelekeo wa ubunifu",
          text: "Tofauti tajiri, mitindo inayoonekana, mwendo wa kujiamini, na ukamilishaji wenye athari kubwa."
        },
        {
          title: "Mchakato wa studio",
          text: "Mwongozo wa hisia za muonekano, mapitio ya kitambaa, ukaguzi wa mwendo, na uvaaji wa mwisho tayari kwa tukio."
        }
      ]
    },
    {
      tag: "Celebration Couture",
      title: "Mavazi maalum ya hafla yenye maelezo tajiri na ukamilishaji wa kuvutia.",
      text: "Mwelekeo huu wa couture huandaliwa kwa wateja wanaotaka rangi, vito, na uwepo mkubwa wa kifasheni kwa utambulisho, hafla za kifamilia, na sherehe rasmi za jioni. Mtindo unabaki wa kifahari huku ukiwa wa kujieleza zaidi.",
      list: [
        {
          title: "Inafaa kwa",
          text: "Utambulisho, sherehe rasmi, mapokezi ya jioni, na hafla za kifamilia."
        },
        {
          title: "Mwelekeo wa ubunifu",
          text: "Vito, texture, mistari iliyochongwa, na maelezo ya kuvutia yanayobaki kuwa ya kifahari."
        },
        {
          title: "Mchakato wa studio",
          text: "Ushauri wa ubunifu, mwongozo wa mapambo, ukaguzi wa vipimo, na ukamilishaji wa mwisho."
        }
      ]
    },
    {
      tag: "Studio Support",
      title: "Leah Fashion pia huongoza mpangilio wa vipimo na uratibu wa mwonekano.",
      text: "Zaidi ya gauni moja, Leah Fashion humsaidia mteja kufikiria mwonekano mzima: nini kinafaa kwa ibada kuu, nini hubadilika kwa mapokezi, na kila muonekano unapaswa kujisikiaje ana kwa ana na kwenye picha. Matokeo yake ni uzoefu kamili wa styling ya harusi, si vazi pekee.",
      list: [
        {
          title: "Inajumuisha",
          text: "Maelezo ya vipimo, ufaafu wa tukio, ushauri wa umbo la vazi, na uratibu wa taswira."
        },
        {
          title: "Mwelekeo wa mtindo",
          text: "Umaridadi, uchangamfu, ukamilifu, na muundo unaomweka bibi harusi kuwa kitovu."
        }
      ]
    }
  ];

  const galleryCardsSw = [
    {
      tag: "Studio Presence",
      title: "Mtazamo wa atelier ulio nyuma ya chapa.",
      text: "Picha hii ya studio inaonyesha kujiamini na ushiriki binafsi unaoitambulisha Leah Fashion. Wateja hawapati mchakato wa mbali. Wanapitia safari ya karibu, iliyoongozwa, na yenye ubunifu kuanzia wazo hadi kipimo.",
      list: [
        {
          title: "Tukio",
          text: "Siku ya Vipimo Studio"
        },
        {
          title: "Lengo",
          text: "Mwongozo wa mwanzilishi, hali ya ushauri, na hisia ya kwanza ya atelier."
        },
        {
          title: "Maelezo ya picha",
          text: "Picha hii humtambulisha mtu na uwepo ulio nyuma ya Leah Fashion."
        }
      ]
    },
    {
      tag: "Happy Fitting",
      title: "Hisia ya mwisho ni muhimu kama vazi lenyewe.",
      text: "Sababu moja inayowafanya wateja warudi Leah Fashion ni uzoefu wa vipimo. Sio suala la vipimo pekee. Ni kumsaidia mteja ajisikie mwenye furaha, kuonekana, na kuwa huru kabisa ndani ya vazi lililokamilika.",
      list: [
        {
          title: "Tukio",
          text: "Siku ya Vipimo Studio"
        },
        {
          title: "Lengo",
          text: "Utulivu wa mteja, kujiamini kwenye kipimo, na furaha ya kuona muonekano wa mwisho."
        },
        {
          title: "Maelezo ya picha",
          text: "Tabasamu na mwonekano vinaonyesha namna studio inavyounganisha uzuri na urahisi."
        }
      ]
    },
    {
      tag: "Bridal Finish",
      title: "Mwonekano safi wa maharusi ulioundwa kwa neema na utulivu wa kujiamini.",
      text: "Muonekano huu unaonyesha muundo uliozuiliwa na umaridadi wa utulivu ambao Leah Fashion hulenga katika vipande vya maharusi. Umbo limesafishwa, ukamilishaji ni laini, na matokeo ya picha hubaki ya kudumu.",
      list: [
        {
          title: "Tukio",
          text: "Kikao cha Picha za Harusi"
        },
        {
          title: "Lengo",
          text: "Umbo la sherehe kuu, mkao wa utulivu wa bibi harusi, na ukamilishaji uliosafishwa kwenye mwanga wa asili."
        },
        {
          title: "Maelezo ya picha",
          text: "Mistari ya gauni na mpangilio wa picha za nje vinaonyesha anasa ya utulivu ya ubunifu huu."
        }
      ]
    },
    {
      tag: "Detail Direction",
      title: "Texture, mapambo, na ukamilishaji wa kuvutia.",
      text: "Picha hii inaonyesha upande tajiri zaidi wa chapa ambapo rangi zenye nguvu, ushonaji wa vito, na uwepo wa hafla huwa kitovu. Mtindo unabaki wa juu huku ukibaki ndani ya utambulisho wa joto wa tovuti.",
      list: [
        {
          title: "Tukio",
          text: "Kikao cha Picha za Harusi"
        },
        {
          title: "Lengo",
          text: "Texture ya uso wa vazi, mapambo, na upande wa couture wenye uzito wa Leah Fashion."
        },
        {
          title: "Maelezo ya picha",
          text: "Picha hii imejikita zaidi kwenye ukamilishaji na maelezo kuliko mandhari pana ya tukio."
        }
      ]
    },
    {
      tag: "Reception Energy",
      title: "Mitindo ya sherehe yenye mwendo na mvuto mkubwa.",
      text: "Picha za mapokezi zinaipa galeri nguvu zaidi ya kifasheni. Zinaonyesha namna Leah Fashion inavyosawazisha mvuto na uvaaji ili mteja aweze kutembea, kupiga picha, na kusherehekea kwa utulivu bila kupoteza athari ya mwonekano.",
      list: [
        {
          title: "Tukio",
          text: "Usiku wa Sherehe za Mapokezi"
        },
        {
          title: "Lengo",
          text: "Mwendo, styling ya kuingia, na kauli imara ya fashion ya jioni."
        },
        {
          title: "Maelezo ya picha",
          text: "Muonekano huu unaonyesha mabadiliko kutoka umaridadi wa ibada kuu hadi nguvu ya sherehe."
        }
      ]
    }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function mergeDeep(base, patch) {
    if (Array.isArray(base) && Array.isArray(patch)) {
      const total = Math.max(base.length, patch.length);
      return Array.from({ length: total }, (_, index) => {
        if (patch[index] === undefined) {
          return clone(base[index]);
        }

        return mergeDeep(base[index] ?? {}, patch[index]);
      });
    }

    if (base && typeof base === "object" && patch && typeof patch === "object") {
      const output = { ...base };
      Object.keys(patch).forEach((key) => {
        output[key] = mergeDeep(base[key], patch[key]);
      });
      return output;
    }

    return patch ?? base;
  }

  function format(template, tokens) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => String(tokens?.[key] ?? ""));
  }

  function getLanguage() {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGES[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
  }

  function setLanguage(language) {
    if (!LANGUAGES[language]) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, language);
  }

  function t(key, tokens) {
    const language = getLanguage();
    const source = UI_TEXT[language]?.[key] ?? UI_TEXT.en[key];

    if (Array.isArray(source)) {
      return source.slice();
    }

    return format(source ?? "", tokens);
  }

  function localizeContent(content) {
    if (getLanguage() !== "sw") {
      return clone(content);
    }

    return mergeDeep(clone(content), HOME_SW_CONTENT);
  }

  function setText(target, value) {
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (element) {
      element.textContent = value;
    }
  }

  function setTexts(selector, values) {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) {
        element.textContent = values[index];
      }
    });
  }

  function setAttribute(target, name, value) {
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (element) {
      element.setAttribute(name, value);
    }
  }

  function setSelectOptions(selector, values) {
    const select = document.querySelector(selector);
    if (!select) {
      return;
    }

    Array.from(select.options).forEach((option, index) => {
      if (values[index] !== undefined) {
        option.textContent = values[index];
      }
    });
  }

  function applySharedTranslations() {
    setTexts("#site-nav > a", ["Kwa Nini Sisi", "Katalogi", "Galeri", "Kuhusu", "Mawasiliano"]);
    setTexts(".footer-nav > a", ["Nyumbani", "Katalogi", "Galeri", "Mawasiliano", "Binafsisha"]);
    setTexts(".brand-tagline", ["Studio ya mavazi ya harusi"]);
    setText(
      ".footer-note",
      "Leah Fashion ya Busweru, Mwanza inaunganisha ustadi wa maharusi uliotambuliwa kwa tuzo, mwongozo wa karibu, na mitindo ya sherehe yenye furaha."
    );
    setText(".footer-social .mini-label", "Fuata Leah Fashion");
    setText("#nav-toggle .visually-hidden", "Menyu");
    setAttribute("#nav-toggle", "aria-label", "Fungua menyu");
    setAttribute("#floating-whatsapp", "title", t("whatsapp"));
    setAttribute("#back-to-top", "title", t("backToTop"));
    setAttribute("#back-to-top", "aria-label", t("backToTop"));
  }

  function applyMeta(pageKey) {
    const meta = META.sw[pageKey];
    if (!meta) {
      return;
    }

    document.title = meta.title;
    document.documentElement.lang = "sw";

    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((element) => {
      element.setAttribute("content", meta.description);
    });

    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((element) => {
      element.setAttribute("content", meta.title);
    });
  }

  function applyHomePageTranslations() {
    setText(".why-heading-card .section-tag", "Kwa Nini Uchague Leah Fashion");
    setText(".awards-heading .section-tag", "Tuzo Zilizopatikana");
    setText(
      ".awards-note",
      "Mchanganyiko wa utambuzi wa wanawake, heshima ya uthabiti, na hatua za uongozi zinazohusishwa na kazi ya Leah Fashion kutoka Mwanza."
    );
    setAttribute("#award-prev", "aria-label", "Tuzo iliyotangulia");
    setAttribute("#award-next", "aria-label", "Tuzo inayofuata");
    setAttribute("#awards-dots", "aria-label", "Slaidi za tuzo");
    setText("#catalog .section-tag", "Katalogi");
    setText("#gallery .section-tag", "Galeri");
    setText("#about .section-tag", "Kuhusu Leah Fashion");
    setText("#about .mini-label", "Misingi ya Studio");
    setText("#contact .section-tag", "Mawasiliano");
    setText("#catalog .section-button", "Fungua Ukurasa wa Katalogi");
    setText("#gallery .section-button", "Fungua Ukurasa wa Galeri");
    setText(".contact-form-panel .mini-label", "Fomu ya Maombi");
    setText(".contact-form-panel h3", "Tuma ombi la harusi kwa Leah Fashion");

    const contactFormEmail = document.getElementById("contact-form-email");
    const email = contactFormEmail?.textContent || "hello@leahfashion.com";
    const intro = document.querySelector(".contact-form-intro");
    if (intro) {
      intro.innerHTML = `Jaza fomu hii na uandae ombi lako kwa <strong id="contact-form-email">${email}</strong>. Muundo huu umeandaliwa kwa ujumuishaji wa barua pepe ya Leah Fashion ili miadi, maombi ya gauni, na maswali ya vipimo yafuatiliwe kwa uwazi.`;
    }

    setText("#contact-name-label", "Jina Kamili");
    setText("#contact-phone-label", "Namba ya Simu");
    setText("#contact-email-label", "Anwani ya Barua Pepe");
    setText("#contact-service-label", "Huduma Unayohitaji");
    setText("#contact-message-label", "Ujumbe");
    setSelectOptions("#contact-service", [
      "Chagua huduma",
      "Gauni la harusi",
      "Muonekano wa mapokezi",
      "Couture maalum",
      "Miadi ya kipimo"
    ]);
    setText(".contact-form-actions .section-button", "Tuma Ombi");
    setText(
      ".form-note",
      "Kutuma kutafungua programu yako ya barua pepe ikiwa na ombi lililoandaliwa kwa Leah Fashion."
    );
    setText(".contact-actions .mini-label", "Njia za Mawasiliano");
    setText("#contact-call-link", "Piga Simu Studio");
    setText("#contact-email-link", "Tuma Barua Pepe");
    setText("#contact-whatsapp-link", "Ongea kwa WhatsApp");
    setText("#contact-directions-link", "Pata Maelekezo");
    setText(".location-panel .mini-label", "Mahali pa Studio");
    setTexts(".location-meta-item strong", ["Anwani", "Saa za Kazi"]);
  }

  function applyCatalogPageTranslations() {
    setText(".page-hero .section-tag", "Ukurasa wa Katalogi");
    setText(
      ".page-hero h1",
      "Makusanyo ya kina na mwongozo wa styling ya maharusi wa Leah Fashion."
    );
    setText(
      ".page-hero-copy p:not(.section-tag)",
      "Ukurasa huu unaongeza maelezo ya katalogi kwa upana zaidi kuhusu maumbo ya mavazi, mwongozo wa vipimo, uchaguzi wa ukamilishaji, na aina ya matukio ambayo kila mkusanyiko umeundwa kuyahudumia."
    );
    setText(".detail-intro .section-tag", "Katalogi ya Leah Fashion");
    setText(
      ".detail-intro h2",
      "Mavazi maalum ya harusi yaliyopangwa kwa uzuri, utulivu wa kuvaa, na sherehe."
    );
    setText(
      ".detail-intro p",
      "Leah Fashion hubuni mavazi ya maharusi na hafla kwa wateja wanaotaka umbo lenye nguvu, mwendo wa kifahari, na ukamilishaji unaobaki kuwa wa binafsi. Kila mkusanyiko hapa chini unaonyesha jinsi studio inavyokaribia mavazi ya ibada kuu, mapokezi, na maendeleo ya couture maalum."
    );
    setText("#catalog-category-1-kicker", "Sherehe Kuu");
    setText("#catalog-category-1-title", "Saini za Sherehe Kuu");
    setText(
      "#catalog-category-1-text",
      "Mionekano ya maharusi iliyosafishwa kwa ajili ya kuingia kwa heshima, picha za karibu, na sehemu ya kifahari zaidi ya siku ya harusi."
    );
    setText("#catalog-category-2-kicker", "Mapokezi na Hafla");
    setText("#catalog-category-2-title", "Mionekano ya Mapokezi");
    setText(
      "#catalog-category-2-text",
      "Mitindo ya kuvutia zaidi iliyopangwa kwa kuingia kwa pili, styling ya sherehe, na fashion ya hafla baada ya ibada kuu."
    );
    setText("#catalog-category-3-kicker", "Mwongozo wa Styling");
    setText("#catalog-category-3-title", "Msaada wa Studio");
    setText(
      "#catalog-category-3-text",
      "Mwongozo wa styling na vipimo unaounganisha muonekano wa ibada kuu, wa mapokezi, na uwasilishaji mzima wa bibi harusi."
    );

    document.querySelectorAll(".detail-card").forEach((card, index) => {
      const translation = catalogCardsSw[index];
      if (!translation) {
        return;
      }

      setText(card.querySelector(".section-tag"), translation.tag);
      setText(card.querySelector("h3"), translation.title);
      setText(card.querySelector("h3 + p"), translation.text);

      const listItems = card.querySelectorAll(".detail-list div");
      listItems.forEach((item, itemIndex) => {
        const listTranslation = translation.list[itemIndex];
        if (!listTranslation) {
          return;
        }

        item.innerHTML = `<strong>${listTranslation.title}</strong>${listTranslation.text}`;
      });
    });

    setTexts(".section-cta .section-button", ["Panga Kipimo", "Fungua Ukurasa wa Galeri"]);
  }

  function applyGalleryPageTranslations() {
    setText(".page-hero .section-tag", "Ukurasa wa Galeri");
    setText(
      ".page-hero h1",
      "Wakati wa harusi, vipimo, na taswira za studio kutoka Leah Fashion."
    );
    setText(
      ".page-hero-copy p:not(.section-tag)",
      "Ukurasa wa galeri unatoa nafasi zaidi kwa picha, texture, na maelezo ya ukamilishaji yaliyo nyuma ya uzoefu wa maharusi wa Leah Fashion."
    );
    setText(".detail-intro .section-tag", "Galeri ya Leah Fashion");
    setText(
      ".detail-intro h2",
      "Mtazamo mpana wa hali ya studio, mchakato wa vipimo, na muonekano uliokamilika."
    );
    setText(
      ".detail-intro p",
      "Picha hizi zinaonyesha utofauti wa Leah Fashion: umaridadi wa maharusi, mitindo ya mapokezi yenye nguvu, nyakati za vipimo maalum, na maelezo ya mavazi ya hafla yenye kujieleza."
    );
    setText("#gallery-category-1-kicker", "Siku ya Vipimo Studio");
    setText("#gallery-category-1-title", "Uwepo wa Mwanzilishi na Nyakati za Vipimo");
    setText(
      "#gallery-category-1-text",
      "Mtazamo huu wa tukio unaonyesha hali ya karibu ya studio, ushiriki wa mwanzilishi, na furaha ya mteja wakati wa vipimo."
    );
    setText("#gallery-category-2-kicker", "Kikao cha Picha za Harusi");
    setText("#gallery-category-2-title", "Ukamilishaji wa Maharusi na Mwelekeo wa Maelezo");
    setText(
      "#gallery-category-2-text",
      "Picha hizi za ukubwa wa kati zinaangazia umbo la mwisho la bibi harusi, uzuri wa picha, na maelezo yanayounda utambulisho wa Leah Fashion."
    );
    setText("#gallery-category-3-kicker", "Usiku wa Sherehe za Mapokezi");
    setText("#gallery-category-3-title", "Muonekano wa Kuingia na Hali ya Hafla");
    setText(
      "#gallery-category-3-text",
      "Kundi hili la tukio linaonyesha upande wenye nguvu wa sherehe ambapo mwendo, utofauti, na nguvu ya kuingia huwa sehemu ya muonekano wa mwisho."
    );

    document.querySelectorAll(".detail-card").forEach((card, index) => {
      const translation = galleryCardsSw[index];
      if (!translation) {
        return;
      }

      setText(card.querySelector(".section-tag"), translation.tag);
      setText(card.querySelector("h3"), translation.title);
      setText(card.querySelector("h3 + p"), translation.text);

      const listItems = card.querySelectorAll(".detail-list div");
      listItems.forEach((item, itemIndex) => {
        const listTranslation = translation.list?.[itemIndex];
        if (!listTranslation) {
          return;
        }

        item.innerHTML = `<strong>${listTranslation.title}</strong>${listTranslation.text}`;
      });
    });

    setTexts(".section-cta .section-button", ["Fungua Ukurasa wa Katalogi", "Panga Kipimo"]);
  }

  function applyPageTranslations(pageKey) {
    document.documentElement.lang = getLanguage();

    if (getLanguage() !== "sw") {
      return;
    }

    applyMeta(pageKey);
    applySharedTranslations();

    if (pageKey === "home") {
      applyHomePageTranslations();
    }

    if (pageKey === "catalog") {
      applyCatalogPageTranslations();
    }

    if (pageKey === "gallery") {
      applyGalleryPageTranslations();
    }
  }

  function mountLanguageMenu() {
    const siteNav = document.getElementById("site-nav");
    if (!siteNav) {
      return;
    }

    const existing = siteNav.querySelector(".language-switcher");
    if (existing) {
      existing.remove();
    }

    const current = getLanguage();
    const currentLanguage = LANGUAGES[current];
    const otherLanguages = Object.entries(LANGUAGES).filter(([key]) => key !== current);

    const wrapper = document.createElement("div");
    wrapper.className = "language-switcher";
    wrapper.innerHTML = `
      <span class="language-caption">${t("language")}</span>
      <button class="language-toggle" type="button" aria-expanded="false">
        <span class="language-choice">
          <span class="language-flag">${currentLanguage.flag}</span>
          <span class="language-label">${currentLanguage.label}</span>
        </span>
        <span class="language-caret" aria-hidden="true">&#9662;</span>
      </button>
      <div class="language-options">
        ${otherLanguages
          .map(
            ([key, value]) => `
              <button class="language-option" type="button" data-language="${key}">
                <span class="language-flag">${value.flag}</span>
                <span class="language-label">${value.label}</span>
              </button>
            `
          )
          .join("")}
      </div>
    `;

    siteNav.appendChild(wrapper);

    const toggle = wrapper.querySelector(".language-toggle");

    function closeMenu() {
      wrapper.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const nextState = !wrapper.classList.contains("is-open");
      wrapper.classList.toggle("is-open", nextState);
      toggle.setAttribute("aria-expanded", String(nextState));
    });

    wrapper.querySelectorAll(".language-option").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.language);
        window.location.reload();
      });
    });

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  window.LeahI18n = {
    getLanguage,
    setLanguage,
    t,
    localizeContent,
    applyPageTranslations,
    mountLanguageMenu
  };
})();
