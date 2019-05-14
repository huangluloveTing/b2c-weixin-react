import React from 'react'
import routesMap from './routeMap'
import { BrowserRouter as Router , Route , Switch , withRouter} from 'react-router-dom'
import CacheRoute ,{ CacheSwitch  } from 'react-router-cache-route'
import NotFound from '../NotFound'
import { CSSTransition , TransitionGroup} from 'react-transition-group'
import './route.scss'

let cacheRoutes = []
let normalRoutes = []

routesMap.forEach((item , index ) => {
    if(item.meta && item.meta.cache) {
        cacheRoutes.push(
            <CacheRoute path={item.path} exact key={index+''} component={item.component} />
        )
    } else {
        normalRoutes.push(
            <Route path={item.path} exact key={index+''} component={item.component} />
        )
    }
})

const TRANSITION_ACTION = {
    PUSH:'from-right',
    POP :'from-left'
}

const Routes = withRouter(({history , location}) => {
    return(
        <TransitionGroup 
            childFactory={(child) => {
                return React.cloneElement(child , {classNames : TRANSITION_ACTION[history.action]})
            }}
            >
            <CSSTransition 
                key={location.pathname}
                timeout={500}>
                <CacheSwitch location={location}>
                    { normalRoutes }
                    { cacheRoutes }
                    <Route path='*' component={NotFound} />
                </CacheSwitch>
            </CSSTransition>
        </TransitionGroup>
    ) 
})

export default () => {
    return (
        <Router>
            <Routes />
        </Router>
    )
}