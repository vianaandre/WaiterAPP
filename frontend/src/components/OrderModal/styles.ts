import styled from 'styled-components';

export const ContainerOrderModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerOrderModalBody = styled.div`
    max-width: 480px;
    width: 90%;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: .5rem;
    padding: 2rem;

    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        strong {
            font-size: ${({ theme }) => theme.fonts.size[24]};
        }
        button {
            background-color: transparent;
            border: none;
            padding: 0;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 400ms;
            &:hover {
                transition: 400ms;
                background-color: ${({ theme }) => theme.color.bg};
            }
        }
    }
    div.container-status {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        span {
            font-size: ${({ theme }) => theme.fonts.size[14]};
        }
        div {
            display: flex;
            align-items: center;
            gap: .5rem
        }
    }
    div.container-itens {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        ul {
            list-style: none;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li {
                display: flex;
                width: 100%;
                gap: .75rem;
                > div {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: .25rem;
                }
            }
        }
        div.total {
            margin-top: 1.5rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            span {
                color: #333333
            }
        }
    }
    div.buttons {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        button:first-child {
            width: 100%;
            padding: .875rem 0px;
            display: flex;
            justify-content: center;
            gap: .5rem;
            font-size: ${({ theme }) => theme.fonts.size[16]};
            font-weight: 600;
            color: ${({ theme }) => theme.color.white};
            display: flex;
            background-color: ${({ theme }) => theme.color.gray};
            border: none;
            border-radius: 3rem;
            transition: 400ms;
            &:hover {
                transition: 400ms;
                filter: brightness(.9);
            }
        }
        button:last-child {
            width: 100%;
            padding: .875rem 0px;
            border: none;
            background-color: transparent;
            color: ${({ theme }) => theme.color.primary};
            border-radius: 3rem;
        }
    }
`;