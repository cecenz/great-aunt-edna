import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { Form } from 'formik';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import FormField from './FormField/FormField';
import FormFieldText from './FormFieldText/FormFieldText';
import Errors from './Errors/Errors';

import Rsvp from './Questions/Rsvp/Rsvp';
import RsvpMulti from './Questions/RsvpMulti/RsvpMulti';
import Diet from './Questions/Diet/Diet';
import DietMulti from './Questions/DietMulti/DietMulti';

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
        let multi;
        if (members.length > 1) {
            multi = true;
        } else {
            multi = false;
        }
        console.log(values);
        console.log('errors', errors);

        return (
            <Section textLength superTop>
                {this.state.show && (
                    <div>
                        <h2>{`Hi ${data.displayName}`}</h2>
                        <p>
                            We hope that you will be able to celebrate this
                            wonderful day with us. Please fill in the form below
                            to let us know whether or not you will be able to
                            attend.
                        </p>
                        <h3>RSVP</h3>
                        <Form>
                            <Rsvp
                                values={values}
                                handleChange={handleChange}
                                errors={errors.rsvp}
                                touched={touched.rsvp}
                            />

                            {values.rsvp === 'true' && members && multi ? (
                                <RsvpMulti
                                    members={members}
                                    values={values}
                                    handleChange={handleChange}
                                    errors={errors.weddingMulti}
                                    touched={touched.weddingMulti}
                                />
                            ) : (
                                (values.weddingMulti = [true])
                            )}
                            {values.rsvp === 'true' &&
                                members && (
                                    <Diet
                                        members={members}
                                        values={values}
                                        handleChange={handleChange}
                                        errors={errors.diet}
                                        touched={touched.diet}
                                    />
                                )}
                            {members &&
                                members.length <= 1 &&
                                values.diet === 'true' && (
                                    <Fragment>
                                        <FormFieldText
                                            labelcontent="Diet requirement"
                                            type="text"
                                            id="dietRequirement.0"
                                            onChange={handleChange}
                                            value={values.dietRequirement[0]}
                                            name="dietRequirement.0"
                                        />
                                        {errors.dietRequirement &&
                                            touched.dietRequirement && (
                                                <Errors
                                                    errors={
                                                        errors.dietRequirement
                                                    }
                                                    touched={
                                                        touched.dietRequirement
                                                    }
                                                />
                                            )}
                                    </Fragment>
                                )}
                            {members &&
                                multi &&
                                values.diet === 'true' && (
                                    <DietMulti
                                        members={members}
                                        values={values}
                                        handleChange={handleChange}
                                        errors={errors.dietMulti}
                                        touched={touched.dietMulti}
                                    />
                                )}
                            {values.rsvp === 'true' &&
                                members &&
                                multi && (
                                    <div className="form__group">
                                        <div tabIndex="-1">
                                            <FormFieldText
                                                labelcontent="What song would be great for the dancefloor?"
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
                            <div className="form__group">
                                <h4 className="form__header">
                                    Please provide contact details if we need to
                                    get in touch.
                                </h4>
                                <div>
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
    dietMulti: PropTypes.isRequired,
    dietRequirement: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};
