import React, { useEffect, useState } from "react";
import { Slider, Text, ThemeButton } from "../../components";
import { Link, useParams, useHistory } from "react-router-dom";
import { COLORS } from "../../theme/mainTheme";
import axios from "axios";

const Product = () => {
  const params = useParams();
  const history = useHistory();

  const [product, setProduct] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductInfo();
  }, []);

  const getProductInfo = async () => {
    try {
      const result = await axios.get("/api/v1/product/" + params.productId);
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const buyNowClick = (earnLink) => {
    window.open(earnLink, "_blank");
  };

  return (
    <section class="py-2 overflow-hidden">
      <div className="py-10 px-6  md:px-20">
        <svg
          onClick={() => history.goBack()}
          className="h-8 w-8 text-gray-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
      <div className="md:flex justify-evenly space-y-2 items-center">
        <div>
          {product.thumbnailImages ? (
            <Slider
              width="400px"
              pagination={true}
              images={product.thumbnailImages}
              delay={2000}
              spv2={1}
            />
          ) : (
            <img src={product.productImage} width="350" />
          )}
        </div>
        <div className="space-y-4 p-6 md:py-20">
          {/* discount */}
          {product.discountPercent && (
            <div
              className="p-1 mb-6"
              style={{
                backgroundColor: COLORS.thirdary,
                color: COLORS.white,
                display: "inline-block",
              }}
            >
              <Text size="lg" weight="700" classes="capitalize">
                {product.discountPercent}
              </Text>
            </div>
          )}
          {/* brand name */}
          <div>
            <Text size="xl" weight="700" isTitle={true} classes="capitalize">
              {product.brandName}
            </Text>
          </div>
          {/* product name */}
          <div>
            <Text size="md" classes="capitalize">
              {product.productName}
            </Text>
          </div>

          {/* product prices */}

          <div className="flex justify-between ">
            <div>
              <Text size="xl" weight="600" classes="capitalize">
                &#x20B9;{" "}
                {product.productPrice && product.productPrice.slice(1, 50)}
              </Text>
            </div>
            {product.priceStrike && (
              <div>
                <Text size="xl" weight="600" classes="capitalize">
                  &#x20B9;{" "}
                  <del>
                    {product.priceStrike && product.priceStrike.slice(1, 50)}
                  </del>
                </Text>
              </div>
            )}
          </div>
          <ThemeButton handleClick={()=> buyNowClick(product.productLink)}>
            <Text size="md" weight="600">
              buy now
            </Text>
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};

export default Product;
