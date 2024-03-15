import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface BasicSectionProps {
  title: string;
  overTitle: string;
  reversed?: boolean;
}

export default function BasicSection({ title, overTitle, children }: PropsWithChildren<BasicSectionProps>) {
  return (
    <BasicSectionWrapper >
      <ContentContainer >
        <CustomOverTitle >{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
`;

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

const RichText = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ol,
  ul {
    list-style: none;
    padding: 0rem;

    li {
      padding-left: 2rem;
      position: relative;

      & > * {
        display: inline-block;
        vertical-align: top;
      }

      &::before {
        position: absolute;
        content: 'L';
        left: 0;
        top: 0;
        text-align: center;
        color: rgb(var(--primary));
        font-family: arial;
        transform: scaleX(-1) rotate(-35deg);
      }
    }
  }

  table {
    border-collapse: collapse;

    table-layout: fixed;
    border-spacing: 0;
    border-radius: 5px;
    border-collapse: separate;
  }
  th {
    background: rgb(var(--textSecondary));
  }

  th,
  td {
    border: 1px solid rgb(var(--textSecondary));
    padding: 1rem;
  }

  tr:nth-child(even) {
    background: rgb(var(--textSecondary));
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Container = styled.div`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  align-items:center;
`;

const BasicSectionWrapper = styled(Container)`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: reversed;

  ${ImageContainer} {
    margin: reversed ;
  }
`;