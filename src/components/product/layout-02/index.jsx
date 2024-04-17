import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import ClientAvatar from "@ui/client-avatar";
import Button from "@ui/button";
import ShareDropdown from "@components/share-dropdown";
import PlaceBidModal from "@components/modals/placebid-modal";
import { ImageType } from "@utils/types";
import { FaCartPlus } from "react-icons/fa";

const Product = ({
    title,
    slug,
    price,
    latestBid,
    image,
    authors,
    bitCount,
    likeCount,
    className,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            <div className={clsx("lg-product-wrapper", className)}>
                <div className="inner">
                    <div className="lg-left-content">
                        {image?.src && (
                            <Anchor
                                path={`/producto/${title}`}
                                className="thumbnail"
                            >
                                <img
                                    src={image.src}
                                    alt={image?.alt || "NFT_portfolio"}
                                    width={image?.width ? image.width : 430}
                                    height={image?.height ? image.height : 430}
                                />
                            </Anchor>
                        )}
                        <div className="read-content">
                            <div className="product-share-wrapper">

                                <div className="last-bid">
                                    {price}
                                    $
                                </div>
                            </div>
                            <Anchor path={`/producto/${title}`}>
                                <h6 className="title">{title}</h6>

                            </Anchor>
                            <h4><FaCartPlus onClick={handleBidModal} />
                            </h4>
                        </div>

                    </div>

                    {/*
                    <Button
                        color="primary-alta"
                        size="small"
                        className="mr--30 bid-btn"
                        onClick={handleBidModal}
                    >
                        Comprar
                    </Button>
                     */}

                </div>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};



export default Product;
