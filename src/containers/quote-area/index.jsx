import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import { TextType, SectionTitleType } from "@utils/types";

const QuoteArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-about-Quote-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5 d-flex align-items-center">
            <div className="col-lg-6">
                    <div
                        className="rn-about-wrapper"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                    >
                        <h2>Investigación y Desarrollo</h2>
                        
                            <p>Estamos constantemente investigando y desarrollando nuevos productos para mantenerte a la vanguardia de las últimas innovaciones en suplementos deportivos.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    
                    <div
                        className="rn-about-wrapper"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                    >
                        <h2>Asesoramiento Experto</h2>
                            <p>Nuestro equipo está formado por expertos en fitness y nutrición que están dispuestos a brindarte asesoramiento y recomendaciones personalizadas.</p>
                    </div>
                </div>
            </div>



            <br/><br/>

            <div className="row g-5 d-flex align-items-center">
            <div className="col-lg-12">
                    <div
                        className="rn-about-wrapper"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                    >
                        
                            <p>En Puro Musculos, estamos aquí para ayudarte a alcanzar tus objetivos deportivos y mantener un equilibrio saludable en tu vida. Confía en nosotros para proporcionarte los suplementos que necesitas para alcanzar tu máximo potencial. ¡Únete a nuestra comunidad y descubre cómo podemos ayudarte a superar tus límites y alcanzar nuevas alturas en tu rendimiento deportivo!</p>

                            <p>¡Únete a nuestra comunidad y descubre cómo podemos ayudarte a superar tus límites y alcanzar nuevas alturas en tu rendimiento deportivo!</p>                    
                    
                    </div>
                </div>
               
            </div>
        </div>
    </div>
);

QuoteArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

QuoteArea.defaultProps = {
    space: 1,
};

export default QuoteArea;
