const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h2 className="about__title">Experience</h2>
        <span className="about__subtitle">8 Years Working</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h2 className="about__title">Completed</h2>
        <span className="about__subtitle">48 + Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h2 className="about__title">Support</h2>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
