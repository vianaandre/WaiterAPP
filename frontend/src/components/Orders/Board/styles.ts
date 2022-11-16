import styled from 'styled-components';

export const ContainerBoard = styled.div`
    padding: 1rem;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 1rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
    flex: 1;
    min-width: 335px;

    header {
        display: flex;
        gap: 0.5rem;
        padding: .5rem;
    }
`;

export const ContainerButtonsBoard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    button {
        background-color: ${({ theme }) => theme.color.white};
        border-radius: .5rem;
        width: 100%;
        min-height: 128px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(204, 204, 204, 0.4);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .25rem;
        strong {
            font-weight: 500;
        }
        span {
            font-weight: 400;
        }
    }
`;