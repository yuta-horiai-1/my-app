import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Li>
      <Head>
        <Heading>CSS-in-JS</Heading>
      </Head>
      <Body>
        <Text>
          CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。CSS-in-JSの特徴をここに書く。
        </Text>
      </Body>
    </Li>
  );
};

const Li = styled.li`
  box-shadow: 0px 0px 15px -5px #777777;
  border-radius: 10px;
  min-width: 400px;
`;

const Head = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: #ffa869;
`;

const Heading = styled.h2`
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 32px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Body = styled.div`
  padding: 20px;
  border-radius: 0 0 10px 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export default StyledComponents;
