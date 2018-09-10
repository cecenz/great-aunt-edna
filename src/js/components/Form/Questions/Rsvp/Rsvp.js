import React, { Fragment } from 'react';
import FormField from '../../FormField/FormField';
import Errors from '../../Errors/Errors';

export default function({ errors, values, handleChange, touched }) {
    return (
        <Fragment>
            <h4 className="form__header">
                Will you be able to make the wedding?
            </h4>
            <div className="form__group form__group--radio">
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
                {errors &&
                    touched && <Errors errors={errors} touched={touched} />}
            </div>
        </Fragment>
    );
}
