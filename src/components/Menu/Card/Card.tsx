import img07 from '../../../assets/img-04.png'
import './card.css'

type PizzaProps = {
  title: string,
  img: string,
  toppings: string[],
  price: string
}

const Card= (props: PizzaProps) => {

  const { title, img, toppings, price} = props
  return (
    <div className='card'>
      <h2 className='section__title-2'>
        {title}
        <span className='section__subtitle shadow'>{title}</span>
      </h2>
      <div className='card__images'>
        <img src={img} alt="pizza-img" />
        <div className='arrow'></div>
      </div>

      <ul className='card__toppings'>
        <h4>Toppings</h4>
        <li>
          <p>{toppings[0]}</p>
        </li>
        <li>
          <p>{toppings[1]}</p>
        </li>
        <li>
          <p>{toppings[2]}</p>
        </li>
      </ul>
      <div className='card__price'>
        <h4>Price</h4>
        <p>$ {price.toString()}</p>
      </div>
    </div>
  )
}

export default Card