import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ededed;
  padding: 12px;
  h3 {
    color: ${(props) => props.headingColor};
  }
  p {
    color: ${(props) => props.textColor};
  }
`;

Card.defaultProps = {
  headingColor: "#00F",
  textColor: "#2A2A2A",
};

export default function Apps() {
  return (
    <Card>
      <h3>this is a card heading</h3>
      <p>this is the text description</p>
    </Card>
  );
}
