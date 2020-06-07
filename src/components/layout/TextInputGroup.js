import React from 'react'
import classnames from 'classnames'; 

const TextInputGroup = (props) => {

    const {label,name,value,placeholder,type,onchange,error} = props;
    return (
        <div className="form-group">
            <label htmlFor={name} >{label}</label>
            <input 
            type={type} 
            className = {classnames('form-control form-contro-lg',{'is-invalid': error})}
             
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={props.onChange}/>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default TextInputGroup;
