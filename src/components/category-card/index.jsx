import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import { GiMedicines } from "react-icons/gi";

const CategoryCard = ({ className, icon, title, path }) => (
    <Anchor className={clsx("category-style-one", className)} path={path}>
        <h2><GiMedicines /></h2>
        <span className="category-label">{title}</span>
    </Anchor>
);

CategoryCard.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default CategoryCard;
