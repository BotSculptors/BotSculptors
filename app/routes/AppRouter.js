import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'


import { ConnectedRouter } from 'react-router-redux'

import Home from '../components/Pages/HomePage/Home'

import Portfolio from '../components/Pages/Portfolio/portfolio'
import PortfolioItem from '../components/Pages/Portfolio/portfolioItem'
import Team from '../components/Pages/Team'
import About from '../components/Pages/About'
import Join from "../components/Pages/Join/Join.js"


import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();



export class AppRouter extends React.Component{

    constructor(props){
        super(props);
    }



    render(){

        return (
            <Provider store={this.props.store}>

                <ConnectedRouter history={history}>
                    <div id="main">
                        <Header />

                        <main>

                            <div className="mainIn">
                                <Switch>
                                    <Route exact path='/' render={() => <Home />} />
                                    <Route exact path='/team' render={() => <Team />} />
                                    <Route exact path='/about' render={() => <About />} />
                                    <Route exact path='/projects/:projectID' render={(props) => <PortfolioItem  match={props.match}/>} />
                                    <Route exact path='/join' render={() => <Join />} />

                                    <Redirect to="/" />
                                </Switch>
                            </div>


                        </main>


                        <Footer />

                    </div>
                </ConnectedRouter>

            </Provider>
        )

    }
}

const mapStateToProps = (state, ownProps) => {



    return Object.assign({}, ownProps);



};

export default connect(mapStateToProps)(AppRouter);
