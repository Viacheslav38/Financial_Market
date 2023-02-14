import React from 'react';
import PropTypes from "prop-types";

export const ListElement = ({title, imageUrl, onClick, id}) => {
    const handleClick = () => onClick(id);
    return (
        <div className="card mb-5 mx-4 mt-4" style={{minWidth: '22rem', maxWidth: '25rem'}} onClick={handleClick}>
            <img className="card-img-top" src={imageUrl} alt="image" />
            <div className="card-body">
                <h6 className="card-title font-weight-bold text-center">{title}</h6>
            </div>
        </div>
    )
}

ListElement.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}
