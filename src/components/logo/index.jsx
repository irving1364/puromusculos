import Image from "next/image";
import Anchor from "@ui/anchor";
import PropTypes from "prop-types";
import clsx from "clsx";

const Logo = ({ className, logo }) => (
    <div className={clsx("logo-thumbnail logo-custom-css", className)}>
        {logo?.[0]?.src && (
            <Anchor className="logo-light" path="/">
                <Image
                    src="/Logo-Puro-Musculos.png"
                    alt="Logo Blanco"
                    width={80}
                    height={55}
                    priority
                />
            </Anchor>
        )}
        {logo?.[1]?.src && (
            <Anchor className="logo-dark" path="/">
                <Image
                    src="/Logo-Puro-Musculos-negro.png"
                    alt="Logo Dark"
                    width={80}
                    height={55}
                    priority
                />
            </Anchor>
        )}
    </div>
);

Logo.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ),
};

export default Logo;
