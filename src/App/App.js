import React, {Component} from 'react';
import { Route, Switch, Link } from "react-router-dom";

import Home from "../Home/Home";
import Button from "../design/Button/Button";

class App extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/design/button">Button</Link></li>
                        </ul>
                    </nav>

                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/design/button" component={Button} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
