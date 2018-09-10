import React from 'react';
import Section from '../Section/Section';
import CallToActionBlock from '../CallToActionBlock/CallToActionBlock';

export default function({ data, name }) {
    const weddingGuests = data.members.reduce((members, item) => {
        if (item.rsvp) {
            members.push(item);
        }
        return members;
    }, []);
    console.log(data);
    return (
        <Section textLength superTop>
            <h3>{`Hi ${data.displayName}, your rsvp has been sucessful. `}</h3>

            <p>Here is the information you provided:</p>
            <CallToActionBlock>
                {data.members.length <= 1 ? (
                    weddingGuests.length === 1 ? (
                        <p>You will be attending our wedding. Wohoo!</p>
                    ) : (
                        <p>You are unable to attending our wedding</p>
                    )
                ) : weddingGuests.length > 1 ? (
                    <div>
                        {weddingGuests.map(item => <p>{item.guestName}</p>)}
                        <p>Will be attending the wedding. Wohoo!</p>
                    </div>
                ) : (
                    <p>No one is able to attend the wedding</p>
                )}
                {data.members.diet && <p>diet is true</p>}
                {/* {data.members.length <= 1 ? (
                    weddingGuests.length === 1 ? (
                        <p>You will be attending our wedding. Wohoo!</p>
                    ) : (
                        <p>You are unable to attending our wedding</p>
                    )
                ) : weddingGuests.length > 1 ? (
                    <div>
                        {weddingGuests.map(item => <p>{item.guestName}</p>)}
                        <p>Will be attending the wedding. Wohoo!</p>
                    </div>
                ) : (
                    <p>No one is able to attend the wedding</p>
                )} */}
                <p>
                    <strong>
                        Email: <br />
                    </strong>
                    {data.contactDetails.email}
                </p>
                {data.contactDetails.phone && (
                    <p>
                        <strong>
                            Phone: <br />
                        </strong>
                        {data.contactDetails.phone}
                    </p>
                )}
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
