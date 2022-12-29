import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";


const aFewOfMyFavoriteThings = [`Bob's Burgers`, `The Office`, `sculpting`, `mixed media art`, `Harry Potter`, `cats (the animals, not the musical)`, `Downton Abbey`, `Mad Men`, `The Wheel of Time books`, `Game of Thrones`, `the Lightbringer series`, `The Giver`, `Poldark`, `The Great British Baking Show`, `dogs`, `food`, `Mistborn`, `Warbreaker`];

let updatedArray = [];


class App extends Component {

   

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="resume" element={<Resume />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
