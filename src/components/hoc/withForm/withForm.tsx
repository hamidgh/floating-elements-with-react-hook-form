import './style/withForm.style.css';
import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {FieldValues, useForm, Controller} from 'react-hook-form';

export type WrappedComponentPropsType = {
  control: any,
  controller: any,
  errors: any,
  register: any
}
export type WithFormPropsType = {
  formSubmittedCallback: (data: FieldValues) => void,
  submitButtonClassName?: string,
  submitButtonLabel?: string,
  submitButtonContainerClasses?: string
}

export const withForm = (WrappedComponent: React.ElementType) => {
  return (props: WithFormPropsType) => {
    const {register, handleSubmit, formState: {errors}, control} = useForm();
    const [shouldValidate, setShouldValidate] = useState(false);
    const buttonLabel = props.submitButtonLabel ? props.submitButtonLabel : 'Submit';
    const submitButtonClassName = props.submitButtonClassName ? props.submitButtonClassName : '';
    const submitButtonContainerClasses = props.submitButtonContainerClasses ? props.submitButtonContainerClasses : '';

    const onSubmit = async (data: FieldValues) => {
      props.formSubmittedCallback(data);
    };

    return (
      <Form noValidate validated={shouldValidate} onSubmit={handleSubmit(onSubmit)}>
        <WrappedComponent register={register} errors={errors} controller={Controller} control={control} />
        <div className={`submit-button-container ${submitButtonContainerClasses}`}>
          <Button
            className={`submit-button ${submitButtonClassName}`}
            variant="primary"
            type="submit"
            onClick={() => setShouldValidate(true)}
          >
            {buttonLabel}
          </Button>
        </div>

      </Form>
    );
  };
};