import React from 'react';
import { NavLink } from 'react-router-dom';
import Section from '../Section/Section';
import Image from '../Image/Image';

import './header.css';

export default function({ loaded, isShowLogo }) {
    const activeClassName = 'navigation__link--active';
    const linkClassName = 'navigation__link';
    const navClassName = 'navigation__item';
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
                    <li className={navClassName}>
                        <NavLink
                            onClick={loaded}
                            to="/schedule"
                            className={linkClassName}
                            activeClassName={activeClassName}
                            href="#"
                        >
                            The wedding
                        </NavLink>
                    </li>
                    <li className={navClassName}>
                        <NavLink
                            onClick={loaded}
                            to="/location"
                            className={linkClassName}
                            activeClassName={activeClassName}
                            href="#"
                        >
                            Getting there
                        </NavLink>
                    </li>
                    <li className={navClassName}>
                        <NavLink
                            onClick={loaded}
                            to="/details"
                            className={linkClassName}
                            activeClassName={activeClassName}
                            href="#"
                        >
                            Other Info
                        </NavLink>
                    </li>
                    <li className={`${navClassName} ${navClassName}--button`}>
                        <NavLink
                            onClick={loaded}
                            to="/rsvp"
                            className={linkClassName}
                            activeClassName={`${activeClassName}-button`}
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
