const url = "https://api.themoviedb.org/3";
const api_key = "f6bcf9844871b7ddb1c34b9fa7ce750e";

class DataSource {
    static searchMovie(keyword) {
        return fetch(`${url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                // console.log(responseJson);
                if (responseJson.results && responseJson.total_results !== 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

class Main {
    static fetchMov() {
        return fetch(`${url}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                // console.log(responseJson);
                if (responseJson.results && responseJson.total_results !== 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`movies not found`)
                }
            })
    }
}

class Detail {
    static fetchMov(movie_id) {
        return fetch(`${url}/movie/${movie_id}?api_key=${api_key}&language=en-US`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                // console.log(responseJson);
                if (responseJson.results && responseJson.total_results !== 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`movies not found`)
                }
            })
    }
}

export {
    DataSource,
    Main,
    Detail
};