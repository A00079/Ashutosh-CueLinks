import React from "react";
import { ThemeButton, Text } from "../../components";
import { COLORS } from "../../theme/mainTheme";

const ProductCard = (props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  w-full">
      {props.coupons &&
        props.coupons.map((el, index) => (
          <div
            className="shadow-md cursor-pointer transition duration-500 ease-in-out  hover:shadow-xl"
            onClick={() => props.getProductId(el.id)}
            key={index}
          >
            <div className="md:flex relative">
              {/* discount  */}
              {el.discountPercent && (
                <div
                  className="absolute right-0  p-0.5 "
                  style={{ backgroundColor: COLORS.thirdary }}
                >
                  <Text size="xs" variant="white">
                    {el.discountPercent}
                  </Text>
                </div>
              )}
              {/* image section */}
              <div>
                <img src={el.productImage} width="180" />
              </div>
              {/* details section */}
              <div className="space-y-3 p-1 w-full">
                {/* brand name */}
                <div>
                  <Text
                    size="sm"
                    isTitle={true}
                    weight="600"
                    classes="capitalize"
                  >
                    {el.brandName}
                  </Text>
                </div>
                {/* product name */}
                <div>
                  <Text
                    size="xs"
                    isTitle={true}
                    variant="primary"
                    weight="500"
                    classes="capitalize"
                  >
                    {JSON.stringify(el.productName).slice(0, 30)}...
                  </Text>
                </div>
                {/* product pricing  */}
                <div className=" bottom-2 flex justify-between">
                  <div>
                    <Text size="sm" weight="700" variant="primary">
                      &#x20B9;{" "}
                      {el.productPrice.slice(1, el.productPrice.length)}
                    </Text>
                  </div>
                  {el.priceStrike && (
                    <div>
                      <del>
                        <Text size="sm" weight="700" variant="primary">
                          &#x20B9;{" "}
                          {el.priceStrike.slice(1, el.priceStrike.length)}
                        </Text>
                      </del>
                    </div>
                  )}
                </div>
                {/* button*/}
                {/* <ThemeButton>
                  <Text size="xs" weight="600">
                    buy now
                  </Text>
                </ThemeButton> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
