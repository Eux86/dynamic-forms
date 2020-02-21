(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(module,__webpack_exports__,__webpack_require__){"use strict";var ValidationType;__webpack_require__.d(__webpack_exports__,"a",(function(){return ValidationType})),function(ValidationType){ValidationType[ValidationType.pattern=0]="pattern",ValidationType[ValidationType.minLength=1]="minLength",ValidationType[ValidationType.maxLength=2]="maxLength",ValidationType[ValidationType.required=3]="required"}(ValidationType||(ValidationType={}))},271:function(module,exports){},273:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(17),__webpack_require__(22),__webpack_require__(50),__webpack_require__(15),__webpack_require__(29);var slicedToArray=__webpack_require__(31),objectSpread2=__webpack_require__(40),toConsumableArray=__webpack_require__(60),react=__webpack_require__(0),react_default=__webpack_require__.n(react),FieldValidator=(__webpack_require__(37),__webpack_require__(38),function(props){var configuration=props.configuration,data=props.data,children=props.children,onFieldErrors=props.onFieldErrors,validations=props.validations,formData=props.formData,validationErrors=react_default.a.useMemo((function(){var temp=[];return validations.forEach((function(validation){var result=validation(data,configuration);result&&temp.push(result)})),temp}),[configuration,data,validations]);return react_default.a.useEffect((function(){onFieldErrors&&onFieldErrors(configuration,validationErrors)}),[configuration,onFieldErrors,validationErrors]),(null==formData?void 0:formData.touched)&&(null==formData?void 0:formData.touched[configuration.id])&&children?react_default.a.createElement(react_default.a.Fragment,null,validationErrors&&validationErrors.map((function(error){return children({error:error})}))):null});FieldValidator.__docgenInfo={description:"",methods:[],displayName:"FieldValidator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/field-validator.tsx"]={name:"FieldValidator",docgenInfo:FieldValidator.__docgenInfo,path:"src/dynamic-form/field-validator.tsx"});var ValidationError=function(props){var error=props.error;return react_default.a.createElement("p",null,error)};ValidationError.displayName="ValidationError",ValidationError.__docgenInfo={description:"",methods:[],displayName:"ValidationError"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/validation-error.tsx"]={name:"ValidationError",docgenInfo:ValidationError.__docgenInfo,path:"src/dynamic-form/validation-error.tsx"});var defineProperty=__webpack_require__(71);function reducer(data,formDataAction){if(function isSetErrorsAction(action){return"set-errors"===action.type}(formDataAction)){var newVal=Object(objectSpread2.a)({},data.errors,Object(defineProperty.a)({},formDataAction.payload.fieldId,formDataAction.payload.errors));return Object(objectSpread2.a)({},data,{errors:newVal})}if(function isSetValueAction(action){return"set-values"===action.type}(formDataAction)){var _newVal=Object(objectSpread2.a)({},data.values,Object(defineProperty.a)({},formDataAction.payload.fieldId,formDataAction.payload.value));return Object(objectSpread2.a)({},data,{values:_newVal})}if(function isSetTouchedAction(action){return"set-touched"===action.type}(formDataAction)){var _newVal2=Object(objectSpread2.a)({},data.touched,Object(defineProperty.a)({},formDataAction.payload.fieldId,!0));return Object(objectSpread2.a)({},data,{touched:_newVal2})}return data}__webpack_require__(56);var dynamic_form_conditions=[function(configuration,formValues){var condition=configuration.conditions&&configuration.conditions.find((function(con){return"field-value"===con.type}));if(condition){var fieldId=condition.fieldId,value=condition.value,fieldToCheckValue=formValues&&formValues[fieldId];return null!=fieldToCheckValue&&fieldToCheckValue===value}return!0}],dynamic_form_schema=(__webpack_require__(51),__webpack_require__(19)),dynamic_form_validations=[function(value,fieldConfiguration){var _fieldConfiguration$v,validation=null===(_fieldConfiguration$v=fieldConfiguration.validations)||void 0===_fieldConfiguration$v?void 0:_fieldConfiguration$v.find((function(item){return item.type===dynamic_form_schema.a.required}));if(validation)return null==value||""===value||!1===value?validation.errorMessage||validation.type.toString():void 0},function(value,fieldConfiguration){var _fieldConfiguration$v;if(null!=value&&""!==value){var validation=null===(_fieldConfiguration$v=fieldConfiguration.validations)||void 0===_fieldConfiguration$v?void 0:_fieldConfiguration$v.find((function(item){return item.type===dynamic_form_schema.a.minLength}));if(validation){if(!validation.data)throw new Error("MinLength validation shuld have a data attribute");var minLength=+validation.data;return"".concat(value).length<minLength?validation.errorMessage||validation.type.toString():void 0}}}],GenericTextControl=function(props){var configuration=props.configuration,onChange=props.onChange,onTouched=props.onTouched;return react_default.a.createElement("input",{id:configuration.id,type:configuration.type,placeholder:configuration.placeholder,value:configuration.defaultValue,onChange:function onChangeInternal(event){onChange(event.target.value,configuration)},onBlur:function onTouchedInternal(){onTouched(configuration)}})};GenericTextControl.displayName="GenericTextControl",GenericTextControl.__docgenInfo={description:"",methods:[],displayName:"GenericTextControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/controls/generic-text.tsx"]={name:"GenericTextControl",docgenInfo:GenericTextControl.__docgenInfo,path:"src/dynamic-form/controls/generic-text.tsx"});var select_ref=react_default.a.createElement("option",{disabled:!0,value:"no-selection"},"Please select a value..."),SelectControl=function(props){var _configuration$option,configuration=props.configuration,onChange=props.onChange,onTouched=props.onTouched;return react_default.a.createElement("select",{defaultValue:configuration.defaultValue||"no-selection",onChange:function onChangeInternal(event){onChange(event.target.value,configuration)},onBlur:function onBlurInternal(){onTouched(configuration)}},select_ref,null===(_configuration$option=configuration.options)||void 0===_configuration$option?void 0:_configuration$option.items.map((function(option){return react_default.a.createElement("option",{key:option.id,value:option.value},option.label)})))};SelectControl.displayName="SelectControl",SelectControl.__docgenInfo={description:"",methods:[],displayName:"SelectControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/controls/select.tsx"]={name:"SelectControl",docgenInfo:SelectControl.__docgenInfo,path:"src/dynamic-form/controls/select.tsx"});__webpack_require__(234),__webpack_require__(170),__webpack_require__(159),__webpack_require__(615),__webpack_require__(239);var CheckboxGroup=function(props){var _configuration$option,configuration=props.configuration,onChange=props.onChange,onTouched=props.onTouched,_React$useState=react_default.a.useState([]),_React$useState2=Object(slicedToArray.a)(_React$useState,2),state=_React$useState2[0],setState=_React$useState2[1],onChangeInternal=function(event){var _event$target=event.target,checked=_event$target.checked,value=_event$target.value,newState=state.slice();if(checked)state.includes(value)||(newState=[].concat(Object(toConsumableArray.a)(state),[value]));else if(state.includes(value)){var index=newState.indexOf(value);-1<index&&newState.splice(index,1)}setState(newState),onChange(newState,configuration)},onBlurInternal=function(){onTouched(configuration)};return react_default.a.createElement(react_default.a.Fragment,null,null===(_configuration$option=configuration.options)||void 0===_configuration$option?void 0:_configuration$option.items.map((function(option){return react_default.a.createElement("label",{key:option.id,htmlFor:option.id},react_default.a.createElement("input",{type:"checkbox",name:configuration.id,value:option.value,checked:state.includes(option.value),onChange:onChangeInternal,onBlur:onBlurInternal}),option.label)})))};CheckboxGroup.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/controls/checkbox-group.tsx"]={name:"CheckboxGroup",docgenInfo:CheckboxGroup.__docgenInfo,path:"src/dynamic-form/controls/checkbox-group.tsx"});var DynamicInput=function(_ref){var configuration=_ref.configuration,onChange=_ref.onChange,onTouched=_ref.onTouched,inputMapping=_ref.inputMapping,value=_ref.value,Control=inputMapping[configuration.type];return react_default.a.createElement(Control,{value:value,configuration:configuration,onChange:onChange,onTouched:onTouched})};DynamicInput.displayName="DynamicInput",DynamicInput.__docgenInfo={description:"",methods:[],displayName:"DynamicInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/dynamic-input.tsx"]={name:"DynamicInput",docgenInfo:DynamicInput.__docgenInfo,path:"src/dynamic-form/dynamic-input.tsx"});var field_template_FieldTemplate=function(props){var field=props.field,value=props.value,inputMapping=props.inputMapping,onFieldChanged=props.onFieldChanged,onFieldTouched=props.onFieldTouched;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("label",{htmlFor:field.id},field.label,function isRequired(configuration){return configuration.validations&&configuration.validations.find((function(validation){return validation.type===dynamic_form_schema.a.required}))}(field)?"*":""),react_default.a.createElement(DynamicInput,{value:value,inputMapping:inputMapping,configuration:field,onChange:onFieldChanged,onTouched:onFieldTouched}))};field_template_FieldTemplate.__docgenInfo={description:"",methods:[],displayName:"FieldTemplate"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/field-template.tsx"]={name:"FieldTemplate",docgenInfo:field_template_FieldTemplate.__docgenInfo,path:"src/dynamic-form/field-template.tsx"});var CheckboxControl=function(props){var _configuration$defaul,configuration=props.configuration,onChange=props.onChange,onTouched=props.onTouched,value=props.value;return react_default.a.createElement("input",{id:configuration.id,type:"checkbox",placeholder:configuration.placeholder,checked:value||"true"===(null===(_configuration$defaul=configuration.defaultValue)||void 0===_configuration$defaul?void 0:_configuration$defaul.toLowerCase()),onChange:function onChangeInternal(event){onChange(event.target.checked,configuration)},onBlur:function onTouchedInternal(){onTouched(configuration)}})};CheckboxControl.displayName="CheckboxControl",CheckboxControl.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/controls/checkbox.tsx"]={name:"CheckboxControl",docgenInfo:CheckboxControl.__docgenInfo,path:"src/dynamic-form/controls/checkbox.tsx"}),__webpack_require__.d(__webpack_exports__,"a",(function(){return DynamicForm}));var defaultInputMapping={text:GenericTextControl,number:GenericTextControl,date:GenericTextControl,"datetime-local":GenericTextControl,tel:GenericTextControl,password:GenericTextControl,email:GenericTextControl,"single-selection":SelectControl,"multiple-selection":CheckboxGroup,boolean:CheckboxControl},formInitialState={},DynamicForm=function(props){var schema=props.schema,onChange=props.onChange,customConditions=props.conditions,customValidations=props.validations,customInputs=props.customInputs,customFieldTemplate=props.customFieldTemplate,conditions=react_default.a.useMemo((function(){return[].concat(Object(toConsumableArray.a)(dynamic_form_conditions),Object(toConsumableArray.a)(null!=customConditions?customConditions:[]))}),[customConditions]),validations=react_default.a.useMemo((function(){return[].concat(Object(toConsumableArray.a)(dynamic_form_validations),Object(toConsumableArray.a)(null!=customValidations?customValidations:[]))}),[customValidations]),inputMapping=react_default.a.useMemo((function(){return Object(objectSpread2.a)({},defaultInputMapping,{},null!=customInputs?customInputs:{})}),[customInputs]),FieldTemplate=react_default.a.useMemo((function(){return null!=customFieldTemplate?customFieldTemplate:field_template_FieldTemplate}),[customFieldTemplate]),_React$useReducer=react_default.a.useReducer(reducer,formInitialState),_React$useReducer2=Object(slicedToArray.a)(_React$useReducer,2),formData=_React$useReducer2[0],dispatch=_React$useReducer2[1],onFieldChanged=react_default.a.useCallback((function(value,configuration){dispatch({type:"set-values",payload:{value:value,fieldId:configuration.id}})}),[]),onFieldErrors=react_default.a.useCallback((function(configuratin,errors){dispatch({type:"set-errors",payload:{errors:errors,fieldId:configuratin.id}})}),[]),onFieldTouched=react_default.a.useCallback((function(configuratin){dispatch({type:"set-touched",payload:{fieldId:configuratin.id}})}),[]);return react_default.a.useEffect((function(){onChange&&onChange(formData.values,formData.errors)}),[formData,onChange]),react_default.a.createElement(react_default.a.Fragment,null,schema&&schema.fields&&schema.fields.map((function(field){return conditions&&conditions.map((function(condition){return condition(field,formData.values)&&react_default.a.createElement("div",{key:field.id},react_default.a.createElement(FieldTemplate,{field:field,value:(null==formData?void 0:formData.values)&&(null==formData?void 0:formData.values[field.id]),inputMapping:inputMapping,onFieldChanged:onFieldChanged,onFieldTouched:onFieldTouched}),react_default.a.createElement(FieldValidator,{formData:formData,configuration:field,data:(null==formData?void 0:formData.values)&&(null==formData?void 0:formData.values[field.id]),onFieldErrors:onFieldErrors,validations:validations},ValidationError))}))})))};DynamicForm.__docgenInfo={description:"",methods:[],displayName:"DynamicForm"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/index.tsx"]={name:"DynamicForm",docgenInfo:DynamicForm.__docgenInfo,path:"src/dynamic-form/index.tsx"})},274:function(module,exports,__webpack_require__){__webpack_require__(275),__webpack_require__(421),module.exports=__webpack_require__(422)},30:function(module,__webpack_exports__,__webpack_require__){"use strict";var _dynamic_form__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(273),_dynamic_form_models_dynamic_form_schema__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19);__webpack_require__.d(__webpack_exports__,"ValidationType",(function(){return _dynamic_form_models_dynamic_form_schema__WEBPACK_IMPORTED_MODULE_1__.a}));__webpack_require__(271);__webpack_exports__.default=_dynamic_form__WEBPACK_IMPORTED_MODULE_0__.a},339:function(module,exports){},422:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(272);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(614)],module)}.call(this,__webpack_require__(423)(module))},614:function(module,exports,__webpack_require__){var map={"./stories/playground.stories.tsx":618,"./stories/simple-form.stories.tsx":617};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=614},616:function(module,exports,__webpack_require__){},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleForm",(function(){return SimpleForm}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_dynamic_form_models_dynamic_form_schema__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19),demoSchema={fields:[{id:"username",type:"text",label:"Username",validations:[{type:_dynamic_form_models_dynamic_form_schema__WEBPACK_IMPORTED_MODULE_2__.a.required,errorMessage:"This field is required"}]},{id:"password",type:"password",label:"Password",validations:[{type:_dynamic_form_models_dynamic_form_schema__WEBPACK_IMPORTED_MODULE_2__.a.required,errorMessage:"This field is required"}]},{id:"termsAndConditions",type:"boolean",label:"Accept terms and conditions",validations:[{type:_dynamic_form_models_dynamic_form_schema__WEBPACK_IMPORTED_MODULE_2__.a.required,errorMessage:"This field is required"}]}]};__webpack_exports__.default={title:"DynamicForm",component:___WEBPACK_IMPORTED_MODULE_1__.default};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.default,{schema:demoSchema}),SimpleForm=function(){return _ref};SimpleForm.displayName="SimpleForm",SimpleForm.__docgenInfo={description:"",methods:[],displayName:"SimpleForm"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/simple-form.stories.tsx"]={name:"SimpleForm",docgenInfo:SimpleForm.__docgenInfo,path:"src/stories/simple-form.stories.tsx"})},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=__webpack_require__(30),slicedToArray=__webpack_require__(31),demoSchema=(__webpack_require__(616),{fields:[{id:"name",label:"First Name",type:"text",validations:[{type:src.ValidationType.minLength,data:"5",errorMessage:"The string should have at least 5 characters"}]},{id:"lastname",label:"Last Name",type:"text",validations:[{type:src.ValidationType.required,errorMessage:"The field is required"}]},{id:"phone",label:"Telephone",type:"tel"},{id:"age",label:"age",type:"number"},{id:"title",label:"Title",type:"single-selection",options:{items:[{id:"mr",label:"Mr.",value:"mr"},{id:"mrsmss",label:"Mrs./Mss.",value:"mrsmss"},{id:"other",label:"Other",value:"other"}]}},{id:"othertitle",label:"Custom Title",type:"text",conditions:[{fieldId:"title",type:"field-value",value:"other"}]},{id:"pets",label:"Owned Pets",type:"multiple-selection",options:{items:[{id:"cat",label:"Cat",value:"cat"},{id:"dog",label:"Dog",value:"dog"},{id:"ferret",label:"Ferret",value:"ferret"}]}},{id:"ilikethis",label:"I like DynamicForms",type:"boolean",validations:[{type:src.ValidationType.required,errorMessage:"You must like this project :o"}]}]}),Playground=function(){var _React$useState=react_default.a.useState(JSON.stringify(demoSchema,null,2)),_React$useState2=Object(slicedToArray.a)(_React$useState,2),schemaString=_React$useState2[0],setSchemaString=_React$useState2[1],_React$useState3=react_default.a.useState(),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),schema=_React$useState4[0],setSchema=_React$useState4[1],_React$useState5=react_default.a.useState(),_React$useState6=Object(slicedToArray.a)(_React$useState5,2),formData=_React$useState6[0],setFormData=_React$useState6[1],_React$useState7=react_default.a.useState(),_React$useState8=Object(slicedToArray.a)(_React$useState7,2),formErrors=_React$useState8[0],setFormErrors=_React$useState8[1],_React$useState9=react_default.a.useState(!1),_React$useState10=Object(slicedToArray.a)(_React$useState9,2),sourceHasError=_React$useState10[0],setSourceHasError=_React$useState10[1];return react_default.a.useEffect((function(){try{setSchema(JSON.parse(schemaString)),setSourceHasError(!1)}catch(_){setSourceHasError(!0)}}),[schemaString]),react_default.a.createElement("div",{className:"wrapper"},react_default.a.createElement("div",{className:"first-container"},react_default.a.createElement("div",{className:"schema-container col"},react_default.a.createElement("textarea",{className:sourceHasError?"error":"",value:schemaString,onChange:function onChange(event){return setSchemaString(event.target.value)}})),react_default.a.createElement("div",{className:"schema-source col"},react_default.a.createElement(src.default,{schema:schema,onChange:function onChange(data,errors){setFormData(data),setFormErrors(errors)}}))),react_default.a.createElement("div",{className:"second-container"},react_default.a.createElement("div",{className:"data-container col"},react_default.a.createElement("textarea",{className:sourceHasError?"error":"",value:JSON.stringify(formData,null,2)})),react_default.a.createElement("div",{className:"errors-container col"},react_default.a.createElement("textarea",{className:sourceHasError?"error":"",value:JSON.stringify(formErrors,null,2)}))))};Playground.displayName="Playground",Playground.__docgenInfo={description:"",methods:[],displayName:"Playground"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/playground.tsx"]={name:"Playground",docgenInfo:Playground.__docgenInfo,path:"src/stories/playground.tsx"}),__webpack_require__.d(__webpack_exports__,"PlaygroundArea",(function(){return PlaygroundArea}));__webpack_exports__.default={title:"DynamicForm",component:src.default};var _ref=react_default.a.createElement(Playground,null),PlaygroundArea=function(){return _ref};PlaygroundArea.displayName="PlaygroundArea",PlaygroundArea.__docgenInfo={description:"",methods:[],displayName:"PlaygroundArea"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/playground.stories.tsx"]={name:"PlaygroundArea",docgenInfo:PlaygroundArea.__docgenInfo,path:"src/stories/playground.stories.tsx"})}},[[274,1,2]]]);
//# sourceMappingURL=main.eff08464c019c4d29e52.bundle.js.map