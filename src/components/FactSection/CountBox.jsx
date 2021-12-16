const CountBox = (props) => {
    const icon = props.icon;
    const count = props.count;
    const titleA = props.titleA;
    const titleB = props.titleB;
    return(
        <div className="count-box">
            <div className="count">
                <i className={icon}></i>
                <span>{count}</span>
            </div>
            <p> <strong>{titleA}</strong> {titleB}</p>
        </div>
    )
}

export default CountBox;