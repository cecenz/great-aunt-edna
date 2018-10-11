import React from 'react';
import FormField from '../../FormField/FormField';
import Errors from '../../Errors/Errors';

export default function({ errors, values, handleChange, touched }) {
    return (
        <div className="form__group form__group--radio">
            <h4 className="form__header">
                Will you be able to make the wedding?
            </h4>
            <div className="form__items">
                <FormField
                    labelcontent="Yes"
                    type="radio"
                    id="rsvp-yes"
                    value="true"
                    defaultChecked={values.rsvp === 'true'}
                    name="rsvp"
                    onChange={handleChange}
                />
                <FormField
                    labelcontent="No"
                    type="radio"
                    id="rsvp-no"
                    value="false"
                    name="rsvp"
                    defaultChecked={values.rsvp === 'false'}
                    onChange={handleChange}
                />
            </div>
            {errors && touched && <Errors errors={errors} touched={touched} />}
            {values.rsvp &&
                (values.rsvp !== 'true' ? (
                    <p>We're sorry to hear you won't be able to make it.</p>
                ) : (
                    <p>Wonderful! </p>
                ))}
        </div>
    );
}
