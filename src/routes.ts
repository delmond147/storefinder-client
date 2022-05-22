import About from './pages/about/About'
import Category from './pages/category/Category'
import Contact from './pages/contact/Contact'
import Property from './pages/property/Property'
import Team from './pages/team/Team'
import Testimonials from './pages/testimonial/Testimonials'


const routes = [
    {
        path: 'about',
        name: 'About',
        component: About ,
    },

    {
        path: 'category',
        name: 'Category',
        component: Category,
    },

    {
        path: 'contact',
        name: 'Contact',
        component: Contact,
    },

    {
        path: 'property',
        name: 'Property',
        component: Property,
    },

    {
        path: 'team',
        name: 'Team',
        component: Team,
    },

    {
        path: 'testimonial',
        name: 'Testimonial',
        component: Testimonials
    },
]

export default routes; 