import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
    //Section 1
    <section className="header-section slider-one">
        <section className="header-info flex-container flex-column txt-center pop-font txt-white">
            <span>Welcome</span>
            <h1 className="txt-white">try something amazing</h1>
            <p className="txt-white">
                Ordering your fave Pizza is quick and easy with our app or on
                our website.
            </p>
            <div className="header-btns flex-container flex-row">
                <Link className=" passive-button-style  " to="/menu">
                    View Menu
                </Link>
            </div>
        </section>
    </section>,
    //Section 2
    <section className="header-section slider-two">
        <section className="header-info flex-container flex-column txt-center pop-font txt-white">
            <span>Delicious</span>
            <h1 className="txt-white">Pizza & Pasta</h1>
            <p className="txt-white">
                We are be using simple, fresh ingredients and transforming them
                into sophisticated and elegant meals.
            </p>
            <div className="header-btns flex-container flex-row">
                <Link className="passive-button-style" to="/menu">
                    View Menu
                </Link>
            </div>
        </section>
    </section>,
];

export default class Hero extends React.Component {
    render() {
        return (
            <AliceCarousel
                items={items}
                autoPlay
                infinite
                autoPlayInterval="3000"
                autoPlayStrategy="none"
                disableButtonsControls
            />
        );
    }
}
