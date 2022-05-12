import "../Style/MapData.css";
function House_header(props) {
  return (
    <div className="house_header_container">
      <h2
        className="house_header"
        style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
      >
        {props.SelectedProprty.land_size} {props.SelectedProprty.Type}{" "}
        {props.SelectedProprty.Type === "House" && "Fully Furnished"} (For Sale){" "}
      </h2>
      <p
        style={{
          fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          marginLeft: "42px",
        }}
      >
        {props.SelectedProprty.Address}
      </p>
    </div>
  );
}
export default House_header;
