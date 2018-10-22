import React from 'react';
import Section from '../Section/Section';
import CallToActionBlock from '../CallToActionBlock/CallToActionBlock';

export default function({ data, name }) {
    const weddingGuests = [...data.members].reduce((members, item) => {
        if (item.rsvp) {
            members.push(item);
        }
        return members;
    }, []);

    const dietRequirements = [...data.members].reduce((members, item) => {
        if (item.dietRequirement !== '') {
            members.push(item);
        }
        return members;
    }, []);

    return (
        <Section textLength superTop>
            <h3>Your rsvp has been sucessful.</h3>
            <p>Here is the information you provided:</p>
            <CallToActionBlock>
                <div className="cta__section">
                    <h4 className="cta__heading">Attending</h4>
                    {data.members.length <= 1 ? (
                        weddingGuests.length >= 1 ? (
                            <p>You will be attending our wedding. Wohoo!</p>
                        ) : (
                            <p>You are unable to attending our wedding</p>
                        )
                    ) : weddingGuests.length >= 1 ? (
                        <ul>
                            {weddingGuests.map((item, key) => (
                                <li key={key}>{item.guestName}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Sadly, no one is able to attend the wedding</p>
                    )}
                </div>
                <div className="cta__section">
                    <h4 className="cta__heading">Diet Requirements</h4>

                    {data.members.length <= 1 ? (
                        dietRequirements.length >= 1 ? (
                            <p>{data.members[0].dietRequirement}</p>
                        ) : (
                            <p>You have no dietary requirements</p>
                        )
                    ) : dietRequirements.length >= 1 ? (
                        dietRequirements.map((item, key) => (
                            <span key={key}>
                                <strong>{item.guestName}:</strong>{' '}
                                {item.dietRequirement}
                                <br />
                            </span>
                        ))
                    ) : (
                        <p>No one has dietary requirements</p>
                    )}
                </div>
                <div className="cta__section">
                    <h4 className="cta__heading">Email</h4>
                    <span>{data.contactDetails.email}</span>
                </div>
                {data.contactDetails.phone && (
                    <div className="cta__section">
                        <h4 className="cta__heading">Phone</h4>
                        <p>{data.contactDetails.phone}</p>
                    </div>
                )}
                <div>
                    <h4 className="cta__heading">Song suggestion</h4>
                    {data.songRequest ? (
                        <span>{data.songRequest}</span>
                    ) : (
                        <span>No song suggested</span>
                    )}
                </div>
            </CallToActionBlock>

            <p>
                If any of these details are no longer correct, please{' '}
                <a
                    href={`mailto:claire.campbellnz@gmail.com?subject=RSVP%20update%20${name}`}
                >
                    get in touch
                </a>{' '}
                and let us know.
            </p>
        </Section>
    );
}
