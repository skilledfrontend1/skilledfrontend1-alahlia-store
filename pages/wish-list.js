import AdvertisingBanner from "../components/AdvertisingBanner"

const wishList =()=>{
return(
<>
<AdvertisingBanner />

{/* <!-- Single Product Content --> */}
<div className="single-product">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="title-single">
                    <ul className="list-unstyled">
                        <li><a href="#"><span><i className="fas fa-home"></i></span></a></li>
                        <li>Juice extractor 28</li>
                    </ul>
                </div>
                <div className="cart-title">
                    <h5>Wishlist</h5>
                </div>
            </div>
            {/* <!-- /.Col --> */}

            <div className="col-sm-12">
                <div className="wishlist-content">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock Status</th>
                                    <th scope="col">Add to cart</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <div className="image">
                                            <img src="assets/images/Products/1.jpg" alt=""/>
                                        </div>
                                    </th>
                                    <td>Tempest® High-Performance Commercial</td>
                                    <td>200 AED</td>
                                    <td>
                                        <span className="stock">In Stock</span>
                                    </td>
                                    <td>
                                        <button>Add to Cart</button>
                                    </td>
                                    <td>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <div className="image">
                                            <img src="assets/images/Products/2.jpg" alt=""/>
                                        </div>
                                    </th>
                                    <td>Stick Waffle Maker Commercial</td>
                                    <td>200 AED</td>
                                    <td>
                                        <span className="stock">In Stock</span>
                                    </td>
                                    <td>
                                        <button>Add to Cart</button>
                                    </td>
                                    <td>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <div className="image">
                                            <img src="assets/images/Products/4.jpg" alt=""/>
                                        </div>
                                    </th>
                                    <td>Juice drink double dispenser</td>
                                    <td>200 AED</td>
                                    <td>
                                        <span className="stock out">In Stock</span>
                                    </td>
                                    <td>
                                        <button className="dis">Add to Cart</button>
                                    </td>
                                    <td>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <div className="image">
                                            <img src="assets/images/Products/33.jpg" alt=""/>
                                        </div>
                                    </th>
                                    <td>Commercial Stainless Steel Electric Crepe</td>
                                    <td>200 AED</td>
                                    <td>
                                        <span className="stock">In Stock</span>
                                    </td>
                                    <td>
                                        <button>Add to Cart</button>
                                    </td>
                                    <td>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
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

export default wishList