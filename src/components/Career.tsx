import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
          <br /> & Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Sharda University</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science with CGPA of 8.1.
              Strong foundation in Data Structures, Algorithms, OOPs, and DBMS.
              Located in Greater Noida, India.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (CBSE)</h4>
                <h5>Central Academy School</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Completed intermediate education with 74.5% from Central Board of
              Secondary Education. Located in Rajasthan, India.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Professional Development</h5>
              </div>
            </div>
            <p>
              Java Programming for Complete Beginners – Udemy (in28Minutes)<br />
              Smart India Hackathon (SIH) 2025 – Top 50 Teams
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
