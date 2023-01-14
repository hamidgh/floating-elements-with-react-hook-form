import React from 'react';
import {FloatingLabel, Form} from 'react-bootstrap';

export type FloatingInputFieldProps = {
  customInputProps?: {},
  floatingLabelClasses?: string,
  formControlClasses?: string,
  formControlProps?: {},
  formGroupClasses?: string,
  label: string,
  placeholder?: string,
  required?: boolean,
  step?: string,
  type?: string,
  validationErrorMessage?: string,
  validationMessageClasses?: string,
  value?: string
}
export const FloatingInputField = (props: FloatingInputFieldProps) => {
  const floatingLabelClasses = props.floatingLabelClasses ? props.floatingLabelClasses : '';
  const formControlClasses = props.formControlClasses ? props.formControlClasses : '';
  const formGroupClasses = props.formGroupClasses ? props.formGroupClasses : '';
  const placeholder = props.placeholder ? props.placeholder : props.label;
  const type = props.type ? props.type : 'text';
  const validationMessageClasses = props.validationMessageClasses ? props.validationMessageClasses : '';

  return (
    <Form.Group className={`floating-input-field ${formGroupClasses}`}>
      <FloatingLabel className={floatingLabelClasses} label={props.label}>
        <Form.Control
          {...props.customInputProps}
          {...props.formControlProps}
          className={formControlClasses}
          placeholder={placeholder}
          required={props.required}
          step={props.step}
          type={type}
          value={props.value}
        />
        <Form.Control.Feedback type="invalid" className={validationMessageClasses}>
          {props.validationErrorMessage}
        </Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
};