import React from 'react';
import styled from 'styled-components';

type PageProps = {
  src: string;
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 55vw;
`;

const Image = styled.img`
  position: absolute;
  margin: 3.125rem;
  z-index: -1;
  width: calc(100% - 6.25rem);
  height: auto;
  margin-bottom: 0;
`;

const Page: React.FC<PageProps> = (props: PageProps) => {
  const { src, children } = props;

  return (
    <Container>
      <Image src={src} />
      {children}
    </Container>
  );
};

export default Page;
