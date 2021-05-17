import React, { useState } from 'react';
import styles from './commentform.scss';
import { Button } from "../Button";
import { Formik, Form, Field } from 'formik';

export function CommentFormNew() {
    const [value, setValue] = useState('');
    function validateValue(value: string) {
        let error;
        if (!value || value.length <= 3) {
            error = 'Должно быть больше 3 символов';
        }
        return error;
    }

    return (
        <div>
            <Formik
                initialValues={{ value: '' }}
                onSubmit={(values) => {
                        setValue(values.value);
                        alert('Комментарий отправлен');
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className={styles.form}>
                        <Field className={styles.input} component="textarea" name="value" validate={validateValue} />
                        {errors.value && touched.value && <div className={styles.error}>{errors.value}</div>}
                        <Button className={styles.btnSubmit} type='submit' isIcon={false} text={'Комментировать'} disabled={isSubmitting}/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}