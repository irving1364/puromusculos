import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductDetailsArea from "@containers/product-details";
import ProductArea from "@containers/product/layout-03";
import { shuffleArray } from "@utils/methods";

// demo data
import productData from "../../data/products.json";

const ProductDetails = ({ prducto, nombre, agregarCarrito }) => {

    console.log(prducto);

    return (
        <Wrapper>
            <SEO pageTitle={nombre} />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle={nombre}
                    currentPage={nombre}
                />

                <ProductDetailsArea product={prducto} agregarCarrito={agregarCarrito} />
                {/*
            <ProductArea
                data={{
                    section_title: { title: "Recent View" },
                    products: recentViewProducts,
                }}
            />
            <ProductArea
                data={{
                    section_title: { title: "Related Item" },
                    products: relatedProducts,
                }}
            />*/}
            </main>
            <Footer />
        </Wrapper>

    )
}

export const getServerSideProps = async (context) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfMjU3YTQ2YjgzY2RlNjc3MGY4MWFkZDRkZmM2MjI0YmExOGMxNWY5Mjpjc18xZjlhZThiZjA5MDNmNTZmNjVjZWVhODVjNGY3MmVhMjExNjlhZTli");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const data = await fetch("https://fadimet.com.pa/alberto/index.php/wp-json/wc/v3/products?per_page=99&search=" + context.query.slug + "", requestOptions);
    const result = await data.json();


    return {
        props: {
            prducto: result[0],
            nombre: context.query.slug,
            className: "template-color-1",
        },
    };

};

export default ProductDetails;
