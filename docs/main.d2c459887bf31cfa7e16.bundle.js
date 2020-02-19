(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{270:function(module,exports,__webpack_require__){__webpack_require__(271),__webpack_require__(417),module.exports=__webpack_require__(418)},335:function(module,exports){},418:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(268);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(610)],module)}.call(this,__webpack_require__(419)(module))},610:function(module,exports,__webpack_require__){var map={"./stories/dynamic-form.stories.tsx":612};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=610},612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var ValidationType,slicedToArray=__webpack_require__(56),react=__webpack_require__(1),react_default=__webpack_require__.n(react);__webpack_require__(52),__webpack_require__(21),__webpack_require__(46),__webpack_require__(15),__webpack_require__(28);!function(ValidationType){ValidationType[ValidationType.pattern=0]="pattern",ValidationType[ValidationType.minLength=1]="minLength",ValidationType[ValidationType.maxLength=2]="maxLength",ValidationType[ValidationType.required=3]="required"}(ValidationType||(ValidationType={}));var GenericTextControl=function(props){var configuration=props.configuration,onChange=props.onChange,onTouched=props.onTouched;return react_default.a.createElement("input",{id:configuration.id,type:configuration.type,placeholder:configuration.placeholder,value:configuration.defaultValue,onChange:function onChangeInternal(event){onChange(event.target.value,configuration)},onBlur:function onTouchedInternal(){onTouched(configuration)}})};GenericTextControl.displayName="GenericTextControl",GenericTextControl.__docgenInfo={description:"",methods:[],displayName:"GenericTextControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/controls/generic-text.tsx"]={name:"GenericTextControl",docgenInfo:GenericTextControl.__docgenInfo,path:"src/dynamic-form/controls/generic-text.tsx"});var select_ref=react_default.a.createElement("option",{disabled:!0,value:"no-selection"},"Please select a value..."),SelectControl=function(props){var _configuration$option,configuration=props.configuration,onChange=props.onChange,onTouched=props.onTouched;return react_default.a.createElement("select",{defaultValue:configuration.defaultValue||"no-selection",onChange:function onChangeInternal(event){onChange(event.target.value,configuration)},onBlur:function onBlurInternal(){onTouched(configuration)}},select_ref,null===(_configuration$option=configuration.options)||void 0===_configuration$option?void 0:_configuration$option.items.map((function(option){return react_default.a.createElement("option",{key:option.id,value:option.value},option.label)})))};SelectControl.displayName="SelectControl",SelectControl.__docgenInfo={description:"",methods:[],displayName:"SelectControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/controls/select.tsx"]={name:"SelectControl",docgenInfo:SelectControl.__docgenInfo,path:"src/dynamic-form/controls/select.tsx"});__webpack_require__(18),__webpack_require__(231),__webpack_require__(167),__webpack_require__(156),__webpack_require__(611),__webpack_require__(236);var toConsumableArray=__webpack_require__(269),CheckboxGroup=function(props){var _configuration$option,configuration=props.configuration,onChange=props.onChange,onTouched=props.onTouched,_React$useState=react_default.a.useState([]),_React$useState2=Object(slicedToArray.a)(_React$useState,2),state=_React$useState2[0],setState=_React$useState2[1],onChangeInternal=function(event){var _event$target=event.target,checked=_event$target.checked,value=_event$target.value,newState=state.slice();if(checked)state.includes(value)||(newState=[].concat(Object(toConsumableArray.a)(state),[value]));else if(state.includes(value)){var index=newState.indexOf(value);-1<index&&newState.splice(index,1)}setState(newState),onChange(newState,configuration)},onBlurInternal=function(){onTouched(configuration)};return react_default.a.createElement(react_default.a.Fragment,null,null===(_configuration$option=configuration.options)||void 0===_configuration$option?void 0:_configuration$option.items.map((function(option){return react_default.a.createElement("label",{key:option.id,htmlFor:option.id},react_default.a.createElement("input",{type:"checkbox",name:configuration.id,value:option.value,checked:state.includes(option.value),onChange:onChangeInternal,onBlur:onBlurInternal}),option.label)})))};CheckboxGroup.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/controls/checkbox-group.tsx"]={name:"CheckboxGroup",docgenInfo:CheckboxGroup.__docgenInfo,path:"src/dynamic-form/controls/checkbox-group.tsx"});var DynamicInput=function(_ref){var _configuration$option,configuration=_ref.configuration,onChange=_ref.onChange,onTouched=_ref.onTouched;switch(configuration.type){case"text":case"number":case"date":case"datetime-local":case"tel":case"password":case"email":return react_default.a.createElement(GenericTextControl,{configuration:configuration,onChange:onChange,onTouched:onTouched});case"options":switch(null===(_configuration$option=configuration.options)||void 0===_configuration$option?void 0:_configuration$option.type){case"multiple-selection":return react_default.a.createElement(CheckboxGroup,{configuration:configuration,onChange:onChange,onTouched:onTouched});default:return react_default.a.createElement(SelectControl,{configuration:configuration,onChange:onChange,onTouched:onTouched})}default:return react_default.a.createElement(GenericTextControl,{configuration:configuration,onChange:onChange,onTouched:onTouched})}};DynamicInput.__docgenInfo={description:"",methods:[],displayName:"DynamicInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/dynamic-input.tsx"]={name:"DynamicInput",docgenInfo:DynamicInput.__docgenInfo,path:"src/dynamic-form/dynamic-input.tsx"});__webpack_require__(34),__webpack_require__(35),__webpack_require__(47);var validations=[function(value,fieldConfiguration){var _fieldConfiguration$v,validation=null===(_fieldConfiguration$v=fieldConfiguration.validations)||void 0===_fieldConfiguration$v?void 0:_fieldConfiguration$v.find((function(item){return item.type===ValidationType.required}));if(validation)return null==value||""===value?validation.errorMessage||validation.type.toString():void 0},function(value,fieldConfiguration){var _fieldConfiguration$v;if(null!=value&&""!==value){var validation=null===(_fieldConfiguration$v=fieldConfiguration.validations)||void 0===_fieldConfiguration$v?void 0:_fieldConfiguration$v.find((function(item){return item.type===ValidationType.minLength}));if(validation){if(!validation.data)throw new Error("MinLength validation shuld have a data attribute");var minLength=+validation.data;return"".concat(value).length<minLength?validation.errorMessage||validation.type.toString():void 0}}}],FieldValidator=function(props){var configuration=props.configuration,data=props.data,children=props.children,onFieldErrors=props.onFieldErrors,validationErrors=react_default.a.useMemo((function(){var temp=[];return validations.forEach((function(validation){var result=validation(data,configuration);result&&temp.push(result)})),temp}),[configuration,data]);return react_default.a.useEffect((function(){onFieldErrors&&onFieldErrors(configuration,validationErrors)}),[configuration,onFieldErrors,validationErrors]),children?react_default.a.createElement(react_default.a.Fragment,null,validationErrors&&validationErrors.map((function(error){return children({error:error})}))):null};FieldValidator.__docgenInfo={description:"",methods:[],displayName:"FieldValidator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/field-validator.tsx"]={name:"FieldValidator",docgenInfo:FieldValidator.__docgenInfo,path:"src/dynamic-form/field-validator.tsx"});var ValidationError=function(props){var error=props.error;return react_default.a.createElement("p",null,error)};ValidationError.displayName="ValidationError",ValidationError.__docgenInfo={description:"",methods:[],displayName:"ValidationError"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/validation-error.tsx"]={name:"ValidationError",docgenInfo:ValidationError.__docgenInfo,path:"src/dynamic-form/validation-error.tsx"});var defineProperty=__webpack_require__(68),objectSpread2=__webpack_require__(57);function reducer(data,formDataAction){if(function isSetErrorsAction(action){return"set-errors"===action.type}(formDataAction)){var newVal=Object(objectSpread2.a)({},data.errors,Object(defineProperty.a)({},formDataAction.payload.fieldId,formDataAction.payload.errors));return Object(objectSpread2.a)({},data,{errors:newVal})}if(function isSetValueAction(action){return"set-values"===action.type}(formDataAction)){var _newVal=Object(objectSpread2.a)({},data.values,Object(defineProperty.a)({},formDataAction.payload.fieldId,formDataAction.payload.value));return Object(objectSpread2.a)({},data,{values:_newVal})}if(function isSetTouchedAction(action){return"set-touched"===action.type}(formDataAction)){var _newVal2=Object(objectSpread2.a)({},data.touched,Object(defineProperty.a)({},formDataAction.payload.fieldId,!0));return Object(objectSpread2.a)({},data,{touched:_newVal2})}return data}var conditions=[function(configuration,formValues){var condition=configuration.conditions&&configuration.conditions.find((function(con){return"field-value"===con.type}));if(condition){var fieldId=condition.fieldId,value=condition.value,fieldToCheckValue=formValues&&formValues[fieldId];return null!=fieldToCheckValue&&fieldToCheckValue===value}return!0}],formInitialState={},DynamicForm=function(props){var schema=props.schema,onChange=props.onChange,_React$useReducer=react_default.a.useReducer(reducer,formInitialState),_React$useReducer2=Object(slicedToArray.a)(_React$useReducer,2),formData=_React$useReducer2[0],dispatch=_React$useReducer2[1],onFieldChanged=react_default.a.useCallback((function(value,configuration){dispatch({type:"set-values",payload:{value:value,fieldId:configuration.id}})}),[]),onFieldErrors=react_default.a.useCallback((function(configuratin,errors){dispatch({type:"set-errors",payload:{errors:errors,fieldId:configuratin.id}})}),[]),onFieldTouched=react_default.a.useCallback((function(configuratin){dispatch({type:"set-touched",payload:{fieldId:configuratin.id}})}),[]);react_default.a.useEffect((function(){onChange&&onChange(formData.values,formData.errors)}),[formData,onChange]);return react_default.a.createElement(react_default.a.Fragment,null,schema.fields.map((function(field){var _ref=react_default.a.createElement(DynamicInput,{configuration:field,onChange:onFieldChanged,onTouched:onFieldTouched});return conditions.map((function(condition){return condition(field,formData.values)&&react_default.a.createElement("div",{key:field.id},react_default.a.createElement("label",{htmlFor:field.id},field.label,(configuration=field).validations&&configuration.validations.find((function(validation){return validation.type===ValidationType.required}))?"*":""),_ref,(null==formData?void 0:formData.touched)&&(null==formData?void 0:formData.touched[field.id])&&react_default.a.createElement(FieldValidator,{configuration:field,data:(null==formData?void 0:formData.values)&&(null==formData?void 0:formData.values[field.id]),onFieldErrors:onFieldErrors},ValidationError));var configuration}))})))};DynamicForm.__docgenInfo={description:"",methods:[],displayName:"DynamicForm"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dynamic-form/index.tsx"]={name:"DynamicForm",docgenInfo:DynamicForm.__docgenInfo,path:"src/dynamic-form/index.tsx"}),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_exports__.default={title:"DynamicForm",component:DynamicForm};var demoSchema={fields:[{id:"name",label:"First Name",type:"text",validations:[{type:ValidationType.minLength,data:"5",errorMessage:"The string should have at least 5 characters"}]},{id:"lastname",label:"Last Name",type:"text",validations:[{type:ValidationType.required,errorMessage:"The field is required"}],conditions:[{type:"field-value",fieldId:"name",value:"Eugenio"}]},{id:"phone",label:"Telephone",type:"tel"},{id:"age",label:"age",type:"number"},{id:"title",label:"Title",type:"options",options:{type:"single-selection",items:[{id:"mr",label:"Mr.",value:"mr"},{id:"mrsmss",label:"Mrs./Mss.",value:"mrsmss"}]}},{id:"pets",label:"Owned Pets",type:"options",options:{type:"multiple-selection",items:[{id:"cat",label:"Cat",value:"cat"},{id:"dog",label:"Dog",value:"dog"},{id:"ferret",label:"Ferret",value:"ferret"}]}}]},Default=function(){var _React$useState=react_default.a.useState({}),_React$useState2=Object(slicedToArray.a)(_React$useState,2),data=_React$useState2[0],setData=_React$useState2[1],_React$useState3=react_default.a.useState({}),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),errors=_React$useState4[0],setErrors=_React$useState4[1],onChange=react_default.a.useCallback((function(newData,validationErrors){setData(newData),setErrors(validationErrors)}),[]);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(DynamicForm,{schema:demoSchema,onChange:onChange}),react_default.a.createElement("textarea",{style:{width:"250px",height:"200px"},value:JSON.stringify(data,null,2)}),react_default.a.createElement("textarea",{style:{width:"250px",height:"200px"},value:JSON.stringify(errors,null,2)}))};Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/dynamic-form.stories.tsx"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/stories/dynamic-form.stories.tsx"})}},[[270,1,2]]]);
//# sourceMappingURL=main.d2c459887bf31cfa7e16.bundle.js.map