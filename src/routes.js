import Home from '../components/Home.vue'
import AboutUs from '../components/AboutUs.vue'
import Rooms from '../components/Rooms.vue'
import ContactUs from '../components/ContactUs.vue'
import Card from '../components/Card.vue'
export default [
    {path:'/', component: Home},
    {path:'/aboutUs', component: AboutUs},
    {path:'/rooms', component:Rooms},
    {path:'/contactUs', component: ContactUs},
    {path:'/card', component: Card}
]