import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {SwiperSlide} from 'swiper/react';
import NewsCard from './NewsCard';

interface SwiperNewsProps {
  posts: NewsArticle[];
}

type NewsArticle = {
    title: string;
    thumbnail: string;
    pubDate: string;
    link: string;
    description: string;
  }

export default function SwiperNews({ posts }: SwiperNewsProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>Berita Terkini</OverTitle>
        </Content>
      </Container>

      {hasMounted && (
        <SwiperContainer className='gap-3'>
                {posts.map((singlePost, i) => (
                    <SwiperSlide key={i} className='p-6'>
                        <NewsCard
                        link={singlePost.link}
                        title={singlePost.title}
                        description={singlePost.description}
                        thumbnail={singlePost.thumbnail}
                        pubDate={""}
                        />
                    </SwiperSlide>
                        ))}
        </SwiperContainer>
        )}
    </Section>
  );
}

const Content = styled.div`
  position: relative;
    margin-top: 1rem;
    margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
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

const Container = styled.div`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  align-items:center;
`;

const SwiperContainer = styled(Container)`
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  padding: 2rem;

  /* Styling scrollbar */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* Warna scroll thumb dan track */
  -webkit-scrollbar {
    width: 8px; /* Lebar scrollbar */
  }
  -webkit-scrollbar-thumb {
    background-color: transparent; /* Warna scroll thumb */
  }
  -webkit-scrollbar-track {
    background-color: transparent; /* Warna track scrollbar */
  }

`;