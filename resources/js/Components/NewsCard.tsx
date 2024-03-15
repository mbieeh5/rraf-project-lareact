import { Link } from '@inertiajs/react';
import React from 'react';
import styled from 'styled-components';
import { media } from './Media-Utils';

export interface NewsCardProps {
  title: string;
  thumbnail: string;
  pubDate: string;
  link: string;
  description: string;
}

export default function NewsCard({ title, thumbnail, pubDate, link, description }: NewsCardProps) {
  return (
      <ArticleCardWrapper>
        <HoverEffectContainer>
          <ImageContainer>
            <ImageHolder src={thumbnail} />
          </ImageContainer>
        <Content>
          <Title>{title}</Title>
            <Descriptions>{pubDate}</Descriptions>
            <Descriptions>{description}</Descriptions>
        </Content>
        </HoverEffectContainer>
      </ArticleCardWrapper>
  );
}

const ImageHolder = styled.img`
  position: flex;
  display: block;
  max-height: 25rem;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
`

const ImageContainer = styled.div`
  position: relative;
  height: 20rem;
  padding: 1rem;
  padding-top: 1.5rem;
  
  &:before {
    display: block;
    width: 100%;
    padding: 5%;
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ArticleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 45rem;
  max-width: 35rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.6rem;
  background: rgb(var(--cardBackground));
  cursor: pointer;
  color: rgb(var(--text));
`;

const HoverEffectContainer = styled.div`
  transition: transform 0.2s;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    border-radius: 0.6rem;
    overflow: hidden;
    transform: scale(1.025);
  }
`;

const Content = styled.div`
  padding: 0 2rem;
  margin: 1rem;
  & > * {
    margin-top: 1rem;
  }
`;

const Title = styled.h4`
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Descriptions = styled.p`
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  opacity: 0.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;