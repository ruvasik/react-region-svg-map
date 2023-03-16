const obj = {
  Andorra: 'andorra',
  Angola: 'angola',
  Argentina: 'argentina',
  Armenia: 'armenia',
  Australia: 'australia',
  Austria: 'austria',
  Azerbaijan: 'azerbaijan',
  Bahamas: 'bahamas',
  Bahrain: 'bahrain',
  Bangladesh: 'bangladesh',
  Belarus: 'belarus',
  Belgium: 'belgium',
  Bhutan: 'bhutan',
  Bolivia: 'bolivia',
  'Bosnia Herzegovina': 'bosnia-herzegovina',
  Botswana: 'botswana',
  Brazil: 'brazil',
  'Brunei Darussalam': 'brunei-darussalam',
  Bulgaria: 'bulgaria',
  'Burkina Faso': 'burkina-faso',
  Burundi: 'burundi',
  Cambodia: 'cambodia',
  Cameroon: 'cameroon',
  Canada: 'canada',
  'Cape Verde': 'cape-verde',
  'Central African Republic': 'central-african-republic',
  Chad: 'chad',
  Chile: 'chile',
  China: 'china',
  Colombia: 'colombia',
  'Congo Dr': 'congo-dr',
  Congo: 'congo',
  'Costa Rica': 'costa-rica',
  Croatia: 'croatia',
  Cuba: 'cuba',
  Cyprus: 'cyprus',
  'Czech Republic': 'czech-republic',
  Denmark: 'denmark',
  Djibouti: 'djibouti',
  'Dominican Republic': 'dominican-republic',
  Ecuador: 'ecuador',
  Egypt: 'egypt',
  'El Salvador': 'el-salvador',
  Estonia: 'estonia',
  Ethiopia: 'ethiopia',
  Faroeislands: 'faroeIslands',
  Finland: 'finland',
  'France Departments': 'france-departments',
  'France New': 'france-new',
  France: 'france',
  Georgia: 'georgia',
  Germany: 'germany',
  Greece: 'greece',
  Guatemala: 'guatemala',
  Guinea: 'guinea',
  Haiti: 'haiti',
  Honduras: 'honduras',
  'Hong Kong': 'hong-kong',
  Hungary: 'hungary',
  Iceland: 'iceland',
  India: 'india',
  Indonesia: 'indonesia',
  Iran: 'iran',
  Iraq: 'iraq',
  Ireland: 'ireland',
  Israel: 'israel',
  Italy: 'italy',
  Jamaica: 'jamaica',
  Japan: 'japan',
  Kazakhstan: 'kazakhstan',
  Kenya: 'kenya',
  Kosovo: 'kosovo',
  Kyrgyzstan: 'kyrgyzstan',
  Laos: 'laos',
  Latvia: 'latvia',
  Liechtenstein: 'liechtenstein',
  Lithuania: 'lithuania',
  Luxembourg: 'luxembourg',
  Macedonia: 'macedonia',
  Malaysia: 'malaysia',
  Mali: 'mali',
  Malta: 'malta',
  Mexico: 'mexico',
  Moldova: 'moldova',
  Montenegro: 'montenegro',
  Morocco: 'morocco',
  Myanmar: 'myanmar',
  Nepal: 'nepal',
  Netherlands: 'netherlands',
  'New Zealand': 'new-zealand',
  Nicaragua: 'nicaragua',
  Nigeria: 'nigeria',
  Norway: 'norway',
  Oman: 'oman',
  Pakistan: 'pakistan',
  Palestine: 'palestine',
  Panama: 'panama',
  Paraguay: 'paraguay',
  Philippines: 'philippines',
  Poland: 'poland',
  Portugal: 'portugal',
  Qatar: 'qatar',
  Romania: 'romania',
  Russia: 'russia',
  Rwanda: 'rwanda',
  'San Marino': 'san-marino',
  'Saudi Arabia': 'saudi-arabia',
  'Serbia Without Kosovo': 'serbia-without-kosovo',
  Serbia: 'serbia',
  'Sierra Leone': 'sierra-leone',
  Singapore: 'singapore',
  Slovakia: 'slovakia',
  Slovenia: 'slovenia',
  'South Africa': 'south-africa',
  'South Korea': 'south-korea',
  Spain: 'spain',
  'Sri Lanka': 'sri-lanka',
  Sweden: 'sweden',
  Switzerland: 'switzerland',
  Syria: 'syria',
  Taiwan: 'taiwan',
  Tajikistan: 'tajikistan',
  Thailand: 'thailand',
  Turkey: 'turkey',
  Uganda: 'uganda',
  Ukraine: 'ukraine',
  'United Arab Emirates': 'united-arab-emirates',
  'United Kingdom': 'united-kingdom',
  Uruguay: 'uruguay',
  Usa: 'usa',
  Uzbekistan: 'uzbekistan',
  Venezuela: 'venezuela',
  Vietnam: 'vietnam-with-islands',
  Yemen: 'yemen',
  // World: 'world',
  // 'World Low Res': 'world-low-res',
} as const;

export type TRegionName = keyof typeof obj;
export type TRegions = Record<TRegionName, string>;

const value: TRegions = obj;

export default value;
