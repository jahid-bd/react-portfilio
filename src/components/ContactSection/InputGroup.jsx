const InputGroup = props => {
    const label = props.label;
    const type = props.type;
    const id = props.id;
    return(
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={id} className="form-control" id={id} />
      </div>
    );
}

export default InputGroup;