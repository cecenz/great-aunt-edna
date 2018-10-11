import React, { Fragment } from 'react';

import FormField from '../../FormField/FormField';
import FormFieldText from '../../FormFieldText/FormFieldText';
import Errors from '../../Errors/Errors';
import DietMulti from '../DietMulti/DietMulti';

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
                                        errors={errors.dietRequirement}
                                        touched={touched.dietRequirement}
                                    />
                                )}
                        </Fragment>
                    )}
                {members &&
                    members.length > 1 &&
                    values.diet === 'true' && (
                        <DietMulti
                            members={members}
                            values={values}
                            handleChange={handleChange}
                            errors={errors.dietMulti}
                            touched={touched.dietMulti}
                        />
                    )}
            </div>
            {errors.diet &&
                touched.diet && (
                    <Errors errors={errors.diet} touched={touched.diet} />
                )}
        </div>
    );
}
