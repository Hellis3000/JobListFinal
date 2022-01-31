let ROOT_URL = "https://jobblisting-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

export default class {

  async getList() {
    const url = `${ROOT_URL}`;

    return fetch(url, {
      method : 'GET',
      headers: this.getPublicHeaders(),
      
    })
  }
  getPublicHeaders() {
    return {
      "Content-Type": "application/json",     
    };
  }
}