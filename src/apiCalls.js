
export function fetchArticles(key, filter) {
    return fetch(`https://newsapi.org/v2/everything?q=${filter}&apiKey=${key}`)
    .then(response => {
        if(response.ok) {
            // console.log(response.json())
            return response.json()
        }
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
}

export function fetchHeadlines(key) {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
    .then(response => {
        if(response.ok) {
            // console.log(response.json())
            return response.json()
        }
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
}