const TestimonalItem = props => {
    const quote = props.quote;
    const profilePic = props.profilePic;
    const name = props.name;
    const profession = props.profession;
    return(
        <div className="item">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {quote}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <div style={{
                    textAlign: 'center',
                }}><img src= {profilePic} className='testimonial-img' alt=""/></div>
                <h3>{name}</h3>
                <h4>{profession}</h4>
              </div>
            </div>
    )
}

export default TestimonalItem;