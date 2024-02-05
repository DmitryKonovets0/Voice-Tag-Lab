import {Component} from "react";

import Promo from "./components/promo/promo";
import How from "./components/how/how";
import About from "./components/about/about";
import Pricing from "./components/pricing/pricing";
import Reviews from "./components/reviews/reviews";
import Samples from "./components/samples/samples";

import './App.scss';

class App extends Component{
    render() {
        return(
            <>
                <Promo/>
                <How/>
                <About/>
                <Samples/>
                <Pricing/>
                <Reviews/>
            </>

        )
    }
}

export default App;
