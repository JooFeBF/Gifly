const limit = 25;
const apiKey = "t4aKJKS1BANJy13o2xqH7G7rbBt8qh3I";
const apiUrl = "https://api.giphy.com/v1"
const getGif  = (keyword, page, rating)=>{
        const appUrl = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=${page * limit}&rating=${rating}&lang=en`
     return fetch(appUrl)
            .then(res => res.json())
            .then(respons =>{
                const {data = []} = respons
                const gifs = data.map(gif =>{
                    const title = gif.title || 'No title';
                    const {id} = gif
                    const {url} = gif.images.downsized
                    return {url, title, id}
                })
                return gifs
            })
        
}

export default getGif