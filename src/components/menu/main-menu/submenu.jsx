import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const SubMenu = ({ menu }) => (


    <li >
        <Anchor
            path={menu}
            className="live-expo"
        >
            {menu}
            <i className="feather" />
        </Anchor>
    </li>



);


export default SubMenu;
