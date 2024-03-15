import { Link } from '@inertiajs/react';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import { media } from './Media-Utils';

export default function Hero() {

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>not a big project, but let's find out</CustomOverTitle>
        <Heading>Rraf Project</Heading>
        <Description> 
          Made By Human, lot of feature you can explore, and some hidden feature you can access too.
         </Description>
        <CustomButtonGroup>
          <Link href="/info">
            <Button transparent='true'>
              Info <span>&rarr;</span>
            </Button>
          </Link>
        </CustomButtonGroup>
      </Contents>
    </HeroWrapper>
  );
};


const OverTitle = styled.span`
  display: block;
  &::before {
    position: relative;
    bottom: -0.1em;
    content: '';
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    background-color: rgb(var(--primary));
    line-height: 0;
    margin-right: 1em;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  line-height: 0;
  text-transform: uppercase;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  align-items:center;
`;


const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 2rem;
`;


const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;


const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;