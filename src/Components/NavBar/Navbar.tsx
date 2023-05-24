import styled from "@emotion/styled";

const NavBar = styled("div")({
  width: "100vw",
  height: "100px",
  backgroundColor: "orange",
  color: "white",
  fontFamily: "cursive",
  fontSize: "22px",
  display: "flex",
  justifyContent: "center",
  paddingTop: "15px",
});
export default function Navbar() {
  return <NavBar>Welcom to Bitpin Task</NavBar>;
}
