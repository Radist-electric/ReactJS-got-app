export default class GotService {
    constructor() {
      this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
      // if (!res.ok) {
      //   throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      // }
      if (!res.ok) {
        throw new Error(res.status)
      }
      return await res.json();
    };

    getAllCharacters = async () => {
      const res = await this.getResource('/characters?page=10&pageSize=10');
      return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
      const character = await this.getResource(`/characters/${id}`);
      return this._transformCharacter(character);
    }

    getAllHouses = async () => {
      const res = await this.getResource('/houses?page=11&pageSize=10');
      return res.map(this._transformHouse);
    }
    getHouse = async (id) => {
      const house = await this.getResource(`/houses/${id}`);
      return this._transformHouse(house);
    }

    getAllBooks = async () => {
      const res = await this.getResource('/books?page=1&pageSize=10');
      return res.map(this._transformBook);
    }
    getBook = async (id) => {
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
    _transformBook(book) {
      const url = book.url.match(/\d/g),
            name = (book.name.length === 0) ? 'Unnamed' : book.name,
            numberOfPages = (book.numberOfPages.length === 0) ? 'About 500' : book.numberOfPages,
            publisher = (book.publisher.length === 0) ? 'Bookcraft' : book.publisher,
            country = (book.country.length === 0) ? 'Fairy lands' : book.country,
            released = (book.released.length === 0) ? '2019-01-28' : book.released;
      return {
        url: url,
        name: name,
        numberOfPages: numberOfPages,
        publisher: publisher,
        country: country,
        released: released
      }
    }
    _transformHouse(house) {
      const url = house.url.match(/\d/g),
            name = (house.name.length === 0) ? 'Unnamed' : house.name,
            region = (house.region.length === 0) ? 'Nowhere' : house.region,
            words = (house.words.length === 0) ? 'No any words' : house.words,
            titles = (house.titles[0] === "") ? 'No titles' : house.titles.join(', '),
            overlord = (house.overlord.length === 0) ? 'High boss' : house.overlord,
            ancestralWeapons = (house.ancestralWeapons[0] === "") ? 'Weaponless' : house.ancestralWeapons.join(', ')
      return {
        url: url,
        name: name,
        region: region,
        words: words,
        titles: titles,
        overlord: overlord,
        ancestralWeapons: ancestralWeapons
      }
    }


  }

  