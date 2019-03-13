<template>
<div class="app">
  <!--<div class="header">-->
  <!--<header-bar></header-bar>-->
  <!--</div>-->
  <!--<div class="page">-->
    <!--<router-view></router-view>-->
    <!--<div class="help-text">-->
      <!--<p>Vue.js 2 Single Page App (SPA) Example with vuex and vue-router.</p>-->
      <!--<a href="https://github.com/skyronic/vue-spa">View Source Code</a>-->
    <!--</div>-->
  <!--</div>-->
  <div id="wrapper">

    <!-- Main -->
    <div id="main">
      <div class="inner">

        <!-- Header -->
        <header id="header">
          <a href="index.html" class="logo"><strong>Editorial</strong> by HTML5 UP</a>
          <ul class="icons">
            <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
            <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon fa-medium"><span class="label">Medium</span></a></li>
          </ul>
        </header>

        <router-view></router-view>

      </div>
    </div>

    <!-- Sidebar -->
    <div id="sidebar">
      <div class="inner">

        <!-- Search -->
        <!--<section id="search" class="alt">-->
          <!--<form method="post" action="#">-->
            <!--<input type="text" name="query" id="query" placeholder="Search" />-->
          <!--</form>-->
        <!--</section>-->

        <!-- Menu -->
        <nav id="menu">
          <header class="major">
            <h2>北京纵横马术</h2>
          </header>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/generic">关于我们</router-link></li>
            <li><router-link to="/elements">丰台马场</router-link></li>
            <li><router-link to="/elements">会员风采</router-link></li>
            <li><router-link to="/elements">联系我们</router-link></li>
            <!--<li>-->
              <!--<span class="opener">Submenu</span>-->
              <!--<ul>-->
                <!--<li><a href="#">Lorem Dolor</a></li>-->
                <!--<li><a href="#">Ipsum Adipiscing</a></li>-->
                <!--<li><a href="#">Tempus Magna</a></li>-->
                <!--<li><a href="#">Feugiat Veroeros</a></li>-->
              <!--</ul>-->
            <!--</li>-->
          </ul>
        </nav>

        <!-- Section -->
        <section>
          <header class="major">
            <h2>免费体验预约</h2>
          </header>
          <p>您有一次免费体验的机会,欢迎预约!
          <br>
          年龄: 3~60岁
          <br>
          时间: 50分钟左右
          <br>
          活动: 马房参观,马儿互动,马背骑乘,马术讲解
          <br>
          安全: 马场提供专业马术装备,一对一教练指导
          </p>
          <form method="post" action="#">
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" value="" placeholder="姓名" />
              </div>
              <div class="col-6 col-12-xsmall">
                <input type="text" name="phone" id="phone" value="" placeholder="电话" />
              </div>
              <div class="col-6 col-12-xsmall">
                <input type="text" name="age" id="age" value="" placeholder="年龄" />
              </div>
              <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="提 交" class="primary" /></li>
                </ul>
              </div>
            </div>
          </form>
        </section>

        <!-- Footer -->
        <footer id="footer">
          <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>

      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  name: 'app'
}
</script>

