import PropTypes from "prop-types";
import clsx from "clsx";
import Product from "@components/product/layout-01";
import SectionTitle from "@components/section-title/layout-02";
import Anchor from "@ui/anchor";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


const CountdownTimer = dynamic(() => import("@ui/countdown/layout-01"), {
    ssr: false,
});

const ShareDropdown = dynamic(() => import("@components/share-dropdown"), {
    ssr: false,
});


const ProductArea = ({ space, className, data, productos }) => {

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


    console.log(data)

    return (
        < >

            < div
                className={
                    clsx(
                        "rn-new-items",
                        space === 1 && "rn-section-gapTop",
                        className
                    )}
            >
                <div className="container">
                    <div className="row mt--100 mb--50 align-items-center">
                        <br />
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">

                            <div className="section-title text-left">

                                <h3
                                    className={clsx("title mb--0 live-bidding-title")}
                                    data-sal-delay="150"
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                >
                                    Productos Destacados
                                </h3>

                            </div>


                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div
                                className="view-more-btn text-start text-sm-end"
                                data-sal-delay="150"
                                data-sal="slide-up"
                                data-sal-duration="800"
                            >
                                {/* 
                                <Anchor className="btn-transparent" path="">
                                    VER TODOS
                                    <i className="feather feather-arrow-right" />
                                </Anchor>
                                */}
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">




                        {allProducts.map((prod) => (

                            <div key={prod.id} className="col-lg-3 col-md-3 col-sm-6 col-12 mt_mobile--15">
                                <div
                                    className={clsx(
                                        "product-style-one no-overlay with-placeBid"
                                    )}
                                >
                                    <div className="card-thumbnail">
                                        <Anchor path={`/producto/${prod.name}`}>
                                            <img
                                                src={prod.images[0].src}
                                                alt="NFT_portfolio"
                                                width={533}
                                                height={533}
                                            />
                                        </Anchor>

                                    </div>
                                    <div className="product-share-wrapper">

                                    </div>
                                    <Anchor path={`/producto/${prod.name}`}>
                                        <span className="product-name">{prod.name}</span>
                                    </Anchor>
                                    <span className="latest-bid">{prod.price}</span>
                                    <div className="share-wrapper d-flex">
                                        <div className="react-area mr--15">
                                            <svg
                                                viewBox="0 0 17 16"
                                                fill="none"
                                                width="16"
                                                height="16"
                                                className="sc-bdnxRM sc-hKFxyN kBvkOu"
                                            >
                                                <path
                                                    d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                            <span className="number">1</span>
                                        </div>
                                        <ShareDropdown />
                                    </div>

                                </div>
                            </div>
                        ))}


                    </div>

                </div >
            </div >
        </>
    )
}

export default ProductArea;
