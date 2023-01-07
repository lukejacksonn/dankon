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
    },
  },
  "Persian (Dari)": {
    spokenIn: ["Afghanistan"],
    translations: {
      thankYou: {
        literal: "تشکر",
        pronunciation: "tshah-kahr",
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
    },
  },
  Dzongkha: {
    spokenIn: ["Bhutan"],
    translations: {
      thankYou: {
        literal: "གཟུགས་རབ་",
        pronunciation: "gzu-ku rab",
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

const App = () => {
  const [letter, setLetter] = useState("A");
  const ref = useRef();
  const main = useRef();

  const [search, setSearch] = useState({
    term: undefined,
    results: searcher.search(""),
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.onscroll = function () {
        document.querySelectorAll("[data-letter]").forEach((el) => {
          const letter = el.querySelector("h2")?.innerText[0];
          if (el.getBoundingClientRect().top === 0) {
            setLetter(letter);
          }
        });
      };
    }
  }, [ref]);

  return html`
    <main
      ref=${main}
      class="h-screen max-h-[100dvh] overflow-y-scroll snap-y snap-mandatory"
    >
      <header class="snap-start h-full flex flex-col">
        <div class="m-auto text-center p-10 grid gap-4">
          <span class="text-8xl">🗺</span>
          <h1 class="font-bold text-6xl">Thanks</h1>
          <p class="font-light max-w-[30ch] opacity-80">
            Learn to express your gratitude in
            ${" "}${Object.keys(languages).length}${" "} different languages
          </p>
        </div>
        <span class="mx-auto mb-8 uppercase font-extrabold opacity-30"
          >Scroll Down</span
        >
      </header>
      <ul
        ref=${ref}
        class="snap-start h-full overflow-y-scroll snap-y snap-mandatory"
      >
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
              class="snap-center block h-full bg-white flex flex-col py-10 px-6 pt-20 border-t"
            >
              <div class="h-full flex flex-col text-center">
                <h2 class="text-xl font-medium text-black/80">${language}</h2>
                <div class="my-auto">
                  <h3
                    class=${literal.length > 12 || language === "Japanese"
                      ? "font-bold mb-[0.5vw] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                      : "font-bold mb-[1vw] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"}
                  >
                    ${literal}
                  </h3>
                  <h4 class="font-light">(${pronunciation})</h4>
                </div>
                <h5
                  class="mx-auto px-12 uppercase text-xs border-b pb-2 mb-3 text-black/30 tracking-wider font-medium"
                >
                  Spoken In
                </h5>
                <p
                  class="text-xs max-w-screen-sm mx-auto leading-relaxed flex flex-wrap gap-x-1 gap-y-1.5 justify-center items-center"
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
      <aside
        class="w-full absolute top-0 flex gap-8 justify-center py-4 px-4 text-xs bg-white border-b"
      >
        <button
          onclick=${() => {
            main.current.scrollTo({ top: 0, behavior: "smooth" });
            setSearch({ term: undefined, results: search.results });
          }}
        >
          Home
        </button>
        <div class="flex gap-2 overflow-x-auto">
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
                  class=${x === letter ? "font-bold" : "font-light"}
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
        <button
          onclick=${() => {
            setSearch({ term: "", results: searcher.search(search.term) });
          }}
        >
          Search
        </button>
      </aside>
      <dialog
        open=${search.term !== undefined}
        class=${search.term !== undefined
          ? "fixed inset-0 p-[5vmin] w-full h-full bg-white/80"
          : "hidden"}
      >
        <div
          class="bg-white border max-w-screen-sm h-full flex flex-col mx-auto rounded-lg shadow-xl"
        >
          <div class="flex items-center justify-between px-4 py-3 border-b">
            <h1 class="text-sm font-light">Site Search</h1>
            <button
              class="text-xs font-medium"
              onclick=${() => {
                setSearch({ term: undefined, results: search.results });
              }}
            >
              Close
            </button>
          </div>
          <div class="flex flex-col relative min-h-0 h-full w-full pt-4 px-4">
            <div class="relative flex items-center w-full">
              <input
                class="w-full text-[16px] border border-black/20 pt-3.5 pb-3 px-3 rounded-md"
                type="text"
                placeholder="Language country or thank you.."
                value=${search.term}
                oninput=${(e) => {
                  setSearch({
                    term: e.target.value,
                    results: searcher.search(e.target.value),
                  });
                }}
              />
              <svg
                class="absolute right-3 top-3.5 text-black/30 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"
                ></path>
              </svg>
            </div>
            <ul class="flex-1 divide-y overflow-y-auto py-2">
              ${[...search.results]
                .sort((x) =>
                  x.id.toLowerCase().match(search.term?.toLowerCase()) ? -1 : 1
                )
                .map((result) => {
                  const showMaxspokenIn = 5;
                  return html`
                    <li
                      class="py-3 px-3"
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
                          ${result.translations.thankYou.literal}
                        </h3>
                      </div>
                      <p class="text-xs font-light text-black/60">
                        Spoken in${" "}
                        ${[
                          ...result.spokenIn.filter((x) =>
                            x.match(new RegExp(`${search.term}`, "i"))
                          ),
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
          </div>
        </div>
      </dialog>
    </main>
  `;
};

render(html`<${App} />`, document.body);
