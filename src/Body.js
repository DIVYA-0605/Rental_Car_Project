import React from "react";
import "./style.css";

function Body() {
  return (
    <div className="body">
      {/* Product Details */}
      <div className="product">
        <h3>Product Details</h3>
        <div className="product__card">
          <img src="./iphone.png" alt="" />
          <div className="product_container">
            <div className="product_title">
              <h4>Apple iPhone 12 - White, 128GB</h4>

              <span>PAID</span>
            </div>
            <div className="product_details">
              <p className="product_card_title">
                Serial Number:{" "}
                <span style={{ fontWeight: 700 }}>3749754985</span>
              </p>
              <p className="product_card_title">
                Condition: <span style={{ fontWeight: 700 }}>Mint</span>
              </p>
              <p className="product_card_title">
                Listing:{" "}
                <span style={{ fontWeight: 700, color: "#00CCBB" }}>
                  LWKA34985
                </span>
              </p>
            </div>
            <div className="product_config">
              <div className="product_config_data">
                <h5>Ask Price</h5>
                <p>$525.00</p>
              </div>
              <div className="product_config_data">
                <h5>Buyer Fee</h5>
                <p>$17.42</p>
              </div>
              <div className="product_config_data">
                <h5>Seller Fee</h5>
                <p>$17.42</p>
              </div>
              <div className="product_config_data">
                <h5>Shipping</h5>
                <p>$0.00</p>
              </div>
              <div className="product_config_data">
                <h5>Tax</h5>
                <p>$0.00</p>
              </div>
              <div className="product_config_data">
                <h5>Total</h5>
                <p>$525.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Payment */}
      <div className="payments">
        <h3>Payments</h3>
        <div className="payment_config">
          <div className="product_config_dater">
            <h5>Date / Time</h5>
            <p>Sep 30, 2022 2:16 PM</p>
          </div>
          <div className="product_config_dater">
            <h5>Status</h5>
            <p style={{ color: "#00CCBB" }}>PAID</p>
          </div>
          <div className="product_config_dater">
            <h5>Amount</h5>
            <p>$530.14</p>
          </div>
          <div className="product_config_dater">
            <h5>Payment Reference ID</h5>
            <p>WP19BD457879845D</p>
          </div>
          <div className="product_config_dater">
            <h5>Type</h5>
            <p>Payment to Seller</p>
          </div>
          <div className="product_config_dater">
            <h5>Payer</h5>
            <p>samuel.john@gmail.com</p>
          </div>
          <div className="product_config_dater">
            <h5>Receiver</h5>
            <p>Johhny.hughes@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Shipping */}
      <div className="shipping">
        <div className="shipping_container">
          <h3>Shipping</h3>
          <span>+ Add Shipment</span>
        </div>
        <div className="payment_config">
          <div className="product_config_dater">
            <h5>Date / Time</h5>
            <p>Oct 5, 2022 3:10 PM</p>
          </div>
          <div className="product_config_dater">
            <h5>Status</h5>
            <p style={{ color: "#00CCBB" }}>SHIPPED</p>
          </div>
          <div className="product_config_dater">
            <h5>Carrier</h5>
            <p>UPS</p>
          </div>
          <div className="product_config_dater">
            <h5>Tracking</h5>
            <p>15768945045775S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
