import React, { Component } from "react";
import Input from "../components/Input";
import Output from "../components/Output";


class App extends Component {
    constructor() {
        super()
        this.state = {};
    }

    render() {
        return (
            <div className="georgia f6 white min-vh-100 w-100">
                <div>
                    <Input />
                    <Output />
                </div>
            </div>
        );
    }
}

export default App;