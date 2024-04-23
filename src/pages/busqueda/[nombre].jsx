import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductDetailsArea from "@containers/product-details";
import ProductArea from "@containers/product/layout-03";
import { shuffleArray } from "@utils/methods";

import NewestItmesArea from "@containers/product/layout-04";
// demo data
import productData from "../../data/products.json";

import homepageData from "../../data/homepages/home-16.json";
import { normalizedData } from "@utils/methods";

const categoria = ({ productos, categorias, categoriaMadre, agregarCarrito }) => {
    const content = normalizedData(homepageData?.content || []);
    console.log(productos);

    return (
        <>
            <Wrapper>
                <SEO pageTitle="Busqueda" />
                <Header />
                <main id="main-content">
                    <Breadcrumb
                        pageTitle="Busqueda"
                        currentPage={categoriaMadre}
                    />

                    <ProductArea
                        data={{
                            section_title: { title: categoriaMadre },
                            products: productos,
                            agregarCarrito: agregarCarrito
                        }}
                    />

                </main>
                <Footer />
            </Wrapper>


        </>
    )
}


export const getServerSideProps = async (context) => {

    console.log(context)
    var category = context;



    var myHeaders = new Headers();

    myHeaders.append("Authorization", "Basic Y2tfMjU3YTQ2YjgzY2RlNjc3MGY4MWFkZDRkZmM2MjI0YmExOGMxNWY5Mjpjc18xZjlhZThiZjA5MDNmNTZmNjVjZWVhODVjNGY3MmVhMjExNjlhZTli");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const data = await fetch("https://fadimet.com.pa/alberto/index.php/wp-json/wc/v3/products?per_page=99&search=" + context.query.nombre + "", requestOptions);
    const result = await data.json();





    return {
        props: {
            productos: result,
            categorias: null,
            categoriaMadre: context.query.nombre,
            className: "template-color-1",
        },
    };



};

export default categoria;
