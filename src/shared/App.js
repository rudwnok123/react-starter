import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import FirstPage from './FirstPage'
// import SecondPage from './SecondPage'
import { FirstPage, SecondPage } from "pages";
import NoMatch from "components/NoMatch";

import { Layout } from "antd";

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <h1>Server Side Rendering with Create React App v2</h1> */}
                <Layout>
                    <Layout.Sider>Hi</Layout.Sider>
                    <Layout>
                        <Layout.Header>header</Layout.Header>
                        <Layout.Content>
                            <Switch>
                                <Route exact path="/" component={FirstPage} />
                                <Route path="/second" component={SecondPage} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
