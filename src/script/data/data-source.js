import clubs from "./clubs.js";

class DataSource {
    static async searchClub(keyword) {
        try {
            const baseUrl = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=";
            const response = await fetch(`${baseUrl}${keyword}`);
            const responseJson = await response.json();
            if (responseJson.teams) {
                return Promise.resolve(responseJson.teams);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default DataSource;