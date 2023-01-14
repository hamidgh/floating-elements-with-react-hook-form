import React from 'react';
import {FloatingLabel, Form} from 'react-bootstrap';

export type FloatingSelectFieldProps = {
  customSelectProps?: {},
  floatingLabelClasses?: string,
  formControlProps?: {},
  formGroupClasses?: string,
  label: string,
  optionClasses?: string,
  required?: boolean,
  selectClasses?: string,
  selectOptions: Array<string | number>,
  validationErrorMessage?: string,
  validationMessageClasses?: string,
  value?: string
}

export const FloatingSelectField = (props: FloatingSelectFieldProps) => {
  return (
    <Form.Group className={`floating-select-field ${props.formGroupClasses}`}>
      <FloatingLabel controlId="floatingSelect" label={props.label}>
        <Form.Select required={props.required} {...props.formControlProps} {...props.customSelectProps} value={props.value} defaultValue="Select">
          <option value="" >Select</option>
          {props.selectOptions.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </Form.Select>
        <Form.Control.Feedback className={props.validationMessageClasses} type="invalid">{props.validationErrorMessage}</Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
};