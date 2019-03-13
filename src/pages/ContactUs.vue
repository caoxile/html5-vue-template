<template>
  <div>
    <!-- Map Area Starts -->
    <section class="map-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div id="mapBox" class="mapBox"
                 data-lat="40.701083"
                 data-lon="-74.1522848"
                 data-zoom="13"
                 data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                 data-mlat="40.701083"
                 data-mlon="-74.1522848">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Map Area End -->


    <!-- Contact Form Starts -->
    <section class="contact-form section-padding3">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 mb-5 mb-lg-0">
            <div class="d-flex">
              <div class="into-icon">
                <i class="fa fa-home"></i>
              </div>
              <div class="info-text">
                <h4>California, United States</h4>
                <p>Santa monica bullevard</p>
              </div>
            </div>
            <div class="d-flex">
              <div class="into-icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="info-text">
                <h4>00 (440) 9865 562</h4>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
            </div>
            <div class="d-flex">
              <div class="into-icon">
                <i class="fa fa-envelope-o"></i>
              </div>
              <div class="info-text">
                <h4>support@colorlib.com</h4>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <form action="#">
              <div class="left">
                <input type="text" placeholder="Enter your name" onfocus="this.placeholder = ''"
                       onblur="this.placeholder = 'Enter your name'" required>
                <input type="email" placeholder="Enter email address" onfocus="this.placeholder = ''"
                       onblur="this.placeholder = 'Enter email address'" required>
                <input type="text" placeholder="Enter subject" onfocus="this.placeholder = ''"
                       onblur="this.placeholder = 'Enter subject'" required>
              </div>
              <div class="right">
                <textarea name="message" cols="20" rows="7" placeholder="Enter Message" onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Message'" required></textarea>
              </div>
              <button type="submit" class="template-btn">subscribe now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form End -->
  </div>
</template>
<script>
  export default {}
</script>

