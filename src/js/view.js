import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
    const cardData = [
        { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", image: "https://placehold.co/500x325" },
        { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", image: "https://placehold.co/500x325" },
        { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", image: "https://placehold.co/500x325" },
        { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", image: "https://placehold.co/500x325" }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container px-lg-5 mt-5 pt-3">
                <Jumbotron />
                <div className="row gx-lg-5">
                    {cardData.map((item, index) => (
                        <Card key={index} title={item.title} text={item.text} image={item.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
