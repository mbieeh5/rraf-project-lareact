import { Link } from '@inertiajs/react';
import React from 'react';
import styled from 'styled-components';

interface BasicCardNoImgProps {
  title: string;
  description: string;
  slug: string;
}

export default function BasicCardNoImg({ title, slug, description }: BasicCardNoImgProps) {
  return (
    <Link href={slug}>
      <Card>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Card>
    </Link>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;