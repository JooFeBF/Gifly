const apiKey = "t4aKJKS1BANJy13o2xqH7G7rbBt8qh3I";
const apiUrl = "https://api.giphy.com/v1"
const getGifByID  = ({id})=>{
        const appUrl = `${apiUrl}/gifs/${id}?api_key=${apiKey}`

     return fetch(appUrl)
            .then(res => res.json())
            .then(response =>{
                const { data } = response
                const {title, images} = data
                const {url} = images.original
                return {url, title}
            })
        
}
export default getGifByID
