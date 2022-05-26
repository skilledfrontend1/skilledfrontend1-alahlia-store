const cart =()=>{
return(
<>

{/* <!-- Single Product Content --> */}
<div class="single-product">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="title-single">
                    <ul class="list-unstyled">
                        <li><a href="#"><span><i class="fas fa-home"></i></span></a></li>
                        <li>Juice extractor 28</li>
                    </ul>
                </div>
                <div class="cart-title">
                    <h5>Cart (2)</h5>
                </div>
            </div>
            {/* <!-- /.Col --> */}

            <div class="col-lg-9">
                <div class="cart-content">
                    <div class="cart-order">
                        <div class="left">
                            <div class="image">
                                <img src="assets/images/Products/layer.jpg" alt="" />
                            </div>
                            <div class="deatils">
                                <h5>Juice extractor "Miracle Edition" 68</h5>
                                <span class="price">550 AED</span>

                                <ul class="list-unstyled">
                                    <li>Model: 28</li>
                                    <li>Quantity:
                                        <select class="form-select" aria-label="Default select example">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="right">
                            <a href="#" class="del"> <i class="fas fa-times"></i> </a>
                        </div>
                    </div>
                    {/* <!-- /Cart --> */}

                    <div class="cart-order">
                        <div class="left">
                            <div class="image">
                                <img src="assets/images/Products/layer.jpg" alt="" />
                            </div>
                            <div class="deatils">
                                <h5>Juice extractor "Miracle Edition" 68</h5>
                                <span class="price">550 AED</span>

                                <ul class="list-unstyled">
                                    <li>Model: 28</li>
                                    <li>Quantity:
                                        <select class="form-select" aria-label="Default select example">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="right">
                            <a href="#" class="del"> <i class="fas fa-times"></i> </a>
                        </div>
                    </div>
                    {/* <!-- /Cart --> */}

                </div>
            </div>
            {/* <!-- /.Col --> */}

            <div class="col-lg-3">
                <div class="card-single-side">
                    <div class="cart-total">
                        <h5>Cart Totals</h5>
                        <ul class="lits-unstyled">
                            <li>Subtotal(1 item) <span>55 AED</span></li>
                            <li>Shipping <span>5 AED</span></li>
                        </ul>

                        <div class="total">
                            <span>Total <small>(Icnclsive of VAT)</small></span>
                            <span>60 AED</span>
                        </div>
                    </div>

                    <div class="buttons">
                        <button class="cart">Checkout</button>
                        <button class="buy">Continue Shipping</button>
                    </div>
                </div>
            </div>
            {/* <!-- /.Col --> */}
        </div>
    </div>
</div>
</>

)
}

export default cart