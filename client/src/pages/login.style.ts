import styled from "styled-components";
import { RiLockPasswordFill } from "react-icons/ri";

export const LoginItemContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center; // 좌 중 우
  align-items: center; // 상 중 하
`;

export const LogoContainer = styled.img`
  width: 400px;
  height: 170px;
  border-radius: 30px;
  background-image: url(${"/img/logo.png"});
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px 4px;
`;

export const LoginInputBox = styled.input`
  border: 1px solid gray;
  width: 400px;
  height: 48px;
  border-radius: 6px 6px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px 4px;
`;

export const PasswordInputBox = styled.input`
  border: 1px solid gray;
  width: 400px;
  height: 48px;
  border-radius: 0 0 6px 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px 4px;
`;

export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  width: 400px;
  height: 52px;
  margin-bottom: 3px;
`;
export const SignupButton = styled.button`
  width: 195px;
  height: 52px;
  margin-right: 10px;
`;
export const KakaoLogin = styled.button`
  width: 195px;
  height: 52px;
`;
