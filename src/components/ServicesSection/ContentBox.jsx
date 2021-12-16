import { Col } from "react-bootstrap";

const ContentBox = (props) => {
    const icon = props.icon;
    const titleA = props.titleA;
    const titleB = props.titleB;
    const link = props.link;

    return(
        <Col lg={4} md={6}>
          <div class="content-box">

            <div class="icon">
                <i class={icon}></i>
            </div>

            <div class="text">
              <h4> <a href={link}> {titleA} </a> </h4>
              <p> {titleB} </p>
            </div>

          </div>
        </Col>
    )
}

export default ContentBox;