import img07 from '../../../assets/img-04.png'
import blob from '../../../assets/blob.svg'
import './card.css'

const Card = () => {
  return (
    <div className='card'>
      <h2 className='section__title-2'>
        Margerita
        <span className='section__subtitle shadow'>Margerita</span>
      </h2>
      <div className='card__images'>
        <img src={img07} alt="pizza-img" />
        <div className='arrow'></div>
      </div>

      <ul className='card__toppings'>
        <h4>Toppings</h4>
        <li>
          <p>topping #1</p>
        </li>
        <li>
          <p>topping #2</p>
        </li>
        <li>
          <p>topping #3</p>
        </li>
      </ul>
      <div className='card__price'>
        <h4>Price</h4>
        <p>$ 8.54</p>
      </div>
    </div>
  )
}

export default Card