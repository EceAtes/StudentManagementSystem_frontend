import React from 'react';

const InputMenu = props => {
    const{label, name, error, onChange, type, defaultSelect} = props;
    const className = error ? 'form-control is-invalid' : 'form-control';
    return(
        <div className="form-group">
            <label>{label}</label>
            <select className={className} defaultChecked={defaultSelect} name={name} onChange={onChange}>
            <option value="Admin">Admin</option>
            <option value="Öğrenci">Öğrenci</option>
            <option value="Asistan">Asistan</option>
            <option value="Görevli">Görevli</option>
            </select>
            <div className="invalid-feedback">{error}</div>
        </div>
);
};

export default InputMenu;