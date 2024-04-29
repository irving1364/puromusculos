import SubMenu from "./submenu";
import Link from 'next/link';


const MainMenu = ({ menu, inyectable }) => (

    <ul className="mainmenu">


        <li
            className=" with-megame"
        >
            <Link legacyBehavior href="/categoria/Sarms">
                Sarms

            </Link>
        </li>

        <li
            className="has-droupdown has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/Inyectables">
                Inyectables
            </Link>
            <ul className="submenu">
                {inyectable.map((nav) => (
                    <SubMenu key={nav.id} menu={nav.name} />
                ))}

            </ul>
        </li>

        <li
            className=" has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/Orales">
                Orales
            </Link>
        </li>

        <li
            className=" has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/hgh-peptidos">
                Hgh-peptidos
            </Link>
        </li>

        <li
            className=" has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/Quemar Grasas">
                Quemar Grasas
            </Link>
        </li>

        <li
            className=" has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/Ciclos">
                Ciclos
            </Link>
        </li>


    </ul>
);


export default MainMenu;
