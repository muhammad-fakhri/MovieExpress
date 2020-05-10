class DataSource {
    static async searchMovie(keyword) {
        try {
            const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`;
            const response = await fetch(baseUrl);
            const responseJson = await response.json();
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default DataSource;