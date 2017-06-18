import React, {Component} from 'react';
import { Route, Switch, Link } from "react-router-dom";

import Home from "../Home/Home";
import Button from "../design/Button/Button";
import ScrollAppearEffect from "../design/ScrollAppearEffect/ScrollAppearEffect";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                        style={{
                            borderRight: "1px solid #eceeef"
                        }}>
                        <div>
                            <h1
                                style={{
                                    textAlign: "center",
                                    padding: "10px 0"
                                }}
                            >Funny Design</h1>
                        </div>

                        <ul className="nav flex-column">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/design/button">Button</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/design/scroll-appear">Scroll Appear Effect</Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9" style={{
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        height: "100vh",
                        overflow: "auto"
                    }}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/design/button" component={Button} />
                            <Route path="/design/scroll-appear" component={ScrollAppearEffect} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
