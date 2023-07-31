import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;

    list-style: none;
    padding-left: 0;
`;

export const Btn = styled.button`    
    background-color: #fff;
    border-radius: 8px;

    width: 80px;
    height: 25px;

    cursor: pointer;


    transition: background-color 250ms linear;

    :hover {
        background-color: pink;
    }

    :active {
        transition: background-color 50ms linear;
        background-color: orange;
    }
`;