import Anchor from "@ui/anchor";

const SubMenuMobile = ({ menu }) => (
    <ul className="submenu mobile-menu-children">
        {menu.map((nav) => (
            <li key={nav.id}>
                <Anchor path={'/categoria/' + nav.name}>
                    {nav.name}
                </Anchor>
            </li>
        ))}
    </ul >
);



export default SubMenuMobile;
