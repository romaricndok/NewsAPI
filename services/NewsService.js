const API_TOKEN = '529b70f3acdc451284e1c44a54957d10'

export function getNews () {
    
    const URL = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=' + API_TOKEN  
    return fetch(URL).then(
        (response) => response.json() 
    ).catch(
        (Error) => console.log(Error)
    )

}

export function getNewsDetailsFromApi(titre){
    const URL = 'https://newsapi.org/v2/top-headlines' + '?country=fr' + '&apiKey=' + API_TOKEN  + titre    
    return fetch(URL).then(
        (response) => response.json() 
    ).catch(
        (Error) => console.log(Error)
    )
}