import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/About/About";
import {Home} from "../../pages/Home/Home";
import {Contact} from "../../pages/Contact/Contact";

export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}