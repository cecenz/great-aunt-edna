import React from 'react';

import FormField from '../../FormField/FormField';
import Errors from '../../Errors/Errors';

export default function({ members, errors, values, handleChange, touched }) {
    return (
        <div className="form__group form__group--radio">
            <h4 className="form__header">
                {members && members.length === 1 ? 'Do you ' : 'Does anyone '}
                have any dietary requirements?
            </h4>
            <div className="form__items">
                <FormField
                    labelcontent="Yes"
                    type="radio"
                    id="diet-yes"
                    value="true"
                    name="diet"
                    defaultChecked={values.diet === 'true'}
                    onChange={handleChange}
                />
                <FormField
                    labelcontent="No"
                    type="radio"
                    id="diet-no"
                    value="false"
                    name="diet"
                    defaultChecked={values.diet === 'false'}
                    onChange={handleChange}
                />
            </div>
            {errors && touched && <Errors errors={errors} touched={touched} />}
        </div>
    );
}
