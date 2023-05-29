export default function searchGifs () {
  fetch('../mocks/gifsMock.json')
    .then(res => res.json())
}
