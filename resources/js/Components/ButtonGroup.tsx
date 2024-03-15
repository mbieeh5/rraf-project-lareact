import styled from 'styled-components';
import { media } from './Media-Utils';

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  ${media('<=tablet')} {
    & > * {
      width: 100%;
    }

    & > *:not(:last-child) {
      margin-bottom: 2rem;
      margin-right: 0rem;
    }
  }
`;

export default ButtonGroup;