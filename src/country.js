import find from 'lodash.find';
import orderBy from 'lodash.orderby';

let instance = null;

class Country {
  static getInstance() {
    if (!instance) {
      instance = new Country();
    }
    return instance;
  }

  constructor() {
    this.countryCodes = [];
    this.countriesData = null;
    this.countriesBrazilianNames = {
      af: "Afeganistão",
      za: "África do Sul",
      al: "Albânia",
      de: "Alemanha",
      ad: "Andorra",
      ao: "Angola",
      ai: "Anguilla",
      ag: "Antígua e Barbuda",
      sa: "Arábia Saudita",
      dz: "Argélia",
      ar: "Argentina",
      am: "Armênia",
      aw: "Aruba",
      au: "Austrália",
      at: "Áustria",
      az: "Azerbaijão",
      bs: "Bahamas",
      bh: "Bahrein",
      bd: "Bangladesh",
      bb: "Barbados",
      by: "Belarus",
      be: "Bélgica",
      bz: "Belize",
      bj: "Benin",
      bm: "Bermudas",
      bo: "Bolívia",
      ba: "Bósnia-Herzegóvina",
      bw: "Botsuana",
      br: "Brasil",
      bn: "Brunei",
      bg: "Bulgária",
      bf: "Burkina Fasso",
      bi: "Burundi",
      bt: "Butão",
      cv: "Cabo Verde",
      cm: "Camarões",
      kh: "Camboja",
      ca: "Canadá",
      kz: "Cazaquistão",
      td: "Chade",
      cl: "Chile",
      cn: "China",
      cy: "Chipre",
      sg: "Cingapura",
      co: "Colômbia",
      cg: "Congo",
      kp: "Coréia do Norte",
      kr: "Coréia do Sul",
      ci: "Costa do Marfim",
      cr: "Costa Rica",
      hr: "Croácia (Hrvatska)",
      cu: "Cuba",
      cw: "Curaçau",
      dk: "Dinamarca",
      dj: "Djibuti",
      dm: "Dominica",
      eg: "Egito",
      sv: "El Salvador",
      ae: "Emirados Árabes Unidos",
      ec: "Equador",
      er: "Eritréia",
      sk: "Eslováquia",
      si: "Eslovênia",
      es: "Espanha",
      eu: "Estados Unidos",
      ee: "Estônia",
      et: "Etiópia",
      fj: "Fiji",
      ph: "Filipinas",
      fi: "Finlândia",
      fr: "França",
      ga: "Gabão",
      gm: "Gâmbia",
      gh: "Gana",
      ge: "Geórgia",
      gi: "Gibraltar",
      gb: "Grã-Bretanha (Reino Unido, UK)",
      gd: "Granada",
      gr: "Grécia",
      gl: "Groelândia",
      gp: "Guadalupe",
      gu: "Guam (Território dos Estados Unidos)",
      gt: "Guatemala",
      gg: "Guernsey",
      gy: "Guiana",
      gf: "Guiana Francesa",
      gn: "Guiné",
      gq: "Guiné Equatorial",
      gw: "Guiné-Bissau",
      ht: "Haiti",
      nl: "Holanda",
      hn: "Honduras",
      hk: "Hong Kong",
      hu: "Hungria",
      ye: "Iémen",
      im: "Ilha do Homem",
      cx: "Ilha Natal",
      re: "Ilha Reunião",
      ax: "Ilhas Aland",
      ky: "Ilhas Cayman",
      ck: "Ilhas Cook",
      fo: "Ilhas Faroes",
      fk: "Ilhas Falkland (Malvinas)",
      mp: "Ilhas Marianas do Norte",
      mh: "Ilhas Marshall",
      nf: "Ilhas Norfolk",
      sc: "Ilhas Seychelles",
      sb: "Ilhas Solomão",
      sj: "Ilhas Svalbard e Jan Mayen",
      tk: "Ilhas Tokelau",
      tc: "Ilhas Turks e Caicos",
      vi: "Ilhas Virgens (Estados Unidos)",
      vg: "Ilhas Virgens (Inglaterra)",
      wf: "Ilhas Wallis e Futuna",
      in: "Índia",
      id: "Indonésia",
      ir: "Irã",
      iq: "Iraque",
      ie: "Irlanda",
      is: "Islândia",
      il: "Israel",
      it: "Itália",
      jm: "Jamaica",
      jp: "Japão",
      je: "Jersey",
      jo: "Jordânia",
      ke: "Kênia",
      ki: "Kiribati",
      kw: "Kuait",
      la: "Laos",
      lv: "Látvia",
      ls: "Lesoto",
      lb: "Líbano",
      lr: "Libéria",
      ly: "Líbia",
      li: "Liechtenstein",
      lt: "Lituânia",
      lu: "Luxemburgo",
      mo: "Macau",
      mk: "Macedônia (República Yugoslava)",
      mg: "Madagascar",
      my: "Malásia",
      mw: "Malaui",
      mv: "Maldivas",
      ml: "Mali",
      mt: "Malta",
      ma: "Marrocos",
      mq: "Martinica",
      mu: "Maurício",
      mr: "Mauritânia",
      yt: "Mayotte",
      mx: "México",
      fm: "Micronésia",
      mz: "Moçambique",
      md: "Moldova",
      mc: "Mônaco",
      mn: "Mongólia",
      me: "Montenegro",
      ms: "Montserrat",
      mm: "Myanma",
      na: "Namíbia",
      nr: "Nauru",
      np: "Nepal",
      ni: "Nicarágua",
      ne: "Níger",
      ng: "Nigéria",
      nu: "Niue",
      no: "Noruega",
      nc: "Nova Caledônia",
      nz: "Nova Zelândia",
      om: "Omã",
      pw: "Palau",
      ps: "Palestina",
      pa: "Panamá",
      pg: "Papua-Nova Guiné",
      pk: "Paquistão",
      py: "Paraguai",
      pe: "Peru",
      pf: "Polinésia Francesa",
      pl: "Polônia",
      pr: "Porto Rico",
      pt: "Portugal",
      qa: "Qatar",
      kg: "Quirguistão",
      cf: "República Centro-Africana",
      cd: "República Democrática do Congo",
      do: "República Dominicana",
      cz: "República Tcheca",
      ro: "Romênia",
      rw: "Ruanda",
      ru: "Rússia",
      eh: "Saara Ocidental",
      vc: "São Vincente e Granadinas",
      ws: "Samoa",
      sm: "San Marino",
      sh: "Santa Helena",
      lc: "Santa Lúcia",
      bl: "São Bartolomeu",
      kn: "São Cristóvão e Névis",
      mf: "São Martim",
      st: "São Tomé e Príncipe",
      sn: "Senegal",
      sl: "Serra Leoa",
      rs: "Sérvia",
      sy: "Síria",
      so: "Somália",
      lk: "Sri Lanka",
      pm: "São Pedro e Miquelão",
      sz: "Suazilândia",
      sd: "Sudão",
      se: "Suécia",
      ch: "Suíça",
      sr: "Suriname",
      tj: "Tajiquistão",
      th: "Tailândia",
      tw: "Taiwan",
      tz: "Tanzânia",
      io: "Território Britânico do Oceano índico",
      tl: "Timor Leste",
      tg: "Togo",
      to: "Tonga",
      tt: "Trinidad and Tobago",
      tn: "Tunísia",
      tm: "Turcomenistão",
      tr: "Turquia",
      tv: "Tuvalu",
      ua: "Ucrânia",
      ug: "Uganda",
      uy: "Uruguai",
      uz: "Uzbequistão",
      vu: "Vanuatu",
      va: "Vaticano",
      ve: "Venezuela",
      vn: "Vietnã",
      zm: "Zâmbia",
      zw: "Zimbábue",
    };
  }

  setCustomCountriesData(json) {
    this.countriesData = json;
  }

  addCountryCode(iso2, dialCode, priority) {
    if (!(dialCode in this.countryCodes)) {
      this.countryCodes[dialCode] = [];
    }

    const index = priority || 0;
    this.countryCodes[dialCode][index] = iso2;
  }

  getAll() {
    if (!this.countries) {
      this.countries = orderBy(
        this.countriesData || require('./resources/countries.json'),
        ['name'],
        ['asc'],
      );
    }

    return this.countries;
  }

  getCountryCodes() {
    if (!this.countryCodes.length) {
      this.getAll().map(country => {
        this.addCountryCode(country.iso2, country.dialCode, country.priority);
        if (country.areaCodes) {
          country.areaCodes.map(areaCode => {
            this.addCountryCode(country.iso2, country.dialCode + areaCode);
          });
        }
      });
    }
    return this.countryCodes;
  }

  getCountryDataByCode(iso2) {
    return find(this.getAll(), country => country.iso2 === iso2);
  }

  getCountryByBrazilianName(iso2) {
    return this.countriesBrazilianNames[iso2];
  }
}

export default Country.getInstance();
