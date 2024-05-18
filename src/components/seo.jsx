import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ pageTitle }) => {
    const title = `${pageTitle} || Puro Musculo`;
    return (
        <Head>
            <title>{title}</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Potencia tu Rendimiento | Ventas online de productos de pontenciadores musculares | Sarms | Inyectables | Orales | Hgh-peptido | Quema Grasas | Ciclos" />
            <meta name="google-site-verification" content="_cMogX_DIPquudlQWQo1Fx0uPtI4ncWINi-erlnxWqM" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link rel="icon" href="/Logo-Puro-Musculos-negro.png" />

            <meta property="og:url" content="https://www.fadimet.com.pa" ></meta>
            <meta property="og:image" content="/Logo-Puro-Musculos-negro.png"></meta>

        </Head>
    );
};

SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default SEO;
