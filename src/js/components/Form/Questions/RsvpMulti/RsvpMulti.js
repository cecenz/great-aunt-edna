import React, { Fragment } from 'react';
import classNames from 'classnames';

import FormField from '../../FormField/FormField';
import Errors from '../../Errors/Errors';

export default function({ members, errors, values, handleChange, touched }) {
    return (
        <Fragment>
            <h4 className="form__header">Who will be able to make it?</h4>
            <div
                className={classNames('form__group form__group--checkbox', {
                    'form__group--error': errors && touched,
                })}
            >
                {members.map((item, index) => {
                    const value = item.guestName
                        .replace(' ', '-')
                        .toLowerCase();
                    return (
                        <FormField
                            id={`weddingMulti.${value}`}
                            key={`${value}`}
                            labelcontent={item.guestName}
                            type="checkbox"
                            value={value}
                            name={`weddingMulti.${index}`}
                            defaultChecked={values.weddingMulti[index]}
                            onChange={handleChange}
                        />
                    );
                })}

                {errors &&
                    touched && <Errors errors={errors} touched={touched} />}
            </div>
        </Fragment>
    );
}
