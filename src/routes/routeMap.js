import TerminalIndex from '../terminal/index'
import asyncComponent from '../asyncComponent/AsyncCoponent'
let Person = asyncComponent(() => import('../person'))
let Home = asyncComponent(() => import('../home'))
// import Person from '../person'
// import Home from '../home'

export default [
    {
        path:'/',
        name:'terminal',
        component:TerminalIndex,
        meta: {
            cache:true
        },
        exact:true
    },
    {
        path:'/terminal',
        name:'terminal',
        component:TerminalIndex,
        meta: {
            cache:true
        },
        exact:true
    },
    {
        path:'/person',
        name:'person',
        component: Person,
        meta: {
            cache:true
        },
    },
    {
        path:'/home' , 
        name: 'home',
        component:Home,
        meta: {
            cache:true
        },
    }
]