import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";

import LiveExploreArea from "@containers/live-explore/layout-01";
import ServiceArea from "@containers/services/layout-01";
import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01";
import { normalizedData } from "@utils/methods";

import HeroArea from "@containers/hero/layout-16";

// Demo Data
import homepageData from "../data/homepages/home-01.json";
import productData from "../data/products.json";
import sellerData from "../data/sellers.json";
import collectionsData from "../data/collections.json";
import { useEffect, useState } from "react";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {

    const [allProducts, setProducts] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        obtenerDatos();

    }, []);

    const obtenerDatos = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Y2tfMjU3YTQ2YjgzY2RlNjc3MGY4MWFkZDRkZmM2MjI0YmExOGMxNWY5Mjpjc18xZjlhZThiZjA5MDNmNTZmNjVjZWVhODVjNGY3MmVhMjExNjlhZTli");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };


        const data = await fetch("https://fadimet.com.pa/alberto/index.php/wp-json/wc/v3/products?category=47&per_page=50", requestOptions)
        const result = await data.json();
        setProducts(result)
        setIsLoad(true)

    }


    const content = normalizedData(homepageData?.content || []);
    const liveAuctionData = productData.filter(
        (prod) =>
            prod?.auction_date && new Date() <= new Date(prod?.auction_date)
    );


    const newestData = productData
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 5);

    console.log(allProducts);


    if (isLoad) {

        return (
            <Wrapper>
                <SEO pageTitle="Home Default" />
                <Header />
                <main id="main-content">
                    <HeroArea data={content["hero-section"]} />



                    <div className="section-title text-left">



                    </div>

                    <NewestItmesArea
                        data={{
                            ...content["newest-section"],
                            products: productData,
                        }}
                    />
                    <TopSellerArea
                        data={{
                            ...content["top-sller-section"],
                            sellers: sellerData,
                        }}
                    />
                    <ExploreProductArea
                        data={{
                            ...content["explore-product-section"],
                            products: productData,
                        }}
                    />
                    <CollectionArea
                        data={{
                            ...content["collection-section"],
                            collections: collectionsData.slice(0, 4),
                        }}
                    />
                </main>
                <Footer />
            </Wrapper>
        );
    }
};

export default Home;
