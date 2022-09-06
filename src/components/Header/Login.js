import React, { useState } from 'react';
import css from './Login.module.scss';
import { Link } from 'react-router-dom';
function Login() {
  const [token, setToken] = useState(false);
  const logout = () => {
    localStorage.removeItem('token');
    token ? setToken(false) : setToken(true);
  };
  return (
    <div className={css['login-box']}>
      <span>고객센터</span>
      {token ? (
        <>
          <Link to="/mypage">마이페이지</Link>
          <span onClick={logout}>로그아웃</span>
        </>
      ) : (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </>
      )}
    </div>
  );
}
export default Login;
