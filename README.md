## Why using this package
Form control is always a challenge for developers, it looks easy to handle but in large scale projects it can get complicated with lots of 
duplicated code. `react-hook-form` provides an easy way to bind form elements but if you want to use `react-select` it requires some custom code. 
Especially since `react-select` doesn't provide an easy way for handling form errors. \
\
Our package combines 3 libraries and makes it easy to add form elements to the view by just providing their props and leave all form bindings 
and error handling to our package. It uses `reac-bootstrap` to give a nice starting format, but you are free to have your own format by providing
classnames and apply your own styles. Visit us on [GitHub](https://github.com/hamidgh/floating-fields-with-react-hook-form)


## Installation
Run the following command, and it will install the package for you: 
    `npm install floating-fields-with-react-hook-form`

## How to use
1. Export your component with the HOC (withForm) that is provided by the package, 
   1. sample: `export default withForm(YourForm);`
2. Wherever you add your form component, make sure you use the submit button callback function
   1. sample: `<YourForm formSubmittedCallback={_handleSubmitForm} />`
3. Then import any form field you need for your form to the render section of your component
   1. sample: `<FloatingInputField />`
4. Pass appropriate props to the form field you added in step 2
   1. sample: `<FloatingInputField {...props} />`

## Demo, Sample code and Tutorial

- A sample repo that uses all fields can be found here on [GitHub](https://github.com/hamidgh/example-floating-inputs)
- You can see **Demo** here on [CodeSandbox](https://67uqf9.csb.app/)
- Tutorial about how you can use it can be found [here](https://youtu.be/ZM4s3uyFWOs)
- Some code of that repo are as follows:

The component that you want to add your form, we call it `ParentComponent` here:

```javascript

const ParentComponent = () => {
  const _handleSubmitForm = (data) => {
    console.log(data);
  }
  return (
    <YourForm formSubmittedCallback={_handleSubmitForm} />
  )
}

export default ParentComponent;
```

Your actual form component could be something like bellow, we called here YourForm Component

```javascript

import {withForm, FloatingInputField} from 'floating-fields-with-react-hook-form/dist';

function YourForm(props: any) {
  const {register, errors} = props;
  const requiredInputMessage: string = 'Input value';

  return (
    <div>
      <FloatingInputField
        required
        label="First name"
        formControlProps={register('firstName', {
          required: requiredInputMessage, maxLength: 80
        })}
        validationErrorMessage={errors['firstName']?.message}
      />
    </div>
  );
}

export default withForm(YourForm);
```


### Dependencies
We are using 4 packages behind the scene. These are peerDependencies and will be installed automatically in node module.
    `react-select`, `react-hook-form`, `react-bootstrap`, `bootstrap`


### Troubleshoot
1. Can't find a packages
   1. If after installation you see an error about not finding a package like `react-select` or `bootstrap` or other dependant packages, you can either delete your `node_module` folder and do `npm i` or install the dependencies to your app.
2. If bootstrap doesn't load properly, make sure you import the styling part in your app `import 'bootstrap/dist/css/bootstrap.min.css';`
3. If `npm` doesn't download the peerDependencies, make sure you use the latest version of npm, version 7 or above
   1. run this command to see the existing version `npm --version` if it's less than version 7, use next step to update
   2. update your npm with this command in your terminal `curl https://www.npmjs.com/install.sh | sh` and then check the version again

### Issues
If you find any issue, or you have any suggestion to enhance this package please provide them here 
on [GitHub](https://github.com/hamidgh/floating-fields-with-react-hook-form/issues)




to publish, change the version and run `npm run build` and then run `npm publish`