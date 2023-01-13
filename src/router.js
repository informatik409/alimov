import { createRouter, createWebHashHistory } from 'vue-router';
import AboutPage from "@/components/app/router/AboutPage.vue"
import HomePage from "@/components/app/router/HomePage.vue"
import WeatherPage from "@/components/app/router/WeatherPage.vue"
import ProjectPage from "@/components/app/router/ProjectPage.vue"
import ContactPage from "@/components/app/router/ContactPage.vue"

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