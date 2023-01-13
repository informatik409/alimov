<template>
  <div
    class="weather"
    :class="
      typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''
    "
  >
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Search..."
        v-model="query"
        @keypress="fetchWeather"
      />
    </div>
    <div class="weather-items" v-if="typeof weather.main != 'undefined'">
      <div class="location-box">
        <div class="location">
          {{ weather.name }}, {{ weather.sys.country }}
        </div>
      </div>
      <div class="date-box">
        <div class="date">{{ dateBuilder() }}</div>
      </div>
      <div class="weather-widget">
        <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
        <div class="weather-condition">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      api_key: "0575947ed8dba058b5129b63c90acc1a",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.weather {
  background-image: url("@/assets/img/weather.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.weather.warm {
  background-image: url("@/assets/img/warm.jpg");
}
.search-box {
  width: 35%;
  border-radius: 20px;
}
.search-box .search-bar {
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  appearance: none;
  font-size: 15px;
  background: none;
  color: #313131;
  border-radius: 10px;
  text-align: center;
  background-color: beige;
}
.weather-items {
  width: 35%;
}
.location-box {
  width: 100%;
  text-align: center;
}
.location-box .location {
  color: white;
  font-size: 40px;
}
.date-box {
  width: 100%;
  text-align: center;
}
.date {
  color: rgb(219, 216, 216);
  font-size: 20px;
}
.weather-widget {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  background-color: rgba(212, 212, 212, 0.616);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  height: 150px;
}
.weather-widget .temp {
  @import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@800;900&display=swap");
  color: white;
  font-size: 70px;
  font-family: "Unbounded", cursive;
  text-shadow: 1px 1px 7px white;
}
.weather-widget .weather-condition {
  color: rgba(255, 255, 255, 0.712);
  font-size: 30px;
  padding-bottom: 10px;
}
@media screen and (max-width: 650px) {
  .weather {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .weather-items {
    width: 90%;
    margin: 0 auto;
  }
  .location-box {
    width: 100%;
    text-align: center;
  }
  .location-box .location {
    color: white;
    font-size: 30px;
  }
  .date-box {
    width: 100%;
  }
  .date-box .date {
    font-size: 20px;
  }
  .weather-widget {
    width: 50%;
    height: auto;
  }
  .weather-widget .temp {
    @import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@800;900&display=swap");
    color: white;
    font-size: 40px;
    font-family: "Unbounded", cursive;
    text-shadow: 1px 1px 7px white;
  }
}
</style>
