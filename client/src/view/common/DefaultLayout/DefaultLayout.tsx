import {Component} from "react";
import {Navbar} from "../Navbar/Navbar";
import {MainContent} from "../MainContent/MainContent";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <MainContent/>
            </>
        );
    }
}