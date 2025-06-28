import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px;
    @media (max-width: 960px) {
        padding: 20px 0px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 30px;
    justify-content: center;
`;

export const Card = styled.div`
    width: 330px;
    background: ${({ theme }) => theme.card};
    border: 0.1px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px rgba(133, 76, 230, 0.25);
    }
    @media (max-width: 768px) {
        width: 300px;
        padding: 16px 28px;
    }
    @media (max-width: 500px) {
        width: 280px;
        padding: 12px 24px;
    }
`;

export const ItemTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 14px;
    text-align: left;
`;

export const ItemDesc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
`;

export const ItemDetail = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary + 80};
`; 