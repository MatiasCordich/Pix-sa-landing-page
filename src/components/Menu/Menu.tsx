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
                    {
                        pizzaJson.map((pizza) => {
                            return (
                                <li key={pizza.id}>
                                    <Card
                                        title={pizza.name}
                                        img={pizza.img}
                                        toppings={pizza.toppings}
                                        price={pizza.price} />
                                </li>

                            )

                        })
                    }

                </ul>
            </div>
        </main>
    )
}
