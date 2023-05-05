import styled from 'styled-components';

import { colors } from '@/styles';

export const MainPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10rem 0;
`;

export const MainPageContainer = styled.div`
  width: 36rem;
  padding: 1rem 0;
  min-height: 4rem;
  max-height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.1);
`;

export const MainPageTitle = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.darkPurple};
  padding: 2rem 0;
  border-bottom: 1.25px solid ${colors.gray};
`;
