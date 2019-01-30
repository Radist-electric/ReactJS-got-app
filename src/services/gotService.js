export default class GotService {
    constructor() {
      this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      }
      return await res.json();
    };

    async getAllCharacters() {
      const res = await this.getResource(`/characters?page=10&pageSize=10`);
      return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
      const character = await this.getResource(`/characters/${id}`);
      return this._transformCharacter(character);
    }

    async getAllHouses() {
      const res = await this.getResource(`/houses?page=1&pageSize=10`);
      return res.map(this._transformHouse);
    }
    async getHouse(id) {
      const house = await this.getResource(`/houses/${id}`);
      return this._transformHouse(house);
    }

    async getAllBooks() {
      const res = await this.getResource(`/books?page=1&pageSize=10`);
      return res.map(this._transformHouse);
    }
    async getBook(id) {
      const book = await this.getResource(`/books/${id}`);
      return this._transformBook(book);
    }

    _transformCharacter(char) {
      const url = char.url.match(/\d/g),
            name = (char.name.length === 0) ? 'Unnamed' : char.name,
            gender = (char.gender.length === 0) ? 'Hermaphrodite' : char.gender,
            born = (char.born.length === 0) ? 'Never born' : char.born,
            died = (char.died.length === 0) ? 'Never died' : char.died,
            culture = (char.culture.length === 0) ? 'Uncultural' : char.culture;
      return {
        url: url,
        name: name,
        gender: gender,
        born: born,
        died: died,
        culture: culture
      }
    }
    _transformHouse(house) {
      const name = (house.name.length === 0) ? 'Unnamed' : house.name,
            region = (house.region.length === 0) ? 'Nowhere' : house.region,
            words = (house.words.length === 0) ? 'No any words' : house.words,
            titles = (house.titles.length === 0) ? 'No any titles' : house.titles,
            overlord = (house.overlord.length === 0) ? 'High boss' : house.overlord,
            ancestralWeapons = (house.ancestralWeapons.length === 0) ? 'Weaponless' : house.ancestralWeapons;
      return {
        name: name,
        region: region,
        words: words,
        titles: titles,
        overlord: overlord,
        ancestralWeapons: ancestralWeapons
      }
    }
    _transformBook(book) {
      const name = (book.name.length === 0) ? 'Unnamed' : book.name,
            numberOfPages = (book.numberOfPages.length === 0) ? 'About 500' : book.numberOfPages,
            publiser = (book.publiser.length === 0) ? 'Bookcraft' : book.publiser,
            released = (book.released.length === 0) ? '2019-01-28' : book.released;
      return {
        name: name,
        numberOfPages: numberOfPages,
        publiser: publiser,
        released: released
      }
    }

  }

  