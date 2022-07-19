<div className="App">
      <div className="container">
        
        <h1 className="text-center">Stripe Checkout</h1>
        <h2 className="text-center">Product Info</h2>
        <h3 className="text-center">Product Name: {product.name}</h3>
        <h3 className="text-center">Product Price: {product.price}</h3>
        <h3 className="text-center">
          Product Description: {product.description}
        </h3>
        <br />
        
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51JfPvMEohH2JsejcMYZq7wyh7kAvjQ7CSXuKJE7Cx68n7zZyo33xmLAyQaW60ntusgiKHrQfHYEVK7SXr8pwJw7C00Mj6h2o2M"
            token={handleToken}
            amount={product.price * 100}
            name="Store Payment"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>