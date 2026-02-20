import React from "react";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

const Landing = () => {
    const data = [
        { t: "Card Title", d: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse.", img: "https://placehold.co/500x325" },
        { t: "Card Title", d: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni.", img: "https://placehold.co/500x325" },
        { t: "Card Title", d: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse.", img: "https://placehold.co/500x325" },
        { t: "Card Title", d: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni.", img: "https://placehold.co/500x325" }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container px-lg-5 mt-5 pt-5">
                <Jumbotron />
                <div className="row">
                    {data.map((item, index) => (
                        <Card key={index} title={item.t} description={item.d} imageUrl={item.img} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Landing;
