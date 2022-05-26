import AdvertisingBanner from "../components/AdvertisingBanner"

const account = ()=>{

return(
<>
<AdvertisingBanner />
<div class="account-content">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="name-account">
                    <h3>Hi Khaled</h3>
                    <a href="#">Sign out</a>
                </div>
            </div>

            <div class="col-lg-3 col-xxl-2">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#History" type="button" role="tab" aria-controls="History" aria-selected="true"><span><i class="fas fa-file"></i></span>Order History</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Address" type="button" role="tab" aria-controls="Address" aria-selected="false"><span><i class="fas fa-address-book"></i></span>Address Book</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Wishlist" type="button" role="tab" aria-controls="Wishlist" aria-selected="false"><span><i class="fas fa-file-alt"></i></span>Wishlist</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Downloads" type="button" role="tab" aria-controls="Downloads" aria-selected="false"><span><i class="fas fa-file-download"></i></span>Downloads</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Payments" type="button" role="tab" aria-controls="Payments" aria-selected="false"><span><i class="fas fa-wallet"></i></span>Recurring Payments</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Reward" type="button" role="tab" aria-controls="Reward" aria-selected="false"><span><i class="fas fa-award"></i></span>Reward Points</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Returns" type="button" role="tab" aria-controls="Returns" aria-selected="false"><span><i class="fas fa-undo"></i></span>Returns</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Transacctions" type="button" role="tab" aria-Transacctions="contact" aria-selected="false"><span><i class="fas fa-money-bill-wave"></i></span>Transacctions</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Newsletter" type="button" role="tab" aria-controls="Newsletter" aria-selected="false"><span><i class="fas fa-inbox"></i></span>Newsletter</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Profile" type="button" role="tab" aria-controls="Profile" aria-selected="false"><span><i class="fas fa-user-circle"></i></span>Profile</button>
                    </li>
                </ul>
            </div>

            <div class="col-lg-9 col-xxl-10">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="History" role="tabpanel" aria-labelledby="History-tab">
                        <div class="his-order">
                            <div class="left">
                                <div class="image">
                                    <img src="assets/images/Products/layer.jpg" alt="" />
                                </div>
                                <div class="deatils">
                                    <h5>Juice extractor "Miracle Edition" 68</h5>
                                    <span class="price">550 AED</span>

                                    <ul class="list-unstyled">
                                        <li>Model: 28</li>
                                        <li>Status: Pending</li>
                                        <li>Date added: 09/08/2021</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="right">
                                <a href="#" class="show"><i class="fas fa-file"></i></a>
                            </div>
                        </div>

                        <div class="his-order">
                            <div class="left">
                                <div class="image">
                                    <img src="assets/images/Products/layer.jpg" alt="" />
                                </div>
                                <div class="deatils">
                                    <h5>Juice extractor "Miracle Edition" 68</h5>
                                    <span class="price">550 AED</span>

                                    <ul class="list-unstyled">
                                        <li>Model: 28</li>
                                        <li>Status: Pending</li>
                                        <li>Date added: 09/08/2021</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="right">
                                <a href="#" class="show"><i class="fas fa-file"></i></a>
                            </div>
                        </div>

                        <div class="his-order">
                            <div class="left">
                                <div class="image">
                                    <img src="assets/images/Products/layer.jpg" alt="" />
                                </div>
                                <div class="deatils">
                                    <h5>Juice extractor "Miracle Edition" 68</h5>
                                    <span class="price">550 AED</span>

                                    <ul class="list-unstyled">
                                        <li>Model: 28</li>
                                        <li>Status: Pending</li>
                                        <li>Date added: 09/08/2021</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="right">
                                <a href="#" class="show"><i class="fas fa-file"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Address" role="tabpanel" aria-labelledby="Address-tab">
                        <div class="address-block">
                            <h5>Locker: Al khaldiya</h5>

                            <div class="row d-flex align-items-center">
                                <div class="col-md-3">
                                    <span>Name:</span>
                                    <p>Khaled Almqayyad</p>
                                </div>
                                <div class="col-md-6">
                                    <span>Address:</span>
                                    <p>Abu Dhabi, Al khaldiya Mall, at the enterance on the left side of the email, Abu Dhabi, United arab emirates</p>
                                </div>
                                <div class="col-md-3">
                                    <span>Phone Number:</span>
                                    <p>+971 50 207 0091</p>
                                </div>
                            </div>
                        </div>

                        <div class="address-block">
                            <h5>Locker: Al khaldiya</h5>

                            <div class="row d-flex align-items-center">
                                <div class="col-md-3">
                                    <span>Name:</span>
                                    <p>Khaled Almqayyad</p>
                                </div>
                                <div class="col-md-6">
                                    <span>Address:</span>
                                    <p>Abu Dhabi, Al khaldiya Mall, at the enterance on the left side of the email, Abu Dhabi, United arab emirates</p>
                                </div>
                                <div class="col-md-3">
                                    <span>Phone Number:</span>
                                    <p>+971 50 207 0091</p>
                                </div>
                            </div>
                        </div>

                        <div class="address-block">
                            <h5>Locker: Al khaldiya</h5>

                            <div class="row d-flex align-items-center">
                                <div class="col-md-3">
                                    <span>Name:</span>
                                    <p>Khaled Almqayyad</p>
                                </div>
                                <div class="col-md-6">
                                    <span>Address:</span>
                                    <p>Abu Dhabi, Al khaldiya Mall, at the enterance on the left side of the email, Abu Dhabi, United arab emirates</p>
                                </div>
                                <div class="col-md-3">
                                    <span>Phone Number:</span>
                                    <p>+971 50 207 0091</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="Wishlist" role="tabpanel" aria-labelledby="Wishlist-tab">
                        <div class="his-order">
                            <div class="left">
                                <div class="image">
                                    <img src="assets/images/Products/layer.jpg" alt="" />
                                </div>
                                <div class="deatils">
                                    <h5>Juice extractor "Miracle Edition" 68</h5>
                                    <span class="price">550 AED</span>

                                    <ul class="list-unstyled">
                                        <li>Model: 28</li>
                                        <li>Status: Pending</li>
                                        <li>Date added: 09/08/2021</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="right">
                                <a href="#" class="shop"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="close"><i class="fas fa-times"></i></a>
                            </div>
                        </div>

                        <div class="his-order">
                            <div class="left">
                                <div class="image">
                                    <img src="assets/images/Products/layer.jpg" alt="" />
                                </div>
                                <div class="deatils">
                                    <h5>Juice extractor "Miracle Edition" 68</h5>
                                    <span class="price">550 AED</span>

                                    <ul class="list-unstyled">
                                        <li>Model: 28</li>
                                        <li>Status: Pending</li>
                                        <li>Date added: 09/08/2021</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="right">
                                <a href="#" class="shop"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="close"><i class="fas fa-times"></i></a>
                            </div>
                        </div>

                        <div class="his-order">
                            <div class="left">
                                <div class="image">
                                    <img src="assets/images/Products/layer.jpg" alt="" />
                                </div>
                                <div class="deatils">
                                    <h5>Juice extractor "Miracle Edition" 68</h5>
                                    <span class="price">550 AED</span>

                                    <ul class="list-unstyled">
                                        <li>Model: 28</li>
                                        <li>Status: Pending</li>
                                        <li>Date added: 09/08/2021</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="right">
                                <a href="#" class="shop"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="close"><i class="fas fa-times"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Downloads" role="tabpanel" aria-labelledby="Downloads-tab">
                        <div class="downloads">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class="table-light">
                                        <tr>
                                            <th class="text-center">Order ID</th>
                                            <th>Name</th>
                                            <th class="text-center">Remaining</th>
                                            <th class="text-center">Size: 5MB</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center">4</td>
                                            <td class="text-center"><a href="#" class="download"><i class="fas fa-download"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center">6</td>
                                            <td class="text-center"><a href="#" class="download"><i class="fas fa-download"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center"><a href="#" class="download"><i class="fas fa-download"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center">3</td>
                                            <td class="text-center"><a href="#" class="download"><i class="fas fa-download"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center">5</td>
                                            <td class="text-center"><a href="#" class="download"><i class="fas fa-download"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center"><a href="#" class="download"><i class="fas fa-download"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Payments" role="tabpanel" aria-labelledby="Payments-tab">
                        <div class="downloads">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class="table-light">
                                        <tr>
                                            <th class="text-center">ID</th>
                                            <th class="text-center">Created</th>
                                            <th>Status</th>
                                            <th>Product</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td class="text-center">10/8/2021</td>
                                            <td>Canceled</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center"><a href="#" class="file"><i class="fas fa-file"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td class="text-center">10/8/2021</td>
                                            <td>Canceled</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center"><a href="#" class="file"><i class="fas fa-file"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td class="text-center">10/8/2021</td>
                                            <td>Canceled</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center"><a href="#" class="file"><i class="fas fa-file"></i></a></td>
                                        </tr>


                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td class="text-center">10/8/2021</td>
                                            <td>Canceled</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center"><a href="#" class="file"><i class="fas fa-file"></i></a></td>
                                        </tr>


                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td class="text-center">10/8/2021</td>
                                            <td>Canceled</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center"><a href="#" class="file"><i class="fas fa-file"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td class="text-center">10/8/2021</td>
                                            <td>Canceled</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center"><a href="#" class="file"><i class="fas fa-file"></i></a></td>
                                        </tr>


                                        <tr>
                                            <td class="text-center">#15</td>
                                            <td class="text-center">10/8/2021</td>
                                            <td>Canceled</td>
                                            <td>Juice extractor "Miracle Edition" 68</td>
                                            <td class="text-center"><a href="#" class="file"><i class="fas fa-file"></i></a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>


                    <div class="tab-pane fade" id="Reward" role="tabpanel" aria-labelledby="Reward-tab">
                        <div class="downloads">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Date Added</th>
                                            <th>Description</th>
                                            <th class="text-center">Points</th>
                                            <th class="text-center">Reward Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10/8/2021</td>
                                            <td>Order ID: #82</td>
                                            <td class="text-center">5</td>
                                            <td class="text-center"><a href="#" class="show-point"><i class="fas fa-eye"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td>10/8/2021</td>
                                            <td>Order ID: #82</td>
                                            <td class="text-center">5</td>
                                            <td class="text-center"><a href="#" class="show-point"><i class="fas fa-eye"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td>10/8/2021</td>
                                            <td>Order ID: #82</td>
                                            <td class="text-center">10</td>
                                            <td class="text-center"><a href="#" class="show-point"><i class="fas fa-eye"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td>10/8/2021</td>
                                            <td>Order ID: #82</td>
                                            <td class="text-center">12</td>
                                            <td class="text-center"><a href="#" class="show-point"><i class="fas fa-eye"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td>10/8/2021</td>
                                            <td>Order ID: #82</td>
                                            <td class="text-center">12</td>
                                            <td class="text-center"><a href="#" class="show-point"><i class="fas fa-eye"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td>10/8/2021</td>
                                            <td>Order ID: #82</td>
                                            <td class="text-center">12</td>
                                            <td class="text-center"><a href="#" class="show-point"><i class="fas fa-eye"></i></a></td>
                                        </tr>

                                        <tr>
                                            <td>10/8/2021</td>
                                            <td>Order ID: #82</td>
                                            <td class="text-center">12</td>
                                            <td class="text-center"><a href="#" class="show-point"><i class="fas fa-eye"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="Returns" role="tabpanel" aria-labelledby="Returns-tab">
                        <div class="returns-content">
                            <div class="block-returns">
                                <h3 class="main-title">Order Information</h3>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">First Name <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="" value="Khaled" />
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Last Name <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="" value="Skilled" />
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">E-Mail <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="" value="Khaled@skilledtech.ae" />
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Telephone <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="" value="123123123" />
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">First Name <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="" value="Khaled"/>
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Order ID <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="" value="#5050"/>
                                    </div>
                                </div>

                                <div class="row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Order Date <span>*</span></label>
                                    <div class="col-md-4 col-sm-6 d-flex align-items-center">
                                        <input type="text" class="form-control" placeholder="" value="2021-08-10" />

                                        <span class="date-icon"><i class="fas fa-calendar-alt"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div class="block-returns">
                                <h3 class="main-title">Product Information</h3>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Product Name <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Product Name" />
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Product Code <span>*</span></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Product Code " />
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Quantity</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="" value="1" />
                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Reason Return <span>*</span></label>
                                    <div class="col-sm-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Dead On Arrival
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Faulty, please supply deatils
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <label class="form-check-label" for="flexRadioDefault3">
                                                Order Error
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                            <label class="form-check-label" for="flexRadioDefault4">
                                                Other, please supply details
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                            <label class="form-check-label" for="flexRadioDefault5">
                                                Received wrong Item
                                            </label>
                                        </div>

                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Product opend <span>*</span></label>
                                    <div class="col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option2" checked />
                                            <label class="form-check-label" for="inlineRadio5">No</label>
                                        </div>

                                    </div>
                                </div>

                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-md-2 col-sm-3 col-form-label">Faulty or other details<span>*</span></label>
                                    <div class="col-md-10 col-sm-9">
                                        <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Faulty or other details"></textarea>
                                    </div>
                                </div>

                            </div>

                            <div class="buttons">
                                <button class="back"><span><i class="fas fa-arrow-left"></i></span>Back</button>
                                <button class="contunie">Continue <span><i class="fas fa-arrow-right"></i></span></button>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="Transacctions" role="tabpanel" aria-labelledby="Transacctions-tab">
                        <div class="transaction-content">
                            <div class="top-trans">
                                <h5>Transactions</h5>
                                <span>To see all your gift card transactions, including refunds view your gift</span>
                            </div>

                            <div class="completed">
                                Completed
                            </div>

                            <div class="block-trans">
                                <span>Agust 10,2021</span>
                                <span>VISA *****1020</span>
                                <span>Order number 171-1711511511</span>
                            </div>
                            <div class="block-trans">
                                <span>Agust 10,2021</span>
                                <span>VISA *****1020</span>
                                <span>Order number 171-1711511511</span>
                            </div>
                            <div class="block-trans">
                                <span>Agust 10,2021</span>
                                <span>VISA *****1020</span>
                                <span>Order number 171-1711511511</span>
                            </div>
                            <div class="block-trans">
                                <span>Agust 10,2021</span>
                                <span>VISA *****1020</span>
                                <span>Order number 171-1711511511</span>
                            </div>
                            <div class="block-trans">
                                <span>Agust 10,2021</span>
                                <span>VISA *****1020</span>
                                <span>Order number 171-1711511511</span>
                            </div>
                            <div class="block-trans">
                                <span>Agust 10,2021</span>
                                <span>VISA *****1020</span>
                                <span>Order number 171-1711511511</span>
                            </div>
                            <div class="block-trans">
                                <span>Agust 10,2021</span>
                                <span>VISA *****1020</span>
                                <span>Order number 171-1711511511</span>
                            </div>

                            <div class="buttons">
                                <button class="back"><span><i class="fas fa-arrow-left"></i></span>Previous</button>
                                <button class="contunie">Next page <span><i class="fas fa-arrow-right"></i></span></button>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Newsletter" role="tabpanel" aria-labelledby="Newsletter-tab">
                        <div class="newsletter-content">
                            <h5>Newsletter Subscription</h5>
                            <div class="d-flex align-items-center">
                                <label for="inputPassword" class="col-form-label">Subscribe </label>
                                <div class="">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Profile" role="tabpanel" aria-labelledby="Profile-tab">
                        <div class="profile-content">
                            <div>
                                <h5>General Inforamtion</h5>

                                <form action="" class="row">
                                    <div class="col-md-6">
                                        <div class="mb-2 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label">First Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="" value="Khaled" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-2 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label">Last Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="" value="Khaled" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-2 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label">E-Mail</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="" value="Khaled@skilledtech.ae" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-2 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label">Mobile</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="" value="0502070091" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="button-form">
                                            <button type="submit" class="save">Save</button>
                                        </div>
                                    </div>
                                </form>

                            </div>

                            <div class="mt-4">
                                <h5>Security</h5>

                                <form action="" class="row">
                                    <div class="col-md-6">
                                        <div class="mb-2 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                                            <div class="col-sm-9">
                                                <input type="password" class="form-control" placeholder="" value="Khaled" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-2 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                                            <div class="col-sm-9">
                                                <input type="password" class="form-control" placeholder="" value="Khaled" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="button-form">
                                            <button type="submit">Change password</button>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default account