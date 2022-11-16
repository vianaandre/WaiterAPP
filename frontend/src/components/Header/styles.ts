import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width: 100vw;
    background-color: ${({ theme }) => theme.color.primary};
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;

        h1, h2 {
            color: ${({ theme }) => theme.color.white};
            font-family: ${({ theme }) => theme.fonts.family.primary};
            font-weight: 600;
            font-size: ${({ theme }) => theme.fonts.size[32]};;
        }
        h2 {
            margin-top: .75rem;
            font-size:  ${({ theme }) => theme.fonts.size[16]};;;
            font-weight: 400;
        }
    }
`;