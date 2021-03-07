import AOS from 'aos';
import React, { useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Intro = styled.div`
  font-size: 3.375rem;
  font-weight: 800;
  color: #ffffff;
`;

const IntroSub = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #393d52;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #393d52;
`;

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #393d52;
`;

const BlurBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Matrix = styled.img`
  margin: auto;
`;

const BlurBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  height: 60%;
  background-color: #ffffff90;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
  margin: auto;
`;

const SubWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const EB = styled.span`
  font-weight: 800;
`;

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: '/images/background1.png',
            amount: 0.4,
            children: (
              <Wrapper>
                <Intro>
                  <div data-aos="fade-right" data-aos-delay="500">
                    여러분의 꿈은
                  </div>
                  <div data-aos="fade-left" data-aos-delay="1000">
                    커맨드와 함께
                  </div>
                </Intro>
                <IntroSub data-aos="zoom-in" data-aos-delay="2000">
                  커맨드는 생활 속 IT 혁신을 꿈꾸는 프로젝트를 만들어갑니다
                </IntroSub>
              </Wrapper>
            ),
          },
        ]}
        style={{ height: '80%' }}
      />
      <Container>
        <ParallaxBanner
          style={{ height: '80vh' }}
          layers={[
            {
              image: '/images/background2.png',
              amount: 0.1,
              children: (
                <RowWrapper style={{ height: '100%' }}>
                  <TitleWrapper style={{ margin: 'auto' }}>
                    <SubTitle data-aos="fade-right" data-aos-delay="100">
                      B E L I E F
                    </SubTitle>
                    <Title>
                      <div data-aos="fade-right" data-aos-delay="200">
                        사소한 관심이
                      </div>
                      <div data-aos="fade-right" data-aos-delay="300">
                        생활의 혁신으로
                      </div>
                    </Title>
                  </TitleWrapper>
                  <Content style={{ margin: 'auto' }}>
                    <div data-aos="fade-left" data-aos-delay="500">
                      <EB>&apos;불편&apos;은 늘 &apos;발명&apos;의 원동력</EB>
                      이 됩니다.
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500">
                      커맨드는 주변의 불편을 프로젝트를 통해 편의로 바꾸려합니다.
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500">
                      우리의 프로젝트가 아닌
                      {' '}
                      <EB>모두를 위한 프로젝트</EB>
                      를 진행함으로써
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500">
                      <EB>기술 혁신과 사회 공헌</EB>
                      이라는 두가지 목표를 추구합니다.
                    </div>
                  </Content>
                </RowWrapper>
              ),
            },
          ]}
        />
        <ParallaxBanner
          style={{ height: '100vh' }}
          layers={[
            {
              image: '/images/background3.png',
              amount: 0.1,
              children: (
                <BlurBoxWrapper>
                  <BlurBox>
                    <TitleWrapper>
                      <SubTitle data-aos="zoom-in" data-aos-delay="100">
                        O P P O R T U N I T Y
                      </SubTitle>
                      <Title style={{ marginTop: '1.375rem' }}>
                        <div style={{ lineHeight: '2rem' }} data-aos="zoom-in" data-aos-delay="200">
                          새로운 기술로
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="400">
                          당신의 일상을 더 새롭게
                        </div>
                      </Title>
                    </TitleWrapper>
                    <Content style={{ marginTop: '3.313rem' }}>
                      <div data-aos="fade-up" data-aos-delay="500">
                        커맨드는 동아리원 각자가 디자인과 개발부터 기획, 마케팅까지
                      </div>
                      <div data-aos="fade-up" data-aos-delay="500">
                        여러 IT분야에서
                        {' '}
                        <EB>각자의 소질을 찾고 역량을 넓혀나가는 진취적인 기회</EB>
                        를 마련합니다.
                      </div>
                    </Content>
                    <Content style={{ marginTop: '1.688rem' }}>
                      <div data-aos="fade-up" data-aos-delay="800">
                        더불어 동아리원 개인의 능력을 프로젝트라는 매개체를 통해 이를 융합시켜
                      </div>
                      <div data-aos="fade-up" data-aos-delay="800">
                        단순히 개인의 발전에 국한되지 않고
                        {' '}
                        <EB>다양한 IT 분야로 뻗어나갈 수 있는 기회</EB>
                        를 제공합니다.
                      </div>
                    </Content>
                  </BlurBox>
                </BlurBoxWrapper>
              ),
            },
          ]}
        />
        <ParallaxBanner
          style={{ height: '100vh' }}
          layers={[
            {
              image: '/images/background4.png',
              amount: 0.1,
              children: (
                <SubWrapper>
                  <TitleWrapper style={{ margin: 'auto' }}>
                    <SubTitle
                      style={{ color: '#ffffff' }}
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      D E P A R T M E N T
                    </SubTitle>
                    <Title data-aos="fade-right" data-aos-delay="300" style={{ color: '#ffffff' }}>
                      부서 및 분야 소개
                    </Title>
                    <Content style={{ marginTop: '3rem', color: '#ffffff' }}>
                      <div data-aos="fade-right" data-aos-delay="500">
                        커맨드는
                        {' '}
                        <EB>기능별 매트릭스 조직</EB>
                        {' '}
                        형태로
                      </div>
                      <div data-aos="fade-right" data-aos-delay="500">
                        프로젝트가 추진되면 이에 필요한 인원을
                      </div>
                      <div data-aos="fade-right" data-aos-delay="500">
                        배정하는 방식을 통해
                        {' '}
                        <EB>효율적인 인적자원 운용</EB>
                        과 동시에
                      </div>
                      <div data-aos="fade-right" data-aos-delay="500">
                        <EB>역량을 폭넓게 계발</EB>
                        할 수 있는 기회를 마련합니다.
                      </div>
                      <br />
                      <div data-aos="fade-right" data-aos-delay="500">
                        자신에게 맞는 부서를 선택해
                        {' '}
                        <EB>다양한 기술을 배우고</EB>
                      </div>
                      <div data-aos="fade-right" data-aos-delay="500">
                        커맨드 프로젝트에 함께 동참하세요.
                      </div>
                    </Content>
                  </TitleWrapper>
                  <Matrix
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    src="/images/matrix.png"
                    alt="matrix"
                  />
                </SubWrapper>
              ),
            },
          ]}
        />
      </Container>
    </>
  );
};

export default Home;
