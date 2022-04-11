class Api {
  checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Error: ${response.status}`);
  }

  async getChars(limit, offset) {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`
    );
    return await this.checkResponse(response);
  }

  async searchChar(charName) {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${charName}`
    );
    return await this.checkResponse(response);
  }
}

const api = new Api();
export default api;
