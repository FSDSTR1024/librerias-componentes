import styled from "styled-components";

export const Card = () => {
  return (
    <CardWrapper>
      <TitleCard>Card</TitleCard>
    </CardWrapper>
  );
};

export const TitleCard = styled.h1`
  color: orange;
`;

const CardWrapper = styled.div`
  padding: 2em;
  background-color: beige;
  width: 200px;
  height: 200px;
`;
