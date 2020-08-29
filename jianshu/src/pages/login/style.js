import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: -1;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 56px;
    bottom: 0;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    margin: 100px auto;
    border-radius: 4px;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    background: #fff;
`;

export const InputBox = styled.input`
    width: 200px;
    height: 30px;
    display: block;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px  auto;
    color: #777;
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px  auto;
    text-align: center;
`;



