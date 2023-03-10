import Card from './Card/Card'
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
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>
                    
                    <li>
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>

                </ul>
            </div>
        </main>
    )
}
