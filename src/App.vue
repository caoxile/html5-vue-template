<template>
<div>
  <!-- Preloader Starts -->
  <div class="preloader">
    <div class="spinner"></div>
  </div>
  <!-- Preloader End -->

  <!-- Header Area Starts -->
  <header class="header-area single-page">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo-area">
              <a href="index.html"><img src="static/assets/images/logo-light.png" alt="logo"></a>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="custom-navbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="main-menu main-menu-light">
              <ul>
                <li class="active"><router-link to="/">home</router-link></li>
                <li><router-link to="/about">about us</router-link></li>
                <li><a href="job-category.html">category</a></li>
                <li><a href="#">blog</a>
                  <ul class="sub-menu">
                    <li><a href="blog-home.html">Blog Home</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="contact-us.html">contact</a></li>
                <li><a href="#">pages</a>
                  <ul class="sub-menu">
                    <li><a href="job-search.html">Job Search</a></li>
                    <li><a href="job-single.html">Job Single</a></li>
                    <li><a href="pricing-plan.html">Pricing Plan</a></li>
                    <li><a href="elements.html">Elements</a></li>
                  </ul>
                </li>
                <li class="menu-btn">
                  <a href="#" class="login">log in</a>
                  <a href="#" class="template-btn">sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-title text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2>About Us</h2>
            <p>There spirit beginning bearing the open at own every give appear in third you sawe two boys</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Area End -->

  <router-view></router-view>

  <!-- Footer Area Starts -->
  <footer class="footer-area section-padding">
    <div class="footer-widget">
      <div class="container">
        <div class="row">
          <div class="col-xl-2 col-lg-3">
            <div class="single-widget-home mb-5 mb-lg-0">
              <h3 class="mb-4">top products</h3>
              <ul>
                <li class="mb-2"><a href="#">managed website</a></li>
                <li class="mb-2"><a href="#">managed reputation</a></li>
                <li class="mb-2"><a href="#">power tools</a></li>
                <li><a href="#">marketing service</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-5 offset-xl-1 col-lg-6">
            <div class="single-widget-home mb-5 mb-lg-0">
              <h3 class="mb-4">newsletter</h3>
              <p class="mb-4">You can trust us. we only send promo offers, not a single.</p>
              <form action="#">
                <input type="email" placeholder="Your email here" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email here'" required>
                <button type="submit" class="template-btn">subscribe now</button>
              </form>
            </div>
          </div>
          <div class="col-xl-3 offset-xl-1 col-lg-3">
            <div class="single-widge-home">
              <h3 class="mb-4">instagram feed</h3>
              <div class="feed">
                <img src="static/assets/images/feed1.jpg" alt="feed">
                <img src="static/assets/images/feed2.jpg" alt="feed">
                <img src="static/assets/images/feed3.jpg" alt="feed">
                <img src="static/assets/images/feed4.jpg" alt="feed">
                <img src="static/assets/images/feed5.jpg" alt="feed">
                <img src="static/assets/images/feed6.jpg" alt="feed">
                <img src="static/assets/images/feed7.jpg" alt="feed">
                <img src="static/assets/images/feed8.jpg" alt="feed">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6">
                            <span><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;2019 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</span>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="social-icons">
              <ul>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a href="#"><i class="fa fa-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Area End -->

</div>
</template>
<script>
export default {
  name: 'app'
}
</script>

