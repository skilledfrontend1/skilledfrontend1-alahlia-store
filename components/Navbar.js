import Image from 'next/image'
import arLogo from "../public/images/Icons/ar.png"
import alahliaLogo from "../public/images/Logo/logo.png"
import sharjah from "../public/images/Logo/Sharjah.png"
import product1 from "../public/images/Products/1.jpg"

const Navbar = () =>{
    return (
            <>
            {/* <!-- =========== START HEADER AREA ============ --> */}
            <header className="main-header">
                {/* <!-- top bar --> */}
                <div className="top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="links">
                                    <a href="about-us.html">About us</a>
                                    <a href="account.html">My account</a>
                                    <a href="wishlist.html">Wishlist</a>
                                </div>
                            </div>
    
                            <div className="col-md-4">
                                <div className="highlight text-center">
                                    <span>Al Ahlia Kitchen Equipment Trade</span>
                                </div>
                            </div>
    
                            <div className="col-md-4">
                                <div className="lang">
                                    <div className="account">
                                        <span>My account <i className="fas fa-chevron-down"></i></span>
    
                                        <div className="dropdown">
                                            <ul className="list-unstyled">
                                                <li><a href="/"><span><i className="fas fa-file"></i></span>Orders History</a></li>
                                                <li><a href="/"><span><i className="fas fa-address-book"></i></span>Address Book</a></li>
                                                <li><a href="/"><span><i className="fas fa-file-alt"></i></span>Wishlist</a></li>
                                                <li><a href="/"><span><i className="fas fa-file-download"></i></span>Downloads</a></li>
                                                <li><a href="/"><span><i className="fas fa-wallet"></i></span>Recurring Payments</a></li>
                                                <li><a href="/"><span><i className="fas fa-award"></i></span>Reward Points</a></li>
                                                <li><a href="/"><span><i className="fas fa-undo"></i></span>Returns</a></li>
                                                <li><a href="/"><span><i className="fas fa-money-bill-wave"></i></span>Transactions</a></li>
                                                <li><a href="/"><span><i className="fas fa-inbox"></i></span>Newsletter</a></li>
                                                <li><a href="/"><span><i className="fas fa-user-circle"></i></span>Profile</a></li>
                                            </ul>
                                            <div className="sign">
                                                <a href="/">Sign Out</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="/">
                                            <Image   src={arLogo} alt="ar logo" />
                                        Arabic</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /. top bar --> */}
    
    
    
    
                
                {/* <!-- middle header --> */}
                <div className="middle-header">
                    <div className="container">
                        <div className="content">
                            <div className="logo">
                                <a href="index.html">
                                    <Image  src={alahliaLogo} alt="Al-Ahlia"/>
                                </a>
                            </div>
                            {/* <!-- /. Logo --> */}
    
                            <div className="deatils">
                                <Image   src={sharjah} alt="Sharjah" />
                                <ul className="list-unstyled">
                                    <li><span><i className="fas fa-envelope"></i></span>
                                        <a href="/">sales@alahlia.ae</a></li>
    
                                    <li><span><i className="fas fa-phone-alt"></i></span>
                                        <a href="/">0505534887</a></li>
    
                                    <li><span><i className="fas fa-mobile"></i></span>
                                        <a href="/">0505534887</a></li>
                                </ul>
    
                                <div className="search">
                                    <input type="text" placeholder="Search" />
                                    <span><i className="fas fa-search"></i></span>
                                </div>
    
                                <div className="wishlist">
                                    <a href="/" title="Wishlist"><i className="fas fa-heart"></i></a>
                                </div>
    
                                <div className="wishicon">
                                    <span>AED 0.0</span>
                                    <div className="icon">
                                        <div className="num">0</div>
                                        <i className="fas fa-shopping-bag"></i>
                                    </div>
    
                                    <div className="dropdown-box">
                                        <div className="item">
                                            <div className="image">
                                                <Image  src={product1} alt="product1" />
                                            </div>
                                            <div>
                                                <h5>Juice extrator"Miracle Edition" 68</h5>
                                                <span>1 X <span>AED 19.50</span></span>
                                            </div>
    
                                            <div className="icon">
                                                <i className="fas fa-times"></i>
                                            </div>
                                        </div>
    
                                        <div className="subtotal">
                                            <span>Subtotal:</span>
                                            <h4>AED 19.50</h4>
                                        </div>
                                        <div className="subtotal">
                                            <span>Total:</span>
                                            <h4>AED 19.50</h4>
                                        </div>
                                        <button>View cart</button>
                                        <button className="check">Checkout</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /. Deatils --> */}
    
                        </div>
                    </div>
                </div>
                {/* <!-- /. middle header --> */}
    
                {/* <!-- bottom header --> */}
                <div className="bottom-header">
                    <div className="container">
                        <ul className="list-styled">
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="al-ahlia-product.html">Al Ahlia product</a>
                                <div className="mega-menu">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <ul className="list-unstyled">
                                                <li><a href="/">Bar cooler 3 door</a></li>
                                                <li><a href="/">Juice extractor</a></li>
                                                <li><a href="/">Santos juicer 50</a></li>
                                                <li><a href="/">Classic citrus juicer 11</a></li>
                                                <li><a href="/">Juice extractor 28</a></li>
                                            </ul>
                                        </div>
    
                                        <div className="col-md-3">
                                            <ul className="list-unstyled">
                                                <li><a href="/">Bar cooler 3 door</a></li>
                                                <li><a href="/">Juice extractor</a></li>
                                                <li><a href="/">Santos juicer 50</a></li>
                                                <li><a href="/">Classic citrus juicer 11</a></li>
                                                <li><a href="/">Juice extractor 28</a></li>
                                            </ul>
                                        </div>
    
    
                                        <div className="col-md-3">
                                            <ul className="list-unstyled">
                                                <li><a href="/">Bar cooler 3 door</a></li>
                                                <li><a href="/">Juice extractor</a></li>
                                                <li><a href="/">Santos juicer 50</a></li>
                                                <li><a href="/">Classic citrus juicer 11</a></li>
                                                <li><a href="/">Juice extractor 28</a></li>
                                            </ul>
                                        </div>
    
                                        <div className="col-md-3">
                                            <ul className="list-unstyled">
                                                <li><a href="/">Bar cooler 3 door</a></li>
                                                <li><a href="/">Juice extractor</a></li>
                                                <li><a href="/">Santos juicer 50</a></li>
                                                <li><a href="/">Classic citrus juicer 11</a></li>
                                                <li><a href="/">Juice extractor 28</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
    
                            </li>
                            <li><a href="al-ahlia-product.html">Ice Cream Machine</a></li>
                            <li><a href="al-ahlia-product.html">Ovens</a></li>
                            <li><a href="al-ahlia-product.html">Coffee Machines</a></li>
                            <li><a href="al-ahlia-product.html">Cake display</a></li>
                            <li><a href="al-ahlia-product.html">Dishwashers</a></li>
                            <li><a href="al-ahlia-product.html">Divider & Mixer</a></li>
                            <li><a href="al-ahlia-product.html">Food warmer</a></li>
                            <li><a href="al-ahlia-product.html">Meat Grinder Machine</a></li>
                            <li><a href="al-ahlia-product.html">Laundry Equipment</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- /. bottom header --> */}
            </header>
            {/* <!-- =========== END HEADER AREA ============== --> */}
    
    
            {/* <!-- =========== START HEADER MOBILE ============== --> */}
            <div className="header-mobile">
                <div className="list-deatils">
                    <div className="container">
                        <ul className="list-unstyled">
                            <li><span><i className="fas fa-envelope"></i></span>
                                <a href="/">sales@alahlia.ae</a></li>
    
                            <li><span><i className="fas fa-phone-alt"></i></span>
                                <a href="/">0505534887</a></li>
    
                            <li><span><i className="fas fa-mobile"></i></span>
                                <a href="/">0505534887</a></li>
                        </ul>
                    </div>
                </div>
    
                <div className="bottom-header">
                    <div className="container">
                        <div className="content">
                            <div className="logo">
                                {/* <a href="index.html"><Image  layout='fill'src="/../images/Logo/logo.png" alt="" width="80"/></a> */}
                            </div>
    
                            <div className="sh">
                                {/* <Image  layout='fill'src="/../images/Logo/Sharjah.png" alt="" width="37"/> */}
                            </div>
    
                            <div className="search">
                                <input type="text" placeholder="Search"/>
                                <span><i className="fas fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            {/* <!-- =========== END HEADER MOBILE ============== --> */}
    
    
            {/* <!-- =========== START MENU MOBILE ============== --> */}
            <div className="menu-mobile">
                <ul className="list-unstyled">
                    <li><i className="fas fa-home"></i></li>
                    <li onClick={()=>{toggleSidebar(this)}}><i className="fas fa-tags"></i></li>
                    <li><i className="fas fa-heart"></i></li>
                    <li><i className="fas fa-user"></i></li>
                    <li><i className="fas fa-shopping-cart"></i></li>
                </ul>
            </div>
            {/* <!-- =========== END MENU MOBILE ============== --> */}
            </>
    )
}

export default Navbar