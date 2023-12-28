import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  width: 20%;
  margin-top: 0;
  padding-top: 0;
  h1 {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  input {
    background-color: #ececec;
    border-color: transparent;
    border-width: 1px;
    font-family: Rubik, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    margin-top: 1rem;
    outline: none;
    padding: 10px 48px;
  }
`;

const SubscribeButton = styled.div`
  background-color: #ff4d30;
  border: 2px solid #ff4d30;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.25);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  transition: all 0.3s;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  width: 90%;
  text-align: center;
`;
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <h1>Rent Car Co.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          praesentium!
        </p>
        <h2>(02) 882-0925</h2>
        <h2>rentcar@org.co</h2>
      </Container>
      <Container>
        <h1>BRANCHES</h1>
        <ul>
          <li>Makati</li>
          <li>Taguig</li>
          <li>Quezonb City</li>
          <li>Mandaluyong</li>
          <li>Pasay</li>
        </ul>
      </Container>
      <Container>
        <h1>BRANCH HOURS</h1>
        <h2>Mon - Sat: 8:00AM - 5:00PM</h2>
        <h2>Sun: Close</h2>
      </Container>
      <Container>
        <h1>NEWS LETTER</h1>
        <h2>Subscribe to our news letter for promos and updates</h2>
        <input type="text" placeholder="Email Address" />
        <SubscribeButton>SUBSCRIBE</SubscribeButton>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
