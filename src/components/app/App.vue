<template>
  <nav class="navbar">
        <div class="icon-left">
            <a href="https://www.linkedin.com/in/alimov-mahsud-5bb873241/" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/informatik409" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
        <div class="nav-img">
            <!-- <a href="#"> -->
              <router-link to="/">
                <img src="@/assets/img/logo.png" alt="logo">
              </router-link>
            <!-- </a> -->
        </div>
        <div class="icon-right">
            <a href="https://t.me/al1mov_dev" target="_blank">
                <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="https://twitter.com/MahsudAlimov" target="_blank">
                <i class="fa-brands fa-twitter"></i>
            </a>
        </div>
    </nav>
    <!-- Footer Navbar -->
    <nav class="foot-nav" v-auto-animate>
        <div class="footer-navbar">
            <div class="footer-links">
                <!-- <a> -->
                  <router-link to="/">
                    <div class="tool-kit">
                        <div class="tool">
                            <p>Home</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-house"></i>
                  </router-link>
                <!-- </a> -->
            </div>
            <div class="footer-links">
                <router-link to="/about">
                  <div class="tool-kit">
                        <div class="tool">
                            <p>About</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-address-card"></i>
                </router-link>
            </div>
            <div class="footer-links">
                <!-- <a href="#"> -->
                  <router-link to="/weather">
                    <div class="tool-kit">
                        <div class="tool">
                            <p>Weather</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-cloud"></i>
                  </router-link>
                <!-- </a> -->
            </div>
            <div class="footer-links">
                <!-- <a href="#"> -->
                  <router-link to="/projects">
                    <div class="tool-kit">
                        <div class="tool">
                            <p>Projects</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-bars-progress"></i>
                  </router-link>
                <!-- </a> -->
            </div>
            <div class="footer-links">
              <router-link to="/contact">
                <!-- <a href="#"> -->
                    <div class="tool-kit">
                        <div class="tool">
                            <p>Contact</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-address-book"></i>
                <!-- </a> -->
              </router-link>
            </div>
            <div><img src="https://mc.yandex.ru/watch/92053612" style="position:absolute; left: 10px; top: 0;" alt="" /></div>
        </div>
      </nav>
    <!-- End Footer Navbar -->
    <!-- Home page -->
    <router-view></router-view>
</template>
<script>
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(92053612, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit&family=La+Belle+Aurore&family=Roboto&family=Rubik:wght@600&family=Unbounded:wght@900&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  ::selection{
    color: #0024f3;
    background: black;

  }
  .navbar{
    width: 100%;
    position: fixed;
    height: 70px;
    background: rgba(0, 0, 0, 0.781);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    z-index: 999;
  }
  .nav-img img{
    padding: 5px 0px;
    width: 70px;
    height: 70px;
  }
  .icon-left{
    padding-right: 30px;
  }
  .icon-left a{
    color: white;
    padding-right: 25px;
    font-size: 30px;
    text-decoration: none;
  }
  .icon-right a{
    color: white;
    padding-left: 25px;
    font-size: 30px;
    text-decoration: none;
  }
  .icon-right{
    padding-left: 30px;
  }
  /* Footer Navbar */
.foot-nav{
    width: 100%;
    height: 50px;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
.footer-navbar{
    width: 50%;
    height: 50px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.781);
    backdrop-filter: blur(20px);
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    bottom: 0;
    /* position: fixed; */
    display: flex;
    justify-content: space-between;
}
.footer-links{
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    margin: 0 auto;
}
.footer-links a .tool{
    color: white;
    text-decoration: none;
    font-size: 30px;
    position: absolute;
    bottom: 20px;
    width: 130px;
    height: 30px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.781);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    display: none;
    text-align: center;
}
.footer-links a:hover .tool{
    display: block;
    justify-content: center;
    align-items: center;
    height: 50px;
}
.footer-links a i{
    font-size: 30px;
    color: white;
    text-decoration: none;
}
a .tool-kit{
    position: relative;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* End Footer Navbar */
::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background-color: rgb(170, 170, 170);
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(100, 100, 100);
    width: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: rgb(85, 85, 85);
  } 
@media only screen and (max-width: 230px){
    .icon-left{
      display: none;
    }
    .icon-right{
      display: none;
    }
}
@media only screen and (max-width: 400px){
    .footer-links a .tool::before{
      display: none;
    }
    .footer-links a:hover .tool{
      display: none;
    }
    .icon-left{
      display: none;
    }
    .icon-right{
      display: none;
    }
}
@media only screen and (max-width: 600px){
    .icon-left{
      padding-left: 30px;
    }
    .icon-right{
      padding-right: 30px;
    }
    .icon-left a{
      font-size: 20px;
    }
    .icon-right a{
      font-size: 20px;
    }
}
@media only screen and (max-width: 900px){
    .footer-navbar{
        width: 100%;
    }
}
</style>