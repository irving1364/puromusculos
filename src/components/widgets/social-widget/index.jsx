import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const SocialWidget = () => (
    <ul className="social-copyright">
        <li >
            <a
                href="https://wa.me/13412082952?text=Hola%20me%20interesa%20ponerme%20en%20contacto%20con%20usted."
                target="_blank"
                rel="noreferrer"
                aria-label="titulo"
                className="big"
            >
                <h3><FaWhatsapp /></h3>
            </a>
        </li>

        <li >
            <a
                href="https://t.me/roidlabs"
                target="_blank"
                rel="noreferrer"
                aria-label="titulo"
                className="big"
            >
                <h3><FaTelegramPlane /></h3>
            </a>
        </li>

        <li >
            <a
                href="mailto:puromusculosoficial@hotmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="titulo"
                className="big"
            >
                <h3><IoIosMail /></h3>
            </a>
        </li>

    </ul>
);

export default SocialWidget;
