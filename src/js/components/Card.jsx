import React from "react";

const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 border-1 text-center">
                <img className="card-img-top" src={props.imageUrl} alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer bg-light border-top-1 py-3">
                    <a className="btn btn-primary" href="#">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
