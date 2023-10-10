import Benefits from "../components/Benefits";
import Different from "../components/Different";
import Hero from "../components/Hero";
import Marq from "../components/Marq";
import Overview from "../components/Overview";
import ScrollingCounter from "../components/ScrollingCounter";
import Testimonial from "../components/Testimonial";
import '../styles/Page.css';

export default function Healthcare() {
    return (
        <div className="Page">
            <div style={{paddingBottom:"71px"}}>
                <Hero/>
            </div>
            <div className="components">
                <Marq />
            </div>
            <div className="components">
                <ScrollingCounter />
            </div>
            <div className="components">
                <Overview />
            </div>
            <div className="components">
                <Benefits />
            </div>
            <div className="components">
                <Different />
            </div>
            <div className="components">
                <Testimonial />
            </div>
        </div>
    );
}