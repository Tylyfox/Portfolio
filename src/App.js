import React from "react";

import {About, Footer, Header, Skills, Work} from "./container";
import {Navbar} from "./components";
import { Analytics } from "@vercel/analytics/react";
import "./App.scss";
const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Footer />
            <Analytics />
        </div>
    );
}

export default App;