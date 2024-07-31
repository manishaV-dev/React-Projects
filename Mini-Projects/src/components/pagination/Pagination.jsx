const Pagination = ({ products }) => {
  return (
    <>
      {products.length ? (
        <div className="pagination">
          <span style={{ color: "lightgray" }}>◀</span>
          <span>123</span>
          <span style={{ color: "lightgray" }}>▶</span>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
