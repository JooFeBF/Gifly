export default function searchGifs ({ search }) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=5Xl3mzI4vcXlqcPrLT35ElngwYgMPFbo&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(res => res.json()).catch(err => console.error(err))
}
