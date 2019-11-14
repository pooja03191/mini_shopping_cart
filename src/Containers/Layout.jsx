import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Components/common/Header'
import Footer from '../Components/common/Footer'
import Products from '../Components/Products'
import Product from '../Components/Product'
import UserProfile from '../Components/UserProfile'
import Users from '../Components/Users'
import CreateNewUser from '../Components/CreateNewUser'
import CreateNewProduct from '../Components/CreateNewProduct'


class Layout extends Component {
    render() {
        return (
            <div style={{
                height: '100%'
            }}>
                <Header />
                <div style={{height: '80%', top: '0', bottom: '0'}}>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            component={Products}
                        />
                        <Route
                            path='/products'
                            exact
                            component={Products}
                        />
                        <Route
                            path='/products/:id'
                            exact
                            component={Product}
                        />
                        <Route
                            path='/users'
                            exact
                            component={Users}
                        />
                        <Route
                            path='/users/:id'
                            exact
                            component={UserProfile}
                        />
                        <Route
                            path='/createNewUser'
                            exact
                            component={CreateNewUser}
                        />
                        <Route
                            path='/createNewProduct'
                            exact
                            component={CreateNewProduct}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout