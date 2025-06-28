import React from 'react';
import { certificates } from '../data/constants';
import { Container, Wrapper, Title, Desc, ItemContainer, Card, ItemTitle, ItemDetail } from './Cards/CommonStyles';
import { FaCertificate } from 'react-icons/fa';

const Certificates = () => (
  <Container id="certificates">
    <Wrapper>
      <Title>Certificates</Title>
      <Desc>Professional certifications and achievements in AI, Machine Learning, and Data Science.</Desc>
      <ItemContainer>
        {certificates.map((cert, idx) => (
          <Card key={idx}>
            <FaCertificate style={{ fontSize: '24px', color: '#854CE6', marginBottom: '12px' }} />
            <ItemTitle>{cert.name}</ItemTitle>
            <ItemDetail>Issued by {cert.issuer}</ItemDetail>
          </Card>
        ))}
      </ItemContainer>
    </Wrapper>
  </Container>
);

export default Certificates; 