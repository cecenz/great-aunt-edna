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

    console.log('dietRequirements', dietRequirements);
    return (
        <Section textLength superTop>
            <h3>Your rsvp has been sucessful.</h3>

            <p>Here is the information you provided:</p>
            <CallToActionBlock>
                {data.members.length <= 1 ? (
                    weddingGuests.length === 1 ? (
                        <p>You will be attending our wedding. Wohoo!</p>
                    ) : (
                        <p>You are unable to attending our wedding</p>
                    )
                ) : weddingGuests.length > 1 ? (
                    <div className="cta__section">
                        <h4 className="cta__heading">Attending</h4>
                        <ul>
                            {weddingGuests.map((item, key) => (
                                <li key={key}>{item.guestName}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Sadly, no one is able to attend the wedding</p>
                )}

                {data.members.length <= 1
                    ? dietRequirements.length === 1 && (
                          <p>
                              You have the following diet requirement:{' '}
                              <strong>{data.members.dietRequirement}</strong>
                          </p>
                      )
                    : dietRequirements.length > 1 && (
                          <div className="cta__section">
                              <h4>Diet Requirements</h4>
                              {dietRequirements.map((item, key) => (
                                  <span key={key}>
                                      <strong>{item.guestName}:</strong>{' '}
                                      {item.dietRequirement}
                                      <br />
                                  </span>
                              ))}
                          </div>
                      )}
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
                {data.songRequest && (
                    <div>
                        <h4 className="cta__heading">Song suggestion</h4>
                        <span>{data.songRequest}</span>
                    </div>
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
