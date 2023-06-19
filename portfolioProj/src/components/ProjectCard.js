import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { Globe } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, gitUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={gitUrl}>
            <Github size={50} color="green" style={{ marginRight: '20px' }}/>
          </a>
          <a href={siteUrl}>
            <Globe size={50} color="white" />
          </a>
        </div>
      </div>
    </Col>
  );
};
