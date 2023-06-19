import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full-stack developer",
    "Backend developer",
    "Frontend developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi I'm Shahar `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm Shahar, a passionate full-stack web developer experienced in
              front-end technologies like HTML, CSS, and JavaScript, as well as
              frameworks like React and Angular. On the back end, I work with
              Node.js, Express.js, ASP.NET and databases like MongoDB, SQL. My
              portfolio showcases projects where I handle the entire development
              process, from designing user interfaces to implementing
              server-side logic. I prioritize clean code and delivering seamless
              user experiences.
            </p>
            <p>
              Beyond development, I have a love for thought-provoking questions
              that inspire my problem-solving approach. I believe in creating
              meaningful solutions at the intersection of technology and human
              connection. If you're seeking a dedicated full-stack developer who
              delivers high-quality solutions and enjoys engaging discussions,
              let's connect. Explore my portfolio for examples of my work as a
              full-stack developer. I'm excited to take on new challenges in the
              ever-evolving web development landscape.
            </p>
            <button onClick={() => (window.location.hash = "connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
