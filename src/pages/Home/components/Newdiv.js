const Newdiv = ({ images, name, mrt, category }) => {
  return (
    <a className="picline1" href="">
        <img className="first4pics" src={images[0]}/>
        <div className="up_word">{name}</div>
        <div className="down_word_zone">
            <div className="down_word_left">{mrt}</div>
            <div className="down_word_right">{category}</div>
        </div>
    </a>
  )
}

export default Newdiv
