import './Auth.scss';

import logo from '../../imgs/logo.svg';
import person from '../../imgs/person.svg';
import key from '../../imgs/key.svg';
import { useRef, useState } from 'react';
import Api from '../../utils/Api';
import Loader from '../Loader/Loader';

function Auth() {
  const [status, setStatus] = useState({
    errorAuth: false,
    successAuth: false,
    msg: '',
    showMsg: false,
  });
  const [auth, setAuth] = useState({
    textBtn: 'Войти',
    disabledInput: false,
  });

  const refLogin = useRef(null);
  const refPassword = useRef(null);
  const refLabelLogin = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    setAuth({
      textBtn: <Loader />,
      disabledInput: true,
    });

    Api.authorization({
      login: refLogin.current.value,
      password: refPassword.current.value,
    })
      .then((res) => {
        if (res.status === 'ok') {
          document.cookie = `token=${res.token}`;
          setStatus({
            errorAuth: false,
            showMsg: false,
            successAuth: true,
            msg: res.user.name,
          });
        } else {
          setStatus({
            errorAuth: true,
            showMsg: true,
            successAuth: false,
            msg: res.errorMessage,
          });
        }
      })
      .finally(() => {
        setAuth({
          textBtn: 'Войти',
          disabledInput: false,
        });
      });
  }

  function isErrorLogin(isTrue) {
    if (isTrue) {
      setStatus({
        ...status,
        showMsg: true,
        msg: 'Неверный формат email или номера телефона',
      });
      refLabelLogin.current.classList.add('form__label_error');
    } else {
      setStatus({
        ...status,
        showMsg: false,
        msg: '',
      });
      refLabelLogin.current.classList.remove('form__label_error');
    }
  }

  function handleValidate() {
    const val = refLogin.current.value;
    const patternEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const patternPhone = /[+()0-9-]{5,20}/;

    if (patternPhone.test(val)) {
      isErrorLogin(false);
    } else if (patternEmail.test(val)) {
      isErrorLogin(false);
    } else {
      isErrorLogin(true);
    }

    if (val === '') {
      isErrorLogin(false);
    }
  }

  return status.successAuth ? (
    <h1 className="title">{`${status.msg}, Вы успешно авторизованы!`}</h1>
  ) : (
    <div className="auth">
      <div className="auth__wrapper">
        <img src={logo} className="auth__logo" alt="Логотип авторизации" />
        <h1 className="auth__title">Авторизация</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label
            className={`form__label ${
              status.errorAuth ? 'form__label_error' : ''
            } ${status.successAuth ? 'form__label_success' : ''}`}
            aria-disabled={auth.disabledInput}
            ref={refLabelLogin}
          >
            <img
              src={person}
              className="form__input-icon"
              alt="Иконка окна ввода"
            />
            <input
              type="text"
              className="form__input form__input-login"
              placeholder="Email или телефон"
              disabled={auth.disabledInput}
              ref={refLogin}
              autoComplete="false"
              onChange={handleValidate}
            />
          </label>

          <label
            className={`form__label ${
              status.errorAuth ? 'form__label_error' : ''
            } ${status.successAuth ? 'form__label_success' : ''}`}
          >
            <img
              src={key}
              className="form__input-icon"
              alt="Иконка окна ввода"
            />
            <input
              type="password"
              className="form__input form__input-password"
              placeholder="Пароль"
              disabled={auth.disabledInput}
              ref={refPassword}
            />
          </label>

          {status.showMsg ? (
            <label className="form__error-auth">{status.msg}</label>
          ) : (
            <></>
          )}

          <button
            type="submit"
            className="form__btn-submit"
            disabled={auth.disabledInput}
          >
            {auth.textBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
