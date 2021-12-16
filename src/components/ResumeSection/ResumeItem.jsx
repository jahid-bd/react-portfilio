const ResumeItem = (props) => {
    const heading = props.heading;
    const session = props.session;
    const title = props.title;
    return(
      <div className="resume-item">
        <h4>{heading}</h4>
        <h5>{session}</h5>
        <p><em>{title}</em></p>
        <div className="content">{props.children}</div>
      </div>
    )
}

export default ResumeItem;