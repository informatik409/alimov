import { createRouter, createWebHashHistory } from 'vue-router';
import AboutPage from "./components/app/routers/AboutPage.vue"
import HomePage from "./components/app/routers/HomePage.vue"
import WeatherPage from "./components/app/routers/WeatherPage.vue"
import ProjectPage from "./components/app/routers/ProjectPage.vue"
import ContactPage from "./components/app/routers/ContactPage.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage }, 
        { path: '/weather', component: WeatherPage },
        { path: '/projects', component: ProjectPage },
        { path: '/contact', component: ContactPage }
    ]
})