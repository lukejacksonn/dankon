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
      "thank you": {
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
      "thank you": {
        literal: "Спасибо",
        pronunciation: "spah-see-boh",
      },
    },
  },
  "Persian (Dari)": {
    spokenIn: ["Afghanistan"],
    translations: {
      "thank you": {
        literal: "تشکر",
        pronunciation: "tshah-kahr",
      },
    },
  },
  Pashto: {
    spokenIn: ["Afghanistan"],
    translations: {
      "thank you": {
        literal: "شكرونه",
        pronunciation: "shah-kahr-ohn-ah",
      },
    },
  },
  Albanian: {
    spokenIn: ["Albania", "Kosovo", "North Macedonia"],
    translations: {
      "thank you": {
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
      "thank you": {
        literal: "شكرا",
        pronunciation: "shah-kahr-ah",
      },
    },
  },
  Tamazight: {
    spokenIn: ["Algeria", "Morocco", "Sahrawi Arab Democratic Republic"],
    translations: {
      "thank you": {
        literal: "Tasemdaht",
        pronunciation: "tah-sehm-dahht",
      },
    },
  },
  Catalan: {
    spokenIn: ["Andorra"],
    translations: {
      "thank you": {
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
      "thank you": {
        literal: "Obrigado",
        pronunciation: "oh-bree-gah-doh",
      },
    },
  },
  Armenian: {
    spokenIn: ["Armenia", "Artsakh"],
    translations: {
      "thank you": {
        literal: "Շնորհակալություն",
        pronunciation: "shnohr-hah-kah-loo-tsoo-ee-yoon",
      },
    },
  },
  German: {
    spokenIn: ["Austria", "Belgium", "Germany", "Liechtenstein", "Luxembourg"],
    translations: {
      "thank you": {
        literal: "Danke",
        pronunciation: "dahn-kah",
      },
    },
  },
  Azerbaijani: {
    spokenIn: ["Azerbaijan"],
    translations: {
      "thank you": {
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
      "thank you": {
        literal: "Thank you",
        pronunciation: "thahngk yoo",
      },
    },
  },
  Bengali: {
    spokenIn: ["Bangladesh"],
    translations: {
      "thank you": {
        literal: "ধন্যবাদ",
        pronunciation: "dahn-yah-bahd",
      },
    },
  },
  Belarusian: {
    spokenIn: ["Belarus"],
    translations: {
      "thank you": {
        literal: "Дзякую",
        pronunciation: "dzyah-koo-yoo",
      },
    },
  },
  Dutch: {
    spokenIn: ["Belgium", "Netherlands", "Suriname"],
    translations: {
      "thank you": {
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
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Dzongkha: {
    spokenIn: ["Bhutan"],
    translations: {
      "thank you": {
        literal: "གཟུགས་རབ་",
        pronunciation: "gzu-ku rab",
      },
    },
  },
  Aymara: {
    spokenIn: ["Bolivia", "Peru"],
    translations: {
      "thank you": {
        literal: "Añaraki",
        pronunciation: "ahn-ah-rah-kee",
      },
    },
  },
  Chiquitano: {
    spokenIn: ["Bolivia"],
    translations: {
      "thank you": {
        literal: "Pupa",
        pronunciation: "poo-pah",
      },
    },
  },
  Guaraní: {
    spokenIn: ["Bolivia", "Paraguay"],
    translations: {
      "thank you": {
        literal: "Aguyje",
        pronunciation: "ah-goo-ee-hey",
      },
    },
  },
  Quechua: {
    spokenIn: ["Bolivia", "Ecuador", "Peru"],
    translations: {
      "thank you": {
        literal: "Allillanchu",
        pronunciation: "ah-lee-yahn-chu",
      },
    },
  },
  Bosnian: {
    spokenIn: ["Bosnia and Herzegovina"],
    translations: {
      "thank you": {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Malay: {
    spokenIn: ["Brunei", "Christmas Island", "Malaysia", "Singapore"],
    translations: {
      "thank you": {
        literal: "Terima kasih",
        pronunciation: "tay-ree-mah kah-see",
      },
    },
  },
  Bulgarian: {
    spokenIn: ["Bulgaria"],
    translations: {
      "thank you": {
        literal: "Благодаря",
        pronunciation: "blah-goh-dah-ryah",
      },
    },
  },
  Kirundi: {
    spokenIn: ["Burundi"],
    translations: {
      "thank you": {
        literal: "Murakoze",
        pronunciation: "moo-rah-koh-zay",
      },
    },
  },
  Khmer: {
    spokenIn: ["Cambodia"],
    translations: {
      "thank you": {
        literal: "អរគុណ",
        pronunciation: "aw-koon",
      },
    },
  },
  Sango: {
    spokenIn: ["Central African Republic"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Mandarin: {
    spokenIn: ["China", "Christmas Island", "Singapore", "Taiwan"],
    translations: {
      "thank you": {
        literal: "谢谢",
        pronunciation: "see-ye see-ye",
      },
    },
  },
  Cantonese: {
    spokenIn: ["China", "Vietnam", "Malaysia"],
    translations: {
      "thank you": {
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
      "thank you": {
        literal: "Gracias",
        pronunciation: "grah-see-ass",
      },
    },
  },
  Comorian: {
    spokenIn: ["Comoros"],
    translations: {
      "thank you": {
        literal: "Marahaba",
        pronunciation: "mah-rah-hah-bah",
      },
    },
  },
  Croatian: {
    spokenIn: ["Croatia", "Bosnia and Herzegovina"],
    translations: {
      "thank you": {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Greek: {
    spokenIn: ["Greece", "Cyprus"],
    translations: {
      "thank you": {
        literal: "Ευχαριστώ",
        pronunciation: "eff-khar-ee-stoh",
      },
    },
  },
  Turkish: {
    spokenIn: ["Cyprus", "Northern Cyprus", "Turkey"],
    translations: {
      "thank you": {
        literal: "Teşekkür ederim",
        pronunciation: "teh-shay-kur eh-deh-ree-m",
      },
    },
  },
  Czech: {
    spokenIn: ["Czech Republic"],
    translations: {
      "thank you": {
        literal: "Děkuji",
        pronunciation: "day-koo-ee",
      },
    },
  },
  Slovak: {
    spokenIn: ["Czech Republic", "Slovakia"],
    translations: {
      "thank you": {
        literal: "Ďakujem",
        pronunciation: "dah-koo-yehm",
      },
    },
  },
  Danish: {
    spokenIn: ["Denmark"],
    translations: {
      "thank you": {
        literal: "Tak",
        pronunciation: "tahk",
      },
    },
  },
  Tetum: {
    spokenIn: ["East Timor"],
    translations: {
      "thank you": {
        literal: "Obrigadu",
        pronunciation: "oh-bree-gah-doo",
      },
    },
  },
  Tigrinya: {
    spokenIn: ["Eritrea", "Ethiopia"],
    translations: {
      "thank you": {
        literal: "እናቴ",
        pronunciation: "eh-nah-teh",
      },
    },
  },
  Estonian: {
    spokenIn: ["Estonia"],
    translations: {
      "thank you": {
        literal: "Aitäh",
        pronunciation: "eye-tah",
      },
    },
  },
  Swazi: {
    spokenIn: ["Eswatini", "South Africa"],
    translations: {
      "thank you": {
        literal: "Ngiyabonga",
        pronunciation: "eng-ee-ah-bong-ah",
      },
    },
  },
  Afar: {
    spokenIn: ["Ethiopia"],
    translations: {
      "thank you": {
        literal: "Mahadsanid",
        pronunciation: "mah-hah-d-sah-nee-d",
      },
    },
  },
  Amharic: {
    spokenIn: ["Ethiopia"],
    translations: {
      "thank you": {
        literal: "አመሰግናለሁ",
        pronunciation: "ah-meh-sah-gnah-lay-hoo",
      },
    },
  },
  Oromo: {
    spokenIn: ["Ethiopia"],
    translations: {
      "thank you": {
        literal: "Waamicha",
        pronunciation: "wah-mee-chah",
      },
    },
  },
  Somali: {
    spokenIn: ["Ethiopia", "Somaliland"],
    translations: {
      "thank you": {
        literal: "Mahadsanid",
        pronunciation: "mah-hah-d-sah-nee-d",
      },
    },
  },
  Fijian: {
    spokenIn: ["Fiji"],
    translations: {
      "thank you": {
        literal: "Vinaka",
        pronunciation: "vee-nah-kah",
      },
    },
  },
  "Fiji Hindi": {
    spokenIn: ["Fiji"],
    translations: {
      "thank you": {
        literal: "Dhanyavaad",
        pronunciation: "dhan-yah-vahd",
      },
    },
  },
  Finnish: {
    spokenIn: ["Finland"],
    translations: {
      "thank you": {
        literal: "Kiitos",
        pronunciation: "kee-tohs",
      },
    },
  },
  Swedish: {
    spokenIn: ["Finland", "Sweden"],
    translations: {
      "thank you": {
        literal: "Tack",
        pronunciation: "tahk",
      },
    },
  },
  Georgian: {
    spokenIn: ["Georgia"],
    translations: {
      "thank you": {
        literal: "მადლობა",
        pronunciation: "mah-dloh-bah",
      },
    },
  },
  "Haitian Creole": {
    spokenIn: ["Haiti"],
    translations: {
      "thank you": {
        literal: "Mèsi",
        pronunciation: "meh-see",
      },
    },
  },
  Hungarian: {
    spokenIn: ["Hungary"],
    translations: {
      "thank you": {
        literal: "Köszönöm",
        pronunciation: "koh-sho-nohm",
      },
    },
  },
  Icelandic: {
    spokenIn: ["Iceland"],
    translations: {
      "thank you": {
        literal: "Takk",
        pronunciation: "tahk",
      },
    },
  },
  Hindi: {
    spokenIn: ["India"],
    translations: {
      "thank you": {
        literal: "धन्यवाद",
        pronunciation: "dhan-yah-vahd",
      },
    },
  },
  Indonesian: {
    spokenIn: ["Indonesia"],
    translations: {
      "thank you": {
        literal: "Terima kasih",
        pronunciation: "tay-ree-mah kah-see",
      },
    },
  },
  Persian: {
    spokenIn: ["Iran"],
    translations: {
      "thank you": {
        literal: "متشکرم",
        pronunciation: "meh-tah-shah-kah-rahm",
      },
    },
  },
  Kurdish: {
    spokenIn: ["Iraq"],
    translations: {
      "thank you": {
        literal: "Spas",
        pronunciation: "spahs",
      },
    },
  },
  Irish: {
    spokenIn: ["Ireland"],
    translations: {
      "thank you": {
        literal: "Go raibh maith agat",
        pronunciation: "goh ree-vah mah-ah-gah",
      },
    },
  },
  Hebrew: {
    spokenIn: ["Israel"],
    translations: {
      "thank you": {
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
      "thank you": {
        literal: "Grazie",
        pronunciation: "grah-zee-eh",
      },
    },
  },
  Japanese: {
    spokenIn: ["Japan"],
    translations: {
      "thank you": {
        literal: "ありがとうございます",
        pronunciation: "arigatou gozaimasu",
      },
    },
  },
  Kazakh: {
    spokenIn: ["Kazakhstan"],
    translations: {
      "thank you": {
        literal: "рахмет",
        pronunciation: "rah-met",
      },
    },
  },
  Swahili: {
    spokenIn: ["Kenya", "Rwanda", "Tanzania", "Uganda"],
    translations: {
      "thank you": {
        literal: "Asante",
        pronunciation: "ah-sahn-teh",
      },
    },
  },
  Korean: {
    spokenIn: ["North Korea", "South Korea"],
    translations: {
      "thank you": {
        literal: "감사합니다",
        pronunciation: "gam-sah-ham-ni-da",
      },
    },
  },
  Serbian: {
    spokenIn: ["Kosovo", "Serbia", "Bosnia and Herzegovina"],
    translations: {
      "thank you": {
        literal: "Хвала",
        pronunciation: "khvah-lah",
      },
    },
  },
  "Standard Arabic": {
    spokenIn: ["Kuwait"],
    translations: {
      "thank you": {
        literal: "شكراً",
        pronunciation: "shukran",
      },
    },
  },
  Kyrgyz: {
    spokenIn: ["Kyrgyzstan"],
    translations: {
      "thank you": {
        literal: "рахмат",
        pronunciation: "rah-mat",
      },
    },
  },
  Lao: {
    spokenIn: ["Laos"],
    translations: {
      "thank you": {
        literal: "ຂອບໃຈ",
        pronunciation: "kho-bhajai",
      },
    },
  },
  Latvian: {
    spokenIn: ["Latvia"],
    translations: {
      "thank you": {
        literal: "Paldies",
        pronunciation: "pahl-dees",
      },
    },
  },
  Sotho: {
    spokenIn: ["Lesotho", "South Africa", "Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Ke a leboga",
        pronunciation: "keh ah leh-boh-gah",
      },
    },
  },
  Lithuanian: {
    spokenIn: ["Lithuania"],
    translations: {
      "thank you": {
        literal: "Ačiū",
        pronunciation: "ah-chee-oo",
      },
    },
  },
  Luxembourgish: {
    spokenIn: ["Luxembourg"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Malagasy: {
    spokenIn: ["Madagascar"],
    translations: {
      "thank you": {
        literal: "Misaotra",
        pronunciation: "mee-sah-oh-tra",
      },
    },
  },
  Chichewa: {
    spokenIn: ["Malawi"],
    translations: {
      "thank you": {
        literal: "Zikomo",
        pronunciation: "zee-koh-moh",
      },
    },
  },
  Dhivehi: {
    spokenIn: ["Maldives"],
    translations: {
      "thank you": {
        literal: "Kuɗi aadhamin",
        pronunciation: "koo-dee ah-dah-meen",
      },
    },
  },
  Maltese: {
    spokenIn: ["Malta"],
    translations: {
      "thank you": {
        literal: "Grazzi",
        pronunciation: "grah-zee",
      },
    },
  },
  "Mauritian Creole (Morisien)": {
    spokenIn: ["Mauritius"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Romanian: {
    spokenIn: ["Moldova", "Romania"],
    translations: {
      "thank you": {
        literal: "Mulțumesc",
        pronunciation: "mool-tsoo-mesh",
      },
    },
  },
  Mongolian: {
    spokenIn: ["Mongolia"],
    translations: {
      "thank you": {
        literal: "Баярлалаа",
        pronunciation: "bay-arl-ah-ah",
      },
    },
  },
  Montenegrin: {
    spokenIn: ["Montenegro"],
    translations: {
      "thank you": {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Burmese: {
    spokenIn: ["Myanmar (Burma)"],
    translations: {
      "thank you": {
        literal: "ကြယ်ပါတယ်",
        pronunciation: "kya-pa-ta",
      },
    },
  },
  Nauruan: {
    spokenIn: ["Nauru"],
    translations: {
      "thank you": {
        literal: "Arigu",
        pronunciation: "ah-ree-goo",
      },
    },
  },
  Nepali: {
    spokenIn: ["Nepal"],
    translations: {
      "thank you": {
        literal: "धन्यवाद",
        pronunciation: "dhanyavaad",
      },
    },
  },
  Frisian: {
    spokenIn: ["Netherlands"],
    translations: {
      "thank you": {
        literal: "Tank jo",
        pronunciation: "tahnk yoh",
      },
    },
  },
  "Māori language": {
    spokenIn: ["New Zealand"],
    translations: {
      "thank you": {
        literal: "Kia ora",
        pronunciation: "kee-ah-oh-rah",
      },
    },
  },
  Niuean: {
    spokenIn: ["Niue"],
    translations: {
      "thank you": {
        literal: "Fakaaue lahi",
        pronunciation: "fah-kah-oh-ah-lah-hee",
      },
    },
  },
  Norfuk: {
    spokenIn: ["Norfolk Island"],
    translations: {
      "thank you": {
        literal: "Tankyu",
        pronunciation: "tahnk-yoo",
      },
    },
  },
  Macedonian: {
    spokenIn: ["North Macedonia"],
    translations: {
      "thank you": {
        literal: "Благодарам",
        pronunciation: "blah-goh-dah-rahm",
      },
    },
  },
  Norwegian: {
    spokenIn: ["Norway"],
    translations: {
      "thank you": {
        literal: "Takk",
        pronunciation: "tahk",
      },
    },
  },
  Sami: {
    spokenIn: ["Norway"],
    translations: {
      "thank you": {
        literal: "Gávnnat",
        pronunciation: "gahv-nah",
      },
    },
  },
  Urdu: {
    spokenIn: ["Pakistan"],
    translations: {
      "thank you": {
        literal: "شکریہ",
        pronunciation: "shukriya",
      },
    },
  },
  Palauan: {
    spokenIn: ["Palau"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  "Hiri Motu": {
    spokenIn: ["Papua New Guinea"],
    translations: {
      "thank you": {
        literal: "Tuguraki",
        pronunciation: "too-goo-rah-kee",
      },
    },
  },
  "Tok Pisin": {
    spokenIn: ["Papua New Guinea"],
    translations: {
      "thank you": {
        literal: "Tenkyu",
        pronunciation: "ten-kee-oo",
      },
    },
  },
  Asháninka: {
    spokenIn: ["Peru"],
    translations: {
      "thank you": {
        literal: "Nájtsi",
        pronunciation: "nah-ee-chee",
      },
    },
  },
  Tagalog: {
    spokenIn: ["Philippines"],
    translations: {
      "thank you": {
        literal: "Salamat",
        pronunciation: "sah-lah-mah",
      },
    },
  },
  Polish: {
    spokenIn: ["Poland"],
    translations: {
      "thank you": {
        literal: "Dziękuję",
        pronunciation: "jeh-ku-yeh",
      },
    },
  },
  Kinyarwanda: {
    spokenIn: ["Rwanda"],
    translations: {
      "thank you": {
        literal: "Murakoze",
        pronunciation: "moo-rah-koh-zeh",
      },
    },
  },
  "Seychellois Creole": {
    spokenIn: ["Seychelles"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Tamil: {
    spokenIn: ["Singapore", "Sri Lanka"],
    translations: {
      "thank you": {
        literal: "நன்றி",
        pronunciation: "nah-nree",
      },
    },
  },
  Slovene: {
    spokenIn: ["Slovenia"],
    translations: {
      "thank you": {
        literal: "Hvala",
        pronunciation: "hval-ah",
      },
    },
  },
  Afrikaans: {
    spokenIn: ["South Africa"],
    translations: {
      "thank you": {
        literal: "Dankie",
        pronunciation: "dahn-kee",
      },
    },
  },
  "Southern Ndebele": {
    spokenIn: ["South Africa"],
    translations: {
      "thank you": {
        literal: "Ngiyabonga",
        pronunciation: "ng-ee-yah-bong-ah",
      },
    },
  },
  "Northern Sotho": {
    spokenIn: ["South Africa"],
    translations: {
      "thank you": {
        literal: "Ke a leboga",
        pronunciation: "keh ah leh-boh-gah",
      },
    },
  },
  Tsonga: {
    spokenIn: ["South Africa"],
    translations: {
      "thank you": {
        literal: "Ndzi kombela",
        pronunciation: "ndzee kohm-bell-ah",
      },
    },
  },
  Tswana: {
    spokenIn: ["South Africa", "Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Ke a leboga",
        pronunciation: "keh ah leh-boh-gah",
      },
    },
  },
  Venda: {
    spokenIn: ["South Africa", "Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Ndaa",
        pronunciation: "nd-ah",
      },
    },
  },
  Xhosa: {
    spokenIn: ["South Africa", "Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Enkosi",
        pronunciation: "en-koh-see",
      },
    },
  },
  Zulu: {
    spokenIn: ["South Africa"],
    translations: {
      "thank you": {
        literal: "Ngiyabonga",
        pronunciation: "ng-ee-yah-bong-ah",
      },
    },
  },
  Ossetian: {
    spokenIn: ["South Ossetia"],
    translations: {
      "thank you": {
        literal: "Кӕмдтын",
        pronunciation: "kem-dtin",
      },
    },
  },
  Sinhala: {
    spokenIn: ["Sri Lanka"],
    translations: {
      "thank you": {
        literal: "ස්තුතියි",
        pronunciation: "shtoo-ti-ee",
      },
    },
  },
  "Swiss French": {
    spokenIn: ["Switzerland"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  "Swiss German": {
    spokenIn: ["Switzerland"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  "Swiss Italian": {
    spokenIn: ["Switzerland"],
    translations: {
      "thank you": {
        literal: "Grazie",
        pronunciation: "grah-zee-eh",
      },
    },
  },
  Romansh: {
    spokenIn: ["Switzerland"],
    translations: {
      "thank you": {
        literal: "Grazia",
        pronunciation: "grah-zee-ah",
      },
    },
  },
  Tajik: {
    spokenIn: ["Tajikistan"],
    translations: {
      "thank you": {
        literal: "Ташаккур",
        pronunciation: "tah-shah-kur",
      },
    },
  },
  Thai: {
    spokenIn: ["Thailand"],
    translations: {
      "thank you": {
        literal: "ขอบคุณ",
        pronunciation: "kohp-khun",
      },
    },
  },
  Tokelauan: {
    spokenIn: ["Tokelau"],
    translations: {
      "thank you": {
        literal: "Fakafetai",
        pronunciation: "fah-kah-fay-tah-ee",
      },
    },
  },
  Tongan: {
    spokenIn: ["Tonga"],
    translations: {
      "thank you": {
        literal: "Mālohi atu",
        pronunciation: "mah-loh-hee ah-too",
      },
    },
  },
  Moldovan: {
    spokenIn: ["Transnistria"],
    translations: {
      "thank you": {
        literal: "Mulțumesc",
        pronunciation: "mool-tsoo-mesh",
      },
    },
  },
  Ukrainian: {
    spokenIn: ["Transnistria", "Ukraine"],
    translations: {
      "thank you": {
        literal: "Дякую",
        pronunciation: "dyah-koo-yoo",
      },
    },
  },
  Turkmen: {
    spokenIn: ["Turkmenistan"],
    translations: {
      "thank you": {
        literal: "Sag bol",
        pronunciation: "sahg bohl",
      },
    },
  },
  Tuvaluan: {
    spokenIn: ["Tuvalu"],
    translations: {
      "thank you": {
        literal: "Faafetai",
        pronunciation: "fah-fay-tah-ee",
      },
    },
  },
  "Scottish Gaelic": {
    spokenIn: ["Scotland"],
    translations: {
      "thank you": {
        literal: "Tapadh leat",
        pronunciation: "tah-pah leh",
      },
    },
  },
  Welsh: {
    spokenIn: ["Wales"],
    translations: {
      "thank you": {
        literal: "Diolch",
        pronunciation: "dee-olch",
      },
    },
  },
  Pitcairnese: {
    spokenIn: ["Pitcairn Islands"],
    translations: {
      "thank you": {
        literal: "Ta'e",
        pronunciation: "tah-eh",
      },
    },
  },
  Jèrriais: {
    spokenIn: ["Jersey"],
    translations: {
      "thank you": {
        literal: "Merci",
        pronunciation: "mair-see",
      },
    },
  },
  Manx: {
    spokenIn: ["Isle of Man"],
    translations: {
      "thank you": {
        literal: "Gura mie ayd",
        pronunciation: "gur-ah mee ayd",
      },
    },
  },
  Uzbek: {
    spokenIn: ["Uzbekistan"],
    translations: {
      "thank you": {
        literal: "Rahmat",
        pronunciation: "rah-mat",
      },
    },
  },
  Latin: {
    spokenIn: ["Vatican City"],
    translations: {
      "thank you": {
        literal: "Gratias tibi ago",
        pronunciation: "grah-tee-ahs tee-bee ah-go",
      },
    },
  },
  Vietnamese: {
    spokenIn: ["Vietnam"],
    translations: {
      "thank you": {
        literal: "Cảm ơn",
        pronunciation: "cham-on",
      },
    },
  },
  Chewa: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Zikomo",
        pronunciation: "zee-koh-moh",
      },
    },
  },
  Chibarwe: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Kalanga: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Komele",
        pronunciation: "koh-meh-leh",
      },
    },
  },
  Khoisan: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "ǃKamagu",
        pronunciation: "kam-ah-goo",
      },
    },
  },
  Nambya: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Ndau: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Ndebele: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Ngiyabonga",
        pronunciation: "ngi-yah-bong-ah",
      },
    },
  },
  Shangani: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Ngiyabonga",
        pronunciation: "ngi-yah-bong-ah",
      },
    },
  },
  Shona: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
        literal: "Matura",
        pronunciation: "mah-too-rah",
      },
    },
  },
  Tonga: {
    spokenIn: ["Zimbabwe"],
    translations: {
      "thank you": {
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

const html = htm.bind(h);

const App = () => {
  const [letter, setLetter] = useState("A");
  const ref = useRef();

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
          const literal = languages[language].translations["thank you"].literal;
          const pronunciation =
            languages[language].translations["thank you"].pronunciation;
          const spokenIn = languages[language].spokenIn;
          const showMaxspokenIn = 5;

          return html`
            <li
              data-letter=${language[0]}
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
                          >${flags[x]}
                          <span class="opacity-60">${x}</span>
                        </span>
                      `
                  )}${spokenIn.length > showMaxspokenIn &&
                  html`
                    <span class="border py-0.5 px-2 text-black/60 rounded-full">
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
        class="w-full absolute top-0 flex justify-center gap-1 py-4 text-xs bg-white border-b"
      >
        ${[
          ...new Set(
            Object.keys(languages)
              .map((x) => x[0])
              .sort()
          ),
        ].map(
          (x) =>
            html`<button
              class=${x === letter ? "font-bold" : "font-light"}
              onclick=${() => {
                setLetter(x);
                const el = document.querySelector(`[data-letter="${x}"]`);
                el?.scrollIntoView();
              }}
            >
              ${x}
            </button>`
        )}
      </aside>
    </main>
  `;
};

render(html`<${App} />`, document.body);
