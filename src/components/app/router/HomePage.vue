<template>
  <div class="home">
      <div class="home-text" v-motion-roll-left>
          <div class="text">Hi, my name is Mahsud and I am a <br> Web Developer!</div>
      </div>
      <div class="home-img" v-motion-roll-right>
          <img src="@/assets/img/homepage.png" alt="home">
      </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #18161f;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.home-text {
  width: 40%;
}

.home-text .text {
  background: linear-gradient(30deg, #797979, #0024f3, #000000, #ffffff);
  font-family: 'Roboto', sans-serif;
  background-size: 300%;
  font: 50px Rubik, san-serif;
  font-weight: 400;
  letter-spacing: 1px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.home-img {
  width: 40%;
  height: auto;
}

.home-img img {
  width: 100%;
}

@media screen and (max-width: 600px) {
  .home {
      display: flex;
      justify-content: center;
      flex-direction: column;
  }

  .home-text {
      width: 90%;
      margin: 0px auto;
      text-align: center;
      height: auto;
      margin-top: 200px;
  }

  .home-text .text {
      background: linear-gradient(30deg, #797979, #0024f3, #000000, #ffffff);
      font-family: 'Roboto', sans-serif;
      background-size: 300%;
      font: 30px Rubik, san-serif;
      font-weight: 400;
      letter-spacing: 1px;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
  }

  .home-img {
      width: 80%;
      height: 300px;
      margin-top: 30px;
      margin-bottom: 100px;
  }

  .home-img img {
      width: 100%;
      height: 100%;
  }
}

@media screen and (max-width: 800px) {
  .home-text .text {
      background: linear-gradient(30deg, #797979, #0024f3, #000000, #ffffff);
      font-family: 'Roboto', sans-serif;
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