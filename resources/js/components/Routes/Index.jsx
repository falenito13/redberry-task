import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {routesMap} from './Router'

const Routers = () => {
    const routes = routesMap
    return (
        <Routes>
            {routes.map(({path, component, exact, layout}, key) => {
                const Layout = layout;
                const Component = component
                return (
                    <Route exact={exact} path={path} key={key} element={
                        <Layout>
                            <Component/>
                        </Layout>
                    }>
                    </Route>
                )
            })}
        </Routes>
    )
}


export default Routers