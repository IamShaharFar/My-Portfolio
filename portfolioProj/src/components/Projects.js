import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ColorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Url shortner",
      description: "make long url to short url with statistics and more",
      imgUrl: projImg1,
      gitUrl: "https://github.com/IamShaharFar/Shortify",
      siteUrl: "https://github.com/IamShaharFar/Shortify"
    },
    {
      title: "Airport simulator",
      description: "web application that provides a server-client solution for managing airport operations",
      imgUrl: projImg2,
      gitUrl: "https://github.com/IamShaharFar/Flight-Simulator",
      siteUrl: "https://github.com/IamShaharFar/Flight-Simulator"
    },
    {
      title: "Portfolio",
      description: "My portfolio",
      imgUrl: projImg3,
      gitUrl: "https://github.com/IamShaharFar/Portfolio",
      siteUrl: "https://github.com/IamShaharFar/Portfolio"
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">My projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img id="project-background" className="backgroung-image-left" src={ColorSharp2}></img>
    </section>
  );
};
