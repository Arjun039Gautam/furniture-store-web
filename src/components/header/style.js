import styled from "styled-components"

const Wrapper = styled.header`
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #333;
  padding: 15px;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

`
export default Wrapper