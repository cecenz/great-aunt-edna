import React from 'react';
import { NavLink } from 'react-router-dom';
import Section from '../Section/Section';
import Image from '../Image/Image';

import './header.css';

export default function({ loaded, isShowLogo }) {
    return (
        <Section noTop noBottom>
            <div className="header">
                {isShowLogo && (
                    <NavLink exact to="/">
                        <Image
                            className="image header__logo"
                            src="/assets/images/logo.png"
                            alt="Claire and Matt text"
                        />
                    </NavLink>
                )}
                <ul className="navigation">
                    <li className="navigation__item">
                        <NavLink
                            onClick={loaded}
                            to="/schedule"
                            className="navigation__link"
                            activeClassName="navigation__link--active"
                            href="#"
                        >
                            The wedding
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink
                            onClick={loaded}
                            to="/location"
                            className="navigation__link"
                            activeClassName="navigation__link--active"
                            href="#"
                        >
                            Getting there
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink
                            onClick={loaded}
                            to="/details"
                            className="navigation__link"
                            activeClassName="navigation__link--active"
                            href="#"
                        >
                            Other Info
                        </NavLink>
                    </li>
                    <li className="navigation__item navigation__item--button">
                        <NavLink
                            onClick={loaded}
                            to="/rsvp"
                            className="navigation__link"
                            activeClassName="navigation__link--active-button"
                            href="#"
                        >
                            RSVP
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Section>
    );
}
