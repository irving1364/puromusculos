import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-16";
import CategoryArea from "@containers/category/layout-01";
import LiveExploreArea from "@containers/live-explore/layout-01";
import ServiceArea from "@containers/services/layout-01";
import NewestItmesArea from "@containers/product/layout-04";
import NewestItmes from "@containers/product/layout-05";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import VideoArea from "@containers/video/layout-01";
import CollectionArea from "@containers/collection/layout-01";
import NewsletterArea from "@containers/newsletter/layout-01";
import { normalizedData } from "@utils/methods";

// Demo Data
import homepageData from "../data/homepages/home-16.json";
import productData from "../data/products.json";
import sellerData from "../data/sellers.json";
import collectionsData from "../data/collections.json";

export async function getStaticProps() {
    return {
        props: { className: "template-color-1 nft-body-connect" },
    };
}

const Home = ({ agregarCarrito }) => {
    console.log(agregarCarrito)
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

    return (
        <Wrapper>
            <SEO pageTitle="Inicio" url="https://www.puromusculos.com" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />

                <CategoryArea className="d-none d-lg-block" data={content["category-section"]} />


                {/*<ServiceArea data={content["service-section"]} />*/}
                <NewsletterArea data={content["newsletter-section"]} />

                <NewestItmesArea
                    data={{
                        ...content["newest-section"],
                        products: newestData,
                        agregarCarrito: agregarCarrito,
                    }}
                />

<NewestItmes
                    data={{
                        ...content["newest-section"],
                        products: newestData,
                    }}
                />


                <ServiceArea data={content["service-section"]} />

                {/*   
                <ExploreProductArea
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                        placeBid: true,
                    }}
                />
                

                <VideoArea data={content["video-section"]} />

                */}
            </main>
            <Footer data={content["brand-section"]} space={3} />
        </Wrapper>
    );
};

export default Home;
