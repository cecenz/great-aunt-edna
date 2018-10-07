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

    const dietRequirements = data.members.reduce((members, item) => {
        if (item.diet) {
            members.push(item.dietRequirements);
        }
        return members;
    }, []);
    console.log(data);
    console.log(weddingGuests);
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
                            {weddingGuests.map(item => (
                                <li>{item.guestName}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No one is able to attend the wedding</p>
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
                              <p>
                                  We have the following people down with diet
                                  requirments:
                              </p>
                              <ul>
                                  {dietRequirements.map(item => (
                                      <li>
                                          {item.guestName}:{' '}
                                          {item.dietRequirement}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      )}

                <div className="cta__section">
                    <h4 className="cta__heading">Email</h4>
                    <span>{data.contactDetails.email}</span>
                </div>
                {data.contactDetails.phone && (
                    <div>
                        <h4 className="cta__heading">Phone</h4>
                        <p>{data.contactDetails.phone}</p>
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
