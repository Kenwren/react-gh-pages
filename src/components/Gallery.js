

export default function Gallery(props) {
    return (
  
      <section className='container'>
        <div className='gallery-container'>
          {props.pics.map((pics, index) => (
            <div className='gallery-box'>
              <img key={index} src={pics}></img>
            </div>
            ))}
  
        </div>
      </section>
  
      
    )
  }