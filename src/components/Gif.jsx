export default function Gif ({ title, image, width, height }) {
  console.log(image)

  return (
    <li style={{ aspectRatio: `${width}/${height}` }}>
      <img src={image} alt={title} />
      <div>
        <a href=''>
          <h3>{title}</h3>
        </a>
        <button>❤️</button>
      </div>
    </li>
  )
}
