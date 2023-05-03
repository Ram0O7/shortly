const FeatureSingle = ({ logo, heading, para }) => {
  return (
    <div className="feature">
      <div className="feature-logo">
        <img src={logo} alt="logo" />
      </div>
      <h3>{heading}</h3>
      <p>{para}</p>
    </div>
  );
};

export default FeatureSingle;
