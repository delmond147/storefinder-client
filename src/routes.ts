import About from './pages/about/About'
import Category from './pages/category/Category'
import Contact from './pages/contact/Contact'
import Stores from './pages/store/Stores'
import Team from './pages/team/Team'


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
        path: 'stores',
        name: 'Stores',
        component: Stores,
    },

    {
        path: 'team',
        name: 'Team',
        component: Team,
    },

]

export default routes; 