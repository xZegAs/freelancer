function StarDivider({ color = "white" }) {
  return (
    <div className="divider" style={{ color }}>
      <div className="line"></div>
      <i className="fas fa-star"></i>
      <div className="line"></div>
    </div>
  );
}

export default StarDivider;
