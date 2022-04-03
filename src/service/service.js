class Api {
  checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Error: ${response.status}`);
  }

  async getChars() {
    const response = await fetch(
      'https://www.breakingbadapi.com/api/characters?limit=12'
    );
    return await this.checkResponse(response);
  }

  async searchChar(firstname) {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${firstname}`
    );
    return await this.checkResponse(response);
  }
}

const api = new Api();
export default api;
