import './style/floatingMultipleSelectField.style.css';
import React from 'react';
import {Form} from 'react-bootstrap';
import Select, {components} from 'react-select';

const {Placeholder, ValueContainer} = components;

export type MultipleSelectFieldProps = {
  control: any,
  controller: any,
  customReactSelectProps?: {},
  defaultValue?: SelectOptionType[]
  formControlProps?: {},
  formGroupClasses?:string,
  isMulti?: boolean,
  selectLabel: string,
  selectName: string,
  selectOptions: SelectOptionType[],
  validationErrorMessage?: string,
  validationMessageClasses?: string,
  value?: any
}
export type SelectOptionType = {
  label: string,
  value: string
}
export const FloatingMultipleSelectField = (props: MultipleSelectFieldProps) => {
  const Controller = props.controller;
  const CustomSelectValueContainer = ({children, ...props}: any) => {
    return (
      <ValueContainer {...props}>
        <Placeholder {...props} isFocused={props.isFocused}>
          {props.selectProps.placeholder}
        </Placeholder>
        {React.Children.map(children, child =>
          child && child.type !== Placeholder ? child : null
        )}
      </ValueContainer>
    );
  };

  return (
    <Form.Group className={`multiple-select-field ${props.formGroupClasses}`}>
      <Controller
        control={props.control}
        defaultValue={props.defaultValue}
        name={props.selectName}
        render={({field: {name, onChange, value, ref}, formState}: any) => (
          <>
            <Select
              {...props.customReactSelectProps}
              components={{ValueContainer: CustomSelectValueContainer}}
              isMulti={props.isMulti}
              name={name}
              options={props.selectOptions}
              onChange={(e: any) => e.value ? onChange(e.value) : onChange(e.map((c: any) => c.value))}
              placeholder={props.selectLabel}
              ref={ref}
              styles={{
                container: (provided, state) => ({
                  ...provided,
                  marginTop: 10
                }),
                control: (baseStyle, state) => ({
                  ...baseStyle,
                  borderColor: formState?.errors?.[name] ? '#dc3545' : baseStyle.borderColor,
                  boxShadow: formState?.errors?.[name] ? '#dc3545' : baseStyle.boxShadow,
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  position: 'absolute',
                  marginTop: -10,
                  top: '0%',
                  transition: 'top 0.1s, font-size 0.1s',
                  fontSize: (state.hasValue || state.selectProps.inputValue) && 13
                }),
                valueContainer: (provided, state) => ({
                  ...provided,
                  overflow: 'visible',
                  marginTop: 10,
                  height: 50
                })
              }}
              value={props.selectOptions.find(c => c.value === value)}
            />
            <Form.Control.Feedback
              type="invalid"
              className={`${props.validationMessageClasses} ${formState?.errors && 'show-error'}`}>
              {props.validationErrorMessage}
            </Form.Control.Feedback>
          </>
        )}
      />
    </Form.Group>
  );
};