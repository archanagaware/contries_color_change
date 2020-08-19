export interface Countries {
    countries: Country[]
}
export interface Country {
    alpha3code: string,
    flag: string,
    currencies: Currency[],
    languages: Language[],
    name: string,
    topLevelDomain: string[],
    capital: string,
    region: string,
    subregion: string,
    population: number,
    borders: string[],
    nativeName: string
}
export interface Currency {
    code: string,
    name: string,
    symbol: string
}

export interface Language {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}