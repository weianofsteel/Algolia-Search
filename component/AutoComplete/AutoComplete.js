// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import MaterialAutocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
// import {themeFn} from './styles';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import {terminatePrevFetch} from '../Table/termial';
// import {withStyles} from '@material-ui/core';
// import PropTypes from 'prop-types';

// const shrink = true;

// class AutoCompleteAsync extends React.Component
// {
//     constructor(props) {
//         super(props);

//         this.state = {
//             loading: false,
//             options: [],
//             inputFocus: false
//         }

//         this.inputChange =  this.inputChange.bind(this);
//     }

//     componentDidMount() {
//         const {
//             id,
//             fetchAllFn,
//             fetchFn,
//             labelColumn,
//             value
//         } = this.props;

//         terminatePrevFetch("autoComplete-" + id);

//         this.setState({
//             loading: true
//         })

//         if (!value||(value &&value.id === "") || (value &&value.id === undefined)) {
//             fetchAllFn({[labelColumn]: value.id}, "autoComplete-" + id).
//                 then(function(data) {
//                     this.setState({
//                         loading: false,
//                         options: data["hydra:member"].map(value => {
//                             return {
//                                 'label': value[labelColumn],
//                                 'id': value["@id"],
//                             }
//                         })
//                     })
//                 }.bind(this))
//             ;

//             return;
//         }

//         fetchFn(value.id, "autoComplete-" + id).
//             then(function(data) {
//                 this.setState({
//                     loading: false,
//                     options: data.map(value => {
//                         return {
//                             'label': value[labelColumn],
//                             'id': value["@id"],
//                         }
//                     })
//                 });

//             })
//         ;
//     }

//     inputChange(e, inputValue, type) {
//         const {
//             id,
//             name,
//             fetchAllFn,
//             labelColumn,
//             onChange
//         } = this.props;


//         var hasOption = false;

//         this.setState({
//             loading: true
//         })

//         fetchAllFn({[labelColumn]: inputValue}, "autoComplete-" + id).then(function(data) {
//             const {noOptionsFn, onChange} = this.props;
//             const options = data["hydra:member"].map(function(value) {
//                 const {onChange} = this.props;

//                 const option = {
//                     'label': value[labelColumn],
//                     'id': value["@id"],
//                 }

//                 if (inputValue === value[labelColumn]) {
//                     hasOption = true;
//                     onChange(name, option);
//                 }

//                 return option;
//             }.bind(this))

//             if (noOptionsFn && !hasOption && !this.state.inputFocus && inputValue) {
//                 noOptionsFn(inputValue);
//                 onChange(name, {'id':'','label':''});
//             }

//             this.setState({
//                 loading: false,
//                 options: options
//             });
//         }.bind(this));

//         return () => {};
//     }

//     render() {
//         const {
//             id,
//             label,
//             name,
//             value,
//             onChange,
//             require = false,
//             helperText = "",
//             readOnly,
//             noOptionsFn,
//             classes,
//             autoHighlight
//         } = this.props;
//         return (
//             <MaterialAutocomplete
//                 id={"autoComplete-" + id}
//                 value={value}
//                 onChange={function(event, option) {
//                     onChange(name, option && option ? option : "");
//                 }.bind(this)}
//                 getOptionSelected={(option, value) => {return option.value === value.id;}}
//                 getOptionLabel={option => option.label??""}
//                 freeSolo={true}
//                 onInputChange={this.inputChange}
//                 autoHighlight={autoHighlight}
//                 disableClearable={true}
//                 classes={{endAdornment: classes.endAdornment, listbox:classes.listbox,root:classes.autoCompolete}}
//                 options={this.state.options}
//                 renderInput={function(params) {
//                     params["InputProps"]["classes"] = {
//                         root: classes.autoCompleteRoot,
//                         input: classes.input,
//                     }
//                     params["InputLabelProps"]["classes"] = {
//                         root: classes.inputLabel,
//                         shrink: classes.shrink
//                     }
//                     params["InputLabelProps"]["shrink"] = shrink;
//                     return (
//                         <TextField
//                             {...params}
//                             label={label}
//                             name={name}
//                             required={require}
//                             fullWidth
//                             variant="outlined"
//                            // helperText={helperText}
//                             size="small"
//                             readOnly={readOnly}
//                             onFocus={function(){
//                                 this.setState({
//                                     inputFocus: true
//                                 });
//                             }.bind(this)}
//                             error={
//                                 helperText && helperText.length > 0
//                                 ? true
//                                 : false
//                             }
//                             helperText={helperText}
//                             onBlur={function(e) {
//                                 this.setState({
//                                     inputFocus: false
//                                 });
//                                 const value = e.currentTarget.value;
//                                 if (!value){
//                                     onChange(name, {'id': '', 'label': ''});
//                                     return;
//                                 }

//                                 const filterOptions = this.state
//                                     .options
//                                     .filter(
//                                         option => option.label === value
//                                     )
//                                 ;
//                                 if (!this.state.loading && noOptionsFn && filterOptions.length<=0){
//                                     noOptionsFn(value);
//                                     onChange(name, {'id': '', 'label': ''});
//                                 }else if ( this.state.loading && filterOptions.length > 0) {
//                                     onChange(name, filterOptions[0]);
//                                 }
//                             }.bind(this)}
//                             InputProps={{
//                                 ...params.InputProps,
//                                 endAdornment: (
//                                     <React.Fragment>
//                                         {this.state.loading ? <CircularProgress color="inherit" size={12}/> : params.InputProps.endAdornment}
//                                     </React.Fragment>
//                                 ),
//                                 classes: {root:classes.input},
//                             }}
//                         />
//                     )
//                 }.bind(this)}
//             />
//         );
//     }
// }

// AutoCompleteAsync.propTypes = {
//     id : PropTypes.string.isRequired,
//     name : PropTypes.string.isRequired,
//     label : PropTypes.string.isRequired,
//     value : PropTypes.object.isRequired,
//     helperText : PropTypes.string.isRequired,
//     onChange : PropTypes.func.isRequired,
//     readOnly : PropTypes.bool.isRequired,
//     fetchAllFn : PropTypes.func.isRequired,
//     fetchFn : PropTypes.func.isRequired,
//     labelColumn : PropTypes.string.isRequired,
//     noOptionsFn : PropTypes.func,
// };

// export default withStyles(themeFn)(AutoCompleteAsync);