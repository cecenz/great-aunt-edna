import React, { Fragment } from 'react';
import classNames from 'classnames';

import FormFieldText from '../../FormFieldText/FormFieldText';
import Errors from '../../Errors/Errors';

export default function({ members, errors, values, handleChange, touched }) {
    console.log(values);
    return (
        <Fragment>
            <h4 className="form__header">Who has dietry requirements</h4>
            <div
                className={classNames('form__group', {
                    'form__group--error': errors && touched,
                })}
            >
                {members.map((item, index) => {
                    const value = item.guestName
                        .replace(' ', '-')
                        .toLowerCase();
                    return (
                        <div key={`${value}`} className="form__input">
                            <FormFieldText
                                labelcontent={`${item.guestName}:`}
                                key={`dietRequirement.${value}`}
                                type="text"
                                id={`dietRequirement.${value}`}
                                onChange={handleChange}
                                value={values.dietRequirement[index]}
                                name={`dietRequirement.${index}`}
                                errors={errors}
                                touched={touched}
                            />
                        </div>
                    );
                })}

                {errors &&
                    touched && <Errors errors={errors} touched={touched} />}
            </div>
        </Fragment>
    );
}
