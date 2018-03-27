import React from 'react';

export default function() {
    return(
        <div className="header">
            <div className="header__content">
                <h1 className="header__title">Jack &amp; Jill</h1>
                <p className="header__intro">
                    <span className="header__intro-item">April 6. 2019</span>
                    <span className="header__intro-item">Wellington, New Zealand</span>
                </p>
            </div>
            <div className="header__image">
                <img className="image" src="/assets/images/flower-banner.jpg" alt="flower banner" height="900"/>
            </div>
        </div>     
    )
}