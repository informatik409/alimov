<template>
  <div class="about-body">
    <div class="about">
      <div class="about-text" v-motion-roll-left>
        <div class="text">Hello Everyone This is About Page</div>
      </div>
      <div class="about-img" v-motion-roll-right>
        <img src="assets/img/about.png" alt="about" />
      </div>
    </div>
    <div class="info">
      <div class="about-text-info">
        <div class="top-text">About me</div>
        <div class="info-text">
          I was born on May 7, 2008 in Uchtepa district of Tashkent city. I have
          been interested in technology since I was young. This made me realize
          that I need to learn programming, and in 2019 I went to the "IT HOUS"
          educational center, where I participated in the "One Million Uzbek
          Coders" project and successfully completed it, and then they gave me a
          certificate. This made me more interested in programming. I came to an
          idea that I should go for a full course in web programming and again I
          started studying at IT HOUS training center in 2021. After
          successfully completing the course, I increased the number of my
          certificates to one, and most importantly, I got a good education!
        </div>
      </div>
    </div>
    <div class="slider">
      <div class="slider-text">
        <div class="slide-text">My Skills</div>
      </div>
      <div class="slider-items">
        <div class="slide">
          <img src="assets/img/html.png" alt="html">
        </div>
        <div class="slide">
        <img src="assets/img/css.png" alt="css">
        </div>
        <div class="slide">
          <img src="assets/img/js.png" alt="js">
        </div>
        <div class="slide">
          <img src="assets/img/sass.png" alt="sass">
        </div>
        <div class="slide">
          <img src="assets/img/bootsrap.png" alt="bootsrap">
        </div>
        <div class="slide">
          <img src="assets/img/laravel.png" alt="laravel">
        </div>
        <div class="slide">
          <img src="assets/img/vue.png" alt="laravel">
        </div>
        <div class="slide">
          <img src="assets/img/html.png" alt="html">
        </div>
        <div class="slide">
        <img src="assets/img/css.png" alt="css">
        </div>
        <div class="slide">
          <img src="assets/img/js.png" alt="js">
        </div>
        <div class="slide">
          <img src="assets/img/sass.png" alt="sass">
        </div>
        <div class="slide">
          <img src="assets/img/bootsrap.png" alt="bootsrap">
        </div>
        <div class="slide">
          <img src="assets/img/laravel.png" alt="laravel">
        </div>
        <div class="slide">
          <img src="assets/img/vue.png" alt="laravel">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: 0;
}

.about-body {
  width: 100%;
  height: auto;
  background-color: #18161f;
}

.about {
  width: 100%;
  height: 100vh;
  background-color: #18161f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}

.about-text {
  width: 40%;
  background-color: transparent;
}

.about-text .text {
  background: linear-gradient(30deg, #797979, #0024f3, #000000, #ffffff);
  font-family: "Roboto", sans-serif;
  background-size: 300%;
  font: 50px Rubik, san-serif;
  font-weight: 400;
  letter-spacing: 1px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.about-img {
  width: 40%;
  height: auto;
  background: transparent;
}

.about-img img {
  width: 100%;
}

.info {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-bottom: 70px;
}

.about-text-info {
  width: 90%;
}

.top-text {
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font: 50px Rubik, san-serif;
  color: rgb(61, 61, 233);
  text-align: center;
  margin-bottom: 30px;
}

.info-text {
  width: 100%;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #fff;
  font-size: 20px;
}

.slider {
  width: 100%;
  overflow: hidden;
}

.slider-text {
  width: 100%;
  margin: 0 auto;
}

.slide-text {
  text-align: center;
  margin-bottom: 100px;
  font-family: "Roboto", sans-serif;
  background-size: 300%;
  font: 50px Rubik, san-serif;
  font-weight: 400;
  color: rgb(61, 61, 233);
}

.slider-items {
  display: flex;
  justify-content: center;
  animation: slide 15s linear infinite;
  width: calc(250px * 13);
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 6));
  }
}

.slide img {
  width: 100px;
  height: 100px;
  margin-bottom: 100px;
  margin-left: 100px;
}

@media screen and (max-width: 600px) {
  .about {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .about-text {
    width: 90%;
    margin: 0px auto;
    text-align: center;
    height: auto;
    margin-top: 200px;
  }

  .about-text .text {
    background: linear-gradient(30deg, #797979, #0024f3, #000000, #ffffff);
    font-family: "Roboto", sans-serif;
    background-size: 300%;
    font: 30px Rubik, san-serif;
    font-weight: 400;
    letter-spacing: 1px;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  .about-img {
    width: 80%;
    height: 300px;
    margin-top: 30px;
    margin-bottom: 100px;
  }

  .about-img img {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 800px) {
  .about-text .text {
    background: linear-gradient(30deg, #797979, #0024f3, #000000, #ffffff);
    font-family: "Roboto", sans-serif;
    background-size: 300%;
    font: 35px Rubik, san-serif;
    font-weight: 400;
    letter-spacing: 1px;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
}
</style>
