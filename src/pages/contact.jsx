import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ContactTopArea from "@containers/contact-top";
import ContactFormArea from "@containers/contact-form";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Contact = () => (
    <Wrapper>
        <SEO pageTitle="Contacto" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Contacto"
                currentPage="Contacto"
            />
            <ContactTopArea />
            <ContactFormArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Contact;
