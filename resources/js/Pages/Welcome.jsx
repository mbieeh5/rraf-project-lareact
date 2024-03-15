import BasicSection from '@/Components/BasicSection';
import Hero from '@/Components/Hero';
import { Head } from '@inertiajs/react';
import React from 'react';
import styled from 'styled-components';


export default function Welcome(props) {

    return (
        <>
           <Head title={props.title} />
            <HomepageWrapper>
                <WhiteBackgroundContainer>

                <Hero />

                <BasicSection title='Rraf-Project' overTitle='simple Project'>
                <p>
                    I just make this project just for fun, you can find some <strong>latest news</strong>, <strong>play simple games</strong> and you can login to save your games in this website, <strong>break some puzzle</strong>. lot of feature that you can explore in this website.
                </p>
                    <ul>
                    <li>Safety website</li>
                    <li>Using the latest security patch</li>
                    <li>OAuth using google</li>
                    </ul>
                </BasicSection>
                </WhiteBackgroundContainer>
                <DarkerBackgroundContainer>
                  
                </DarkerBackgroundContainer>
            </HomepageWrapper>
        </>
    );
}

const HomepageWrapper = styled.div`
    padding-top: 5rem;
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 4rem;
  }

  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;