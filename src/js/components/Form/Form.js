import React, { Component } from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import FormFieldText from './FormFieldText/FormFieldText';
import Errors from './Errors/Errors';

import Rsvp from './Questions/Rsvp/Rsvp';
import RsvpMulti from './Questions/RsvpMulti/RsvpMulti';
import Diet from './Questions/Diet/Diet';

import './form.css';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status !== this.props.status) {
            this.toggleForm();
        }
    }

    toggleForm() {
        this.setState({ show: !this.state.show });
    }

    render() {
        const { values, handleChange, errors, touched, data } = this.props;
        const { members } = data;
        return (
            <Section textLength superTop>
                {this.state.show && (
                    <div>
                        <h2>{`Hi ${data.displayName}`}</h2>
                        <p>
                            We hope that you'll be able to join in celebrating
                            our special day with us. Please fill in the form
                            below to let us know whether or not you will be able
                            to attend.
                        </p>
                        <h3>RSVP</h3>
                        <Form>
                            <Rsvp
                                values={values}
                                handleChange={handleChange}
                                errors={errors.rsvp}
                                touched={touched.rsvp}
                            />
                            {values.rsvp === 'true'
                                ? members &&
                                  (members.length > 1 ? (
                                      <RsvpMulti
                                          members={members}
                                          values={values}
                                          handleChange={handleChange}
                                          errors={errors.weddingMulti}
                                          touched={touched.weddingMulti}
                                      />
                                  ) : (
                                      (values.weddingMulti = [true])
                                  ))
                                : members.map((item, index) => {
                                      values.weddingMulti[index] = false;
                                  })}
                            {values.rsvp === 'true' &&
                                members && (
                                    <Diet
                                        members={members}
                                        values={values}
                                        handleChange={handleChange}
                                        errors={errors}
                                        touched={touched}
                                    />
                                )}

                            {values.rsvp === 'true' &&
                                members && (
                                    <div className="form__group">
                                        <div tabIndex="-1">
                                            <h4>
                                                What song would be great for the
                                                dancefloor?
                                            </h4>
                                            <FormFieldText
                                                type="text"
                                                id="songRequest"
                                                onChange={handleChange}
                                                value={values.songRequest}
                                                name="songRequest"
                                                errors={errors.songRequest}
                                            />
                                            {errors.songRequest &&
                                                touched.songRequest && (
                                                    <Errors
                                                        errors={
                                                            errors.songRequest
                                                        }
                                                        touched={
                                                            touched.songRequest
                                                        }
                                                    />
                                                )}
                                        </div>
                                    </div>
                                )}
                            {values.rsvp && (
                                <div className="form__group">
                                    <h4 className="form__header">
                                        Please provide contact details if we
                                        need to get in touch.
                                    </h4>
                                    <div className="form__group form__group--s">
                                        <FormFieldText
                                            labelcontent="Email"
                                            type="email"
                                            id="email"
                                            onChange={handleChange}
                                            value={values.email}
                                            name="email"
                                            errors={errors.email}
                                        />
                                        {errors.email &&
                                            touched.email && (
                                                <Errors
                                                    errors={errors.email}
                                                    touched={touched.email}
                                                />
                                            )}
                                    </div>
                                    <div>
                                        <FormFieldText
                                            labelcontent="Phone"
                                            type="phone"
                                            id="phone"
                                            onChange={handleChange}
                                            value={values.phone}
                                            name="phone"
                                            errors={errors.phone}
                                        />
                                        {errors.phone &&
                                            touched.phone && (
                                                <Errors
                                                    errors={errors.phone}
                                                    touched={touched.phone}
                                                />
                                            )}
                                    </div>
                                </div>
                            )}
                            <p>
                                If you need to make any changes once you have
                                submitted, please get in touch.
                            </p>
                            <button className="form__button" type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                )}
            </Section>
        );
    }
}

export default FormContainer;

FormContainer.propTpes = {
    rsvp: PropTypes.string,
    weddingMulti: PropTypes.array.isRequired,
    diet: PropTypes.string,
    dietRequirement: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};
