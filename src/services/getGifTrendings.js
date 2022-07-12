const gifTrendingData = (apiResponse) => {
    const {data = []} = apiResponse
    return data
}

const getGifTrendings  = ()=>{
    const appUrl = `https://api.giphy.com/v1/trending/searches?api_key=t4aKJKS1BANJy13o2xqH7G7rbBt8qh3I`
    return fetch(appUrl)
        .then(res => res.json())
        .then(gifTrendingData)
    
}

export default getGifTrendings