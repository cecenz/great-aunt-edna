import { withFormik } from 'formik';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import FormContainer from './Form';
import { history } from '../../utils/var';

export default withFormik({
    mapPropsToValues: ({ data }) => ({
        rsvp: undefined,
        weddingMulti: [],
        diet: undefined,
        dietRequirement: data.members.map(item => item.dietRequirement),
        email: data.contactDetails.email,
        phone: data.contactDetails.phone,
        songRequest: data.songRequest,
    }),

    validationSchema: Yup.object().shape({
        rsvp: Yup.string()
            .nullable()
            .required('Required'),
        weddingMulti: Yup.array().when('rsvp', {
            is: 'true',
            then: Yup.array()
                .compact()
                .required('Please select the guests that are coming'),
            // otherwise: Yup.array().min(1),
        }),
        diet: Yup.string().when('rsvp', {
            is: 'true',
            then: Yup.string()
                .nullable()
                .required('Required'),
        }),
        dietRequirement: Yup.string().when('diet', {
            is: 'true',
            then: Yup.string().required('Please enter a diet requirement'),
        }),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
    }),

    handleSubmit: (values, { props, setStatus }) => {
        const result = {
            submitted: true,
            displayName: props.data.displayName,
            members: [
                ...props.data.members.map((item, index) => ({
                    ...item,
                    rsvp: values.weddingMulti[index],
                    dietRequirement: values.dietRequirement[index],
                })),
            ],
            contactDetails: {
                email: values.email,
                phone: values.phone,
            },
            songRequest: values.songRequest,
        };
        if (props.data.members.length <= 1) {
            result.members = props.data.members.map((item, index) => ({
                ...item,
                rsvp: values.rsvp === 'false' ? false : values.rsvp,
                dietRequirement: values.dietRequirement[index],
            }));
        }
        axios
            .patch(
                `https://claire-and-matt.firebaseio.com/guests/${
                    props.name
                }.json`,
                result,
            )
            .then(() => {
                setStatus('success');
                history.replace(`/rsvp/${props.name}/summary`);
                props.submitSuccess(result);
            });
    },
})(FormContainer);

FormContainer.propTypes = {
    rsvp: PropTypes.string,
    weddingMulti: PropTypes.array,
    diet: PropTypes.string,
    dietMulti: PropTypes.array,
    dietRequirement: PropTypes.array,
    email: PropTypes.string,
    phone: PropTypes.number,
    songRequest: PropTypes.string,
};
