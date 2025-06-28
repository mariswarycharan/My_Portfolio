import React from 'react';
import { awards } from '../data/constants';
import { Container, Wrapper, Title, Desc, ItemContainer, Card, ItemTitle, ItemDesc } from './Cards/CommonStyles';
import { FaTrophy } from 'react-icons/fa';

const Awards = () => (
  <Container id="awards">
    <Wrapper>
      <Title>Awards & Products</Title>
      <Desc>Recognition and achievements in technology innovation and development.</Desc>
      <ItemContainer>
        {awards.map((award, idx) => (
          <Card key={idx}>
            <FaTrophy style={{ fontSize: '24px', color: '#854CE6', marginBottom: '12px' }} />
            <ItemTitle>{award.name}</ItemTitle>
            <ItemDesc>{award.description}</ItemDesc>
          </Card>
        ))}
      </ItemContainer>
    </Wrapper>
  </Container>
);

export default Awards; 