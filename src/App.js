import {Component} from "react";

import Promo from "./components/promo/promo";
import './App.scss';

class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Promo/>
        )
    }
}

export default App;
