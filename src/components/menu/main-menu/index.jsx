import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import clsx from "clsx";
import SubMenu from "./submenu";
import MegaMenu from "./megamenu";
import Link from 'next/link';


const MainMenu = ({ menu, inyectable }) => (

    <ul className="mainmenu">

        <li
            className=" has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/Ciclos">
                Ciclos
            </Link>
        </li>

        <li
            className=" has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/Hgh-Peptidos">
                Hgh-Peptidos
            </Link>
        </li>



        <li
            className="has-droupdown has-menu-child-item with-megame"
        >
            <Link legacyBehavior href="/categoria/InyectablesOrales">
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
            <Link legacyBehavior href="/categoria/Quemar Grasas">
                Quemar Grasas
            </Link>
        </li>

        <li
            className=" with-megame"
        >
            <Link legacyBehavior href="/categoria/Sarms">
                Sarms

            </Link>
        </li>

        {/* 
            {menu.map((nav) => (
                <li
                    key={nav.id}
                    className={clsx(
                        !!nav.submenu && "has-droupdown has-menu-child-item",
                        !!nav.megamenu && "with-megamenu"
                    )}

                >
                    <Anchor className="its_new" path={nav.path}>
                        {nav.text}
                    </Anchor>
                    {nav?.submenu && <SubMenu menu={nav.submenu} />}
                    {nav?.megamenu && <MegaMenu menu={nav.megamenu} />}
                </li>
            ))}
        */}


    </ul>
);

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;
