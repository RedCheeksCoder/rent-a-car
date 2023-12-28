import styled from "styled-components";

const StyledTestimonials = styled.div`
  height: 30dvh;
`;

const Banner = styled.div`
  background-color: #4b4b4b;

  opacity: 0.89;
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    position: absolute;
    color: white;
  }
  img {
    display: block;
    opacity: 0.2;
  }
  span {
    color: #ff7231;
  }
`;
function Testimonials() {
  return (
    <StyledTestimonials>
      <Banner>
        <img src="/banner-image.png" alt="" />
        <h1>
          RESERVE A CAR VIA OUR CONTACT <span>(02) 882-0925</span>
        </h1>
      </Banner>
    </StyledTestimonials>
  );
}

export default Testimonials;
