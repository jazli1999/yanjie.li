import Home from "../../containers/Articles";

import Personal from "./Personal";

function AboutMe() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Personal />
      <div
        style={{
          height: "1px",
          width: "calc(100% - 20px)",
          background: "#e7e4eb",
        }}
      />
      <div style={{ marginTop: "5px", width: "100%" }}>
        <Home />
      </div>
    </div>
  );
}

export default AboutMe;
