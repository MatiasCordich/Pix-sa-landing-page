import Card from './Card/Card'
import pizzaJson from './pizzas.json'
import './menu.css'

export const Menu = () => {
    return (
        <main className='menu'>
            <div className='menu__container'>
                <h2 className='section__title '>
                    Menu
                    <span className='section__subtitle m-2'>Menu</span>
                </h2>
                <ul className='menu__cards'>
                    <li>
                        <Card
                            title={pizzaJson[0].name}
                            img={pizzaJson[0].img}
                            toppings={pizzaJson[0].toppings}
                            price={pizzaJson[0].price}/>
                    </li>
                    

                </ul>
            </div>
        </main>
    )
}
