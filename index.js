const flags = {
  Abkhazia: "🇦🇽",
  Artsakh: "🇦🇲",
  Belarus: "🇧🇾",
  Kazakhstan: "🇰🇿",
  Kyrgyzstan: "🇰🇬",
  Russia: "🇷🇺",
  "South Ossetia": "🇸🇴",
  Transnistria: "🇲🇩",
  Afghanistan: "🇦🇫",
  Albania: "🇦🇱",
  Kosovo: "🇽🇰",
  "North Macedonia": "🇲🇰",
  Algeria: "🇩🇿",
  Bahrain: "🇧🇭",
  Chad: "🇹🇩",
  Comoros: "🇰🇲",
  Djibouti: "🇩🇯",
  Egypt: "🇪🇬",
  Iraq: "🇮🇶",
  Jordan: "🇯🇴",
  Lebanon: "🇱🇧",
  Libya: "🇱🇾",
  Mauritania: "🇲🇷",
  Morocco: "🇲🇦",
  Oman: "🇴🇲",
  Palestine: "🇵🇸",
  Qatar: "🇶🇦",
  "Sahrawi Arab Democratic Republic": "🇸🇩",
  "Saudi Arabia": "🇸🇦",
  Somalia: "🇸🇴",
  Somaliland: "🇸🇴",
  Sudan: "🇸🇩",
  Syria: "🇸🇾",
  Tunisia: "🇹🇳",
  "United Arab Emirates": "🇦🇪",
  Yemen: "🇾🇪",
  Andorra: "🇦🇩",
  Angola: "🇦🇴",
  "Cape Verde": "🇨🇻",
  "Equatorial Guinea": "🇬🇶",
  "Guinea-Bissau": "🇬🇼",
  Mozambique: "🇲🇿",
  Portugal: "🇵🇹",
  "São Tomé and Príncipe": "🇸🇹",
  "East Timor": "🇹🇱",
  Brazil: "🇧🇷",
  Armenia: "🇦🇲",
  Austria: "🇦🇹",
  Belgium: "🇧🇪",
  Germany: "🇩🇪",
  Liechtenstein: "🇱🇮",
  Luxembourg: "🇱🇺",
  Azerbaijan: "🇦🇿",
  "Antigua and Barbuda": "🇦🇬",
  Australia: "🇦🇺",
  Bahamas: "🇧🇸",
  Barbados: "🇧🇧",
  Belize: "🇧🇿",
  Botswana: "🇧🇼",
  Brunei: "🇧🇳",
  Burundi: "🇧🇮",
  Cameroon: "🇨🇲",
  Canada: "🇨🇦",
  "Christmas Island": "🇨🇽",
  "Cocos (Keeling) Islands": "🇨🇨",
  "Cook Islands": "🇨🇰",
  Dominica: "🇩🇲",
  Eswatini: "🇸🇿",
  "Federated States of Micronesia": "🇫🇲",
  Fiji: "🇫🇯",
  Gambia: "🇬🇲",
  Ghana: "🇬🇭",
  Grenada: "🇬🇩",
  Guyana: "🇬🇾",
  India: "🇮🇳",
  Ireland: "🇮🇪",
  Jamaica: "🇯🇲",
  Kenya: "🇰🇪",
  Kiribati: "🇰🇮",
  Lesotho: "🇱🇸",
  Liberia: "🇱🇷",
  Malawi: "🇲🇼",
  Malta: "🇲🇹",
  "Marshall Islands": "🇲🇭",
  Mauritius: "🇲🇺",
  "New Zealand": "🇳🇿",
  Namibia: "🇳🇦",
  Nauru: "🇳🇷",
  Nigeria: "🇳🇬",
  Niue: "🇳🇺",
  "Norfolk Island": "🇳🇫",
  Pakistan: "🇵🇰",
  Palau: "🇵🇼",
  "Papua New Guinea": "🇵🇬",
  Philippines: "🇵🇭",
  Rwanda: "🇷🇼",
  "Saint Kitts and Nevis": "🇰🇳",
  "Saint Lucia": "🇱🇨",
  "Saint Vincent and the Grenadines": "🇻🇨",
  Samoa: "🇼🇸",
  Seychelles: "🇸🇨",
  "Sierra Leone": "🇸🇱",
  Singapore: "🇸🇬",
  "Solomon Islands": "🇸🇧",
  "South Africa": "🇿🇦",
  "South Sudan": "🇸🇸",
  Tanzania: "🇹🇿",
  Tokelau: "🇹🇰",
  Tonga: "🇹🇴",
  "Trinidad and Tobago": "🇹🇹",
  Tuvalu: "🇹🇻",
  Uganda: "🇺🇬",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
  Vanuatu: "🇻🇺",
  Zambia: "🇿🇲",
  Zimbabwe: "🇿🇼",
  Bangladesh: "🇧🇩",
  Netherlands: "🇳🇱",
  Suriname: "🇸🇷",
  Benin: "🇧🇯",
  "Burkina Faso": "🇧🇫",
  "Central African Republic": "🇨🇫",
  "Democratic Republic of the Congo": "🇨🇩",
  "Republic of the Congo": "🇨🇬",
  France: "🇫🇷",
  Gabon: "🇬🇦",
  Guernsey: "🇬🇲",
  Guinea: "🇬🇳",
  Haiti: "🇭🇹",
  "Ivory Coast": "🇨🇮",
  Madagascar: "🇲🇬",
  Mali: "🇲🇱",
  Monaco: "🇲🇨",
  Niger: "🇳🇪",
  Senegal: "🇸🇳",
  Togo: "🇹🇬",
  Bhutan: "🇧🇹",
  Bolivia: "🇧🇴",
  Peru: "🇵🇪",
  Paraguay: "🇵🇾",
  Ecuador: "🇪🇨",
  "Bosnia and Herzegovina": "🇧🇦",
  Malaysia: "🇲🇾",
  Bulgaria: "🇧🇬",
  Cambodia: "🇰🇭",
  China: "🇨🇳",
  Taiwan: "🇹🇼",
  Vietnam: "🇻🇳",
  Chile: "🇨🇱",
  Colombia: "🇨🇴",
  "Costa Rica": "🇨🇷",
  Cuba: "🇨🇺",
  "Dominican Republic": "🇩🇴",
  "El Salvador": "🇸🇻",
  Guatemala: "🇬🇹",
  Honduras: "🇭🇳",
  Nicaragua: "🇳🇮",
  Panama: "🇵🇦",
  Spain: "🇪🇸",
  Venezuela: "🇻🇪",
  Argentina: "🇦🇷",
  Mexico: "🇲🇽",
  Uruguay: "🇺🇾",
  Croatia: "🇭🇷",
  Greece: "🇬🇷",
  Cyprus: "🇨🇾",
  "Northern Cyprus": "🇹🇷",
  Turkey: "🇹🇷",
  "Czech Republic": "🇨🇿",
  Slovakia: "🇸🇰",
  Denmark: "🇩🇰",
  Eritrea: "🇪🇷",
  Ethiopia: "🇪🇹",
  Estonia: "🇪🇪",
  Finland: "🇫🇮",
  Sweden: "🇸🇪",
  Georgia: "🇬🇪",
  Hungary: "🇭🇺",
  Iceland: "🇮🇸",
  Indonesia: "🇮🇩",
  Iran: "🇮🇷",
  Israel: "🇮🇱",
  Italy: "🇮🇹",
  "Sovereign Military Order of Malta": "🇲🇰",
  "San Marino": "🇸🇲",
  "Vatican City": "🇻🇦",
  Japan: "🇯🇵",
  "North Korea": "🇰🇵",
  "South Korea": "🇰🇷",
  Serbia: "🇷🇸",
  Kuwait: "🇰🇼",
  Laos: "🇱🇦",
  Latvia: "🇱🇻",
  Lithuania: "🇱🇹",
  Maldives: "🇲🇻",
  Moldova: "🇲🇩",
  Romania: "🇷🇴",
  Mongolia: "🇲🇳",
  Montenegro: "🇲🇪",
  "Myanmar (Burma)": "🇲🇲",
  Nepal: "🇳🇵",
  Norway: "🇳🇴",
  Poland: "🇵🇱",
  "Sri Lanka": "🇱🇰",
  Slovenia: "🇸🇮",
  Switzerland: "🇨🇭",
  Tajikistan: "🇹🇯",
  Thailand: "🇹🇭",
  Ukraine: "🇺🇦",
  Turkmenistan: "🇹🇲",
  Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Wales: "🏴󠁷󠁬󠁳󠁿",
  "Pitcairn Islands": "🇵🇳",
  Jersey: "🇯🇪",
  "Isle of Man": "🇮🇲",
  Uzbekistan: "🇺🇿",
};

const languages = {
  Abkhaz: {
    spokenIn: ["Abkhazia"],
    translations: {
      thankYou: {
        literal: "Yıtabup",
        pronunciation: "yee-tah-boo",
      },
    },
  },
  Russian: {
    spokenIn: [
      "Abkhazia",
      "Artsakh",
      "Belarus",
      "Kazakhstan",
      "Kyrgyzstan",
      "Russia",
      "South Ossetia",
      "Transnistria",
    ],
    translations: {
      thankYou: {
        literal: "Спасибо",
        pronunciation: "spah-see-boh",
      },
      hello: {
        literal: "Привет",
        pronunciation: "pree-vyet",
      },
    },
  },
  "Persian (Dari)": {
    spokenIn: ["Afghanistan"],
    translations: {
      thankYou: {
        literal: "تشکر",
        pronunciation: "tshah-kahr",
      },
      hello: {
        literal: "سلام",
        pronunciation: "sah-lahm",
      },
    },
  },
  Pashto: {
    spokenIn: ["Afghanistan"],
    translations: {
      thankYou: {
        literal: "شكرونه",
        pronunciation: "shah-kahr-ohn-ah",
      },
    },
  },
  Albanian: {
    spokenIn: ["Albania", "Kosovo", "North Macedonia"],
    translations: {
      thankYou: {
        literal: "Faleminderit",
        pronunciation: "fah-leh-meen-deh-reet",
      },
    },
  },
  Arabic: {
    spokenIn: [
      "Algeria",
      "Bahrain",
      "Chad",
      "Comoros",
      "Djibouti",
      "Egypt",
      "Iraq",
      "Jordan",
      "Lebanon",
      "Libya",
      "Mauritania",
      "Morocco",
      "Oman",
      "Palestine",
      "Qatar",
      "Sahrawi Arab Democratic Republic",
      "Saudi Arabia",
      "Somalia",
      "Somaliland",
      "Sudan",
      "Syria",
      "Tunisia",
      "United Arab Emirates",
      "Yemen",
    ],
    translations: {
      thankYou: {
        literal: "شكرا",
        pronunciation: "shah-kahr-ah",
      },
    },
  },
  Tamazight: {
    spokenIn: ["Algeria", "Morocco", "Sahrawi Arab Democratic Republic"],
    translations: {
      thankYou: {
        literal: "Tasemdaht",
        pronunciation: "tah-sehm-dahht",
      },
    },
  },
  Catalan: {
    spokenIn: ["Andorra"],
    translations: {
      thankYou: {
        literal: "Gràcies",
        pronunciation: "grah-see-ah",
      },
    },
  },
  Portuguese: {
    spokenIn: [
      "Angola",
      "Cape Verde",
      "Equatorial Guinea",
      "Guinea-Bissau",
      "Mozambique",
      "Portugal",
      "São Tomé and Príncipe",
      "East Timor",
      "Brazil",
    ],
    translations: {
      thankYou: {
        literal: "Obrigado",
        pronunciation: "oh-bree-gah-doh",
      },
    },
  },
  Armenian: {
    spokenIn: ["Armenia", "Artsakh"],
    translations: {
      thankYou: {
        literal: "Շնորհակալություն",
        pronunciation: "shnohr-hah-kah-loo-tsoo-ee-yoon",
      },
    },
  },
  German: {
    spokenIn: ["Austria", "Belgium", "Germany", "Liechtenstein", "Luxembourg"],
    translations: {
      thankYou: {
        literal: "Danke",
        pronunciation: "dahn-kah",
      },
    },
  },
  Azerbaijani: {
    spokenIn: ["Azerbaijan"],
    translations: {
      thankYou: {
        literal: "Təşəkkür edirəm",
        pronunciation: "tah-shah-khoo-er eh-dee-rehm",
      },
    },
  },
  English: {
    spokenIn: [
      "Antigua and Barbuda",
      "Australia",
      "Bahamas",
      "Barbados",
      "Belize",
      "Botswana",
      "Brunei",
      "Burundi",
      "Cameroon",
      "Canada",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Cook Islands",
      "Dominica",
      "Eswatini",
      "Federated States of Micronesia",
      "Fiji",
      "Gambia",
      "Ghana",
      "Grenada",
      "Guyana",
      "India",
      "Ireland",
      "Jamaica",
      "Kenya",
      "Kiribati",
      "Lesotho",
      "Liberia",
      "Malawi",
      "Malta",
      "Marshall Islands",
      "Mauritius",
      "New Zealand",
      "Namibia",
      "Nauru",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Pakistan",
      "Palau",
      "Papua New Guinea",
      "Philippines",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Solomon Islands",
      "Somaliland",
      "South Africa",
      "South Sudan",
      "Sudan",
      "Tanzania",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tuvalu",
      "Uganda",
      "United Kingdom",
      "United States",
      "Vanuatu",
      "Zambia",
      "Zimbabwe",
    ],
    translations: {
      thankYou: {
        literal: "Thank you",
        pronunciation: "thahngk yoo",
      },
    },
  },
  Bengali: {
    spokenIn: ["Bangladesh"],
    translations: {
      thankYou: {
        literal: "ধন্যবাদ",
        pronunciation: "dahn-yah-bahd",
      },
    },
  },
  Belarusian: {
    spokenIn: ["Belarus"],
    translations: {
      thankYou: {
        literal: "Дзякую",
        pronunciation: "dzyah-koo-yoo",
      },
    },
  },
  Dutch: {
    spokenIn: ["Belgium", "Netherlands", "Suriname"],
    translations: {
      thankYou: {
        literal: "Dank je",
        pronunciation: "dahnk yeh",
      },
    },
  },
  French: {
    spokenIn: [
      "Belgium",
      "Benin",
      "Burkina Faso",
      "Burundi",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Comoros",
      "Democratic Republic of the Congo",
      "Republic of the Congo",
      "Djibouti",
      "France",
      "Equatorial Guinea",
      "Gabon",
      "Guernsey",
      "Guinea",
      "Haiti",
      "Ivory Coast",
      "Luxembourg",
      "Madagascar",
      "Mali",
      "Monaco",
      "Niger",
      "Rwanda",
      "Senegal",
      "Seychelles",
      "Togo",
      "Vanuatu",
    ],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
      hello: {
        literal: "Bonjour",
        pronunciation: "bon-zhoor",
      },
    },
  },
  Dzongkha: {
    spokenIn: ["Bhutan"],
    translations: {
      thankYou: {
        literal: "གཟུགས་རབ་",
        pronunciation: "gzu-ku rab",
      },
      hello: {
        literal: "བསྐྱར་བཟང་",
        pronunciation: "bshkyar bzang",
      },
    },
  },
  Aymara: {
    spokenIn: ["Bolivia", "Peru"],
    translations: {
      thankYou: {
        literal: "Añaraki",
        pronunciation: "ahn-ah-rah-kee",
      },
    },
  },
  Chiquitano: {
    spokenIn: ["Bolivia"],
    translations: {
      thankYou: {
        literal: "Pupa",
        pronunciation: "poo-pah",
      },
    },
  },
  Guaraní: {
    spokenIn: ["Bolivia", "Paraguay"],
    translations: {
      thankYou: {
        literal: "Aguyje",
        pronunciation: "ah-goo-ee-hey",
      },
    },
  },
  Quechua: {
    spokenIn: ["Bolivia", "Ecuador", "Peru"],
    translations: {
      thankYou: {
        literal: "Allillanchu",
        pronunciation: "ah-lee-yahn-chu",
      },
    },
  },
  Bosnian: {
    spokenIn: ["Bosnia and Herzegovina"],
    translations: {
      thankYou: {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Malay: {
    spokenIn: ["Brunei", "Christmas Island", "Malaysia", "Singapore"],
    translations: {
      thankYou: {
        literal: "Terima kasih",
        pronunciation: "tay-ree-mah kah-see",
      },
    },
  },
  Bulgarian: {
    spokenIn: ["Bulgaria"],
    translations: {
      thankYou: {
        literal: "Благодаря",
        pronunciation: "blah-goh-dah-ryah",
      },
    },
  },
  Kirundi: {
    spokenIn: ["Burundi"],
    translations: {
      thankYou: {
        literal: "Murakoze",
        pronunciation: "moo-rah-koh-zay",
      },
    },
  },
  Khmer: {
    spokenIn: ["Cambodia"],
    translations: {
      thankYou: {
        literal: "អរគុណ",
        pronunciation: "aw-koon",
      },
    },
  },
  Sango: {
    spokenIn: ["Central African Republic"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Mandarin: {
    spokenIn: ["China", "Christmas Island", "Singapore", "Taiwan"],
    translations: {
      thankYou: {
        literal: "谢谢",
        pronunciation: "see-ye see-ye",
      },
    },
  },
  Cantonese: {
    spokenIn: ["China", "Vietnam", "Malaysia"],
    translations: {
      thankYou: {
        literal: "多謝",
        pronunciation: "doh-je",
      },
    },
  },
  Spanish: {
    spokenIn: [
      "Bolivia",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Cuba",
      "Dominican Republic",
      "Ecuador",
      "El Salvador",
      "Equatorial Guinea",
      "Guatemala",
      "Honduras",
      "Nicaragua",
      "Panama",
      "Paraguay",
      "Peru",
      "Sahrawi Arab Democratic Republic",
      "Spain",
      "Venezuela",
      "Argentina",
      "Mexico",
      "Uruguay",
    ],
    translations: {
      thankYou: {
        literal: "Gracias",
        pronunciation: "grah-see-ass",
      },
    },
  },
  Comorian: {
    spokenIn: ["Comoros"],
    translations: {
      thankYou: {
        literal: "Marahaba",
        pronunciation: "mah-rah-hah-bah",
      },
    },
  },
  Croatian: {
    spokenIn: ["Croatia", "Bosnia and Herzegovina"],
    translations: {
      thankYou: {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Greek: {
    spokenIn: ["Greece", "Cyprus"],
    translations: {
      thankYou: {
        literal: "Ευχαριστώ",
        pronunciation: "eff-khar-ee-stoh",
      },
    },
  },
  Turkish: {
    spokenIn: ["Cyprus", "Northern Cyprus", "Turkey"],
    translations: {
      thankYou: {
        literal: "Teşekkür ederim",
        pronunciation: "teh-shay-kur eh-deh-ree-m",
      },
    },
  },
  Czech: {
    spokenIn: ["Czech Republic"],
    translations: {
      thankYou: {
        literal: "Děkuji",
        pronunciation: "day-koo-ee",
      },
    },
  },
  Slovak: {
    spokenIn: ["Czech Republic", "Slovakia"],
    translations: {
      thankYou: {
        literal: "Ďakujem",
        pronunciation: "dah-koo-yehm",
      },
    },
  },
  Danish: {
    spokenIn: ["Denmark"],
    translations: {
      thankYou: {
        literal: "Tak",
        pronunciation: "tahk",
      },
    },
  },
  Tetum: {
    spokenIn: ["East Timor"],
    translations: {
      thankYou: {
        literal: "Obrigadu",
        pronunciation: "oh-bree-gah-doo",
      },
    },
  },
  Tigrinya: {
    spokenIn: ["Eritrea", "Ethiopia"],
    translations: {
      thankYou: {
        literal: "እናቴ",
        pronunciation: "eh-nah-teh",
      },
    },
  },
  Estonian: {
    spokenIn: ["Estonia"],
    translations: {
      thankYou: {
        literal: "Aitäh",
        pronunciation: "eye-tah",
      },
    },
  },
  Swazi: {
    spokenIn: ["Eswatini", "South Africa"],
    translations: {
      thankYou: {
        literal: "Ngiyabonga",
        pronunciation: "eng-ee-ah-bong-ah",
      },
    },
  },
  Afar: {
    spokenIn: ["Ethiopia"],
    translations: {
      thankYou: {
        literal: "Mahadsanid",
        pronunciation: "mah-hah-d-sah-nee-d",
      },
    },
  },
  Amharic: {
    spokenIn: ["Ethiopia"],
    translations: {
      thankYou: {
        literal: "አመሰግናለሁ",
        pronunciation: "ah-meh-sah-gnah-lay-hoo",
      },
    },
  },
  Oromo: {
    spokenIn: ["Ethiopia"],
    translations: {
      thankYou: {
        literal: "Waamicha",
        pronunciation: "wah-mee-chah",
      },
    },
  },
  Somali: {
    spokenIn: ["Ethiopia", "Somaliland"],
    translations: {
      thankYou: {
        literal: "Mahadsanid",
        pronunciation: "mah-hah-d-sah-nee-d",
      },
    },
  },
  Fijian: {
    spokenIn: ["Fiji"],
    translations: {
      thankYou: {
        literal: "Vinaka",
        pronunciation: "vee-nah-kah",
      },
    },
  },
  "Fiji Hindi": {
    spokenIn: ["Fiji"],
    translations: {
      thankYou: {
        literal: "Dhanyavaad",
        pronunciation: "dhan-yah-vahd",
      },
    },
  },
  Finnish: {
    spokenIn: ["Finland"],
    translations: {
      thankYou: {
        literal: "Kiitos",
        pronunciation: "kee-tohs",
      },
    },
  },
  Swedish: {
    spokenIn: ["Finland", "Sweden"],
    translations: {
      thankYou: {
        literal: "Tack",
        pronunciation: "tahk",
      },
    },
  },
  Georgian: {
    spokenIn: ["Georgia"],
    translations: {
      thankYou: {
        literal: "მადლობა",
        pronunciation: "mah-dloh-bah",
      },
    },
  },
  "Haitian Creole": {
    spokenIn: ["Haiti"],
    translations: {
      thankYou: {
        literal: "Mèsi",
        pronunciation: "meh-see",
      },
    },
  },
  Hungarian: {
    spokenIn: ["Hungary"],
    translations: {
      thankYou: {
        literal: "Köszönöm",
        pronunciation: "koh-sho-nohm",
      },
    },
  },
  Icelandic: {
    spokenIn: ["Iceland"],
    translations: {
      thankYou: {
        literal: "Takk",
        pronunciation: "tahk",
      },
    },
  },
  Hindi: {
    spokenIn: ["India"],
    translations: {
      thankYou: {
        literal: "धन्यवाद",
        pronunciation: "dhan-yah-vahd",
      },
    },
  },
  Indonesian: {
    spokenIn: ["Indonesia"],
    translations: {
      thankYou: {
        literal: "Terima kasih",
        pronunciation: "tay-ree-mah kah-see",
      },
    },
  },
  Persian: {
    spokenIn: ["Iran"],
    translations: {
      thankYou: {
        literal: "متشکرم",
        pronunciation: "meh-tah-shah-kah-rahm",
      },
    },
  },
  Kurdish: {
    spokenIn: ["Iraq"],
    translations: {
      thankYou: {
        literal: "Spas",
        pronunciation: "spahs",
      },
    },
  },
  Irish: {
    spokenIn: ["Ireland"],
    translations: {
      thankYou: {
        literal: "Go raibh maith agat",
        pronunciation: "goh ree-vah mah-ah-gah",
      },
    },
  },
  Hebrew: {
    spokenIn: ["Israel"],
    translations: {
      thankYou: {
        literal: "תודה",
        pronunciation: "toh-dah",
      },
    },
  },
  Italian: {
    spokenIn: [
      "Italy",
      "Sovereign Military Order of Malta",
      "San Marino",
      "Vatican City",
    ],
    translations: {
      thankYou: {
        literal: "Grazie",
        pronunciation: "grah-zee-eh",
      },
    },
  },
  Japanese: {
    spokenIn: ["Japan"],
    translations: {
      thankYou: {
        literal: "ありがとうございます",
        pronunciation: "arigatou gozaimasu",
      },
    },
  },
  Kazakh: {
    spokenIn: ["Kazakhstan"],
    translations: {
      thankYou: {
        literal: "рахмет",
        pronunciation: "rah-met",
      },
    },
  },
  Swahili: {
    spokenIn: ["Kenya", "Rwanda", "Tanzania", "Uganda"],
    translations: {
      thankYou: {
        literal: "Asante",
        pronunciation: "ah-sahn-teh",
      },
    },
  },
  Korean: {
    spokenIn: ["North Korea", "South Korea"],
    translations: {
      thankYou: {
        literal: "감사합니다",
        pronunciation: "gam-sah-ham-ni-da",
      },
    },
  },
  Serbian: {
    spokenIn: ["Kosovo", "Serbia", "Bosnia and Herzegovina"],
    translations: {
      thankYou: {
        literal: "Хвала",
        pronunciation: "khvah-lah",
      },
    },
  },
  "Standard Arabic": {
    spokenIn: ["Kuwait"],
    translations: {
      thankYou: {
        literal: "شكراً",
        pronunciation: "shukran",
      },
    },
  },
  Kyrgyz: {
    spokenIn: ["Kyrgyzstan"],
    translations: {
      thankYou: {
        literal: "рахмат",
        pronunciation: "rah-mat",
      },
    },
  },
  Lao: {
    spokenIn: ["Laos"],
    translations: {
      thankYou: {
        literal: "ຂອບໃຈ",
        pronunciation: "kho-bhajai",
      },
    },
  },
  Latvian: {
    spokenIn: ["Latvia"],
    translations: {
      thankYou: {
        literal: "Paldies",
        pronunciation: "pahl-dees",
      },
    },
  },
  Sotho: {
    spokenIn: ["Lesotho", "South Africa", "Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Ke a leboga",
        pronunciation: "keh ah leh-boh-gah",
      },
    },
  },
  Lithuanian: {
    spokenIn: ["Lithuania"],
    translations: {
      thankYou: {
        literal: "Ačiū",
        pronunciation: "ah-chee-oo",
      },
    },
  },
  Luxembourgish: {
    spokenIn: ["Luxembourg"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Malagasy: {
    spokenIn: ["Madagascar"],
    translations: {
      thankYou: {
        literal: "Misaotra",
        pronunciation: "mee-sah-oh-tra",
      },
    },
  },
  Chichewa: {
    spokenIn: ["Malawi"],
    translations: {
      thankYou: {
        literal: "Zikomo",
        pronunciation: "zee-koh-moh",
      },
    },
  },
  Dhivehi: {
    spokenIn: ["Maldives"],
    translations: {
      thankYou: {
        literal: "Kuɗi aadhamin",
        pronunciation: "koo-dee ah-dah-meen",
      },
    },
  },
  Maltese: {
    spokenIn: ["Malta"],
    translations: {
      thankYou: {
        literal: "Grazzi",
        pronunciation: "grah-zee",
      },
    },
  },
  "Mauritian Creole (Morisien)": {
    spokenIn: ["Mauritius"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Romanian: {
    spokenIn: ["Moldova", "Romania"],
    translations: {
      thankYou: {
        literal: "Mulțumesc",
        pronunciation: "mool-tsoo-mesh",
      },
    },
  },
  Mongolian: {
    spokenIn: ["Mongolia"],
    translations: {
      thankYou: {
        literal: "Баярлалаа",
        pronunciation: "bay-arl-ah-ah",
      },
    },
  },
  Montenegrin: {
    spokenIn: ["Montenegro"],
    translations: {
      thankYou: {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Burmese: {
    spokenIn: ["Myanmar (Burma)"],
    translations: {
      thankYou: {
        literal: "ကြယ်ပါတယ်",
        pronunciation: "kya-pa-ta",
      },
    },
  },
  Nauruan: {
    spokenIn: ["Nauru"],
    translations: {
      thankYou: {
        literal: "Arigu",
        pronunciation: "ah-ree-goo",
      },
    },
  },
  Nepali: {
    spokenIn: ["Nepal"],
    translations: {
      thankYou: {
        literal: "धन्यवाद",
        pronunciation: "dhanyavaad",
      },
    },
  },
  Frisian: {
    spokenIn: ["Netherlands"],
    translations: {
      thankYou: {
        literal: "Tank jo",
        pronunciation: "tahnk yoh",
      },
    },
  },
  "Māori language": {
    spokenIn: ["New Zealand"],
    translations: {
      thankYou: {
        literal: "Kia ora",
        pronunciation: "kee-ah-oh-rah",
      },
    },
  },
  Niuean: {
    spokenIn: ["Niue"],
    translations: {
      thankYou: {
        literal: "Fakaaue lahi",
        pronunciation: "fah-kah-oh-ah-lah-hee",
      },
    },
  },
  Norfuk: {
    spokenIn: ["Norfolk Island"],
    translations: {
      thankYou: {
        literal: "Tankyu",
        pronunciation: "tahnk-yoo",
      },
    },
  },
  Macedonian: {
    spokenIn: ["North Macedonia"],
    translations: {
      thankYou: {
        literal: "Благодарам",
        pronunciation: "blah-goh-dah-rahm",
      },
    },
  },
  Norwegian: {
    spokenIn: ["Norway"],
    translations: {
      thankYou: {
        literal: "Takk",
        pronunciation: "tahk",
      },
    },
  },
  Sami: {
    spokenIn: ["Norway"],
    translations: {
      thankYou: {
        literal: "Gávnnat",
        pronunciation: "gahv-nah",
      },
    },
  },
  Urdu: {
    spokenIn: ["Pakistan"],
    translations: {
      thankYou: {
        literal: "شکریہ",
        pronunciation: "shukriya",
      },
    },
  },
  Palauan: {
    spokenIn: ["Palau"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  "Hiri Motu": {
    spokenIn: ["Papua New Guinea"],
    translations: {
      thankYou: {
        literal: "Tuguraki",
        pronunciation: "too-goo-rah-kee",
      },
    },
  },
  "Tok Pisin": {
    spokenIn: ["Papua New Guinea"],
    translations: {
      thankYou: {
        literal: "Tenkyu",
        pronunciation: "ten-kee-oo",
      },
    },
  },
  Asháninka: {
    spokenIn: ["Peru"],
    translations: {
      thankYou: {
        literal: "Nájtsi",
        pronunciation: "nah-ee-chee",
      },
    },
  },
  Tagalog: {
    spokenIn: ["Philippines"],
    translations: {
      thankYou: {
        literal: "Salamat",
        pronunciation: "sah-lah-mah",
      },
    },
  },
  Polish: {
    spokenIn: ["Poland"],
    translations: {
      thankYou: {
        literal: "Dziękuję",
        pronunciation: "jeh-ku-yeh",
      },
    },
  },
  Kinyarwanda: {
    spokenIn: ["Rwanda"],
    translations: {
      thankYou: {
        literal: "Murakoze",
        pronunciation: "moo-rah-koh-zeh",
      },
    },
  },
  "Seychellois Creole": {
    spokenIn: ["Seychelles"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Tamil: {
    spokenIn: ["Singapore", "Sri Lanka"],
    translations: {
      thankYou: {
        literal: "நன்றி",
        pronunciation: "nah-nree",
      },
    },
  },
  Slovene: {
    spokenIn: ["Slovenia"],
    translations: {
      thankYou: {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Afrikaans: {
    spokenIn: ["South Africa"],
    translations: {
      thankYou: {
        literal: "Dankie",
        pronunciation: "dahn-kee",
      },
    },
  },
  "Southern Ndebele": {
    spokenIn: ["South Africa"],
    translations: {
      thankYou: {
        literal: "Ngiyabonga",
        pronunciation: "ng-ee-yah-bong-ah",
      },
    },
  },
  "Northern Sotho": {
    spokenIn: ["South Africa"],
    translations: {
      thankYou: {
        literal: "Ke a leboga",
        pronunciation: "keh ah leh-boh-gah",
      },
    },
  },
  Tsonga: {
    spokenIn: ["South Africa"],
    translations: {
      thankYou: {
        literal: "Ndzi kombela",
        pronunciation: "ndzee kohm-bell-ah",
      },
    },
  },
  Tswana: {
    spokenIn: ["South Africa", "Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Ke a leboga",
        pronunciation: "keh ah leh-boh-gah",
      },
    },
  },
  Venda: {
    spokenIn: ["South Africa", "Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Ndaa",
        pronunciation: "nd-ah",
      },
    },
  },
  Xhosa: {
    spokenIn: ["South Africa", "Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Enkosi",
        pronunciation: "en-koh-see",
      },
    },
  },
  Zulu: {
    spokenIn: ["South Africa"],
    translations: {
      thankYou: {
        literal: "Ngiyabonga",
        pronunciation: "ng-ee-yah-bong-ah",
      },
    },
  },
  Ossetian: {
    spokenIn: ["South Ossetia"],
    translations: {
      thankYou: {
        literal: "Кӕмдтын",
        pronunciation: "kem-dtin",
      },
    },
  },
  Sinhala: {
    spokenIn: ["Sri Lanka"],
    translations: {
      thankYou: {
        literal: "ස්තුතියි",
        pronunciation: "shtoo-ti-ee",
      },
    },
  },
  "Swiss French": {
    spokenIn: ["Switzerland"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  "Swiss German": {
    spokenIn: ["Switzerland"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  "Swiss Italian": {
    spokenIn: ["Switzerland"],
    translations: {
      thankYou: {
        literal: "Grazie",
        pronunciation: "grah-zee-eh",
      },
    },
  },
  Romansh: {
    spokenIn: ["Switzerland"],
    translations: {
      thankYou: {
        literal: "Grazia",
        pronunciation: "grah-zee-ah",
      },
    },
  },
  Tajik: {
    spokenIn: ["Tajikistan"],
    translations: {
      thankYou: {
        literal: "Ташаккур",
        pronunciation: "tah-shah-kur",
      },
    },
  },
  Thai: {
    spokenIn: ["Thailand"],
    translations: {
      thankYou: {
        literal: "ขอบคุณ",
        pronunciation: "kohp-khun",
      },
    },
  },
  Tokelauan: {
    spokenIn: ["Tokelau"],
    translations: {
      thankYou: {
        literal: "Fakafetai",
        pronunciation: "fah-kah-fay-tah-ee",
      },
    },
  },
  Tongan: {
    spokenIn: ["Tonga"],
    translations: {
      thankYou: {
        literal: "Mālohi atu",
        pronunciation: "mah-loh-hee ah-too",
      },
    },
  },
  Moldovan: {
    spokenIn: ["Transnistria"],
    translations: {
      thankYou: {
        literal: "Mulțumesc",
        pronunciation: "mool-tsoo-mesh",
      },
    },
  },
  Ukrainian: {
    spokenIn: ["Transnistria", "Ukraine"],
    translations: {
      thankYou: {
        literal: "Дякую",
        pronunciation: "dyah-koo-yoo",
      },
    },
  },
  Turkmen: {
    spokenIn: ["Turkmenistan"],
    translations: {
      thankYou: {
        literal: "Sag bol",
        pronunciation: "sahg bohl",
      },
    },
  },
  Tuvaluan: {
    spokenIn: ["Tuvalu"],
    translations: {
      thankYou: {
        literal: "Faafetai",
        pronunciation: "fah-fay-tah-ee",
      },
    },
  },
  "Scottish Gaelic": {
    spokenIn: ["Scotland"],
    translations: {
      thankYou: {
        literal: "Tapadh leat",
        pronunciation: "tah-pah leh",
      },
    },
  },
  Welsh: {
    spokenIn: ["Wales"],
    translations: {
      thankYou: {
        literal: "Diolch",
        pronunciation: "dee-olch",
      },
    },
  },
  Pitcairnese: {
    spokenIn: ["Pitcairn Islands"],
    translations: {
      thankYou: {
        literal: "Ta'e",
        pronunciation: "tah-eh",
      },
    },
  },
  Jèrriais: {
    spokenIn: ["Jersey"],
    translations: {
      thankYou: {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Manx: {
    spokenIn: ["Isle of Man"],
    translations: {
      thankYou: {
        literal: "Gura mie ayd",
        pronunciation: "gur-ah mee ayd",
      },
    },
  },
  Uzbek: {
    spokenIn: ["Uzbekistan"],
    translations: {
      thankYou: {
        literal: "Rahmat",
        pronunciation: "rah-mat",
      },
    },
  },
  Latin: {
    spokenIn: ["Vatican City"],
    translations: {
      thankYou: {
        literal: "Gratias tibi ago",
        pronunciation: "grah-tee-ahs tee-bee ah-go",
      },
    },
  },
  Vietnamese: {
    spokenIn: ["Vietnam"],
    translations: {
      thankYou: {
        literal: "Cảm ơn",
        pronunciation: "cham-on",
      },
    },
  },
  Chewa: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Zikomo",
        pronunciation: "zee-koh-moh",
      },
    },
  },
  Chibarwe: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Kalanga: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Komele",
        pronunciation: "koh-meh-leh",
      },
    },
  },
  Khoisan: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "ǃKamagu",
        pronunciation: "kam-ah-goo",
      },
    },
  },
  Nambya: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Ndau: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Ndebele: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Ngiyabonga",
        pronunciation: "ngi-yah-bong-ah",
      },
    },
  },
  Shangani: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Ngiyabonga",
        pronunciation: "ngi-yah-bong-ah",
      },
    },
  },
  Shona: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Tonga: {
    spokenIn: ["Zimbabwe"],
    translations: {
      thankYou: {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
};

import {
  render,
  h,
} from "https://cdn.skypack.dev/pin/preact@v10.11.3-Ugxe7epKPQZ3xKBVvZAs/mode=imports,min/optimized/preact.js";

import {
  useState,
  useEffect,
  useRef,
} from "https://cdn.skypack.dev/pin/preact@v10.11.3-Ugxe7epKPQZ3xKBVvZAs/mode=imports,min/optimized/preact/hooks.js";

import htm from "https://cdn.skypack.dev/pin/htm@v3.1.1-pWM29AHF3JmwKPnFwyeP/mode=imports,min/optimized/htm.js";

import FuzzySearch from "https://cdn.skypack.dev/pin/fuzzy-search@v3.2.1-XCeru1oqt2I8w5bXfvOK/mode=imports,min/optimized/fuzzy-search.js";

const searcher = new FuzzySearch(
  Object.entries(languages).map(([id, val]) => ({ id, ...val })),
  ["id", "spokenIn", "translations.thankYou.literal"],
  {
    caseSensitive: false,
    sort: true,
  }
);

const html = htm.bind(h);

{
  /* <div
class="absolute inset-0 grid grid-cols-12 grid-rows-12 place-items-center scale-110 opacity-50"
>
${Object.values(flags)
  .map((flag, i) => {
    return html`<span
      class="${`transform scale-[${100 + Math.random() * 200}%]`}"
    >
      ${flag}
    </span> `;
  })
  .slice(0, 144)}
<div
  class="absolute inset-0"
  style=${{
    background: `radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
    )`,
  }}
/>
</div> */
}

{
  /* <span class="mx-auto mb-8 uppercase font-normal tracking-wider opacity-30"
>Scroll Down</span
> */
}

const HomePage = () => {
  return html`
    <header
      class="relative snap-start h-full flex flex-col overflow-hidden"
      id="homepage"
      key="homepage"
    >
      <div
        class="relative flex flex-col items-center m-auto text-center p-10 gap-4"
      >
        <svg
          class="w-36 text-black"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9668 18.1797C2.25684 18.1797 2.52051 18.083 2.87207 17.8809L7.14355 15.5781L11.8018 18.1885C12.1709 18.3906 12.5576 18.4873 12.9355 18.4873C13.3047 18.4873 13.665 18.3994 13.9902 18.2061L18.3584 15.7451C18.9648 15.4023 19.2285 14.9189 19.2285 14.251V2.44727C19.2285 1.7002 18.7803 1.25195 18.042 1.25195C17.752 1.25195 17.4883 1.36621 17.1279 1.55957L12.6982 4.02051L8.09277 1.24316C7.75879 1.0498 7.39844 0.953125 7.0293 0.953125C6.66895 0.953125 6.30859 1.04102 5.99219 1.22559L1.65039 3.69531C1.04395 4.03809 0.771484 4.50391 0.771484 5.17188V16.9932C0.771484 17.7402 1.21973 18.1797 1.9668 18.1797ZM6.35254 14.0049L2.74023 15.9912C2.67871 16.0176 2.62598 16.0439 2.58203 16.0439C2.47656 16.0439 2.42383 15.9648 2.42383 15.8418V5.62891C2.42383 5.38281 2.51172 5.22461 2.74023 5.09277L6.0625 3.16797C6.15918 3.10645 6.24707 3.0625 6.35254 3.00977V14.0049ZM8.02246 14.0488V3.2207C8.11035 3.26465 8.20703 3.31738 8.29492 3.37012L11.9775 5.59375V16.2637C11.8633 16.2021 11.749 16.1406 11.626 16.0703L8.02246 14.0488ZM13.6562 16.3867V5.42676L17.2686 3.45801C17.3125 3.43164 17.3652 3.41406 17.4092 3.41406C17.5146 3.41406 17.585 3.49316 17.585 3.60742V13.7676C17.585 14.0225 17.4971 14.1807 17.2598 14.3125L14.0605 16.167C13.9287 16.2461 13.7881 16.3252 13.6562 16.3867Z"
            fill="#1C1C1E"
          />
        </svg>
        <h1 class="font-bold text-6xl">Dankon</h1>
        <p class="font-light text-lg sm:text-xl max-w-[30ch] opacity-80">
          Learn to express your gratitude in<br />
          ${Object.keys(languages).length}${" "} different languages
        </p>
      </div>
    </header>
  `;
};

const App = () => {
  const [letter, setLetter] = useState("");
  const ref = useRef();
  const main = useRef();

  const [search, setSearch] = useState({
    term: undefined,
    results: searcher.search(""),
  });

  const [testMode, setTestMode] = useState(false);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.onscroll = function () {
        let current = [];
        document.querySelectorAll("[data-letter]").forEach((el) => {
          const child = el.getBoundingClientRect();
          current.push([child.top, el]);
        });
        current = [...current].sort(([a], [b]) => Math.abs(a) - Math.abs(b))[0];

        const letter = current[1].querySelector("h2")?.innerText[0];
        setLetter(letter);

        if (ref.current.scrollTop === 0) setLetter("homepage");
      };
    }
  }, [ref]);

  useEffect(() => {
    const el = document.querySelector(`[data-letter-button="${letter}"]`);
    el?.parentElement?.scrollTo({
      left: el.offsetLeft - el.parentElement.offsetWidth / 1.618,
      behavior: "smooth",
    });
  }, [letter]);

  // <nav
  //       class="w-full flex gap-4 justify-between items-center py-4 px-4 text-xs shadow-xl border-b"
  //     >
  //       <h1 class="font-extrabold text-black tracking-wide text-lg">
  //         🌏 Dankon
  //       </h1>
  //       <button
  //         class="text-xl w-10"
  // onclick=${() => {
  //   setSearch({ term: "", results: searcher.search(search.term) });
  // }}
  //       >
  //         🔍
  //       </button>
  //     </nav>

  return html`
    <main ref=${main} class="h-screen max-h-[100dvh] flex flex-col">
      <ul
        ref=${ref}
        class="snap-start h-full flex-1 overflow-y-scroll snap-y snap-mandatory divide-y"
      >
        <${HomePage} />
        ${[...Object.keys(languages).sort()].map((language) => {
          const literal = languages[language].translations.thankYou.literal;
          const pronunciation =
            languages[language].translations.thankYou.pronunciation;
          const spokenIn = languages[language].spokenIn;
          const showMaxspokenIn = 5;

          return html`
            <li
              data-letter=${language[0]}
              data-language=${language}
              onTouchStart=${() => testMode && setReveal(true)}
              onTouchEnd=${() => testMode && setReveal(false)}
              onMouseDown=${() => testMode && setReveal(true)}
              onMouseUp=${() => testMode && setReveal(false)}
              class="snap-center block h-full bg-white flex flex-col py-8 px-6 ${testMode &&
              "select-none"}"
              onContextMenu=${(e) => {
                if (testMode) e.preventDefault();
              }}
            >
              <div class="h-full flex flex-col text-center">
                <h2 class="text-xl font-medium text-black/80">${language}</h2>
                <div class="my-auto">
                  <h3
                    class=${literal.length > 12 || language === "Japanese"
                      ? "font-bold mb-[0.5vw] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                      : "font-bold mb-[1vw] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"}
                  >
                    ${testMode && !reveal
                      ? "•".repeat(literal.length)
                      : literal}
                  </h3>
                  <h4
                    class="${testMode && !reveal
                      ? `text-sm font-bold text-black/50 select-none`
                      : `font-light`}"
                  >
                    ${testMode && !reveal
                      ? "PRESS TO REVEAL"
                      : `(${pronunciation})`}
                  </h4>
                </div>
                <h5
                  class="mx-auto px-12 uppercase text-xs border-b pb-2 mb-3 text-black/30 tracking-wider font-medium select-none"
                >
                  Spoken In
                </h5>
                <p
                  class="text-xs max-w-screen-sm mx-auto leading-relaxed flex flex-wrap gap-2 justify-center items-center"
                >
                  ${spokenIn.slice(0, showMaxspokenIn).map(
                    (x) =>
                      html`
                        <span
                          class="flex gap-1 border py-0.5 pl-1.5 pr-2 rounded-full"
                          onclick=${() => {
                            setSearch({
                              term: x,
                              results: searcher.search(x),
                            });
                          }}
                          >${flags[x]}
                          <span class="opacity-60">${x}</span>
                        </span>
                      `
                  )}${spokenIn.length > showMaxspokenIn &&
                  html`
                    <span
                      class="border py-0.5 px-2 text-black/60 rounded-full"
                      onclick=${() => {
                        setSearch({
                          term: language,
                          results: searcher.search(language),
                        });
                      }}
                    >
                      + ${spokenIn.length - showMaxspokenIn} more countries
                    </span>
                  `}
                </p>
              </div>
            </li>
          `;
        })}
      </ul>
      <footer
        class="${window.matchMedia("(display-mode: standalone)").matches &&
        !!navigator.platform.match(/iPhone|iPod|iPad/)
          ? `border-t pb-3`
          : "border-t"}"
      >
        <div
          class="h-full p-4 flex gap-3 text-xs md:text-sm md:gap-1 lg:text-base lg:gap-2 overflow-x-scroll"
        >
          <button
            data-letter-button="homepage"
            class="w-10 h-10 rounded-full flex-none text-black"
            onclick=${() => {
              const el = document.querySelector(`#homepage`);
              el?.scrollIntoView();
            }}
          >
            <svg
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 22.7334C18.9658 22.7334 23.0791 18.6289 23.0791 13.6543C23.0791 8.68848 18.9658 4.5752 13.9912 4.5752C9.02539 4.5752 4.9209 8.68848 4.9209 13.6543C4.9209 18.6289 9.03418 22.7334 14 22.7334ZM14 21.3271C9.80762 21.3271 6.32715 17.8467 6.32715 13.6543C6.32715 9.6377 9.50879 6.28027 13.4639 5.99902C13.2529 6.20117 13.1826 6.43848 13.1562 6.77246C12.8838 6.71973 12.6113 6.69336 12.3916 6.69336C11.7588 6.69336 11.2314 7.0625 10.1592 7.71289C9.10449 8.35449 9.44727 9.875 10.5547 9.99805C9.00781 10.6309 8.07617 12.4238 8.07617 13.1182C8.07617 14.1025 9.6582 15.9922 10.7656 15.9922C11.3369 15.9922 11.9609 15.8779 12.4355 15.8164C12.6465 15.7812 12.7871 15.834 12.8574 16.001C12.9629 16.2383 13.0244 16.4844 13.0244 16.8975C13.0244 17.7061 12.6377 20.5625 14.5977 20.5625C15.9863 20.5625 17.0762 18.4883 17.8232 17.1348C18.4648 15.957 19.2471 14.8848 19.2471 14.0498C19.2471 13.7246 19.1855 13.4346 19.0449 13.1709C19.6514 13.1709 20.5303 12.7051 21.4707 11.9316C21.6025 12.4854 21.6729 13.0654 21.6729 13.6543C21.6729 17.8467 18.1924 21.3271 14 21.3271ZM14.0527 16.8359C14.0527 15.6934 13.5957 14.7529 12.541 14.7529C12.2949 14.7529 11.9434 14.8057 11.6533 14.8672C11.3281 14.9023 11.0381 14.9639 10.7656 14.9639C10.2207 14.9639 9.10449 13.5312 9.10449 13.1182C9.10449 12.4502 10.1768 10.7979 11.6797 10.7979C12.374 10.7979 12.9365 10.9121 13.499 11.0176C13.9648 11.1055 14.4395 11.1934 14.8965 11.1934C15.7754 11.1934 16.6895 10.7012 16.6895 10.0332C16.6895 9.06641 14.2109 8.31055 12.7959 8.31055C12.418 8.31055 11.8906 8.48633 10.8887 8.95215C10.625 9.0752 10.4229 8.74121 10.6865 8.5918C10.8008 8.52148 10.915 8.45117 11.0557 8.36328C11.6006 8.02051 12.1104 7.71289 12.3477 7.71289C12.5059 7.71289 12.6201 7.72168 12.8486 7.76562C13.0508 7.80078 13.2266 7.82715 13.332 7.82715C13.833 7.82715 14.167 7.51074 14.167 7.00098C14.167 6.68457 14.2637 6.55273 14.5977 6.39453L15.2393 6.08691C17.9639 6.54395 20.2314 8.46875 21.1895 11C20.6445 11.3867 19.3174 12.1514 19.0273 12.1514C18.8691 12.1514 18.6934 11.9932 18.2627 11.668C17.1904 10.8594 16.2061 12.2041 17.252 12.8896C18.0166 13.4082 18.2275 13.6104 18.2275 14.0498C18.2275 14.3223 18.0693 14.665 17.4805 15.667C17.3047 15.957 17.1113 16.291 16.918 16.6426C15.5557 19.1299 15.1865 19.5342 14.6855 19.5342C13.8418 19.5342 14.0527 18.4531 14.0527 16.8359ZM17.9727 9.13672C18.2188 9.13672 18.4209 8.96973 18.4209 8.64453C18.4209 8.30176 17.7881 7.80078 17.2783 7.80078C16.9355 7.80078 16.5225 7.90625 16.5225 8.24902C16.5225 8.60938 17.4717 9.13672 17.9727 9.13672ZM11.6797 9.76953C11.6445 9.76953 11.6006 9.77832 11.5566 9.77832C12.1719 9.4707 12.585 9.33887 12.7959 9.33887C13.3848 9.33887 15.6699 9.90137 15.6699 10.0244C15.6699 10.1299 15.3711 10.2178 14.9756 10.2178C14.334 10.2178 13.1123 9.76953 11.6797 9.76953Z"
                fill="#1C1C1E"
              />
            </svg>
          </button>
          <button
            class="w-10 h-10 rounded-full flex-none text-black"
            onclick=${() => {
              setSearch({ term: "", results: searcher.search(search.term) });
            }}
          >
            <svg
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5322 19.0332C13.9297 19.0332 15.2393 18.6113 16.3291 17.8906L20.1787 21.749C20.4336 21.9951 20.7588 22.1182 21.1104 22.1182C21.8398 22.1182 22.376 21.5469 22.376 20.8262C22.376 20.4922 22.2617 20.167 22.0156 19.9209L18.1924 16.0801C18.9834 14.9551 19.4492 13.5928 19.4492 12.1162C19.4492 8.31055 16.3379 5.19922 12.5322 5.19922C8.73535 5.19922 5.61523 8.31055 5.61523 12.1162C5.61523 15.9219 8.72656 19.0332 12.5322 19.0332ZM12.5322 17.1875C9.74609 17.1875 7.46094 14.9023 7.46094 12.1162C7.46094 9.33008 9.74609 7.04492 12.5322 7.04492C15.3184 7.04492 17.6035 9.33008 17.6035 12.1162C17.6035 14.9023 15.3184 17.1875 12.5322 17.1875Z"
                fill="#1C1C1E"
              />
            </svg>
          </button>
          <button
            class="w-10 h-10 p-1 rounded-full flex-none text-black mr-3"
            onclick=${() => setTestMode(!testMode)}
          >
            ${testMode
              ? html`<svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9346 21.4415C21.2158 21.714 21.6465 21.7316 21.9277 21.4415C22.2178 21.1427 22.2002 20.7208 21.9277 20.4484L7.02148 5.55092C6.74902 5.27846 6.29199 5.26967 6.01953 5.55092C5.75586 5.81459 5.75586 6.27162 6.01953 6.53529L20.9346 21.4415ZM14.0088 6.05189C12.4707 6.05189 11.082 6.31556 9.79004 6.74623L11.2139 8.17006C12.1016 7.92396 13.0156 7.77455 14.0088 7.77455C19.5986 7.77455 24.0371 12.6349 24.0371 13.6632C24.0371 14.3576 22.6309 16.1417 20.3896 17.548L21.708 18.8751C24.4678 17.0646 26.0762 14.7003 26.0762 13.6632C26.0762 11.8615 21.2246 6.05189 14.0088 6.05189ZM14.0088 21.2833C15.626 21.2833 17.1113 21.0021 18.4561 20.5363L17.0322 19.1124C16.083 19.3937 15.0811 19.5607 14.0088 19.5607C8.40137 19.5607 3.96289 14.8937 3.96289 13.6632C3.96289 13.0744 5.44824 11.1847 7.83008 9.70814L6.48535 8.36342C3.62012 10.1915 1.92383 12.6173 1.92383 13.6632C1.92383 15.465 6.88086 21.2833 14.0088 21.2833ZM18.377 15.3419C18.6055 14.8322 18.7285 14.2521 18.7285 13.6632C18.7285 11.0353 16.6279 8.95228 14.0088 8.95228C13.4023 8.95228 12.8398 9.07533 12.3213 9.28627L18.377 15.3419ZM14.0088 18.3829C14.6768 18.3829 15.3096 18.2247 15.8809 17.9523L9.70215 11.7736C9.4209 12.3449 9.27148 12.9865 9.27148 13.672C9.28027 16.2296 11.3721 18.3829 14.0088 18.3829Z"
                    fill="#1C1C1E"
                  />
                </svg>`
              : html`
                  <svg
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0088 21.2832C21.2246 21.2832 26.0762 15.4648 26.0762 13.6631C26.0762 11.8613 21.207 6.05176 14.0088 6.05176C6.89844 6.05176 1.92383 11.8613 1.92383 13.6631C1.92383 15.4648 6.88086 21.2832 14.0088 21.2832ZM14.0088 19.5605C8.40137 19.5605 3.96289 14.8936 3.96289 13.6631C3.96289 12.6348 8.40137 7.77441 14.0088 7.77441C19.5898 7.77441 24.0371 12.6348 24.0371 13.6631C24.0371 14.8936 19.5898 19.5605 14.0088 19.5605ZM14.0088 18.3828C16.6279 18.3828 18.7285 16.2295 18.7285 13.6631C18.7285 11.0352 16.6279 8.95215 14.0088 8.95215C11.3721 8.95215 9.2627 11.0352 9.27148 13.6631C9.28906 16.2295 11.3721 18.3828 14.0088 18.3828ZM14 15.1836C13.1562 15.1836 12.4707 14.498 12.4707 13.6631C12.4707 12.8281 13.1562 12.1426 14 12.1426C14.8438 12.1426 15.5293 12.8281 15.5293 13.6631C15.5293 14.498 14.8438 15.1836 14 15.1836Z"
                      fill="#1C1C1E"
                    />
                  </svg>
                `}
          </button>
          ${[
            ...new Set(
              Object.keys(languages)
                .map((x) => x[0])
                .sort()
            ),
          ].map(
            (x) =>
              html`
                <button
                  data-letter-button=${x}
                  class=${[
                    "w-10 h-10 rounded-full border border-black flex-none tabular-nums text-black",
                    x === letter
                      ? "font-bold bg-black text-white scale-110 border-transparent"
                      : "font-normal",
                  ].join(" ")}
                  onclick=${() => {
                    setLetter(x);
                    const el = document.querySelector(`[data-letter="${x}"]`);
                    el?.scrollIntoView();
                  }}
                >
                  ${x}
                </button>
              `
          )}
        </div>
      </footer>
      <dialog
        open=${search.term !== undefined}
        class=${search.term !== undefined
          ? "fixed inset-0 p-[5vmin] w-full h-full bg-white/80"
          : "hidden"}
      >
        <div
          class="bg-white border max-w-screen-sm h-full flex flex-col mx-auto rounded-xl shadow-xl"
        >
          <div class="flex flex-col relative min-h-0 h-full w-full">
            <div class="flex items-center gap-3">
              <div class="relative flex items-center w-full">
                <input
                  class="w-full text-lg border border-black/20 px-4 py-3 pb-3.5 rounded-md scale-105 shadow-lg placeholder-neutral-400"
                  type="text"
                  placeholder="Search Dankon..."
                  value=${search.term}
                  oninput=${(e) => {
                    setSearch({
                      term: e.target.value,
                      results: searcher.search(e.target.value),
                    });
                  }}
                />

                <svg
                  class="absolute right-2 w-8 text-black/30 fill-current"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5322 19.0332C13.9297 19.0332 15.2393 18.6113 16.3291 17.8906L20.1787 21.749C20.4336 21.9951 20.7588 22.1182 21.1104 22.1182C21.8398 22.1182 22.376 21.5469 22.376 20.8262C22.376 20.4922 22.2617 20.167 22.0156 19.9209L18.1924 16.0801C18.9834 14.9551 19.4492 13.5928 19.4492 12.1162C19.4492 8.31055 16.3379 5.19922 12.5322 5.19922C8.73535 5.19922 5.61523 8.31055 5.61523 12.1162C5.61523 15.9219 8.72656 19.0332 12.5322 19.0332ZM12.5322 17.1875C9.74609 17.1875 7.46094 14.9023 7.46094 12.1162C7.46094 9.33008 9.74609 7.04492 12.5322 7.04492C15.3184 7.04492 17.6035 9.33008 17.6035 12.1162C17.6035 14.9023 15.3184 17.1875 12.5322 17.1875Z"
                    fill="#1C1C1E"
                  />
                </svg>
              </div>
            </div>
            <ul class="flex-1 divide-y overflow-y-auto py-[1vmin]">
              ${[...search.results]
                .sort((x, y) =>
                  (
                    search.term
                      ? x.id.toLowerCase().match(search.term?.toLowerCase())
                      : x.id < y.id
                  )
                    ? -1
                    : 1
                )
                .map((result) => {
                  const showMaxspokenIn = 5;
                  return html`
                    <li
                      class="py-[3vmin] px-[4vmin]"
                      onclick=${() => {
                        setLetter(result.id[0]);
                        const el = document.querySelector(
                          `[data-language="${result.id}"]`
                        );
                        el?.scrollIntoView();
                        setSearch({ term: undefined, results: search.results });
                      }}
                    >
                      <div class="flex w-full justify-between items-center">
                        <h2>${result.id}</h2>
                        <h3 class="text-xs text-black/60">
                          ${testMode
                            ? "•".repeat(
                                result.translations.thankYou.literal.length
                              )
                            : result.translations.thankYou.literal}
                        </h3>
                      </div>
                      <p class="text-xs font-light text-black/60">
                        Spoken in${" "}
                        ${[
                          ...result.spokenIn,
                          // .filter((x) =>
                          //   x.match(new RegExp(`${search.term}`, "i"))
                          // ),
                        ]
                          .slice(0, showMaxspokenIn)
                          .join(", ")}${result.spokenIn.length >
                          showMaxspokenIn &&
                        `
                    and ${result.spokenIn.length - showMaxspokenIn} other
                      countries
                  `}
                      </p>
                    </li>
                  `;
                })}
            </ul>
            <button
              class="w-full text-black p-4 border-t-2 bg-white rounded-b-xl text-xs uppercase text-neutral-400 font-semibold tracking-wider"
              onclick=${() => {
                setSearch({ term: undefined, results: search.results });
              }}
            >
              <span>Close Search</span>
            </button>
          </div>
        </div>
      </dialog>
    </main>
  `;
};

render(html`<${App} />`, document.body);
