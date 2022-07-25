import {
  LoginItemContainer,
  LoginInputBox,
  PasswordInputBox,
  InputBoxContainer,
  LoginButtonContainer,
  LoginButton,
  SignupButton,
  KakaoLogin,
  LogoContainer,
} from "./login.style";

const login = () => {
  return (
    <>
      <LoginItemContainer>
        <LogoContainer />
        <InputBoxContainer>
          <LoginInputBox placeholder="아이디" />
          <PasswordInputBox placeholder="비밀번호" type="password" />
        </InputBoxContainer>
        <LoginButtonContainer>
          <LoginButton>로그인</LoginButton>
          <div>
            <SignupButton>회원가입</SignupButton>
            <KakaoLogin>카카오톡 로그인</KakaoLogin>
          </div>
        </LoginButtonContainer>
      </LoginItemContainer>
    </>
  );
};
export default login;
