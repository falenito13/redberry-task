import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {routesMap} from './Router'

const Routers = () => {
    const routes = routesMap
    return (
        <Routes>
            <Route path='/:lang'>
            {routes.map(({path, component, exact, layout,middleware}, key
            ) => {
                const Layout = layout;
                const Middleware = middleware ? middleware : React.Fragment
                const Component = component
                return (
                    <Route exact={exact} path={path} key={key} element={
                        <Middleware>
                        <Layout>
                            <Component/>
                        </Layout>
                        </Middleware>
                    }>
                    </Route>
                )
            })}
            </Route>
        </Routes>
    )
}


export default Routers
