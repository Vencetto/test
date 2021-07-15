import styled from '@emotion/styled';

export const RaceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 15px;
    background: #C9D8B6;
    width: 250px;
    height: 450px;
    padding: 20px;
    color: #515E63;

    & + & {
        margin-left: 20px;
    }
`;

export const ImageContainer = styled.div`
    width: 180px;
    height: 300px;
    background: red;
`;

export const Name = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 24px;
    margin-top: 24px;
`;

export const Race = styled.div`
    font-weight: 600;
    font-size: 24px;
    font-family: 'Zen Loop'; 
    margin-top: 16px;
`;