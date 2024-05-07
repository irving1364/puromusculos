import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import Button from "@ui/button";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import ProductCategory from "@components/product-details/category";
import ProductCollection from "@components/product-details/collection";
import BidTab from "@components/product-details/bid-tab";
import PlaceBet from "@components/product-details/place-bet";
import { ImageType } from "@utils/types";
import PlaceBidModal from "@components/modals/placebid-modal";
import { useState } from "react";


// Demo Image

const ProductDetailsArea = ({ space, className, product, agregarCarrito }) => {

    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (


        <div
            className={clsx(
                "product-details-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <Sticky>
                            <GalleryTab images={product.images} />
                        </Sticky>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                        <div className="rn-pd-content-area">
                            <ProductTitle
                                title={product.name}

                            />
                            <span className="bid">

                                <h4 className="price">

                                    {product.price != product.regular_price &&
                                        <strike><span className="latest-bid"> {product.regular_price} €</span></strike>

                                    }



                                    {product.price} €
                                </h4>
                            </span>
                            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                            {/*
                            <div className="catagory-collection">
                                 <ProductCategory owner={product.owner} /> 
                            <ProductCollection
                                collection={product.collection}
                            /> 
                            </div>

                            <Button
                                color="primary-alta mt--10"
                                className=""
                                onClick={handleBidModal}
                            >
                                Agregar al Carrito
                            </Button>*/}

                            <div className="rn-bid-details">
                                {/*
                            <BidTab
                                bids={product?.bids}
                                owner={product.owner}
                                properties={product?.properties}
                                tags={product?.tags}
                                history={product?.history}
                            />*/}
                                <PlaceBet
                                    highest_bid={product.highest_bid}
                                    auction_date={product?.auction_date}
                                    prod={product}
                                    agregarCarrito={agregarCarrito}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProductDetailsArea;
