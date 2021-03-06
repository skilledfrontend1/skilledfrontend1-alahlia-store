import Link from 'next/link'
import Image from 'next/image'

const home = () => {
    return (
        // <!-- =============== START PAGE WRAPPER OF CONTENT =============== -->
        < >
    
            {/* <div className="preloader">
                <div className="pre"/>
            </div> */}
            {/* <!-- Preloader --> */}  
         
            {/* <!-- =========== STRAT CONTENT PAGE =========== --> */}
            <>
                {/* <!-- Start Slider Area --> */}
                <div className="slider-area" style={{background : "pink"}}>
                    <div className="owl-carousel">
                        <div className="slide">
                            <div className="back">
                                <Image  width = "100%"  height="100%" src="/../public/public/images/Products/slide.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="intro">
                                    <span>Sale up to 20%</span>
                                    <h3>Everything <br/> you need</h3>
                                    <p>On the other hand we denounce with righteous indigna-tion and dislike men</p>
                                    <a href="/">Shop Now <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </div>
                            {/* <!-- container --> */}
                        </div>
                        {/* <!-- Slide --> */}
    
                        <div className="slide">
                            <div className="back">
                                <Image  width = "100%"  height="100%"src="/../public/images/Products/slide.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="intro">
                                    <span>Sale up to 20%</span>
                                    <h3>Everything <br/> you need</h3>
                                    <p>On the other hand we denounce with righteous indigna-tion and dislike men</p>
                                    <a href="/">Shop Now <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </div>
                            {/* <!-- container --> */}
                        </div>
                        {/* <!-- Slide --> */}
    
                        <div className="slide">
                            <div className="back">
                                <Image  width = "100%"  height="100%"src="/../public/images/Products/slide.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="intro">
                                    <span>Sale up to 20%</span>
                                    <h3>Everything <br/> you need</h3>
                                    <p>On the other hand we denounce with righteous indigna-tion and dislike men</p>
                                    <a href="/">Shop Now <span><i className="fal fa-arrow-right"></i></span></a>
                                </div>
                            </div>
                            {/* <!-- container --> */}
                        </div>
                        {/* <!-- Slide --> */}
    
                        <div className="slide">
                            <div className="back">
                                <Image  width = "100%"  height="100%"src="/../public/images/Products/slide.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="intro">
                                    <span>Sale up to 20%</span>
                                    <h3>Everything <br/> you need</h3>
                                    <p>On the other hand we denounce with righteous indigna-tion and dislike men</p>
                                    <a href="/">Shop Now <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </div>
                            {/* <!-- container --> */}
                        </div>
                        {/* <!-- Slide --> */}
                    </div>
                </div>
                {/* <!-- End Slider Area --> */}
    
              
                {/* <!-- All Categories --> */}
                <div className="all-categories">
                    <div className="container-fluid" style={{padding: " 0 50px"}}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title">
                                    <span>Products</span>
                                    <h3>Categories</h3>
                                </div>
    
                                <ul className="list-unstyled all-list">
                                    <li className="filter active" data-filter="all">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/11.jpg" alt="" />
                                        </div>
                                        All
                                    </li>
                                    <li className="filter" data-filter=".category-Link">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/4.jpg" alt="" />
                                        </div>
                                        Blend Machine & Juicers
                                    </li>
                                    <li className="filter" data-filter=".category-b">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/6.jpg" alt="" />
                                        </div>
                                        Bar Cooler
                                    </li>
                                    <li className="filter" data-filter=".category-c">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/1.jpg" alt="" />
                                        </div>
                                        Ograne Juicers
                                    </li>
                                    <li className="filter" data-filter=".category-d">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/2.jpg" alt="" />
                                        </div>
                                        Blend Mixer
                                    </li>
                                    <li className="filter" data-filter=".category-e">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/22.jpg" alt=""/>
                                        </div>
                                        Waflle & Pancake
                                    </li>
                                    <li className="filter" data-filter=".category-f">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/8.jpg" alt=""/>
                                        </div>
                                        Ice Cream Machines
                                    </li>
                                    <li className="filter" data-filter=".category-g">
                                        <div className="image">
                                            <Image  width = "100%"  height="100%"src="/../public/images/Products/7.jpg" alt=""/>
                                        </div>
                                        Slush Machine
                                    </li>
                                </ul>
    
                                <div className="all-list-mobile list-unstyled">
                                    <li className="active">All</li>
                                    <li>Sale</li>
                                    <li>New Products</li>
                                    <li>Best Seller</li>
                                    <li>Featured</li>
                                </div>
                            </div>
                            {/* <!-- /. Col --> */}
    
                            
                            {/* <!-- /.Mix Container --> */}
    
                            <div className="mobile-slider">
                                <div className="slider-products">
                                    <div className="owl-carousel">
                                        <div className="box-product">
                                            <span className="label-product">New</span>
                                            <div className="image">
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/1.jpg" alt=""/>
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/11.jpg" alt=""/>
                                            </div>
                                            <div className="details">
                                                <h4><a href="Juice-extractor-Miracle-Edition.html">Tempest?? High-Performance Commercial</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/2.jpg" alt=""/>
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/22.jpg" alt=""/>
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Stick Waffle Maker Commercial</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/3.jpg" alt=""/>
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/33.jpg" alt=""/>
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Commercial Stainless Steel Electric Crepe</a></h4>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/4.jpg" alt=""/>
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/44.jpg" alt=""/>
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Juice drink double dispenser</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/5.jpg" alt=""/>
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/55.jpg" alt=""/>
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Hakka Commercial Professional Blender</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
    
                                <div className="slider-products">
                                    <div className="owl-carousel">
                                        <div className="box-product">
                                            <div className="image">
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/6.jpg" alt=""/>
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/66.jpg" alt=""/>
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Soft ice cream machine</a></h4>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/7.jpg" alt=""/>
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/77.jpg" alt=""/>
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Coffee Grinder</a></h4>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/8.jpg" alt="" />
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/88.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Bakery Convection Oven LIDO Inox</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/99.jpg" alt="" />
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/9.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Juice triple Dispenser</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/10.jpg" alt="" />
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/1010.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Espresso cappuccino machine</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
    
                                <div className="slider-products">
                                    <div className="owl-carousel">
                                        <div className="box-product">
                                            <span className="label-product sale">Sale</span>
                                            <div className="image">
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/8.jpg" alt="" />
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/88.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Bakery Convection Oven</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/99.jpg" alt="" />
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/9.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Juice triple Dispenser</a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/10.jpg" alt="" />
                                                <Image  width = "100%"  height="100%"src="/../public/images/Products/1010.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <h4><a href="single-product.html">Espresso cappuccino </a></h4>
                                                <span className="stock">In stock</span>
                                                <div className="rating">
                                                    <ul className="stars">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
                                                        <li><i className="far fa-star"></i></li>
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
                            {/* <!-- /.Mobile Slider --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- /. All Categories --> */}
    
            </>
    
    
    
        
        {/* <!-- =============== END PAGE WRAPPER OF CONTENT =============== --> */}
        </>
    
    )
}


export default home