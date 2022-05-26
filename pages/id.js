import AdvertisingBanner from "../components/AdvertisingBanner"

const id = ()=>{
return(   
<>
{/* <!-- =========== STRAT CONTENT PAGE =========== --> */}
{/* <!-- Start Advertsing Banner --> */}
<AdvertisingBanner />
{/* <!-- End Advertsing Banner --> */}

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
            </div>
            {/* <!-- /.Col --> */}

            <div className="col-sm-12">
                <div className="deatils-image mobile-only">
                    <h5>Juice extractor "Miracle Edition" 68</h5>
                    <div className="rating">
                        <div className="stars">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>

                        <span>1,720 ratings</span>
                    </div>
                </div>
            </div>
            {/* <!-- /.Col --> */}

            <div className="col-lg-9">
                <div className="row">
                    <div className="col-md-6">
                        <div id="slider-product">
                            <div className="owl-carousel">
                                <div className="image-product">
                                    <img src="assets/images/Products/layer.jpg" alt=""/>
                                </div>
                                <div className="image-product">
                                    <img src="assets/images/Products/layer2.jpg" alt=""/>
                                </div>
                                <div className="image-product">
                                    <img src="assets/images/Products/layer3.jpg" alt=""/>
                                </div>
                                <div className="image-product">
                                    <img src="assets/images/Products/layer4.jpg" alt=""/>
                                </div>
                            </div>

                            <ul id='carousel-custom-dots' className='owl-dots carousel-custom-dots'>
                                <li className='owl-dot'>
                                    <img src="assets/images/Products/layer.jpg" alt=""/>
                                </li>
                                <li className='owl-dot'>
                                    <img src="assets/images/Products/layer2.jpg" alt=""/>
                                </li>
                                <li className='owl-dot'>
                                    <img src="assets/images/Products/layer3.jpg" alt=""/>
                                </li>

                                <li className='owl-dot'>
                                    <img src="assets/images/Products/layer4.jpg" alt=""/>
                                </li>
                            </ul>
                        </div>

                        <div className="share">
                            <span>Share</span>
                            <a href="#" className="email" title="Email"><i className="fas fa-envelope"></i></a>
                            <a href="#" className="facebook" title="Facebook"><i className="fab fa-facebook-square"></i></a>
                            <a href="#" className="twitter" title="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="pinterest" title="Pinterest"><i className="fab fa-pinterest"></i></a>
                        </div>

                    </div>
                    {/* <!-- Slide --> */}

                    <div className="col-md-6">
                        <div className="deatils-image">
                            <h5>Juice extractor "Miracle Edition"</h5>
                            <div className="rating">
                                <div className="stars">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>

                                <span>1,720 ratings</span>
                            </div>

                            <div className="price">
                                <span>550 AED</span>
                            </div>

                            <p>The classic juice extractor since 1986. Silent, powerful and sturdy, this is the ideal appliance to use everywhere you need fresh fruits and vegetables juices: juice bars, restaurants, institutions, health food stores...</p>

                            <p>Equipped with a powerful induction motor for intensive use. Maximum juice extraction: excellent yield.Perfect filtration: and unscrewing the basket.Introduction: 68 mm diameter.Spout height: 222 mm (9") to make juice in a glass or in a jug.Output: 100 l/h</p>

                            <ul className="list-unstyled">
                                <li>Motor</li>
                                <li>Single Phase</li>
                                <li>100 - 120 V - 50/60 Hz - 1300 W</li>
                                <li>100 - 120 V - 50/60 Hz - 1300 W</li>
                            </ul>

                            <ul className="list-unstyled">
                                <li>Speed</li>
                                <li>3000 rpm (50 Hz)</li>
                                <li>3000 rpm (50 Hz)</li>
                            </ul>

                            <ul className="list-unstyled">
                                <li>Weight</li>
                                <li>Net: 23,65 kg (52 lbs)</li>
                                <li>Packed: 26,4 kg (58 lbs)</li>
                            </ul>

                            {/* <!--
                            <ul className="list-unstyled">
                                <li>Dimensions</li>
                                <li>D: 480 mm (19")</li>
                                <li>W: 320 mm (13")</li>
                                <li>H: 570 mm (23")</li>
                            </ul>
                            --> */}
                        </div>
                    </div>
                    {/* <!-- Details --> */}
                </div>
            </div>
            {/* <!-- /.Col --> */}

            <div className="col-lg-3">
                <div className="card-single-side">
                    <div className="price">
                        <h5>550 AED</h5>
                        <span>All prices include VAT.</span>
                    </div>

                    <ul className="list-unstyled">
                        <li>Stock: <span className="stock">In Stock</span></li>
                        <li>Deliver to <span>United Arab Emirates</span><br/> Free delivery</li>
                        <li>Qty:
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </li>
                    </ul>

                    <div className="buttons">
                        <button className="cart">Add to cart</button>
                        <button className="buy">Buy now</button>
                    </div>

                    <div className="secure">
                        <span>Secure transaction</span>
                        <span>Ships from and sold by Alahlia Store</span>
                    </div>

                    <div className="links">
                        <a href="#"><span className="heart"><i className="fas fa-heart"></i></span>Add to Wish List</a>
                        <a href="#"><span><i className="fas fa-sync-alt"></i></span>Compare this Product</a>
                    </div>
                </div>
            </div>
            {/* <!-- /.Col --> */}

            <div className="col-sm-12">
                <div className="tabs-single">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Review</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p>The classic juice extractor since 1986. Silent, powerful and sturdy, this is the ideal appliance to use everywhere you need fresh fruits and vegetables juices: juice bars, restaurants, institutions, health food stores delivered with a special key for screwing and unscrewing the basket The timer is indispensible for busy bars. Two speeds offer precision blending for a wide variety of mixtures.

                            </p>

                            <ul className="list-unstuled">
                                <li> juice extractor since </li>
                                <li> need fresh fruits </li>
                                <li> health food stores </li>
                                <li> need fresh fruits </li>
                                <li> need fresh fruits </li>
                                <li> health food stores </li>
                            </ul>
                            <p>The classic juice extractor since 1986. Silent, powerful and sturdy, this is the ideal appliance to use everywhere you need fresh fruits and vegetables juices: juice bars, restaurants, institutions, health food stores delivered with a special key for screwing.

                            </p>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="review-tab">
                                <div className="image">
                                    <img src="assets/images/Icons/auth.png" alt=""/>
                                </div>

                                <div className="div">
                                    <span>Khaled Mohamed</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo modi repellat dolorum architecto odit, porro, delectus eos facilis atque vero ipsum commodi autem iusto perspiciatis molestiae eveniet aliquam soluta possimus.</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <small>1/9/2020</small>
                                </div>
                            </div>
                            {/* <!-- Review Tab --> */}

                            <div className="review-tab">
                                <div className="image">
                                    <img src="assets/images/Icons/auth.png" alt="" />
                                </div>

                                <div className="div">
                                    <span>Khaled Mohamed</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo modi repellat dolorum architecto odit, porro, delectus eos facilis atque vero ipsum commodi autem iusto perspiciatis molestiae eveniet aliquam soluta possimus.</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <small>1/9/2020</small>
                                </div>
                            </div>
                            {/* <!-- Review Tab --> */}

                            <div className="review-tab">
                                <div className="image">
                                    <img src="assets/images/Icons/auth.png" alt=""/>
                                </div>

                                <div className="div">
                                    <span>Khaled Mohamed</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo modi repellat dolorum architecto odit, porro, delectus eos facilis atque vero ipsum commodi autem iusto perspiciatis molestiae eveniet aliquam soluta possimus.</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <small>1/9/2020</small>
                                </div>
                            </div>
                            {/* <!-- Review Tab --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /.Col --> */}
        </div>
    </div>
</div>
{/* <!-- /. Single Product Content --> */}

<div className="container">
    <div className="related-item">
        <h5>Related</h5>

        <div className="slider-products">
            <div className="owl-carousel">
                <div className="box-product">
                    <span className="label-product">New</span>
                    <div className="image">
                        <img src="assets/images/Products/1.jpg" alt="" />
                        <img src="assets/images/Products/11.jpg" alt="" />
                    </div>
                    <div className="details">
                        <h4><a href="Juice-extractor-Miracle-Edition.html">Tempest® High-Performance </a></h4>
                        <span className="stock">In stock</span>
                        <div className="rating">
                            <ul className="stars">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <div className="prices">
                            <span className="old">500 AED</span>
                            <span className="new"><strong>200</strong> AED</span>
                        </div>
                        <button>Add to cart <span><i className="i fas fa-plus"></i></span></button>
                    </div>
                </div>
                {/* <!-- /.Box --> */}

                <div className="box-product">
                    <span className="label-product sale">Sale</span>
                    <div className="image">
                        <img src="assets/images/Products/2.jpg" alt=""/>
                        <img src="assets/images/Products/22.jpg" alt=""/>
                    </div>
                    <div className="details">
                        <h4><a href="Juice-extractor-Miracle-Edition.html">Stick Waffle Maker Commercial</a></h4>
                        <span className="stock">In stock</span>
                        <div className="rating">
                            <ul className="stars">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <div className="prices">
                            <span className="old">500 AED</span>
                            <span className="new"><strong>200</strong> AED</span>
                        </div>
                        <button>Add to cart <span><i className="i fas fa-plus"></i></span></button>
                    </div>
                </div>
                {/* <!-- /.Box --> */}


                <div className="box-product">
                    <span className="label-product sale">Sale</span>
                    <div className="image">
                        <img src="assets/images/Products/3.jpg" alt=""/>
                        <img src="assets/images/Products/33.jpg" alt=""/>
                    </div>
                    <div className="details">
                        <h4><a href="Juice-extractor-Miracle-Edition.html">Commercial Stainless Steel Electric Crepe</a></h4>
                        <span className="stock">In stock</span>
                        <div className="rating">
                            <ul className="stars">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <div className="prices">
                            <span className="old">500 AED</span>
                            <span className="new"><strong>200</strong> AED</span>
                        </div>
                        <button>Add to cart <span><i className="i fas fa-plus"></i></span></button>
                    </div>
                </div>
                {/* <!-- /.Box --> */}


                <div className="box-product">
                    <div className="image">
                        <img src="assets/images/Products/4.jpg" alt=""/>
                        <img src="assets/images/Products/44.jpg" alt=""/>
                    </div>
                    <div className="details">
                        <h4><a href="Juice-extractor-Miracle-Edition.html">Juice drink double dispenser</a></h4>
                        <span className="stock">In stock</span>
                        <div className="rating">
                            <ul className="stars">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <div className="prices">
                            <span className="old">500 AED</span>
                            <span className="new"><strong>200</strong> AED</span>
                        </div>
                        <button>Add to cart <span><i className="i fas fa-plus"></i></span></button>
                    </div>
                </div>
                {/* <!-- /.Box --> */}

                <div className="box-product">
                    <div className="image">
                        <img src="assets/images/Products/5.jpg" alt=""/>
                        <img src="assets/images/Products/55.jpg" alt=""/>
                    </div>
                    <div className="details">
                        <h4><a href="Juice-extractor-Miracle-Edition.html">Hakka Commercial Professional Blender</a></h4>
                        <span className="stock">In stock</span>
                        <div className="rating">
                            <ul className="stars">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <div className="prices">
                            <span className="old">500 AED</span>
                            <span className="new"><strong>200</strong> AED</span>
                        </div>
                        <button>Add to cart <span><i className="i fas fa-plus"></i></span></button>
                    </div>
                </div>
                {/* <!-- /.Box --> */}

            </div>
        </div>
        {/* <!-- Slider Products --> */}
    </div>
    {/* <!-- /.Realted --> */}
</div>


{/* <!-- =========== END CONTENT PAGE =========== --> */}
</>
)
}

export default id 