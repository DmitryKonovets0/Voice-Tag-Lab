import {Component} from "react";

import Promo from "./components/promo/promo";
import How from "./components/how/how";
import './App.scss';

class App extends Component{
    render() {
        return(
            <>
                <Promo/>
                <How/>
            </>

        )
    }
}

export default App;
