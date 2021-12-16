const Progress = (props) => {
    const skill = props.skill;
    const value = props.value;
    return(
        <div className="progress">
            <span className="skill"> {skill} <i className="var">{value}%</i> </span>
            <div className={`progress-bar-wrap value-${value}`}>
            </div>
        </div>
    )
}

export default Progress;