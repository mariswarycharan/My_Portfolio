import React from 'react';
import { achievements } from '../data/constants';
import { Container, Wrapper, Title, Desc, ItemContainer, Card, ItemTitle, ItemDetail } from './Cards/CommonStyles';
import { FaStar } from 'react-icons/fa';

const Achievements = () => (
  <Container id="achievements">
    <Wrapper>
      <Title>Achievements</Title>
      <Desc>Notable accomplishments and recognition in hackathons and tech competitions.</Desc>
      <ItemContainer>
        {achievements.map((ach, idx) => (
          <Card key={idx}>
            <FaStar style={{ fontSize: '24px', color: '#854CE6', marginBottom: '12px' }} />
            <ItemTitle>{ach.name}</ItemTitle>
            <ItemDetail>{ach.event}</ItemDetail>
          </Card>
        ))}
      </ItemContainer>
    </Wrapper>
  </Container>
);

export default Achievements; 