import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ pageTitle, url }) => {
    const title = `${pageTitle} || Puro Musculos`;
    return (
        <Head>
            <title>Puro Musculos | {pageTitle}</title>
            <meta property="og:title" content="Puro Musculos | Potencia tu Rendimiento "></meta>
            <meta property="og:type" content="website" ></meta>
            <meta property="og:url" content="https://www.puromusculos.com" ></meta>
            <meta lang = "es"></meta>
            <meta property="og:site_name"  content="Puro Musculos"></meta>

            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Potencia tu Rendimiento | Ventas online de productos de pontenciadores musculares | Productos Sarms | Directamente Inyectables |Via Orales | Hgh-peptido |El increible Quema Grasas | Productos Ciclos" />
            <meta property="og:description" content="Potencia tu Rendimiento | Ventas online de productos de pontenciadores musculares | Productos Sarms | Directamente Inyectables |Via Orales | Hgh-peptido |El increible Quema Grasas | Productos Ciclos"></meta>
            <meta name="keywords" content="Potencia tu Rendimiento | Ventas online de productos de pontenciadores musculares | Productos Sarms | Directamente Inyectables |Via Orales | Hgh-peptido |El increible Quema Grasas | Productos Ciclos"></meta> 
            <meta name="author" content="Irving salcedo - irvng1364@gmail.com"></meta>          
            <meta name="google-site-verification" content="_cMogX_DIPquudlQWQo1Fx0uPtI4ncWINi-erlnxWqM" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link rel="icon" href="/Logo-Puro-Musculos-negro.png" />
            <meta property="og:image" content="/Logo-Puro-Musculos-negro.png"></meta>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
            <link rel="canonical" href={url} />

        </Head>
    );
};

SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default SEO;
