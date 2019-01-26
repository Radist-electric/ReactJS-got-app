export default class GotService {
    constructor() {
      this._apiBase = 'https://www.anapioficeandfire.com/api/';
    }
    async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      }
      return await res.json();
    };
    getAll(resourse) {
      return this.getResource(`${resourse}?page=1&pageSize=10`);
    }
    getOne(resourse, id) {
      return this.getResource(`${resourse}/${id}`);
    }
  }

  