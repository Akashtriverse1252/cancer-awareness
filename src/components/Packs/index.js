import React from "react";

import Button from "../Button/index";

export const index = (props) => {
  const discount_price = (
    ((props.ActualPrice - props.DiscountPrice) / props.ActualPrice) *
    100
  ).toFixed(0);
  // const roundedDiscount = Math.ceil(parseFloat(discount_price));
  // Extract the first two characters from the discount_price
  return (
    <>
      <div className="package_card">
        <div className="package_card_img">
          {/* <img src={`http://assure.triverseadvertising.com/images/${props.PackageName}.png`} alt={props.PackageName} /> */}
          <img src={props.Icon} alt={props.PackageName} />
          {/* <img src="../../images/placholder.png" alt={props.PackageName} /> */}
        </div>
        <div className="package_card_cnt">
          <div className="package_card_title">
            <p>{props.PackageName}</p>
            {discount_price > "-Infinity" ? (
              <span>{discount_price}% off</span>
            ) : (
              <span className="no__discount">no discount</span>
              // null
            )}
          </div>
          <div className="package_card_price">
            {props.ActualPrice > 0 ? (
              <p className="__crossed">{props.ActualPrice}</p>
            ) : null}

            <p className="__discounted_price">{props.DiscountPrice}</p>
          </div>
          <div className="package_card_data _height">
            {props.TestInfo ? (
              <div>
                <h5>Who is it for</h5>
                <p>{props.TestInfo}</p>
              </div>
            ) : props.TestParmeter ? (
              <div>
                <h5>Test parameters</h5>
                <p>{props.TestParmeter}</p>
              </div>
            ) : null}
          </div>
          <div className="package_card_data">
            <h5>Pre-test information</h5>
            <p>{props.PreTestInfo}</p>
          </div>
          <div className="package_card_data last">
            <h5>Turn around time</h5>
            <p>{props.TestInfoDate}</p>
          </div>
          <Button
            Btn_Link={props.Book}
            openInNewTab={true}
            onclick="dataLayer.push({'event': 'book-now-click'});"
          >
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
};
