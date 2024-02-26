import {NavLink} from 'react-router-dom'
const Navbar =()=> {
    const activeStyle= 'underline underline-offset-a'

    return(
        <nav className='flex justify-between items-center fixed z-0 w-full'>
        <ul className='flex items-center gap-2'>
            <li className='font-semibold'>
                <NavLink to ='/'>
                    Mi pàgina
                </NavLink>
            </li>

            <li>
                <NavLink to ='/' className={({isActive})=>
                    isActive?activeStyle:undefined
                }>
                    All
                </NavLink>
            </li>

            <li>
                <NavLink to ='/developers' className={({isActive})=>
                    isActive ? activeStyle:undefined
                }>
                    Developers
                </NavLink>
            </li>

            <li>
                <NavLink to ='/tutorials' className={({isActive})=>
                    isActive?activeStyle:undefined
                }>
                    Tutorials
                </NavLink>
            </li>

            <li>
                <NavLink to ='/contact' className={({isActive})=>
                    isActive?activeStyle:undefined
                }>
                    Contact
                </NavLink>
            </li>

        </ul>

    </nav>
    )
}
export default Navbar