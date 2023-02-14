import React from 'react';
import PropTypes from "prop-types";

export const SingleArticle = ({data}) => {
    return (
        <div className="overlay">
            <div className="row justify-content-center py-5">
                <div className="col-md-8">
                    <h3 className="text-white font-weight-bold ml-5 mr-5 text-center">{data.title}</h3>
                    <img className="acticle-img mb-3" src={data.imageUrl} alt="image" />
                    <p className="font-weight-bold small">{data.description}</p>
                    <div className="py-3 pl-4 pr-2 bg-light ">
                        <h6 className="font-weight-bold mb-3">Experts Comment</h6>
                        <p className="small font-weight-bold">{data.expertComment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

SingleArticle.propTypes = {
    data: PropTypes.object.isRequired,
}